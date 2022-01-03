import React from 'react';

const ReviewStat = ({ status, level }) => {
    const reviewStatusLabel = ["Negative", "Neutral", "Positive"];
    const reviewStatusColor = ["bg-red-500", "bg-gray-500", "bg-blue-500"];
    return (
        <div className="flex items-center mb-2">
            <span class={`inline-flex text-sm items-center text-white justify-center p-2 ${reviewStatusColor[status]} rounded-md shadow-lg`}>
                {level}
            </span>
            <h3 class="text-gray-600 dark:text-white text-sm font-medium tracking-tight ml-2">{reviewStatusLabel[status]}</h3>
        </div>
    );
}

export default ReviewStat;