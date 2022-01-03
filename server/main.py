from flask_cors import CORS
from flask import Flask, request
from models import MyClassifier, load_model

classifier = MyClassifier(load_model('svm_final.pckl'))

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
def get_rreview_results():
    review = request.get_json()
    text = review["review"]
    class_prediced, probas = classifier.make_prediction(text)
    # send review to ml
    # get some metrics
    data = {
        "overallStatus": get_overall_status(class_prediced),
        "posPersent": round_prob(probas[1]),
        "netPersent": round_prob(probas[2]),
        "negPersent": round_prob(probas[0])
    }
    return data
