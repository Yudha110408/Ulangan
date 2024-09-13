'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface Review {
    text: string;
    photo: string;
    name: string;
    jobTitle: string;
}

const reviews: Review[] = [
    {
        text: "Vestibulum eu quam nec neque pellentesque efficitur id eget nisl. Proin porta est convallis lacus blandit pretium sed non enim. Maecenas lacinia non orci at aliquam. Donec finibus, urna bibendum ultricies laoreet.",
        photo: "/Chelsea.png",
        name: "Chelsea Morgan",
        jobTitle: "CEO of Subway",
    },
    {
        text: "In a laoreet purus. Integer turpis quam, laoreet id orci nec, ultrices lacinia nunc. Aliquam erat volutpat. Curabitur fringilla in purus eget egestas. Etiam quis.",
        photo: "/Nick.png",
        name: "Nick Cave",
        jobTitle: "CMD of Nokia",
    },
    {
        text: "Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus. Pellentesque vulputate quam a quam volutpat, sed ullamcorper erat commodo.",
        photo: "/Lana.png",
        name: "Lana Rosenfeld",
        jobTitle: "Senior VP of Pinterest",
    },
    {
        text: "Porta nisl dolor, molestie pellentesque elit molestie in. Morbi metus neque, elementum ullamcorper hendrerit eget, tincidunt et nisi. Sed magna nunc.",
        photo: "/Giorgio.png",
        name: "Giorgio Moroder",
        jobTitle: "CTO of Glovo",
    },
    {
        text: "Integer turpis quam, laoreet id orci nec, ultrices lacinia nunc. Aliquam erat volutpat. Curabitur fringilla in purus eget egestas. Etiam quis. In a laoreet purus",
        photo: "/young.png",
        name: "Young Liu",
        jobTitle: "CAO of Foxconn",
    },
    {
        text: "Curabitur non nulla nec nunc pharetra faucibus. Proin convallis velit at elit dictum, a venenatis risus vestibulum. Sed consequat mi eu tellus cursus, id aliquet est ullamcorper.",
        photo: "/alexander.jpeg",
        name: "Alexander Smith",
        jobTitle: "Founder of InnovateTech",
    },
];

const itemsToShow = {
    desktop: 3,
    landscape: 2,
    portrait: 1,
};

const getItemsToShow = () => {
    if (typeof window === 'undefined') return itemsToShow.desktop;
    if (window.innerWidth >= 1024) return itemsToShow.desktop;
    if (window.innerWidth >= 768) return itemsToShow.landscape;
    return itemsToShow.portrait;
};

const ReviewCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsVisible, setItemsVisible] = useState(getItemsToShow());

    useEffect(() => {
        const handleResize = () => setItemsVisible(getItemsToShow());
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Ensure currentIndex is within bounds when resizing
    useEffect(() => {
        if (currentIndex >= reviews.length - itemsVisible) {
            setCurrentIndex(reviews.length - itemsVisible < 0 ? 0 : reviews.length - itemsVisible);
        }
    }, [itemsVisible, currentIndex]);

    return (
        <div className="relative max-w-screen-lg mx-auto p-4 overflow-hidden">
            <h2 className="text-center text-3xl font-bold mb-8">
                What people say about Team
            </h2>
            <div className="relative">
                <div
                    className="grid gap-4"
                    style={{
                        gridTemplateColumns: `repeat(${itemsVisible}, minmax(0, 1fr))`,
                        transform: `translateX(-${currentIndex * (100 / itemsVisible)}%)`,
                        transition: 'transform 0.3s ease-in-out',
                    }}
                >
                    {reviews.map((review, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center transition-transform transform hover:scale-105"
                            style={{ minWidth: '300px' }}
                        >
                            <div className="flex-grow mb-4 text-center">
                                <div className="text-yellow-500 mb-2 flex justify-center">
                                    {'★★★★★'.split('').map((star, i) => (
                                        <span
                                            key={i}
                                            className="transition-transform duration-300 transform hover:scale-125"
                                        >
                                            {star}
                                        </span>
                                    ))}
                                </div>
                                <p className="text-lg font-normal mb-4 transition-transform transform hover:scale-105">{review.text}</p>
                            </div>
                            <div className="flex items-center">
                                <div className="w-16 h-16 rounded-full overflow-hidden mr-4 transition-transform transform hover:scale-110">
                                    <Image
                                        src={review.photo}
                                        alt={review.name}
                                        width={64}
                                        height={64}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                                <div className="text-center">
                                    <p className="text-xl font-semibold transition-transform transform hover:scale-105">{review.name}</p>
                                    <p className="text-sm text-gray-500">{review.jobTitle}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ReviewCarousel;
