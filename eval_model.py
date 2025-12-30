import pickle, numpy as np, pandas as pd, sys
from sklearn.metrics import accuracy_score, precision_score, recall_score, f1_score, confusion_matrix, classification_report

# CONFIG: adjust these paths if your artifacts / test data are elsewhere
MODEL_PATH = "models/model.pkl"
VECT_PATH  = "models/vectorizer.pkl"
TEST_CSV   = "models/test.csv"   # CSV must have columns: text,label  where label is "real"/"fake" or 1/0

def load():
    try:
        model = pickle.load(open(MODEL_PATH,"rb"))
    except Exception as e:
        print("ERROR: cannot load model:", e); sys.exit(2)
    try:
        vect = pickle.load(open(VECT_PATH,"rb"))
    except Exception as e:
        print("ERROR: cannot load vectorizer:", e); sys.exit(2)
    try:
        df = pd.read_csv(TEST_CSV)
    except Exception as e:
        print("ERROR: cannot load test CSV (expected models/test.csv):", e); sys.exit(2)
    if 'text' not in df.columns or 'label' not in df.columns:
        print("ERROR: test.csv must contain 'text' and 'label' columns."); sys.exit(2)
    return model, vect, df

def normalize_labels(y):
    # convert labels to 0/1 if they are strings like "fake"/"real"
    if y.dtype == object:
        y = y.str.lower().map({"fake":0,"real":1,"0":0,"1":1})
    return y.astype(int)

model, vect, df = load()
X = vect.transform(df['text'].astype(str).tolist())
y_true = normalize_labels(df['label'])

# get predictions & probabilities in robust way
y_pred = None
probs = None
if hasattr(model, "predict_proba"):
    probs = model.predict_proba(X)
    # choose positive class index (if classes_ exist)
    if hasattr(model, "classes_"):
        try:
            pos_idx = list(model.classes_).index(1) if 1 in model.classes_ else 1
        except:
            pos_idx = 1
    else:
        pos_idx = 1
    y_pred = (probs[:, pos_idx] >= 0.5).astype(int)
else:
    # fallback to decision_function or predict
    try:
        dec = model.decision_function(X)
        # if dec is shape (n,) apply sigmoid-like mapping
        if dec.ndim == 1:
            from scipy.special import expit
            probs_pos = expit(dec)
            y_pred = (probs_pos >= 0.5).astype(int)
            probs = np.vstack([1-probs_pos, probs_pos]).T
        else:
            # multiclass-like output
            import numpy as np
            probs = np.exp(dec) / np.exp(dec).sum(axis=1, keepdims=True)
            y_pred = probs.argmax(axis=1)
    except Exception:
        y_pred = model.predict(X)

acc = accuracy_score(y_true, y_pred)
prec = precision_score(y_true, y_pred, zero_division=0)
rec = recall_score(y_true, y_pred, zero_division=0)
f1 = f1_score(y_true, y_pred, zero_division=0)
cm = confusion_matrix(y_true, y_pred)

print("SAMPLES:", len(y_true))
print("ACCURACY: {:.4f}".format(acc))
print("PRECISION: {:.4f}".format(prec))
print("RECALL: {:.4f}".format(rec))
print("F1: {:.4f}".format(f1))
print("CONFUSION_MATRIX:")
print(cm)
print("\nCLASSIFICATION REPORT:")
print(classification_report(y_true, y_pred, target_names=['fake','real']))
# print a few misclassified examples for debugging
mis = df[y_true != y_pred].copy()
if len(mis) > 0:
    print(f"\\nShowing up to 10 misclassified examples (total {len(mis)}):")
    for i,row in mis.head(10).iterrows():
        print("----")
        print("TEXT:", row['text'][:300].replace('\\n',' '))
        print("TRUE:", row['label'], "PRED:", int(y_pred[i]))
else:
    print("\\nNo misclassifications found on test set.")
