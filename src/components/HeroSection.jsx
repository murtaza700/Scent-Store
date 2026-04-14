import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { slides } from "../../data";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const HeroSection = () => {

    return (
        <div className="w-full max-w-6xl mx-auto py-10">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                loop={true}
                className="rounded-2xl overflow-hidden"
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div className="relative h-[400px] md:h-[500px] w-full">
                            <img
                                src={slide.img}
                                alt={slide.title}
                                className="w-full h-full object-cover"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center px-4">
                                <h2 className="text-white text-2xl md:text-4xl font-bold">
                                    {slide.title}
                                </h2>
                                <p className="text-gray-200 mt-2 md:text-lg">
                                    {slide.desc}
                                </p>
                                <button className="mt-4 px-6 py-2 bg-white text-black rounded-lg hover:bg-gray-200 transition">
                                    Explore
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default HeroSection;