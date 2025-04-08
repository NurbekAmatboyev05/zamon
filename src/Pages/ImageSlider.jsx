import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExpand } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next'; // i18n ni import qilish
import r1 from "../assets/dubai2.jpg";
import r2 from "../assets/sharm.jpg";
import r3 from "../assets/istanbul3.jpg";

function ImageCarouselWithModal() {
  const [expandedImage, setExpandedImage] = useState(null);
  const { t } = useTranslation(); // t() funktsiyasi orqali tarjima olish

  const destinations = [
    {
      name: 'Dubai',
      population: '3.14 million',
      image: r1,
    },
    {
      name: 'Antalya',
      population: '3.5 million',
      image: r3,
    },
    {
      name: 'Istanbul',
      population: '15.46 million',
      image: r2,
    },
    {
      name: 'Baku',
      population: '2.3 million',
      image: r1,
    },
  ];

  const handleImageClick = (image) => {
    if (expandedImage === image) {
      setExpandedImage(null); // Agar tasvir yana bosilsa, uni kichik qilish
    } else {
      setExpandedImage(image); // Rasmni kattalashtirish
    }
  };

  return (
    <div className="flex justify-center items-center space-x-4 pt-20 pb-15">
      {destinations.map((destination, index) => (
        <div
          key={index}
          className="relative rounded-3xl overflow-hidden shadow-lg w-64 md:w-80 lg:w-96 cursor-pointer"
        >
          {/* Kattalashadigan rasm */}
          <img
            src={destination.image}
            alt={destination.name}
            className={`object-cover w-full ${expandedImage === destination.image ? 'h-96' : 'h-48'} transition-all duration-300 ease-in-out`} 
            onClick={() => handleImageClick(destination.image)} // Rasmni bosish orqali kattalashtirish
          />
          <div className="absolute bottom-0 left-0 bg-white/75 backdrop-blur-sm text-gray-800 p-4 w-full">
            <h2 className="text-xl font-semibold">{destination.name}</h2>
            <p className="text-sm">{t("Population")}: {destination.population}</p> {/* i18n tarjima */}
          </div>
          <button
            className="absolute bottom-2 right-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={(e) => {
              e.stopPropagation(); // Tugma bosilganda rasmni kattalashtirish
              handleImageClick(destination.image); // Tugma bilan kattalashtirish
            }}
          >
            <FontAwesomeIcon icon={faExpand} />
          </button>
        </div>
      ))}
    </div>
  );
}

export default ImageCarouselWithModal;
