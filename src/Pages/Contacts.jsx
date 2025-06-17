import React, { useState, useEffect } from "react"; // useEffect ni import qildik
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
import { useTranslation } from 'react-i18next';
import axios from "axios";
import headImage from "../assets/head.jpg";

function Contacts() {
  const [checkInDate, setCheckInDate] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [guests, setGuests] = useState("");
  const [destination, setDestination] = useState("");
  const [visaCountry, setVisaCountry] = useState("");
  const [message, setMessage] = useState("");
  const [submissionStatus, setSubmissionStatus] = useState(null); // 'success', 'error' yoki null
  const [submissionMessage, setSubmissionMessage] = useState(""); // Ko'rsatiladigan xabar
  const { t } = useTranslation();

  const botToken = '7762239130:AAEiSFLL8_AZXlxtLDc78LaEtqoCjpqoXmE'; // Sizning bot tokeningiz
  // !!! MUHIM: Bu yerga topgan CHAT ID'ingizni kiriting. !!!
  const chatId = 'YOUR_ACTUAL_CHAT_ID'; // MASALAN: '123456789' yoki '-1234567890'

  // Xabar avtomatik o'chishi uchun useEffect
  useEffect(() => {
    if (submissionStatus === 'success') {
      const timer = setTimeout(() => {
        setSubmissionStatus(null);
        setSubmissionMessage("");
      }, 5000); // 5 soniyadan keyin xabar o'chadi
      return () => clearTimeout(timer); // Komponent yopilganda timer tozalansin
    }
  }, [submissionStatus]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Avvalgi xabarni tozalash
    setSubmissionStatus(null);
    setSubmissionMessage("");

    // Majburiy maydonlarni tekshirish
    if (!name || !phone || !checkInDate || !destination) {
      setSubmissionStatus('error');
      setSubmissionMessage("Iltimos, barcha majburiy maydonlarni to'ldiring (Ism, Telefon, Kirish sanasi, Manzil).");
      return;
    }

    const telegramMessage = `
      <b>Yangi rezervatsiya so'rovi:</b>
      <b>Ism:</b> ${name}
      <b>Telefon:</b> ${phone}
      <b>Mehmonlar soni:</b> ${guests || 'Ko\'rsatilmagan'}
      <b>Kirish sanasi:</b> ${checkInDate}
      <b>Manzil:</b> ${destination}
      <b>Vizani talab qiluvchi mamlakat:</b> ${visaCountry || 'Ko\'rsatilmagan'}
      <b>Xabar:</b> ${message || 'Yo\'q'}
    `;

    try {
      const response = await axios.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        chat_id: chatId,
        text: telegramMessage,
        parse_mode: 'HTML'
      });
      
      console.log("Xabar muvaffaqiyatli yuborildi:", response.data);
      setSubmissionStatus('success');
      setSubmissionMessage("So'rovingiz muvaffaqiyatli yuborildi! Tez orada siz bilan bog'lanamiz.");

      // Formani tozalash
      setName("");
      setPhone("");
      setGuests("");
      setCheckInDate("");
      setDestination("");
      setVisaCountry("");
      setMessage("");

    } catch (error) {
      console.error("Xabar yuborishda xato yuz berdi:", error);
      setSubmissionStatus('error');
      if (error.response && error.response.data) {
        setSubmissionMessage(`Xabar yuborishda xato: ${error.response.data.description || 'Noma\'lum xato'}`);
      } else {
        setSubmissionMessage("Xabar yuborishda tarmoq muammosi yuz berdi. Iltimos, keyinroq urinib ko'ring.");
      }
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

          {/* Xabar ko'rsatish qismi */}
          {submissionStatus && (
            <div
              className={`p-3 rounded-lg text-white font-semibold text-center
                ${submissionStatus === 'success' ? 'bg-green-500' : 'bg-red-500'}
              `}
            >
              {submissionMessage}
            </div>
          )}

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