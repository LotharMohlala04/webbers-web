
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Sample slide data - replace with your actual data
const slideData = [
  {
    id: 1,
    title: "Agents of Change",
    description: "New Collection 2025",
    image: "https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-02-edition-01.jpg",
    alt: "Black hoodie with 'Agents of Change' text",
    cta: "Shop Men's"
  },
  {
    id: 2,
    title: "Summer Essentials",
    description: "Stay cool with our latest arrivals",
    image: "https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-02-edition-02.jpg",
    alt: "Summer collection clothing items",
    cta: "Shop Collection"
  },
  {
    id: 3,
    title: "Kids' New Arrivals",
    description: "Stylish options for the little ones",
    image: "https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-02-edition-03.jpg",
    alt: "Children's clothing collection",
    cta: "Shop Kids"
  }
];

export default function Landing() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
  // Auto-advance slides
  useEffect(() => {
    let intervalId;
    if (isAutoPlaying) {
      intervalId = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slideData.length);
      }, 5000); // Change slide every 5 seconds
    }
    
    return () => clearInterval(intervalId);
  }, [isAutoPlaying]);
  
  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false); // Pause autoplay when manually navigating
  };
  
  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev === 0 ? slideData.length - 1 : prev - 1));
    setIsAutoPlaying(false);
  };
  
  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slideData.length);
    setIsAutoPlaying(false);
  };
  
  return (
    <>
    <section aria-labelledby="slideshow" className="">
    <div className="relative w-full h-screen max-h-96 md:max-h-8/10 overflow-hidden">
      {/* Slides Container */}
      <div 
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slideData.map((slide) => (
          <div key={slide.id} className="min-w-full h-full relative flex-shrink-0">
            <img 
              src={slide.image} 
              alt={slide.alt} 
              className="w-full h-full object-cover"
            />
            
            {/* Content Overlay */}
            <div className="absolute inset-0 flex flex-col justify-center items-start p-8 md:p-16 bg-black/20">
              <div className="bg-black/40 p-4 md:p-6 rounded text-white max-w-md">
                <h2 className="text-2xl md:text-4xl font-bold mb-2">{slide.title}</h2>
                <p className="text-lg md:text-xl mb-4">{slide.description}</p>
                <button className="bg-white text-black py-2 px-6 rounded hover:bg-gray-200 transition-colors">
                  {slide.cta}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Navigation Controls */}
      <div className="absolute inset-x-0 bottom-4 flex justify-center space-x-2">
        {slideData.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Previous/Next Buttons */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>
    </div>
    </section>

    <section aria-labelledby="slideshow" className="">
    <div 
        className="flex transition-transform duration-500 ease-in-out h-full max-h-6/10"
      >
        <div className="min-w-full h-full relative flex-shrink-0">
            <img 
              src="https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-02-edition-01.jpg"
              alt="image-holder-1" 
              className="w-full h-full object-cover"
            />
            </div>
      </div>
      </section>

    <section aria-labelledby="details-heading" className="">
    <div className="grid max-h-96 grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1">

    </div>
    </section>



    </>
  );
}