import { useState, useEffect } from "react";

const carouselImages = [
  "/gems-hero.png",
  "/nitw.jpg",
  "/iitm.jpg", // Replace with your actual image paths
  "/gnit.jpg",
  "/sparktank.jpg",
  "/tiegrad.jpg",
];

const achievements = [
  "", // No achievement for the first slide
  "Achievement 1: Best Innovation Award",
  "Achievement 2: Excellence in Education",
  "Achievement 3: Community Service Leader",
  "Achievement 4: Top Performer of the Year",
];

export default function CustomCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    // Autoplay logic
    useEffect(() => {
      const interval = setInterval(() => {
        goToNext();
      }, 3000); // Change slide every 3 seconds
  
      return () => clearInterval(interval); // Cleanup on unmount
    }, [currentIndex]);
  
    const goToNext = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
      );
    };
  
    return (
      <div className="relative w-[600px] h-auto max-w-2xl mx-auto">
        {/* Carousel Images */}
        <div className="overflow-hidden rounded-lg relative">
          <div
            className="flex transition-transform duration-500"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {carouselImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full flex-shrink-0"
              />
            ))}
          </div>
        </div>
  
        {/* Fixed Text Overlay */}
        {currentIndex > 0 && (
          <div className="absolute inset-0 flex flex-col justify-between items-center text-white p-4">
            {/* Heading Animation */}
            <h2 className="text-2xl font-bold text-center bg-black bg-opacity-50 px-4 py-2 rounded animate-fadeIn">
              Our Achievements
            </h2>
  
            {/* Achievement Info Animation */}
            <p className="text-lg font-medium text-center bg-black bg-opacity-50 px-4 py-2 rounded animate-slideUp">
              {achievements[currentIndex]}
            </p>
          </div>
        )}
  
        {/* Animations */}
        <style>{`
          .animate-fadeIn {
            animation: fadeIn 1s ease-in-out;
          }
          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
  
          .animate-slideUp {
            animation: slideUp 1s ease-in-out;
          }
          @keyframes slideUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </div>
    );
  }