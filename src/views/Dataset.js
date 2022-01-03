import React from 'react';
import Button from '../components/Button';
import Navbar from '../components/Navbar';
import getDataset from '../services/datasetService';

const Dataset = () => {
    const reviews = getDataset();
    return (
        <div>
            <Navbar />
            <div className="p-3">
                <h1 className="text-center text-2xl font-medium"><a className="text-blue-500" href="https://drive.google.com/file/d/1z_USrPx8bBnEM81n4Td5o0-3ZbufTHFf/view?usp=sharing">Dataset</a> preview</h1>
                <div class="mt-4 -mb-3"><div class="not-prose relative bg-grid-gray-100 bg-gray-50 rounded-xl overflow-hidden" ><div class="absolute inset-0 bg-gradient-to-b from-gray-50 opacity-60"></div><div class="relative rounded-xl overflow-auto">
                    <div class="shadow-sm overflow-hidden my-8">
                        <table class="border-collapse table-fixed w-full text-sm">
                            <thead>
                                <tr>
                                    <th class="border-b font-medium p-4 pl-8 pt-0 pb-3 text-gray-400 text-left">Id</th>
                                    <th class="border-b font-medium p-4 pl-8 pt-0 pb-3 text-gray-400 text-left">Review</th>
                                    <th class="border-b font-medium p-4 pt-0 pb-3 text-gray-400 text-left">Status</th>
                                    <th class="border-b font-medium p-4 pr-8 pt-0 pb-3 text-gray-400 text-left">Usefull</th>
                                    <th class="border-b font-medium p-4 pr-8 pt-0 pb-3 text-gray-400 text-left">Useless</th>
                                </tr>
                            </thead>
                            <tbody class="bg-white">
                                {reviews.map(review =>
                                    <tr>
                                        <td class="border-b border-gray-100 p-4 pl-8 text-gray-500 truncate overflow-ellipsis ">{review.id}</td>
                                        <td class="border-b border-gray-100 p-4 pl-8 text-gray-500 truncate overflow-ellipsis ">{review.review}</td>
                                        <td class="border-b border-gray-100 p-4 text-gray-500">{review.status}</td>
                                        <td class="border-b border-gray-100 p-4 pr-8 text-gray-500">{review.usefull}</td>
                                        <td class="border-b border-gray-100 p-4 pr-8 text-gray-500">{review.useless}</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div><div class="absolute inset-0 pointer-events-none border border-black/5 rounded-xl"></div></div></div>
            </div>

        </div >
    );
}

export default Dataset;