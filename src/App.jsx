import { useState, useEffect } from "react";

import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, SocialMedia, Educations } from "./components";


const App = () => {

  const [showCookieBanner, setShowCookieBanner] = useState(true);
  const [cookieAccepted, setCookieAccepted] = useState(false);





  const handleAcceptCookie = () => {
    setShowCookieBanner(false);
    setCookieAccepted(true);
    if (!document.getElementById("gtm-script")) {
      // Create script tag for Google Tag Manager
      const scriptTag = document.createElement("script");
      scriptTag.async = true;
      scriptTag.src = "https://www.googletagmanager.com/gtag/js?id=G-16H980HVPC";
      scriptTag.id = "gtm-script"; // Add an ID to prevent multiple insertions

      // Insert the script tag into the <head>
      document.head.appendChild(scriptTag);

      // Initialize the data layer and configure GTM after the script is loaded
      scriptTag.onload = () => {
        window.dataLayer = window.dataLayer || [];
        function gtag() {
          dataLayer.push(arguments);
        }
        gtag('js', new Date());
        gtag('config', 'G-16H980HVPC');
      };
    }
  }

  const handleDeclineCookie = () => {
    setShowCookieBanner(false);
    setCookieAccepted(false);
  }

  useEffect(() => {
    const cookie = document.cookie.split(';').find(cookie => cookie.includes('cookieAccepted'));
    if (cookie) {
      setCookieAccepted(true);
      setShowCookieBanner(false);
    }
    if (cookieAccepted) {
      document.cookie = "cookieAccepted=true; max-age=31536000; path=/";
    }
  })


  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Educations />
        <Experience />
        <Tech />
        <Works />
        <SocialMedia />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
      <div>
        {/** Add cookie banner */}
        {showCookieBanner && !cookieAccepted &&
          < div id='cookie-banner' className='fixed bottom-0 w-full bg-primary text-white text-center p-2'>

            <p className='text-sm m-2'
              style={{ display: "inline-block", borderBottom: "1px solid white" }}
            >We use cookies to ensure you get the best experience on our website.</p>
            <button className="bg-red-400 mx-4 my-2 text-white px-4 py-2 rounded-md" onClick={() => { handleDeclineCookie() }}>Decline</button>
            <button className="bg-green-500 mx-4 my-2 text-white px-4 py-2 rounded-md" onClick={() => { handleAcceptCookie() }}>Accept</button>
          </div>
        }
      </div>
    </BrowserRouter >
  );
}

export default App;
