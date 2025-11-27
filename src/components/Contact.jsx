import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaWhatsapp,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section className="my-52">
      <ul className="space-y-4 text-2xl relative">
        <li className="relative h-7 w-5">
          <FaWhatsapp
            className="text-white absolute left-0 top-0
                   transition-all duration-200
                   hover:scale-150 hover:bg-white hover:text-black hover:rounded-full hover:p-1 hover:m-2 hover:translate-x-2 hover:-translate-y-1"
          />
        </li>
        <li className="relative h-7 w-5">
          <FaEnvelope
            className="text-white absolute left-0 top-0
                   transition-all duration-200
                   hover:scale-150 hover:bg-white hover:text-black hover:m-2 hover:rounded-full hover:p-1 hover:translate-x-2 hover:-translate-y-1"
          />
        </li>
        <li className="relative h-7 w-5">
          <FaFacebook
            className="text-white absolute left-0 top-0
                   transition-all duration-200
                   hover:scale-150 hover:bg-white hover:text-black hover:rounded-full hover:p-1 hover:m-2 hover:translate-x-2 hover:-translate-y-1"
          />
        </li>
        <li className="relative h-7 w-5">
          <FaInstagram
            className="text-white absolute left-0 top-0
                   transition-all duration-200
                   hover:scale-150 hover:bg-white hover:text-black hover:rounded-full hover:p-1 hover:m-2 hover:translate-x-2 hover:-translate-y-1"
          />
        </li>
        <li className="relative h-7 w-5">
          <FaGithub
            className="text-white absolute left-0 top-0
                   transition-all duration-200
                   hover:scale-150 hover:bg-white hover:text-black hover:rounded-full hover:p-1 hover:m-2 hover:translate-x-2 hover:-translate-y-1"
          />
        </li>
      </ul>
    </section>
  );
}
