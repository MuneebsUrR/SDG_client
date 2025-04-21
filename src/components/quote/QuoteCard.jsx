import React from 'react';
import Badge from '../../components/common/Badge';
const SDGCard = ({ date, text, sdg }) => {
    return (
        <div className="relative bg-gradient-to-r from-yellow-100 via-pink-100 to-pink-50 p-6 rounded-xl shadow-lg w-full md:w-1/4 flex-grow mb-4 mx-2">
            {/* Date Bubble */}
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white rounded-full px-4 py-2 shadow-lg text-center">
                <p className="text-2xl font-bold text-black leading-tight">{date.split(' ')[0]}</p>
                <p className="text-sm text-gray-600 font-medium">{date.split(' ')[1]}</p>
            </div>

            {/* Quotation Marks */}
            <div className="absolute top-8 left-4 text-5xl text-red-500">
                <span>&ldquo;</span>
            </div>

            <div className="absolute bottom-14 right-4 text-5xl text-red-500">
                <span>&rdquo;</span>
            </div>

            {/* Quote Text */}
            <div className="text-center text-gray-800 mt-12">
                <p className="text-lg font-semibold">{text}</p>
            </div>

            {/* Related SDGs */}
            <div className="text-center mt-4">
                <p className="text-gray-500 text-sm">Related SDGs</p>
                <div className="mt-2 flex justify-center">
                    {
                        sdg.map((number, index) => (
                            <Badge key={index} number={number} />
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default SDGCard;
