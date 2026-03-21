import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoMailOutline } from 'react-icons/io5'
import { IoCallOutline } from 'react-icons/io5'
import { IoLocationOutline } from 'react-icons/io5'
import { FaXTwitter } from 'react-icons/fa6'
import { FaLinkedinIn } from 'react-icons/fa6'
import { FaGithub } from 'react-icons/fa6'

// ── Office Info ──
const officeInfo = [
  {
    icon: <IoMailOutline />,
    label: 'Email Us',
    value: 'hello@promptify.ai',
    sub: 'We reply within 24 hours',
  },
  {
    icon: <IoCallOutline />,
    label: 'Call Us',
    value: '+1 (415) 000-1234',
    sub: 'Mon–Fri, 9am–6pm PST',
  },
  {
    icon: <IoLocationOutline />,
    label: 'Office',
    value: '340 Pine St, Suite 800',
    sub: 'San Francisco, CA 94104',
  },
]

// ── Social Links ──
const socials = [
  { icon: <FaXTwitter />, label: 'Twitter', handle: '@promptify_ai', href: '#' },
  { icon: <FaLinkedinIn />, label: 'LinkedIn', handle: 'Promptify', href: '#' },
  { icon: <FaGithub />, label: 'GitHub', handle: 'promptify-ai', href: '#' },
]

// ── FAQ Strip ──
const faqs = [
  {
    q: 'How fast do you respond?',
    a: 'We typically respond to all inquiries within 24 business hours.',
  },
  {
    q: 'Can I request a demo?',
    a: 'Absolutely! Fill out the form and select "Request a Demo" as the subject.',
  },
  {
    q: 'Do you offer enterprise support?',
    a: 'Yes — Enterprise plan customers get a dedicated support manager and SLA guarantee.',
  },
  {
    q: 'Where are your servers located?',
    a: 'Our infrastructure runs on AWS us-east-1 and eu-west-1 for data residency compliance.',
  },
]

const subjects = [
  'General Inquiry',
  'Request a Demo',
  'Sales & Pricing',
  'Technical Support',
  'Partnership',
  'Other',
]

export default function Contact() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', subject: '', message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [openFaq, setOpenFaq] = useState(null)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="bg-gray-50 text-blue-950 font-sans">

      {/* ── Page Header ── */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center space-y-5">
        <span className="inline-block text-xs font-semibold tracking-widest uppercase text-blue-400 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
          Get in Touch
        </span>
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-blue-950">
          We'd Love to <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-blue-700">
            Hear From You.
          </span>
        </h1>
        <p className="text-gray-400 text-lg max-w-xl mx-auto leading-relaxed">
          Whether you have a question, want a demo, or just want to say hi — our team is here and ready to help.
        </p>
      </section>

      {/* ── Main Content: Form + Info ── */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

          {/* ── Left: Contact Form (3/5) ── */}
          <div className="lg:col-span-3 bg-white border border-gray-100 rounded-2xl p-8 shadow-sm">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-16 space-y-4 text-center">
                <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center text-3xl">
                  ✓
                </div>
                <h3 className="text-2xl font-bold text-blue-950">Message Sent!</h3>
                <p className="text-gray-400 text-sm max-w-sm">
                  Thanks for reaching out. Our team will get back to you within 24 hours.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', subject: '', message: '' }) }}
                  className="mt-4 px-6 py-2.5 border border-gray-200 text-blue-950 rounded-xl text-sm font-semibold hover:bg-gray-50 transition-all"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <>
                <h2 className="text-xl font-bold text-blue-950 mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-5">

                  {/* Name + Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-blue-950 placeholder-gray-300 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-50 transition-all"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-blue-950 placeholder-gray-300 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-50 transition-all"
                      />
                    </div>
                  </div>

                  {/* Phone + Subject Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-blue-950 placeholder-gray-300 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-50 transition-all"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Subject *</label>
                      <select
                        name="subject"
                        required
                        value={form.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-blue-950 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-50 transition-all bg-white"
                      >
                        <option value="" disabled>Select a subject</option>
                        {subjects.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Message *</label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us how we can help you..."
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-blue-950 placeholder-gray-300 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-50 transition-all resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full px-6 py-3.5 bg-blue-950 text-white rounded-xl font-semibold text-sm hover:bg-blue-800 transition-all shadow-sm hover:shadow-blue-200"
                  >
                    Send Message →
                  </button>

                  <p className="text-xs text-gray-300 text-center">
                    By submitting this form, you agree to our{' '}
                    <a href="#" className="text-blue-400 hover:underline">Privacy Policy</a>.
                  </p>
                </form>
              </>
            )}
          </div>

          {/* ── Right: Info + Socials (2/5) ── */}
          <div className="lg:col-span-2 space-y-6">

            {/* Office Info Cards */}
            {officeInfo.map((info) => (
              <div
                key={info.label}
                className="bg-white border border-gray-100 rounded-2xl p-5 flex items-start gap-4 hover:border-blue-200 hover:shadow-md transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-700 text-xl shrink-0 group-hover:bg-blue-950 group-hover:text-white transition-all">
                  {info.icon}
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-0.5">{info.label}</p>
                  <p className="text-sm font-bold text-blue-950">{info.value}</p>
                  <p className="text-xs text-gray-400">{info.sub}</p>
                </div>
              </div>
            ))}

            {/* Social Links */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6 space-y-4">
              <p className="text-xs font-bold uppercase tracking-widest text-blue-950">Follow Us</p>
              <div className="space-y-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    className="flex items-center gap-3 group"
                  >
                    <div className="w-9 h-9 rounded-xl bg-gray-100 group-hover:bg-blue-950 group-hover:text-white text-blue-950 flex items-center justify-center text-sm font-bold transition-all">
                      {s.icon}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-blue-950 group-hover:text-blue-700 transition-colors">{s.label}</p>
                      <p className="text-xs text-gray-400">{s.handle}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── FAQ Strip ── */}
      <section className="bg-white border-y border-gray-100 py-24">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12 space-y-3">
            <h2 className="text-3xl font-bold text-blue-950">Quick Answers</h2>
            <p className="text-gray-400 text-sm">
              Common questions before you reach out.
            </p>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="border border-gray-100 rounded-2xl overflow-hidden hover:border-blue-100 transition-all bg-gray-50"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                >
                  <span className="font-semibold text-blue-950 text-sm">{faq.q}</span>
                  <span className={`text-blue-400 text-lg font-bold transition-transform duration-200 ${openFaq === i ? 'rotate-45' : ''}`}>
                    +
                  </span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5">
                    <p className="text-sm text-gray-400 leading-relaxed border-t border-gray-100 pt-4">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="bg-blue-950 py-24">
        <div className="max-w-3xl mx-auto px-6 text-center space-y-6">
          <h2 className="text-4xl font-extrabold text-white leading-tight">
            Ready to get started?
          </h2>
          <p className="text-blue-300 text-base">
            Try Promptify free — no credit card needed. Up and running in minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <Link
              to="/Pricing"
              className="px-8 py-3 bg-white text-blue-950 font-bold rounded-xl text-sm hover:bg-blue-50 transition-all shadow-lg"
            >
              View Pricing
            </Link>
            <Link
              to="/Features"
              className="px-8 py-3 border border-blue-700 text-blue-300 font-semibold rounded-xl text-sm hover:bg-blue-900 transition-all"
            >
              Explore Features →
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}