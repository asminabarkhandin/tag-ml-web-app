from nltk.stem.snowball import SnowballStemmer
from string import punctuation
from pymystem3 import Mystem
import re
from nltk.stem import WordNetLemmatizer, PorterStemmer
from nltk.corpus import stopwords
import pickle
from flask import Flask, request
from flask_cors import CORS
import nltk
nltk.download('stopwords')

# Create lemmatizer and stopwords list
mystem = Mystem()
russian_stopwords = stopwords.words("russian")


stemmer = SnowballStemmer("russian")


def preprocess_text(text):
    text = (lambda f: re.sub(r'\d|\W', ' ', text))(text)
    tokens = mystem.lemmatize(text.lower())
    # tokens = text.lower().split(' ')
    # tokens = [stemmer.stem(word) for word in text.lower().split(' ')]
    tokens = [token for token in tokens if token not in russian_stopwords
              and token != " "
              and token.strip() not in punctuation
              and len(token) > 3]
    text = " ".join(tokens)

    return text


global svmModel

svmFile = open('SVMModel80.pckl', 'rb')
svmModel = pickle.load(svmFile)
svmFile.close()

app = Flask(__name__)
CORS(app)


def truncate(n, decimals=0):
    multiplier = 10 ** decimals
    return int(n * multiplier) / multiplier


def round_prob(number):
    return truncate(number * 100, 2)


def get_overall_status(classname):
    if classname == "neutral":
        return 1
    elif classname == "good":
        return 2
    elif classname == "bad":
        return 0


@app.route('/', methods=["POST"])
def hello_world():
    review = request.get_json()
    text = review["review"]
    class_prediced = svmModel.predict([text])
    probas = svmModel.predict_proba([text])[0]
    # send review to ml
    # get some metrics
    data = {
        "overallStatus": get_overall_status(class_prediced),
        "posPersent": round_prob(probas[1]),
        "netPersent": round_prob(probas[2]),
        "negPersent": round_prob(probas[0])
    }
    return data


if __name__ == '__main__':
    app.run(debug=True)
