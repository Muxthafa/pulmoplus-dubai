import React from "react";

const ContactDetails = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-[#005b99] mb-6">Get In Touch</h2>
      <div className="h-1 w-20 bg-[#3bbfab] mb-8"></div>
      <div className="space-y-6">
        <Detail icon="map-marker-alt" title="Our Location">
          Port Saeed, Deira, Dubai, United Arab Emirates
        </Detail>
        <Detail icon="phone" title="Phone Number">
          +971 544479123
        </Detail>
        <Detail icon="envelope" title="Email Address">
          
pulmoplus11@gmail.com
        </Detail>
        <Detail icon="clock" title="Working Hours">
          Open 24/7 – Always Here for You
        </Detail>
      </div>
    </div>
  );
};

function Detail({ icon, title, children }) {
  return (
    <div className="flex items-start space-x-4">
      <div className="text-[#0077cb] mt-1">
        <i className={`fas fa-${icon} text-2xl`}></i>
      </div>
      <div>
        <h3 className="text-xl font-semibold text-[#005b99] mb-2">{title}</h3>
        <p className="text-gray-700">{children}</p>
      </div>
    </div>
  );
}


export default ContactDetails;
