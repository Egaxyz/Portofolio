import { useState } from "react";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

export default function Contact() {
  const [open] = useState(false);

  return (
    <section className="sm:my-52 my-5">
      <div className="sm:hidden">
        {/* <button onClick={() => setOpen(!open)} className="text-xl p-1">
          {open ? <FaTimes /> : <FaBars />}
        </button> */}
      </div>

      <ul
        className={`
          ${open ? "block" : "hidden"} 
          sm:block 
          space-y-3 
          text-lg sm:text-2xl 
          relative
          p-2
          dark:bg-transparent
          bg-slate-500
          rounded-xl
        `}
      >
        <li className="relative h-5 w-5 sm:h-7 sm:w-5">
          <a href="https://wa.me/+6285806428673" target="blank">
            <FaWhatsapp className="text-green-500 absolute hover:bg-white hover:rounded-full " />
          </a>
        </li>

        {/* Email */}
        <li className="relative h-5 w-5 sm:h-7 sm:w-5">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=egagunawannovaldi@gmail.com"
            target="blank"
          >
            <FaEnvelope className="text-white absolute hover:bg-black dark:hover:text-black " />
          </a>
        </li>

        {/* Facebook */}
        <li className="relative h-5 w-5 sm:h-7 sm:w-5">
          <a href="https://www.facebook.com/ezio.joestarii" target="blank">
            <FaFacebook className="absolute text-blue-600 hover:bg-white hover:rounded-full " />
          </a>
        </li>

        {/* Instagram */}
        <li className="relative h-5 w-5 sm:h-7 sm:w-5">
          <a href="https://www.instagram.com/noval_gunz/" target="blank">
            <FaInstagram className="absolute text-red-400 hover:bg-white hover:rounded-full " />
          </a>
        </li>
      </ul>
    </section>
  );
}
