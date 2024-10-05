import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

const Review = () => {
  const reviews = [
    {
      name: "Shakthy",
      text: "This gym is amazing with super facilities, top equipment, and a great environment. Good service.",
      imgSrc: "https://i.pinimg.com/564x/d3/77/8d/d3778d3c90b2c86ee67fbc8505511274.jpg",
    },
    {
      name: "Swetha",
      text: "One of the best gyms I have ever joined. Excellent space, equipment, and service.",
      imgSrc: "https://www.lovepanky.com/wp-content/uploads/2015/07/how-to-approach-a-guy-at-the-gym.jpg",
    },
    {
      name: "Mani",
      text: "Amazing gym, great trainers, well-equipped gym.",
      imgSrc: "https://t4.ftcdn.net/jpg/02/10/28/81/360_F_210288196_r0v3FSy8TH4m59Gl05pegTfwxhCXZW5G.jpg",
    },
    {
      name: "Pradeep",
      text: "Karthik is a very good trainer, and Fit Palace is very spacious. If any personal trainer is required, please contact David.",
      imgSrc: "https://t4.ftcdn.net/jpg/06/21/50/47/360_F_621504739_o4iX2wTu3FGmYMYXIC6vNEvTtTvvXZ7D.jpg",
    },
  ];

  return (
    <section className="p-8 bg-gray-100">
      <div className="text-center mb-8">
        <h2 className="text-gray-600 text-lg font-semibold">Testimonials</h2>
        <h3 className="text-2xl font-bold">What Our Clients Say</h3>
        <p className="mt-2">
          Here’s what our valued clients think about us!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reviews.map((review, index) => (
          <div key={index} className="bg-white p-6 rounded shadow-md">
            <blockquote className="flex items-center mb-3">
              <FontAwesomeIcon icon={faQuoteLeft} className="text-green-500" size="2x" />
              <p className="ml-4">{review.text}</p>
            </blockquote>
            <div className="user flex items-center mt-4">
              <img src={review.imgSrc} alt={`Profile of ${review.name}`} className="w-12 h-12 rounded-full mr-2" />
              <div className="info">
                <h3 className="font-semibold">{review.name}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <a href="/testimonials" className="bg-green-500 text-white px-6 py-2 rounded">Read More Reviews</a>
      </div>
    </section>
  );
};

export default Review;
