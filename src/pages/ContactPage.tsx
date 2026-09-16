import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Input } from '../components/common/Input';
import { Textarea } from '../components/common/Textarea';
import { Button } from '../components/common/Button';

export const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-8">
      <div className="text-center max-w-xl mx-auto space-y-2">
        <h1 className="text-h1 font-serif text-darkBrown-900">Get in Touch</h1>
        <p className="text-body-sm text-darkBrown-600">
          Have questions about bulk orders, international shipping destination rules, or custom spice blends? We're here to help.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg border border-darkBrown-200 space-y-6">
          <h3 className="font-serif text-h3 text-darkBrown-800">Contact Information</h3>

          <div className="space-y-4 text-xs text-darkBrown-700">
            <div className="flex items-start gap-3">
              <Mail className="w-4 h-4 text-chilli-700 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold block">Email Support</span>
                <span className="text-darkBrown-500">support@aarvilfoods.com</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Phone className="w-4 h-4 text-chilli-700 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold block">Customer Care</span>
                <span className="text-darkBrown-500">+91 (0) 80 4920 1888 (Mon-Sat, 9am - 6pm IST)</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-chilli-700 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold block">AARVIL Foods Kitchen & Facility</span>
                <span className="text-darkBrown-500">AARVIL Foods, Godavari region, Andhra Pradesh, India.</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border border-darkBrown-200">
          {submitted ? (
            <div className="text-center py-8 space-y-3">
              <div className="w-12 h-12 bg-naturalGreen-100 text-naturalGreen-700 rounded-full flex items-center justify-center mx-auto text-xl">✓</div>
              <h3 className="font-serif text-h3 text-darkBrown-800">Message Received!</h3>
              <p className="text-xs text-darkBrown-600">Thank you for reaching out. Our culinary team will respond within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input label="Your Name" required placeholder="Sita Rama" />
              <Input label="Email Address" type="email" required placeholder="sita@example.com" />
              <Textarea label="Message" required rows={4} placeholder="How can we assist your culinary journey?" />
              <Button variant="primary" type="submit" className="w-full" rightIcon={<Send className="w-4 h-4" />}>
                Send Message
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
