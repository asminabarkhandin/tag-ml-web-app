import React from 'react';
import Gist from 'react-gist';
import Navbar from '../components/Navbar';
import image1 from "../assets/screen-1.png";
import image2 from "../assets/screen-2.png";
import image3 from "../assets/screen-3.png";
import image4 from "../assets/screen-4.png";
import image5 from "../assets/screen-5.png";
import image6 from "../assets/screen-6.png";


const About = () => {
    return (
        <div>
            <Navbar />
            <div className="px-4 py-6 lg:px-96">
                <h1 className="text-4xl font-extrabold text-left mx-4">Problem Statement</h1>
                <p className="text-gray-600 rounded-lg p-4 text-lg">
                    Sentiment analysis (or opinion mining) is a natural language processing (NLP) technique used to determine whether data is positive, negative or neutral. Sentiment analysis is often performed on textual data to help businesses monitor brand and product sentiment in customer feedback, and understand customer needs.
                    <br />
                    <br />
                    We decided to take Kinopoisk reviews classification. Kinopoisk is the biggest Russian-speaking web online cinema service.
                </p>
                <img src={image1} className="w-full h-auto p-4" alt="" />
                <p className="text-gray-600 rounded-lg p-4 text-lg">
                    Besides the usual information and ratings of the films, the user also can read valuable long-read reviews.
                </p>
                <img src={image2} className="w-full h-auto px-4 md:px-96 py-6" alt="" />
                <p className="text-gray-600 rounded-lg p-4 text-lg">
                    As we see, reviews are categorized by 3 groups: positive, negative and neutral. These labels are chosen by the author of the review and by the readers, who can vote whether the review was negative/positive/neutral by their opinion. The problem is that the readers can vote more for the wrong label for some personal purpose, thus spoiling the statistics of the film. We decided to solve this problem by automatically labeling reviews without human factors, making the statistics of the reviews more objective.
                </p>
                <h1 className="text-4xl font-extrabold text-left mx-4">Dataset Collection</h1>
                <p className="text-gray-600 rounded-lg p-4 text-lg">
                    We created a parser for collecting reviews from top 250 best films, scrapping the first 10 good, 10 bad and 10 neutral reviews. Eventually, we got 3574 samples from different movies.
                </p>
                <img src={image3} className="w-full h-auto p-4" alt="" />
                <h1 className="text-4xl font-extrabold text-left mx-4">Data Preprocessing</h1>
                <p className="text-gray-600 rounded-lg p-4 text-lg">
                    Average text length was 234 words. It contained punctuation, digits, capital letters, some accidental single letters and other noise. In preprocessing we faced the challenge with lemmatization for Russian words, since there is no ready package for Russian in nltk.stem lemmatizer. We used pymystem3 library with Mystem analyzer by Yandex.
                </p>
                <img src={image4} className="w-full h-auto p-4" alt="" />
                <p className="text-gray-600 rounded-lg px-4 text-lg">So the original text from this</p>
                <img src={image5} className="w-full h-auto p-4" alt="" />
                <p className="text-gray-600 rounded-lg px-4 text-lg">turned into this</p>
                <img src={image6} className="w-full h-auto p-4" alt="" />
                <h1 className="text-4xl font-extrabold text-left mx-4">Model training and selection</h1>
                <p className="text-gray-600 rounded-lg p-4 text-lg">
                    We chose 5 models to train: Logistic Regression, Support Vector Machine, Naive Bayes, Decision Tree and Random Forest algorithms. We evaluated their accuracy score, precision, recall and F1 score, and chose the best one - SVM model.
                </p>
                <p className="text-gray-600 rounded-lg p-4 text-lg">
                    In the pipeline besides the model we added TfidVectoriser. This is a method for representing text in vector form. The abbreviation TF-IDF itself stands for TF - term frequency, IDF - inverse document frequency, that is, the ratio of the frequency of use of a word in a single text to the frequency of use of a word in all documents.
                </p>
                <img src="" />
                <p className="text-gray-600 rounded-lg p-4 text-lg">
                    Then all texts are passed to our model in form of vectors, which is more understandable for the ML model than words.
                </p>
            </div>
        </div>
    );
}

export default About;