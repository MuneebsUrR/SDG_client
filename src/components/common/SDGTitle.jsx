import React, { useEffect, useRef, useState } from 'react';

const SDGUnderline = ({ width }) => {
    const colors = [
        '#E5243B', '#DDA63A', '#4C9F38', '#C5192D', '#FF3A21', 
        '#26BDE2', '#FCC30B', '#A21942', '#FD6925', '#DD1367',
        '#FD9D24', '#BF8B2E', '#3F7E44', '#0A97D9', '#56C02B',
        '#00689D', '#19486A'
    ];

    return (
        <div className="flex mt-1" style={{ maxWidth: `${width}px` }}>
            {colors.map((color, index) => (
                <div
                    key={index}
                    className="h-1"
                    style={{
                        width: `${100 / colors.length}%`, // Distribute evenly
                        backgroundColor: color,
                    }}
                />
            ))}
        </div>
    );
};

const SDGTitle = ({ text }) => {
    const textRef = useRef(null);
    const [textWidth, setTextWidth] = useState(0);

    useEffect(() => {
        if (textRef.current) {
            setTextWidth(textRef.current.offsetWidth);
        }
    }, [text]);

    return (
        <div className="mb-4">
            <h2
                className="inline-block text-2xl font-bold"
                ref={textRef}
            >
                {text}
            </h2>
            <SDGUnderline width={textWidth} />
        </div>
    );
};

export default SDGTitle;
