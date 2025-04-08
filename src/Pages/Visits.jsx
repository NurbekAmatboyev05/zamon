import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";
import { FaUsers, FaGlobeAmericas, FaDollarSign } from "react-icons/fa";
import r1 from "../assets/dubai2.jpg";
import r2 from "../assets/sharm.jpg";
import r3 from "../assets/istanbul3.jpg";

function Visits() {
  const { t } = useTranslation(); // i18n yordamida tarjimani chaqirish

  const visitors = [
    {
      img: r1,
      title: "Dubai",
      location: "United Arab Emirates",
      description: t(`Dubai is a city and emirate in the United Arab Emirates known for luxury shopping, ultramodern architecture and a lively nightlife scene...`),
      extra: {
        population: "3.49 Mil People",
        area: "4,114 km²",
        gdp: "$46,000",
        direction: t("need_directions"), // Tarjimaga moslashtirilgan matn
      },
    },
    {
      img: r2,
      title: "Antalya",
      location: "Turkey",
      description: t(`Antalya is the fastest-growing city in Turkey, and tourists from around the world are discovering its fabulous mix of great beaches...`),
      extra: {
        population: "2.62 Mil People",
        area: "20,723 km²",
        gdp: "$19,500",
        direction: t("need_directions"), // Tarjimaga moslashtirilgan matn
      },
    },
    {
      img: r3,
      title: "Istanbul",
      location: "Turkey",
      description: t(`Istanbul is the most populous city in Turkey and its cultural, economic and historic center...`),
      extra: {
        population: "67.41 Mil People",
        area: "551.500 km²",
        gdp: "$425.600",
        direction: t("need_directions"), // Tarjimaga moslashtirilgan matn
      },
    },
  ];

  return (
    <div className="pt-12 px-4 md:px-8 lg:px-24">
      <h1 className="text-3xl font-extrabold pb-6">{t("visit_countries_now")}</h1> {/* Tarjimaga moslashtirilgan matn */}
      <p className="text-gray-600 mb-10">
        {t("discover_best_offers")} <br className="hidden sm:block" />
      </p>

      <div className="space-y-12">
        {visitors.map((visitor, index) => (
          <div
            key={index}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center"
          >
            <img
              src={visitor.img}
              alt="Tour"
              className="w-full h-60 object-cover rounded-xl shadow-md"
            />
            <div>
              <div className="flex flex-wrap items-center justify-between gap-4 mb-3 pb-20">
                <div>
                  <h2 className="text-2xl font-semibold">{visitor.title}</h2>
                  <p className="text-[#1db5ba] font-medium">{visitor.location}</p>
                </div>
                <Link to="contacts" smooth={true} offset={-70} duration={500}>
                  <button className="bg-[#1db5ba] hover:bg-[#16878b] text-white font-bold py-2 px-6 rounded whitespace-nowrap">
                    {t("explore_more")} {/* Tarjimaga moslashtirilgan matn */}
                  </button>
                </Link>
              </div>

              <p className="text-gray-600 mb-6">{visitor.description}</p>

              {visitor.extra && (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm text-gray-700 mb-4">
                  <div className="bg-gray-100 p-3 rounded-lg shadow-sm text-center">
                    <FaUsers className="text-[#1db5ba] text-xl mx-auto mb-1" />
                    <p className="font-bold">{visitor.extra.population}</p>
                  </div>
                  <div className="bg-gray-100 p-3 rounded-lg shadow-sm text-center">
                    <FaGlobeAmericas className="text-[#1db5ba] text-xl mx-auto mb-1" />
                    <p className="font-bold">{visitor.extra.area}</p>
                  </div>
                  <div className="bg-gray-100 p-3 rounded-lg shadow-sm text-center">
                    <FaDollarSign className="text-[#1db5ba] text-xl mx-auto mb-1" />
                    <p className="font-bold">{visitor.extra.gdp}</p>
                  </div>
                </div>
              )}

              {visitor.extra?.direction && (
                <div className="mt-4">
                  <Link to="contacts" smooth={true} offset={-70} duration={500}>
                    <button className="group text-[#1db5ba] font-semibold hover:text-[#16878b] transition">
                      {visitor.extra.direction}
                      <span className="ml-1 inline-block transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Visits;
