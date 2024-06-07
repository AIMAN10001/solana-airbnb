import { GlobeAmericasIcon } from "@heroicons/react/24/solid";

function Footer() {
  return (
    <div className="px-6 py-3 bg-[#072A2A] custom-shadow fixed bottom-0 left-0 right-0">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <p className="text-sm text-gray-300 font-light hidden md:flex">
            © 2022 SolStay, Inc.
          </p>
          <p className="text-sm text-gray-300 font-light">Privacy</p>
          <p className="text-sm text-gray-300 font-light">Terms</p>
          <p className="text-sm text-gray-300 font-light">Sitemap</p>
          <p className="text-sm text-gray-300 font-light">Destinations</p>
        </div>

        <div className="flex items-center space-x-4  md:space-x-6">
          <div className="flex items-center space-x-2 hidden md:flex">
            <GlobeAmericasIcon className="h-5 w-5 transition-all duration-300 text-gray-800" />
            <p className="text-sm text-gray-300 font-light">English (US)</p>
          </div>
          <div className="flex space-x-2">
            <p className="text-sm text-gray-300 font-light">RM</p>
            <p className="text-sm text-gray-300 font-light">MYR</p>
          </div>
          <div>
            <p className="text-sm text-gray-300 font-light hidden md:flex">
              Support & resources
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
