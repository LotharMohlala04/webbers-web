import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
      
      // Hide success message after 3 seconds
      setTimeout(() => setShowSuccess(false), 3000);
    }, 1000);
  };

  return (
    <div className=" bg-gray-100">
      <main className="mx-auto max-w-7xl sm:px-6 sm:py-8 lg:px-8">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Contact Us
        </h1>
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-light text-red-500 mb-4" style={{ fontStyle: 'italic' }}>
          Write Us
        </h2>
        <p className="text-gray-700 text-lg">
          Jot us a note and we'll get back to you as quickly as possible.
        </p>
      </div>

      {/* Success Message */}
      {showSuccess && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-md">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-green-800">
                Message sent successfully! We'll get back to you soon.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Form Container */}
      <div className="space-y-6">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-3 py-3 border border-gray-300 bg-white rounded-none shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors duration-200"
            placeholder="Enter your full name"
          />
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-3 py-3 border border-gray-300 bg-white rounded-none shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors duration-200"
            placeholder="Enter your email address"
          />
        </div>

        {/* Phone Field */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-3 py-3 border border-gray-300 bg-white rounded-none shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors duration-200"
            placeholder="Enter your phone number"
          />
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            What's on your mind?
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-3 py-3 border border-gray-300 bg-white rounded-none shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 resize-vertical transition-colors duration-200"
            placeholder="Tell us what you're thinking about..."
          />
        </div>

        {/* reCAPTCHA Placeholder */}
        <div className="flex items-center">
          <div className="bg-gray-100 border border-gray-300 p-4 flex items-center space-x-3 w-fit">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="recaptcha"
                className="h-6 w-6 text-blue-600 focus:ring-blue-500 border-gray-300 rounded cursor-pointer"
                required
              />
            </div>
            <div className="flex-1">
              <span className="text-sm text-gray-700">I'm not a robot</span>
            </div>
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-xs text-gray-500 -mt-2">
          <span className="text-blue-600 cursor-pointer hover:underline">Privacy</span> - <span className="text-blue-600 cursor-pointer hover:underline">Terms</span>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="button"
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="bg-red-600 hover:bg-red-700 disabled:bg-red-400 text-white font-medium py-3 px-8 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <div className="flex items-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Submitting...
              </div>
            ) : (
              'Submit'
            )}
          </button>
        </div>
      </div>
</main>
    </div>
  );
};

export default Contact;