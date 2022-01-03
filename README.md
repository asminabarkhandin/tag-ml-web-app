# Tag ML Web App project (Russian Language Sentiment Analysis) #

[Tag ML Web App](https://tag-ml.web.app/) is built with Flask API for sentiment analysis of reviews in Russian language. The **Home** page promts the user to type in his text in Russian and displays probabilities of being classified as negative/neutral/positive review and classifies the text as one of the group.

![img1](/images/img1.png)

**About** section tells the user about the project itself.

![img2](/images/img2.png)

**Dataset** section shows preview of our dataset which we collected from Kinopoisk.

![img3](/images/img3.png)

### Problem Statement ###
We decided to take Kinopoisk reviews classification. Kinopoisk is the biggest Russian-speaking web online cinema service.
Besides the usual information and ratings of the films, the user also can read valuable long-read reviews.
Reviews are categorized by 3 groups: positive, negative and neutral. These labels are chosen by the author of the review and by the readers, who can vote whether the review was negative/positive/neutral by their opinion. The problem is that the readers can vote more for the wrong label for some personal purpose, thus spoiling the statistics of the film. We decided to solve this problem by automatically labeling reviews without human factors, making the statistics of the reviews more objective.

### Dataset Collection and Preprocessing ###
We created a parser for collecting reviews from top 250 best films, scrapping the first 10 good, 10 bad and 10 neutral reviews. Eventually, we got 3574 samples from different movies.

Average text length was 234 words. It contained punctuation, digits, capital letters, some accidental single letters and other noise. In preprocessing we faced the challenge with lemmatization for Russian words, since there is no ready package for Russian in `nltk.stem` lemmatizer. We used `pymystem3` library with `Mystem` analyzer by Yandex.

### Model Training ###
We chose 6 models to train: Logistic Regression, Support Vector Machine, K Nearest Neighbours, Naive Bayes, Decision Tree and Random Forest algorithms. We evaluated their accuracy score, precision, recall and F1 score, and chose the best one - SVM model.

In the pipeline besides the model we added TfidVectoriser. This is a method for representing text in vector form. The abbreviation TF-IDF itself stands for TF - term frequency, IDF - inverse document frequency, that is, the ratio of the frequency of use of a word in a single text to the frequency of use of a word in all documents.

Then all texts are passed to our model in form of vectors, which is more understandable for the ML model than words.

