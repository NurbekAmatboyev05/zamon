import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { FaUsers, FaMapMarkedAlt } from "react-icons/fa";
import { FiHome } from "react-icons/fi";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next"; // Import the useTranslation hook
import "swiper/css";
import "swiper/css/pagination";
import bg1 from "../assets/dubai.jpg";
import bg2 from "../assets/istanbul3.jpg";
import bg3 from "../assets/sharm.jpg";

const cities = [
  {
    name: "Antalya",
    population: "8.66 M",
    territory: "41.290 KM²",
    price: "$1.100.200",
    bg: bg3,
  },
  {
    name: "Dubai",
    population: "67.41 M",
    territory: "551.500 KM²",
    price: "$425.600",
    bg: bg1,
  },
  {
    name: "Istanbul",
    population: "3.21 M",
    territory: "14.500 KM²",
    price: "$580.000",
    bg: bg2,
  },
];

function Main() {
  const { t } = useTranslation(); // Initialize translation hook

  return (
    <div className="w-full h-screen">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        className="w-full h-full"
      >
        {cities.map((city, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative h-full flex justify-center items-center bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${city.bg})` }}
            >
              <div className="absolute inset-0 bg-black/40" />
              <div className="relative z-10 text-white text-center px-4 md:px-8 max-w-6xl w-full">
                <h2 className="text-xl md:text-2xl mb-2 text-gray-200">
                  {t("Take a Glimpse Into The Beautiful City Of:")}
                </h2>
                <h1 className="text-4xl md:text-6xl font-bold mb-4">{city.name}</h1>
                <Link
                  to="contacts" // This will scroll to the contacts section
                  smooth={true}
                  offset={-70} // You can adjust the offset to avoid header overlap
                  duration={500}
                >
                  <button className="bg-[#1db5ba] text-black px-6 py-2 rounded-full mb-6 hover:bg-gray-200 transition">
                    {t("Go There")}
                  </button>
                </Link>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center text-lg bg-white rounded-3xl p-6 mt-4">
                  <div className="flex flex-col items-center">
                    <FaUsers size={24} className="mb-1 text-[#1db5ba]" />
                    <p className="font-semibold text-[#767777]">{t("Population:")}</p>
                    <p className="text-[#1db5ba] text-xl">{city.population}</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <FaMapMarkedAlt size={24} className="mb-1 text-[#1db5ba]" />
                    <p className="font-semibold text-[#767777]">{t("Territory:")}</p>
                    <p className="text-[#1db5ba] text-xl">{city.territory}</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <FiHome size={24} className="mb-1 text-[#1db5ba]" />
                    <p className="font-semibold text-[#767777]">{t("AVG Price:")}</p>
                    <p className="text-[#1db5ba] text-xl">{city.price}</p>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    {/* Updated this button with Link component */}
                    <Link
                      to="contacts" // This will scroll to the contacts section
                      smooth={true}
                      offset={-70} // You can adjust the offset to avoid header overlap
                      duration={500}
                    >
                      <button className="bg-[#1db5ba] text-white border border-[#1db5ba] px-5 py-2 rounded-full hover:bg-white hover:text-[#1db5ba] transition">
                        {t("Explore More")}
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Main;
