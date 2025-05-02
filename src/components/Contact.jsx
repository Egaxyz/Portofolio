import { FaEnvelope, FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="my-12">
      <h2 className="text-2xl font-semibold text-white mb-4">Contact</h2>
      <ul className="space-y-2">
        <li className="flex items-center gap-2 text-white">
          <FaEnvelope className="" />
          <p className="text-cyan-400">egagunawannovaldi@gmail.com</p>
        </li>
        <li className="flex items-center gap-2 text-white">
          <FaFacebook className="" />
          <a
            href="https://facebook.com/ezio.joestarii"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-300 hover:underline hover:text-white"
          >
            facebook.com/Ezio Joestar II
          </a>
        </li>
        <li className="flex items-center gap-2 text-white">
          <FaInstagram className="" />
          <a
            href="https://www.instagram.com/ezegn13/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-300 hover:underline hover:text-white"
          >
            instagram.com/ezegn13
          </a>
        </li>
        <li className="flex items-center gap-2 text-white">
          <FaGithub className="" />
          <a
            href="https://github.com/Egaxyz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-300 hover:underline hover:text-white"
          >
            github.com/EgaXYZ
          </a>
        </li>
      </ul>
    </section>
  );
}
