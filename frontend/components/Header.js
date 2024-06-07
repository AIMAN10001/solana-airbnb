import {
  GlobeAmericasIcon,
  Bars3Icon,
  UserCircleIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import Image from "next/image";
import { truncate } from "../utils/string";
require("@solana/wallet-adapter-react-ui/styles.css");

function Header({
  connected,
  publicKey,
  initializeUser,
  initialized,
  transactionPending,
}) {
  return (
    <header className="sticky top-0 transition-all md:grid md:grid-cols-3 items-center px-10 xl:px-20 py-4 z-50 bg-[#072A2A] custom-shadow">
      {/* Logo and Wallet Button Container */}
      <div className="flex items-center justify-between md:justify-start space-x-4">
        {/* Mobile Logo */}
        <div className="relative w-16 h-16 xl:hidden">
          <Image
            src="/solstay1.png"
            alt="Mobile Logo"
            layout="fill"
            objectFit="contain"
            className="transition-all duration-300"
          />
        </div>

        {/* Large Screen Logo */}
        <div className="relative hidden xl:flex w-[130px] h-[40px]">
          <Image
            src="/solstay.png"
            alt="Desktop Logo"
            layout="fill"
            objectFit="contain"
            className="transition-all duration-300"
          />
        </div>

        {/* Wallet Button (Visible on all screens) */}
        <div className="flex items-center space-x-2">
          <WalletMultiButton
            className="phantom-button"
            startIcon={
              <UserCircleIcon
                style={{ height: 32, width: 32, color: "#4dc0c2" }}
              />
            }
          >
            <span className="text-sm font-medium text-[#4dc0c2]">
              {connected ? truncate(publicKey.toString()) : "Connect Wallet"}
            </span>
          </WalletMultiButton>

          {/* Initialize Button (Visible on mobile only) */}
          {!initialized && (
            <button
              type="button"
              className="border-2 border-[#116466] cursor-pointer hover:bg-[#116466] hover:text-gray-200 text-[#4dc0c2] rounded-lg px-3 py-2 md:hidden"
              onClick={() => initializeUser()}
              disabled={transactionPending}
            >
              Initialize
            </button>
          )}
        </div>
      </div>

      {/* Search Bar (Visible on larger screens) */}
      <div className="flex-1 flex hidden md:flex xl:justify-center px-6 transition-all duration-300">
        <button className="flex-1 flex items-center justify-between border-2 border-[#116466] rounded-full p-2 w-[300px] shadow-sm hover:shadow-md transition-all">
          <div className="flex items-center divide-x">
            <p className="text-gray-200 bg-transparent text-sm font-medium px-4">
              Anywhere
            </p>
            <p className="text-gray-200 bg-transparent text-sm font-medium px-4">
              Any week
            </p>
            <p className="text-gray-300 bg-transparent text-sm font-light px-4">
              Add guests
            </p>
          </div>
          <MagnifyingGlassIcon className="h-8 w-8 bg-[#116466] text-gray-200 stroke-[3.5px] p-2 rounded-full" />
        </button>
      </div>

      {/* Extra Links (Visible on larger screens) */}
      <div className="flex gap-3 items-center justify-end">
        <div className="border-2 flex hidden md:flex border-[#116466] cursor-pointer hover:bg-[#116466] hover:text-gray-200 transition duration-300 text-[#4dc0c2] rounded-lg px-3 py-2">
          <a className="text-sm font-bold transition-all duration-300" href="#">
            Become a Host
          </a>
        </div>

        <div className="border-2 flex hidden md:flex border-[#116466] cursor-pointer hover:bg-[#116466] transition duration-300 hover:text-gray-200 text-[#4dc0c2] rounded-full p-2">
          <GlobeAmericasIcon className="h-6 w-6 transition-all duration-300" />
        </div>
      </div>
    </header>
  );
}

export default Header;
