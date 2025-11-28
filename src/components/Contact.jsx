import { useState } from "react";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaWhatsapp,
  FaBars,
  FaTimes,
} from "react-icons/fa";

export default function Contact() {
  const [open, setOpen] = useState(false);

  return (
    <section className="sm:my-52 my-5 ml-1">
      {/* === MOBILE BURGER MENU (kecil & tanpa jarak) === */}
      <div className="sm:hidden">
        <button
          onClick={() => setOpen(!open)}
          className="text-white text-xl p-1" // lebih kecil & lebih rapat
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* === CONTACT LIST === */}
      <ul
        className={`
          ${open ? "block" : "hidden"} 
          sm:block 
          space-y-3 
          text-lg sm:text-2xl 
          relative
          ml-1
        `}
      >
        {/* WhatsApp */}
        <li className="relative h-5 w-5 sm:h-7 sm:w-5">
          <a href="https://wa.me/+6285806428673" target="_blank">
            <FaWhatsapp className="text-white absolute left-0 top-0 transition-all duration-200 hover:scale-150 hover:bg-white hover:text-black hover:rounded-full hover:p-1 hover:m-1 hover:translate-x-2 hover:-translate-y-1" />
          </a>
        </li>

        {/* Email */}
        <li className="relative h-5 w-5 sm:h-7 sm:w-5">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=egagunawannovaldi@gmail.com"
            target="_blank"
          >
            <FaEnvelope className="text-white absolute left-0 top-0 transition-all duration-200 hover:scale-150 hover:bg-white hover:text-black hover:rounded-full hover:p-1 hover:m-2 hover:translate-x-2 hover:-translate-y-1" />
          </a>
        </li>

        {/* Facebook */}
        <li className="relative h-5 w-5 sm:h-7 sm:w-5">
          <a href="https://www.facebook.com/ezio.joestarii" target="_blank">
            <FaFacebook className="text-white absolute left-0 top-0 transition-all duration-200 hover:scale-150 hover:bg-white hover:text-black hover:rounded-full hover:p-1 hover:m-2 hover:translate-x-2 hover:-translate-y-1" />
          </a>
        </li>

        {/* Instagram */}
        <li className="relative h-5 w-5 sm:h-7 sm:w-5">
          <a href="https://www.instagram.com/noval_gunz/" target="_blank">
            <FaInstagram className="text-white absolute left-0 top-0 transition-all duration-200 hover:scale-150 hover:bg-white hover:text-black hover:rounded-full hover:p-1 hover:m-2 hover:translate-x-2 hover:-translate-y-1" />
          </a>
        </li>

        {/* GitHub */}
        <li className="relative h-5 w-5 sm:h-7 sm:w-5">
          <a href="https://github.com/Egaxyz" target="_blank">
            <FaGithub className="text-white absolute left-0 top-0 transition-all duration-200 hover:scale-150 hover:bg-white hover:text-black hover:rounded-full hover:p-1 hover:m-2 hover:translate-x-2 hover:-translate-y-1" />
          </a>
        </li>
      </ul>
    </section>
  );
}
