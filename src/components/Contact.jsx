import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaWhatsapp,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section className="my-32 sm:my-52">
      <ul className="space-y-3 sm:space-y-4 text-xl sm:text-2xl relative">
        <li className="relative h-6 w-5 sm:h-7 sm:w-5">
          <a href="https://wa.me/+6285806428673" target="_blank">
            <FaWhatsapp
              className="text-white absolute left-0 top-0
              transition-all duration-200
              hover:scale-150 hover:bg-white hover:text-black hover:rounded-full
              hover:p-1 hover:m-2 hover:translate-x-2 hover:-translate-y-1"
            />
          </a>
        </li>

        <li className="relative h-6 w-5 sm:h-7 sm:w-5">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=egagunawannovaldi@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope
              className="text-white absolute left-0 top-0
              transition-all duration-200
              hover:scale-150 hover:bg-white hover:text-black hover:rounded-full
              hover:p-1 hover:m-2 hover:translate-x-2 hover:-translate-y-1"
            />
          </a>
        </li>

        <li className="relative h-6 w-5 sm:h-7 sm:w-5">
          <a href="https://www.facebook.com/ezio.joestarii" target="_blank">
            <FaFacebook
              className="text-white absolute left-0 top-0
              transition-all duration-200
              hover:scale-150 hover:bg-white hover:text-black hover:rounded-full
              hover:p-1 hover:m-2 hover:translate-x-2 hover:-translate-y-1"
            />
          </a>
        </li>

        <li className="relative h-6 w-5 sm:h-7 sm:w-5">
          <a href="https://www.instagram.com/noval_gunz/" target="_blank">
            <FaInstagram
              className="text-white absolute left-0 top-0
              transition-all duration-200
              hover:scale-150 hover:bg-white hover:text-black hover:rounded-full
              hover:p-1 hover:m-2 hover:translate-x-2 hover:-translate-y-1"
            />
          </a>
        </li>

        <li className="relative h-6 w-5 sm:h-7 sm:w-5">
          <a href="https://github.com/Egaxyz" target="_blank">
            <FaGithub
              className="text-white absolute left-0 top-0
              transition-all duration-200
              hover:scale-150 hover:bg-white hover:text-black hover:rounded-full
              hover:p-1 hover:m-2 hover:translate-x-2 hover:-translate-y-1"
            />
          </a>
        </li>
      </ul>
    </section>
  );
}
