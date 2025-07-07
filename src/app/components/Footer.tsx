import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faGithub,
  faYoutube,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white px-6 py-12">
      <div className="max-w-6xl mx-auto flex flex-col gap-8">
        {/* TOP - 2 Column Layout */}
        <div className="flex flex-col md:flex-row justify-between gap-6">
          <div className="space-y-2 md:max-w-md">
            <p className="text-xl font-semibold">Feel free to contact me!</p>
            <p className="text-gray-300">
              Highly open to job opportunities, especially in technology, project management and digital innovation.
            </p>
          </div>
          <div className="text-right space-y-2">
            <p>
              <a href="mailto:dhiozahwan@gmail.com" className="text-blue-400 hover:underline">
                dhiozahwan@gmail.com
              </a>
            </p>
            <p>
              <a href="https://wa.me/6281281693654" target="_blank" className="text-green-400 hover:underline">
                +62 812-8169-3654
              </a>
            </p>
          </div>
        </div>

        {/* BOTTOM - Copyright + Icons + Links */}
        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-4">
          <p>© 2025. Dhio. All rights reserved.</p>

          {/* Social Icons */}
          <div className="flex gap-4 text-xl">
            <a href="https://instagram.com/dhio_zhwn" target="_blank" className="hover:text-pink-400">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://linkedin.com/in/dhio-zahwan-aryasetyo/" target="_blank" className="hover:text-blue-400">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://github.com/Faryuki" target="_blank" className="hover:text-white">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://www.youtube.com/@dhiodiohaw" target="_blank" className="hover:text-red-300">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
            <a href="https://wa.me/6281234567890" target="_blank" className="hover:text-green-400">
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
          </div>

          {/* Footer Links */}
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition">Terms</a>
            <a href="#" className="hover:text-white transition">Privacy</a>
            <a href="#" className="hover:text-white transition">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
