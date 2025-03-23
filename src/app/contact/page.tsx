'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success?: boolean;
    message?: string;
  }>({});
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulating form submission
    // In a real application, you would send this data to a backend API
    setTimeout(() => {
      setSubmitStatus({
        success: true,
        message: 'Thank you for your message! I will get back to you as soon as possible.'
      });
      setIsSubmitting(false);
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus({});
      }, 5000);
    }, 1500);
  };
  
  return (
    <div className="min-h-screen py-20">
      <div className="container max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-primary mb-12 text-center">
          Contact Me
        </h1>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="md:flex">
            {/* Contact Information */}
            <div className="md:w-1/3 bg-primary text-white p-8">
              <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Email</h3>
                  <p className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href="mailto:20mcpc02@uohyd.ac.in" className="hover:underline">
                      20mcpc02@uohyd.ac.in
                    </a>
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">Location</h3>
                  <p className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    School of Computer and Information Sciences<br />
                    University of Hyderabad<br />
                    Hyderabad, India
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">Connect</h3>
                  <div className="flex space-x-4">
                    <a 
                      href="https://www.linkedin.com/in/mohsinfurkh/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white hover:text-gray-200"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                      </svg>
                    </a>
                    <a 
                      href="https://github.com/mohsinfurkh" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white hover:text-gray-200"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                    <a 
                      href="https://scholar.google.com/citations?user=DGm9l2wAAAAJ&hl=en" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white hover:text-gray-200"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z"/>
                      </svg>
                    </a>
                    <a 
                      href="https://www.researchgate.net/profile/Mohsin-Furkh" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white hover:text-gray-200"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path d="M19.586 0H4.414C1.973 0 0 1.973 0 4.414v15.172C0 22.027 1.973 24 4.414 24h15.172C22.027 24 24 22.027 24 19.586V4.414C24 1.973 22.027 0 19.586 0zM13.662 14.292v-3.586h1.253c.611 0 1.106.498 1.106 1.112v1.362c0 .613-.495 1.112-1.106 1.112h-1.253zm-7.246.448h3.586v-1.25h-1.245v-2.013h1.25V10.23h-1.25V8.217h1.245V6.966H6.416v7.774zm11.85-1.692c0 1.225-1.007 2.229-2.236 2.229h-2.961V10.23h1.248v3.586h1.713c.289 0 .53-.238.53-.53v-3.056h1.236v2.818h.47zm-8.428-5.997v4.99h1.255v-4.99h-1.255z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="text-lg font-semibold mb-2">Office Hours</h3>
                <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                <p>Or by appointment</p>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="md:w-2/3 p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Send a Message</h2>
              
              {submitStatus.success ? (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                  {submitStatus.message}
                </div>
              ) : null}
              
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  >
                    <option value="">Please select</option>
                    <option value="Research Collaboration">Research Collaboration</option>
                    <option value="PhD Inquiry">PhD Inquiry</option>
                    <option value="Speaking Invitation">Speaking Invitation</option>
                    <option value="Dataset Request">Dataset Request</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="btn btn-primary w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
