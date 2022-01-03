import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Input from '../components/Input';
import ReviewStatus from '../components/ReviewStatus';
import Button from '../components/Button';
import ReviewStat from '../components/ReviewStat';
import getReviewResult from '../services/reviewService';

const Home = () => {
    const [review, setReview] = useState("");
    const [isLoading, setLoading] = useState(false);
    const [result, setResult] = useState({
        "overallStatus": 1,
        "posPersent": 0,
        "netPersent": 0,
        "negPersent": 0
    });

    const handleSubmit = async () => {
        if (review.length > 0) {
            setLoading(true);
            try {
                const result = await getReviewResult(review);
                setResult(result.data);
                console.log(result);
                setLoading(false);
            } catch (ex) {
                setLoading(true);
            }
        }
    }

    return (
        <div>
            <Navbar />
            <div className="px-3 lg:px-96 py-2 lg:py-20">
                <div class="bg-white dark:bg-gray-900 rounded-lg px-6 pt-6 pb-4 ring-1 ring-gray-200  ring-gray-900/5 shadow-xl">
                    {/* <ReviewStatus status={2} /> */}
                    <h1 className="text-lg font-medium">Review: </h1>

                    <Input value={review} onChange={(e) => setReview(e.target.value)} />
                    <h1 className="text-lg font-medium mt-4">Results: </h1>
                    <div className="mt-1 flex flex-col lg:flex-row items-start lg:items-center gap-1 lg:gap-6">
                        <ReviewStat status={0} level={result.negPersent + "%"} />
                        <ReviewStat status={1} level={result.netPersent + "%"} />
                        <ReviewStat status={2} level={result.posPersent + "%"} />
                    </div>

                    <h1 className="text-lg font-medium mt-4">Overall: </h1>
                    <div className="mt-1 flex items-center gap-6">
                        <ReviewStatus status={result.overallStatus} />
                    </div>
                    <div className="flex justify-center">
                        <Button isLoading={isLoading} onClick={handleSubmit} />
                    </div>
                </div>
            </div>
        </div>
    );


}

export default Home;