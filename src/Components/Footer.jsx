import React from "react";
import fimg from "../assets/cta-bg.jpg";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next"; // i18n kutubxonasini import qilish

function Footer() {
  const { t } = useTranslation(); // t() funksiyasini ishlatish

  return (
    <div
      className="px-6 py-16 bg-cover bg-center"
      style={{ backgroundImage: `url(${fimg})` }}
    >
      {/* Upper Call to Action Section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-10">
        <div className="text-white text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-extrabold pb-3">
            {t("AreYouLookingToTravel")}
          </h1>
          <p className="text-lg md:text-2xl font-bold bg-[#1db5ba] inline-block px-4 py-2 mt-4 rounded-full">
            {t("MakeReservationText")}
          </p>
        </div>
        <div>
          <Link to="contacts" smooth={true} offset={-70} duration={500}>
            <button className="mt-6 md:mt-0 text-white rounded-3xl bg-[#1db5ba] px-6 py-3 text-lg border-2 border-transparent hover:bg-white hover:text-[#1db5ba] hover:border-[#1db5ba] transition">
              {t("BookYoursNow")}
            </button>
          </Link>
        </div>
      </div>

      {/* Bottom Copyright Section */}
      <p className="text-center text-white text-sm md:text-base mt-10">
        {t("CopyrightText")}{" "}
        <Link to="home" smooth={true} offset={-70} duration={500}>
          <a href="#" className="underline hover:text-[#1db5ba] transition">
            Zamon Business Tour
          </a>
        </Link>
        .
      </p>
    </div>
  );
}

export default Footer;
