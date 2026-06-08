import React, { useState } from 'react';

export default function EnquiryForm({ truck }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: `Hi, I am interested in your ${truck.title} listed on trucksales. Please contact me with more information.`
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // clear error if typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10,12}$/.test(formData.phone.replace(/[\s()+-]/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 text-center shadow-xs">
        <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white shadow-xs">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-2">Enquiry Sent!</h3>
        <p className="text-sm text-gray-600 mb-4">
          Thank you, <strong className="text-gray-900">{formData.name}</strong>. Your enquiry for the <strong>{truck.title}</strong> has been successfully sent to <strong>{truck.seller.name}</strong>.
        </p>
        <div className="bg-white rounded-lg p-3 border border-emerald-100 text-left text-xs text-gray-500 space-y-1">
          <div><span className="font-semibold text-gray-700">Email:</span> {formData.email}</div>
          <div><span className="font-semibold text-gray-700">Phone:</span> {formData.phone}</div>
          <div><span className="font-semibold text-gray-700">Ref ID:</span> TS-{truck.id}-{Math.floor(Math.random() * 90000 + 10000)}</div>
        </div>
        <p className="text-xs text-gray-400 mt-4">A copy of this confirmation has been sent to your email.</p>
        
        <button 
          onClick={() => setSubmitted(false)}
          className="mt-6 w-full bg-emerald-600 hover:bg-emerald-700 text-white py-2.5 rounded-lg text-xs font-bold transition-all shadow-xs"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-xs">
      <h3 className="text-base font-bold text-brand-navy mb-4">Enquire about this vehicle</h3>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        
        {/* Name */}
        <div>
          <label htmlFor="enq-name" className="block text-[11px] font-semibold text-gray-500 uppercase mb-1.5">Full Name</label>
          <input
            id="enq-name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            className={`w-full text-sm border rounded-lg p-2.5 focus:outline-none focus:ring-2 ${
              errors.name 
                ? 'border-brand-red focus:ring-brand-red/20' 
                : 'border-gray-200 focus:ring-brand-blue/20 focus:border-brand-blue'
            }`}
          />
          {errors.name && <p className="text-[11px] font-semibold text-brand-red mt-1">{errors.name}</p>}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="enq-email" className="block text-[11px] font-semibold text-gray-500 uppercase mb-1.5">Email Address</label>
          <input
            id="enq-email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john.doe@example.com"
            className={`w-full text-sm border rounded-lg p-2.5 focus:outline-none focus:ring-2 ${
              errors.email 
                ? 'border-brand-red focus:ring-brand-red/20' 
                : 'border-gray-200 focus:ring-brand-blue/20 focus:border-brand-blue'
            }`}
          />
          {errors.email && <p className="text-[11px] font-semibold text-brand-red mt-1">{errors.email}</p>}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="enq-phone" className="block text-[11px] font-semibold text-gray-500 uppercase mb-1.5">Phone Number</label>
          <input
            id="enq-phone"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="0412 345 678"
            className={`w-full text-sm border rounded-lg p-2.5 focus:outline-none focus:ring-2 ${
              errors.phone 
                ? 'border-brand-red focus:ring-brand-red/20' 
                : 'border-gray-200 focus:ring-brand-blue/20 focus:border-brand-blue'
            }`}
          />
          {errors.phone && <p className="text-[11px] font-semibold text-brand-red mt-1">{errors.phone}</p>}
        </div>

        {/* Message */}
        <div>
          <label htmlFor="enq-msg" className="block text-[11px] font-semibold text-gray-500 uppercase mb-1.5">Message</label>
          <textarea
            id="enq-msg"
            name="message"
            rows="3"
            value={formData.message}
            onChange={handleChange}
            className="w-full text-sm border border-gray-200 rounded-lg p-2.5 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue resize-none"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-brand-blue hover:bg-brand-blue-hover text-white py-3 rounded-lg text-xs font-bold shadow-md hover:shadow-lg transition-all duration-150"
        >
          Send Enquiry
        </button>

        <p className="text-[10px] text-gray-400 text-center leading-normal">
          By sending this enquiry, you agree to our Terms of Use and Privacy Policy. Your details will be sent directly to the seller.
        </p>

      </form>
    </div>
  );
}
