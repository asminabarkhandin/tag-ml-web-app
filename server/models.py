import nltk
from nltk.corpus import stopwords
from nltk.stem import WordNetLemmatizer, PorterStemmer
import re
from pymystem3 import Mystem
from string import punctuation
from nltk.stem.snowball import SnowballStemmer
import pickle
# Create lemmatizer and stopwords list
mystem = Mystem()

russian_stopwords = stopwords.words("russian")


class MyClassifier:
    def __init__(self, model):
        self.model = model

    def preprocess_text(self, text):
        text = (lambda f: re.sub(r'\d|\W', ' ', text))(text)
        tokens = mystem.lemmatize(text.lower())
        tokens = [token for token in tokens if token not in russian_stopwords
                  and token != " "
                  and token.strip() not in punctuation
                  and len(token) > 3]
        text = " ".join(tokens)
        return text

    def make_prediction(self, text):
        new_text = self.preprocess_text(text)
        pred = self.model.predict([new_text])
        probas = self.model.predict_proba([new_text])[0]
        return pred, probas


def load_model(path):
    file = open(path, 'rb')
    model = pickle.load(file)
    file.close()
    return model
