import React from 'react';

const Contact = () => { 
    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform validation or handle form submission
      };



  return (
    <section id='contact' className="w-full h-auto px-6 py-12 bg-gray-100 text-gray-800">
      {/* Contacts and Form Section */}
      <div className="flex flex-col md:flex-row justify-between items-start w-full space-y-6 md:space-y-0">
        {/* Contact Info */}
        <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-700 mb-4">Get in Touch</h2>
          <ul className="space-y-3">
            <li className="text-gray-600">
              <span className="font-semibold text-gray-800">Address:</span> 33 Some Street, Your City
            </li>
            <li className="text-gray-600">
              <span className="font-semibold text-gray-800">Phone:</span> +1 300-483-084
            </li>
            <li className="text-gray-600">
              <span className="font-semibold text-gray-800">Email:</span> brigid@example.com
            </li>
            <li className="text-gray-600">
              <span className="font-semibold text-gray-800">WhatsApp:</span> +1 300-483-084
            </li>
            <li className="text-gray-600">
              <span className="font-semibold text-gray-800">Telegram:</span> @brigidUsername
            </li>
          </ul>
        </div>

        {/* Contact Form */}
        <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-700 mb-4">Send a Message</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
  <div>
    <label htmlFor="name" className="block text-sm font-medium text-gray-600">
      Your Name
    </label>
    <input
      type="text"
      id="name"
      className="w-full p-2 mt-1 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
      placeholder="Enter your name"
      required
    />
  </div>
  <div>
    <label htmlFor="email" className="block text-sm font-medium text-gray-600">
      Your Email
    </label>
    <input
      type="email"
      id="email"
      className="w-full p-2 mt-1 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
      placeholder="Enter your email"
      required
    />
  </div>
  <div>
    <label htmlFor="message" className="block text-sm font-medium text-gray-600">
      Your Message
    </label>
    <textarea
      id="message"
      rows="4"
      className="w-full p-2 mt-1 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
      placeholder="Write your message here"
      required
    ></textarea>
  </div>
  <button
    type="submit"
    className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
  >
    Send Message
  </button>
</form>
        </div>
      </div>

      {/* Map Section */}
      <div className="w-full h-64 mt-12 rounded-lg overflow-hidden shadow-md">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d25870.760396423477!2d36.75777355042763!3d-1.348387453432268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1snairobi%20park%20safari%20walk!5e0!3m2!1sen!2ske!4v1732483322532!5m2!1sen!2ske"
          width="100%"
          height="100%"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
        
      </div>
    </section>
  );
};

export default Contact;
