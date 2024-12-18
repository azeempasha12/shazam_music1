import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Logo and Language Section */}
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <img
              src="https://play-lh.googleusercontent.com/mwTU9-4NX-_QlATb6lILSinKI47wAtOM38GjPYRPQSsQOG2hVRY4h9OfEhDxpf8ADQ"
              alt="Logo"
              className="h-8 w-8"
            />
            <span className="text-2xl font-bold">Shazam</span>
          </div>
          <label htmlFor="language-select" className="block mb-2 text-sm">
            Select Language:
          </label>
          <select
            id="language-select"
            className="bg-gray-800 text-white border border-gray-600 rounded p-2"
          >
            <option value="en">English (US)</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
          </select>
        </div>

        {/* App Links */}
        <div>
          <p className="font-bold mb-4">Get the App</p>
          <div className="flex flex-wrap space-x-2 space-y-2">
            <a className="block">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/512px-Google_Play_Store_badge_EN.svg.png"
                alt="Google Play"
                className="h-10"
              />
            </a>
            <a className="block">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/App_Store_%28iOS%29.svg/512px-App_Store_%28iOS%29.svg.png"
                alt="App Store"
                className="h-10"
              />
            </a>
            <a className="block">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Google_Chrome_icon_%28February_2022%29.svg/1200px-Google_Chrome_icon_%28February_2022%29.svg.png"
                alt="Chrome Web Store"
                className="h-10"
              />
            </a>
            <a className="block">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/c/c2/Galaxy_store_logo.png"
                alt="Galaxy Store"
                className="h-10"
              />
            </a>
          </div>
        </div>

        {/* Company Links */}
        <div>
          <p className="font-bold mb-4">Company</p>
          <ul className="space-y-2">
            <li>
              <a className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a className="hover:underline">
                Apps
              </a>
            </li>
            <li>
              <a className="hover:underline">
                Careers
              </a>
            </li>
            <li>
              <a className="hover:underline">
                Help for Apple Devices
              </a>
            </li>
            <li>
              <a className="hover:underline">
                Help for Android Devices
              </a>
            </li>
            <li>
              <a  className="hover:underline">
                ShazamKit for Developers
              </a>
            </li>
          </ul>
        </div>

        {/* Legal Links */}
        <div>
          <p className="font-bold mb-4">Legal</p>
          <ul className="space-y-2">
            <li>
              <a className="hover:underline">
                Terms
              </a>
            </li>
            <li>
              <a className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a className="hover:underline">
                Manage Your Data
              </a>
            </li>
            <li>
              <a className="hover:underline">
                My Library
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-800 pt-4 flex flex-col md:flex-row items-center justify-between">

        {/* Copyright */}
        <p className="text-gray-500 text-sm text-center">
          © Copyright 2024 Apple Inc. and its affiliates &middot;{' '}
          <a className="hover:underline">
            Supplier Responsibility
          </a>
        </p>
      </div>
    </footer>
  );
}
