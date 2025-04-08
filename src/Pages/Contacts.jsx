import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
  faUser,
  faCalendarAlt,
  faUsers,
  faGlobe,
  faPassport,
} from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from 'react-i18next'; // i18n kutubxonasini import qilish
import axios from "axios"; // axios kutubxonasini import qilish
import headImage from "../assets/head.jpg";

function Contacts() {
  const [checkInDate, setCheckInDate] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [guests, setGuests] = useState("");
  const [destination, setDestination] = useState("");
  const [visaCountry, setVisaCountry] = useState("");
  const [message, setMessage] = useState(""); // Xabar uchun state
  const { t } = useTranslation(); // t() funktsiyasini ishlatish

  const botToken = '7762239130:AAEiSFLL8_AZXlxtLDc78LaEtqoCjpqoXmE'; // Telegram bot token
  const chatId = 'YOUR_CHAT_ID'; // Sizning chat IDingiz

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name,
      phone,
      guests,
      checkInDate,
      destination,
      visaCountry,
      message,
    };

    const telegramMessage = `
      Yangi rezervatsiya so'rovi:
      Ism: ${name}
      Telefon: ${phone}
      Mehmonlar soni: ${guests}
      Kirish sanasi: ${checkInDate}
      Manzil: ${destination}
      Vizani talab qiluvchi mamlakat: ${visaCountry}
      Xabar: ${message}
    `;

    try {
      // Telegram API orqali so'rov yuborish
      const response = await axios.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        chat_id: chatId,
        text: telegramMessage,
      });
      
      console.log("Xabar yuborildi:", response.data);
      // Xabar yuborilgandan so'ng, foydalanuvchiga bildirish
      alert("Xabar muvaffaqiyatli yuborildi!");
    } catch (error) {
      console.error("Xabar yuborishda xato:", error);
      alert("Xabar yuborishda xato yuz berdi.");
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center py-20"
      style={{ backgroundImage: `url(${headImage})` }}
    >
      {/* Upper Section */}
      <div className="text-center text-white mb-16">
        <h1 className="text-4xl font-bold">{t("BookPreferredDeal")}</h1>
        <h2 className="text-2xl mt-4">{t("MakeReservation")}</h2>
        <button className="mt-6 px-6 py-3 bg-white text-[#1db5ba] rounded-3xl text-lg hover:bg-[#1db5ba] hover:text-white transition">
          {t("DiscoverMore")}
        </button>
      </div>

      {/* Contact Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-20 mb-20">
        <div className="bg-[#1db5ba] text-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center">
          <FontAwesomeIcon icon={faPhone} className="text-3xl mb-4" />
          <h3 className="text-xl font-semibold mb-2">{t("MakePhoneCall")}</h3>
          <p className="text-lg">
            <a href="tel:+998992999996">+998 99 299 99 96</a>
          </p>
        </div>
        <div className="bg-[#1db5ba] text-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center">
          <FontAwesomeIcon icon={faEnvelope} className="text-3xl mb-4" />
          <h3 className="text-xl font-semibold mb-2">{t("ContactUsViaEmail")}</h3>
          <p className="text-lg">
            <a href="mailto:zamonbiznestour@mail.ru">zamonbiznestour@mail.ru</a>
          </p>
        </div>
        <div className="bg-[#1db5ba] text-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="text-3xl mb-4" />
          <h3 className="text-xl font-semibold mb-2">{t("VisitOurOffices")}</h3>
          <p className="text-lg">5/25, Chilanzar - 9, Tashkent city</p>
        </div>
      </div>

      {/* Google Map & Reservation Form */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-6 md:px-20 items-start">
        {/* Google Map */}
        <div className="w-full h-96 rounded-xl overflow-hidden shadow-lg">
          <iframe
            title="Fonon Map"
            src="https://www.google.com/maps/embed?pb=..." // Google Maps embed kodini qo'yish
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        {/* Reservation Form */}
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-lg space-y-4">
          <h3 className="text-2xl text-[#1db5ba] font-semibold mb-4">
            {t("MakeReservationThroughForm")}
          </h3>

          <div className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faUser} className="text-[#1db5ba]" />
            <input
              type="text"
              placeholder={t("YourName")}
              className="w-full p-2 border border-[#1db5ba] rounded"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faPhone} className="text-[#1db5ba]" />
            <input
              type="text"
              placeholder={t("YourPhoneNumber")}
              className="w-full p-2 border border-[#1db5ba] rounded"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faUsers} className="text-[#1db5ba]" />
            <select
              className="w-full p-2 border border-[#1db5ba] rounded"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
            >
              <option value="">{t("NumberOfGuests")}</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>

          <div className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faCalendarAlt} className="text-[#1db5ba]" />
            <input
              type="date"
              value={checkInDate}
              onChange={(e) => setCheckInDate(e.target.value)}
              className="w-full p-2 border border-[#1db5ba] rounded"
            />
          </div>

          <div className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faGlobe} className="text-[#1db5ba]" />
            <select
              className="w-full p-2 border border-[#1db5ba] rounded"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            >
              <option value="">{t("ChooseDestination")}</option>
              <option value="Antalya">Antalya</option>
              <option value="Dubai">Dubai</option>
              <option value="Istanbul">Istanbul</option>
              <option value="Tashkent">Tashkent</option>
              <option value="Bukhara">Bukhara</option>
              <option value="Samarkand">Samarkand</option>
            </select>
          </div>

          <div className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faPassport} className="text-[#1db5ba]" />
            <select
              className="w-full p-2 border border-[#1db5ba] rounded"
              value={visaCountry}
              onChange={(e) => setVisaCountry(e.target.value)}
            >
              <option value="">{t("ChooseVisaCountry")}</option>
              <option value="Uzbekistan">Uzbekistan</option>
              <option value="Kazakhstan">Kazakhstan</option>
              <option value="Turkey">Turkey</option>
            </select>
          </div>

          <div className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faEnvelope} className="text-[#1db5ba]" />
            <textarea
              placeholder={t("YourMessage")}
              className="w-full p-2 border border-[#1db5ba] rounded"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full mt-4 bg-[#1db5ba] hover:bg-[#159a9e] text-white py-2 rounded-3xl font-semibold transition"
          >
            {t("MakeReservationNow")}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contacts;
