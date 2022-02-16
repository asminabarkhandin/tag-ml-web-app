from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
import time, random, csv

chrome_options = Options()
chrome_options.add_argument("--incognito")

browser=webdriver.Chrome(options=chrome_options)

def write_to_csv(id, status, review, usefull, useless):
    row = [id, status, review, usefull, useless]
    with open('reviews.csv', 'a', encoding='UTF8') as f:
        writer = csv.writer(f)
        writer.writerow(row)

status = ["good", "bad", "neutral"]
ids = []

# read all film ids
with open("films.txt", "r", encoding="UTF8") as file:
    lines = file.readlines()
    lines = [line.split(" ")[0] for line in lines]
    ids = lines

index = 0
# restoring current state from prev exec
with open("count.txt", "r", encoding="UTF8") as file:
    index = int(file.readline().strip())

film_id = ids[index]

while index <= 249:
    print("parsing " + film_id)
    # getting page with pos, neg, net reviews
    for current_status in status:
        print("review " + current_status)
        URL = "https://www.kinopoisk.ru{film_id}reviews/?status={status}&ord=rating".format(film_id=film_id, status=current_status)
        browser.get(URL)
        random_wait_time = random.randint(10,15)
        print("wait " + str(random_wait_time) + " sec")
        time.sleep(random_wait_time)
        soup=BeautifulSoup(browser.page_source, features="html.parser")

        # extracting data from cuurent page
        for review_item in soup.find_all("div", {"class": "reviewItem"}):
            review = review_item.find("span", {"class": "_reachbanner_"}).get_text().replace("\n", " ")
            usefull = review_item.find("ul", {"class": "useful"})
            
            feedback = usefull.find_all("li")[-1].get_text()
            usefull_count = feedback.split("/")[0].strip()
            useless_count = feedback.split("/")[1].strip()
            write_to_csv(film_id, current_status, review, usefull_count, useless_count)

    # save current status of parsing
    index = index + 1 
    with open("count.txt", "w", encoding="UTF8") as file:
        file.write(str(index))

    film_id = ids[index]
    print("waiting before moving to next movie...")
    next_movie_wait_time = random.randint(30,50)
    print("wait " + str(next_movie_wait_time))
    time.sleep(next_movie_wait_time)

    

    