import React from 'react';
import { Link } from "react-scroll";
import rasm from '../assets/airplane.jpg';
import imgs from '../assets/head.jpg';
import { useTranslation } from 'react-i18next';

function Tours() {
  const { t } = useTranslation();

  const tours = [
    {
      img: imgs,
      title: t('cheap_railway_tickets'), // Tarjimani chaqirish
      location: t('whole_world'), // Tarjimani chaqirish
      description:
        t('railway_adventure_description'), // Tarjimani chaqirish
    },
    {
      img: rasm,
      title: t('fly_around_the_world'), // Tarjimani chaqirish
      location: t('global_access'), // Tarjimani chaqirish
      description:
        t('flight_deals_description'), // Tarjimani chaqirish
    },
  ];

  return (
    <div className="pt-12 px-4 md:px-8 lg:px-24">
      <h1 className="text-3xl font-extrabold pb-6 ">
        {t('explore_destinations')}
      </h1>
      <p className=" text-gray-600 mb-10">
        {t('find_best_deals')}
      </p>

      <div className="space-y-12">
        {tours.map((tour, index) => (
          <div
            key={index}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center"
          >
            <img
              src={tour.img}
              alt="Tour"
              className="w-full h-60 object-cover rounded-xl shadow-md"
            />
            <div>
              <h2 className="text-2xl font-semibold mb-1">{tour.title}</h2>
              <p className="text-[#1db5ba] font-medium mb-4">{tour.location}</p>
              <p className="text-gray-600 mb-6">{tour.description}</p>
              <Link
                to="contacts" // Bu kontakti bo'limiga siljitadi
                smooth={true}
                offset={-70} // Boshliqlarni chog'ishtirish uchun ofsetni sozlashingiz mumkin
                duration={500}>
                  <button className="bg-[#1db5ba] hover:bg-[#16878b] text-white font-bold py-2 px-6 rounded">
                    {t('explore_more')}  {/* Tarjimani chaqirish */}
                  </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tours;
