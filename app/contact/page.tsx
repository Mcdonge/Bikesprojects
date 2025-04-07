"use client"

import { useState } from "react"
import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, MessageSquare, Send, CheckCircle2 } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  return (
    <main>
      {/* Creative Header Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-maroon-200/90 to-maroon-300/90" />
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10" />
        <div className="container relative mx-auto px-4 py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-maroon-800 via-maroon-600 to-maroon-800">
              Let's Connect
            </h1>
            <p className="text-xl text-maroon-800 mb-8">
              We're here to help you with any questions about our bike rentals around Moi University
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <a href="tel:+254705213415" className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full hover:bg-white transition-colors">
                <Phone className="h-5 w-5 text-maroon-600" />
                <span className="text-maroon-600">+254 705 213 415</span>
              </a>
              <a href="mailto:info@miamibikes.co.ke" className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full hover:bg-white transition-colors">
                <Mail className="h-5 w-5 text-maroon-600" />
                <span className="text-maroon-600">info@miamibikes.co.ke</span>
              </a>
              <a href="https://maps.google.com/?q=Moi+University+Eldoret" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full hover:bg-white transition-colors">
                <MapPin className="h-5 w-5 text-maroon-600" />
                <span className="text-maroon-600">Moi University, Eldoret</span>
              </a>
            </div>
            <div className="flex justify-center gap-4">
              <Button size="lg" className="bg-maroon-600 text-white hover:bg-maroon-700" asChild>
                <a href="tel:+254705213415">
                  <Phone className="h-5 w-5 mr-2" />
                  Call Us
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-maroon-600 text-maroon-600 hover:bg-maroon-600 hover:text-white" onClick={() => {
                // Open live chat widget
                if (typeof window !== 'undefined') {
                  const Tawk_API = (window as any).Tawk_API;
                  if (Tawk_API && Tawk_API.showWidget) {
                    Tawk_API.showWidget();
                  } else if (Tawk_API && Tawk_API.maximize) {
                    Tawk_API.maximize();
                  } else {
                    // If Tawk_API is not loaded yet, show a message
                    alert('Chat is loading, please try again in a moment.');
                  }
                }
              }}>
                <MessageSquare className="h-5 w-5 mr-2" />
                Live Chat
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="h-16 w-16 rounded-full bg-maroon-100 flex items-center justify-center mb-6">
              <MessageSquare className="h-8 w-8 text-maroon-600" />
            </div>
            <h3 className="text-2xl font-bold mb-2">24/7 Support</h3>
            <p className="text-gray-600">Our team is always ready to assist you with any questions or concerns.</p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="h-16 w-16 rounded-full bg-maroon-100 flex items-center justify-center mb-6">
              <Clock className="h-8 w-8 text-maroon-600" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Quick Response</h3>
            <p className="text-gray-600">We typically respond to all inquiries within 24 hours.</p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="h-16 w-16 rounded-full bg-maroon-100 flex items-center justify-center mb-6">
              <Send className="h-8 w-8 text-maroon-600" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Easy Booking</h3>
            <p className="text-gray-600">Get help with your bookings and reservations anytime.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-12">
            <div>
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-maroon-600 to-maroon-800 bg-clip-text text-transparent">
                Contact Information
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Have questions about our services or need assistance? Our friendly team is here to help you with anything you need.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-4 group">
                <div className="h-14 w-14 rounded-full bg-maroon-100 flex items-center justify-center flex-shrink-0 group-hover:bg-maroon-200 transition-colors">
                  <MapPin className="h-7 w-7 text-maroon-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2">Our Location</h3>
                  <p className="text-gray-600">
                    123 Ocean Drive, Miami Beach, FL 33139
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="h-14 w-14 rounded-full bg-maroon-100 flex items-center justify-center flex-shrink-0 group-hover:bg-maroon-200 transition-colors">
                  <Phone className="h-7 w-7 text-maroon-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2">Phone</h3>
                  <p className="text-gray-600">+1 (305) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="h-14 w-14 rounded-full bg-maroon-100 flex items-center justify-center flex-shrink-0 group-hover:bg-maroon-200 transition-colors">
                  <Mail className="h-7 w-7 text-maroon-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2">Email</h3>
                  <p className="text-gray-600">info@miamibikes.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="h-14 w-14 rounded-full bg-maroon-100 flex items-center justify-center flex-shrink-0 group-hover:bg-maroon-200 transition-colors">
                  <Clock className="h-7 w-7 text-maroon-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2">Business Hours</h3>
                  <p className="text-gray-600">
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday: 10:00 AM - 4:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-10 shadow-xl">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-maroon-600 to-maroon-800 bg-clip-text text-transparent">
              Send us a Message
            </h2>
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                <p className="text-gray-600 mb-6">
                  Thank you for reaching out. We'll get back to you soon.
                </p>
                <Button
                  onClick={() => setIsSubmitted(false)}
                  className="bg-maroon-600 hover:bg-maroon-700"
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full h-12 border-gray-300 focus:border-maroon-500 focus:ring-maroon-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full h-12 border-gray-300 focus:border-maroon-500 focus:ring-maroon-500"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    type="text"
                    placeholder="What's this about?"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full h-12 border-gray-300 focus:border-maroon-500 focus:ring-maroon-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Your message here..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full min-h-[150px] border-gray-300 focus:border-maroon-500 focus:ring-maroon-500"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-maroon-600 to-maroon-800 hover:from-maroon-700 hover:to-maroon-900 h-14 text-lg font-semibold transition-all duration-300 disabled:opacity-50"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            )}
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-32">
          <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-maroon-600 to-maroon-800 bg-clip-text text-transparent">
            Find Us
          </h2>
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3444.9999999999995!2d-80.13000000000001!3d25.790000000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b0a20ec8c111%3A0xff96f271ddad4f65!2sMiami%20Beach%2C%20FL%2C%20USA!5e0!3m2!1sen!2s!4v1640000000000!5m2!1sen!2s"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-2xl"
            ></iframe>
          </div>
        </div>
      </div>
    </main>
  )
} 