import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { FaBed, FaPlane, FaMapMarkedAlt } from "react-icons/fa"; // Yangi ikonalar
import { Link } from "react-scroll";
import { useTranslation } from 'react-i18next'; // i18n kutubxonasini import qilish
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import im1 from "../assets/europe2.jpg";
import im2 from "../assets/cand.jpg";
import im3 from "../assets/deals-02.jpg";
import im4 from "../assets/saudi.jpg";

function About() {
  const { t } = useTranslation(); // useTranslation hook'ini chaqirish

  const destinations = [
    { name: t("canada"), checkIns: 345, price: null, image: im2 },
    { name: t("eu"), checkIns: 345, price: null, image: im1 },
    { name: t("istanbul"), checkIns: 234, price: "$420", image: im3 },
    { name: t("dubai"), checkIns: 310, price: "$520", image: im4 },
  ];

  return (
    <div className="px-4 py-10 max-w-7xl mx-auto">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-black mb-4">
          {t("best_offers")}
        </h1>
        <p className="text-gray-500 text-sm sm:text-base">
          {t("discover_best_offers")}
          <br className="hidden sm:block" />
          {t("immerse_in_savings")}
        </p>
      </div>

      <Swiper
        spaceBetween={20}
        loop={true}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        modules={[Navigation, Autoplay]}
      >
        {destinations.map((dest, index) => (
          <SwiperSlide key={index}>
            <div className="relative flex flex-col items-center">
              <img
                src={dest.image}
                alt={dest.name}
                className="h-60 w-full sm:w-80 object-cover rounded-xl shadow-lg"
              />

              <div className="bg-white w-full sm:w-80 -mt-6 z-10 relative rounded-xl shadow-xl p-6">
                <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-1 flex justify-between items-center">
                  {dest.name}
                  {dest.price && (
                    <span className="text-[#1db5ba] text-sm">{dest.price}</span>
                  )}
                </h2>
                <p className="text-gray-500 text-sm mb-3">
                  👥 {dest.checkIns} {t("check_ins")}{" "}
                  <span className="text-xs">/person</span>
                </p>
                <hr className="mb-3" />
                <div>
                  <p className="font-semibold text-gray-700 mb-2">
                    {t("deal_includes")}:
                  </p>
                  <ul className="text-gray-500 text-sm space-y-1 mb-4">
                    <li className="flex items-center gap-2">
                      <FaBed className="text-gray-500" /> {t("days_trip_hotel")}
                    </li>
                    <li className="flex items-center gap-2">
                      <FaPlane className="text-gray-500" /> {t("airplane_included")}
                    </li>
                    <li className="flex items-center gap-2">
                      <FaMapMarkedAlt className="text-gray-500" /> {t("daily_places_visit")}
                    </li>
                  </ul>
                  <Link 
                      to="contacts" 
                      smooth={true} 
                      offset={-70} 
                      duration={500}
                  >
                    <button className="bg-[#1db5ba] hover:bg-[#16878b] text-white font-bold py-2 px-4 rounded w-full text-sm">
                      {t("make_reservation")}
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Custom navigation buttons */}
        <div className="swiper-button-prev absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </div>

        <div className="swiper-button-next absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
      </Swiper>
    </div>
  );
}

export default About;
