import http from "./httpService";

const API_ENDPOINT = "https://asminaholmes.herokuapp.com/";

export default function getReviewResult(review) {
    return http.post(API_ENDPOINT, { review });
}