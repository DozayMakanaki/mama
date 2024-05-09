import React from "react";

const Subscribe = () => {
  // WhatsApp group invite link
  const whatsappGroupLink = "https://chat.whatsapp.com/GxWPLIvwSCDKDpkAzPlkgl";

  return (
    <div className="mb-20 bg-gray-100 dark:bg-gray-800 text-white">
      <div className="container backdrop-blur-sm py-10">
        <div className="space-y-6 max-w-xl mx-auto">
          <h1 className="text-2xl !text-center sm:text-left text-gray-800 dark:text-gray-200 sm:text-4xl font-semibold">
            Join Our WhatsApp Group
          </h1>
          <p className="text-gray-800 dark:text-white text-center sm:text-left">
            Click the button below to join our WhatsApp group and stay updated
            with the latest news and announcements.
          </p>
          <a
            href={whatsappGroupLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded text-center"
          >
            Join WhatsApp Group
          </a>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
