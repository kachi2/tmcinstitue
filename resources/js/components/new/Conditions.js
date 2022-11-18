import React from 'react';
import ReactDOM  from 'react-dom';
export default function Conditions() {
  return (
    <div id="wrapper" className="horizontal">

<div className="container">

<div className="max-w-3xl mt-lg-11 mx-auto lg:p-10 p-5 tube-card">
    <div className="text-center mt-4 mb-6 lg:mt-10">
        <h1 className="font-semibold md:text-3xl text-xl text-center uk-heading-line"><span>Terms of Service</span></h1>
    </div>
    <article className="space-y-2 uk-article">
    <h4 className="font-medium pt-3 text-xl">Cookie</h4>
        <p className="text sm:text-sm md:lead lg:lead">Cookies are text files placed on your computer to collect standard internet log information and visitor behaviour information. This information is used to track visitor use of the website and to compile statistical reports on website activity. Our website takes advantage of this facility to enhance your experience. The cookies we use are described below.
You can choose to accept or decline cookies. Most web browsers automatically accept cookies, but you can modify your browser setting to decline cookies if you prefer. This may prevent you from taking full advantage of the website.
You can find more general information about cookies at www.allaboutcookies.org</p>

        <h4 className="font-medium pt-3 text-xl">Google Analytics cookies</h4>
        <p className="text sm:text-sm md:lead lg:lead ">            Technical information which included the IP Address used by the third party to connect the computer to the internet, login information, browser type and version, time zone setting, browser plug-in types and versions, operating system and platform.
Google Analytics is a website monitoring tool that allows users to see volumes of website visitors, their source, and to analyse how the content of their website is viewed and navigated. This in turn allows optimisation of the content and pages on www.agrc.org and the marketing programs that drive traffic to the website. Google Analytics does not store any personal information about website visitors but does use persistent cookies to identify repeat visitors. You may universally opt-out of all
 Google Analytics tracking used by all websites by visiting the following url https://tools.google.com/dlpage/gaoptout.
Email Marketing Post-Click Tracking Cookies
These cookies are used to report on the pages of www.tmcinstitute.com that have been viewed by visitors to the site who have followed links from our email marketing campaigns. This analysis helps us to understand additional content that is viewed by the contacts in our database and therefore allows us to improve and tailor future campaigns to those contact's specific areas of interest.
Targeting (re-targeting) Cookies
These cookies collect several pieces of information about your browsing habits. This is in order to provide you with targeted adverts more relevant to you and your interests. Cookies are usually placed by advertising networks. They remember that you have visited a website and this information is shared with other organisations or organisations we have asked to do so on our behalf.
Re-targeting cookies remember that you have visited our website and enable us to serve you with advertising when you are visiting other sites (for example to remind you of products and services you were interested in). Other retargeting cookies may remember terms that you have used on search engine queries so that we can serve you with advertising for products and services relevant to those search terms.
</p>
    </article>
</div>


</div>



        </div>
  )
}

if (document.getElementById('terms')) {
ReactDOM.render(<Conditions/>, document.getElementById('terms'));
}
