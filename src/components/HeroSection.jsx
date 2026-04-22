import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import { slides } from "../../data";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const HeroSection = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <div className="w-full mx-auto relative group">

            <motion.button
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                ref={prevRef}
                className="hidden md:flex items-center justify-center absolute left-4 top-1/2 z-10 -translate-y-1/2 
                bg-white/70 hover:bg-white p-2 rounded-full shadow-lg backdrop-blur-md 
                opacity-0 group-hover:opacity-100 cursor-pointer"
            >
                <ChevronLeft size={22} />
            </motion.button>

            <motion.button
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                ref={nextRef}
                className="hidden md:flex items-center justify-center absolute right-4 top-1/2 z-10 -translate-y-1/2 
                bg-white/70 hover:bg-white p-2 rounded-full shadow-lg backdrop-blur-md 
                opacity-0 group-hover:opacity-100 cursor-pointer"
            >
                <ChevronRight size={22} />
            </motion.button>

            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}

                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false
                }}

                pagination={{
                    clickable: true,
                }}

                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                }}

                onBeforeInit={(swiper) => {
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                }}

                className="overflow-hidden"
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div className="relative w-full">

                            <img
                                src={slide.img}
                                alt={slide.title}
                                className="w-full h-auto object-cover"
                            />

                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default HeroSection;