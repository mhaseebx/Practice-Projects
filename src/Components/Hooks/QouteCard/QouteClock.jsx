import React, { useEffect, useState } from 'react'

const QouteClock = () => {
    const [currTime, setCurrTime] = useState('');
    const [currQuote, setCurrQuote] = useState(`Rise above the storm, you'll find the sunshine.`);
    const [likeCount, setLikeCount] = useState(0);

    useEffect(() => {

        const timer = setInterval(() => {

            const now = new Date();
            setCurrTime(now.toLocaleTimeString());

        }, 1000);

        return () => clearInterval(timer);
    }, [])

    useEffect(() => {

        const quoteRotator = setInterval(() => {
            const random = Math.floor(Math.random() * 5);

            setCurrQuote(quotes[random]);
        }, 3000);

        return () => clearInterval(quoteRotator);
    }, [])


    const handleLikeClick = () => {
        setLikeCount(likeCount + 1);
    }


    const quotes = [
        "The best way to predict the future is to create it.",
        "Life is 10% what happens to you and 90% how you react to it.",
        "It does not matter how slowly you go as long as you do not stop.",
        "Everything you’ve ever wanted is on the other side of fear.",
        "Success is not final, failure is not fatal: it is the courage to continue that counts."
    ];

    return (
        <>
            <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 flex items-center justify-center p-4">
                <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md mx-auto border border-gray-200">

                    {/* Header */}
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-gray-800">Personal Dashboard</h1>
                        <p className="text-gray-600 mt-2">Your daily dose of inspiration</p>
                    </div>

                    {/* Live Clock Section */}
                    <div className="mb-8 text-center">
                        <div className="inline-block bg-gray-100 rounded-full px-4 py-1 mb-3">
                            <span className="text-sm font-medium text-gray-600">Live Time</span>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                            <h2 className="text-4xl font-mono font-bold text-gray-800">
                                {currTime}
                            </h2>
                        </div>
                    </div>

                    {/* Quote Display Section */}
                    <div className="mb-8">
                        <div className="inline-block bg-yellow-100 rounded-full px-4 py-1 mb-3">
                            <span className="text-sm font-medium text-yellow-800">Inspiration</span>
                        </div>
                        <div className="bg-yellow-50 rounded-lg p-6 border border-yellow-200">
                            <div className="text-4xl text-yellow-400 mb-2">"</div>
                            <p className="text-gray-700 text-lg italic text-center">
                                {currQuote}
                            </p>
                            <div className="text-4xl text-yellow-400 mt-2 text-right">"</div>
                        </div>
                    </div>

                    {/* Like Counter Section */}
                    <div className="text-center">
                        <div className="inline-block bg-pink-100 rounded-full px-4 py-1 mb-3">
                            <span className="text-sm font-medium text-pink-800">Appreciation</span>
                        </div>
                        <div className="bg-white rounded-lg  border border-gray-200">
                            <div className="flex items-center justify-center space-x-4 ">
                                <button onClick={handleLikeClick} className="bg-pink-500 hover:bg-pink-600 text-white p-3 rounded-full shadow-md transition-colors duration-200 flex items-center justify-center w-12 h-12">
                                    <span className="text-3xl p-[10px] cursor-pointer">❤️</span>
                                </button>
                                <div className="text-center pt-[30px]">
                                    <p className="text-3xl font-bold text-gray-800">{likeCount}</p>
                                    <p className="text-sm text-gray-600">Likes</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default QouteClock