import React from 'react'
import { Link } from 'react-router-dom'
import { IoIosFlash } from "react-icons/io";
import { IoIosLock } from "react-icons/io";
import { FaHandshake } from "react-icons/fa";
import { VscGraphLeft } from "react-icons/vsc";


const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Product Manager at Notion',
    avatar: 'SC',
    text: 'Promptify cut our team\'s prompt iteration time in half. We went from chaos to clarity in days.',
  },
  {
    name: 'James Okafor',
    role: 'AI Engineer at Stripe',
    avatar: 'JO',
    text: 'Finally a tool that treats prompts like code — versioned, testable, and collaborative.',
  },
  {
    name: 'Mia Torres',
    role: 'Founder at BuildAI',
    avatar: 'MT',
    text: 'Our LLM outputs improved drastically. Promptify is now non-negotiable in our stack.',
  },
]

const values = [
  {
    icon: <IoIosFlash/>,
    title: 'Blazing Fast',
    desc: 'Iterate on prompts in real-time with instant feedback loops designed for speed.',
  },
  {
    icon: <IoIosLock/>,
    title: 'Secure by Default',
    desc: 'Enterprise-grade encryption ensures your prompts and data stay private, always.',
  },
  {
    icon: <FaHandshake/>,
    title: 'Built for Teams',
    desc: 'Collaborate, comment, and version-control prompts just like you do with code.',
  },
  {
    icon: <VscGraphLeft/>,
    title: 'Deep Analytics',
    desc: 'Track prompt performance, output quality, and cost across every model you use.',
  },
]

const quickLinks = ['Home', 'Features', 'Pricing', 'About', 'Contact']
const socialIcons = [
  { label: 'Twitter', href: '#', icon: 'X' },
  { label: 'LinkedIn', href: '#', icon: 'in' },
  { label: 'GitHub', href: '#', icon: 'GH' },
]
const policies = ['Privacy Policy', 'Terms of Service', 'Cookie Policy']

export default function Home() {
  return (
    <div className="bg-gray-50 text-blue-950 font-sans">

      {/* ── Hero Section ── */}
      <section className="max-w-7xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center gap-16">
        {/* Left: Text */}
        <div className="flex-1 space-y-6">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-blue-400 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
            AI Prompt Engineering
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-blue-950">
            Craft Prompts <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-blue-700">
              That Actually Work.
            </span>
          </h1>
          <p className="text-lg text-gray-500 max-w-lg leading-relaxed">
            Promptify is the all-in-one workspace for building, testing, and optimizing AI prompts — built for teams who ship fast and think clearly.
          </p>
          <p className="text-sm font-semibold text-blue-400 tracking-wide uppercase">
            — Less guessing. More generating.
          </p>
          <div className="flex gap-4 pt-2">
            <Link
              to="/Contact"
              className="px-6 py-3 bg-blue-950 text-white rounded-xl font-semibold text-sm hover:bg-blue-800 transition-all shadow-lg hover:shadow-blue-200"
            >
              Start Free Trial
            </Link>
            <Link
              to="/Features"
              className="px-6 py-3 border border-gray-200 text-blue-950 rounded-xl font-semibold text-sm hover:bg-white transition-all"
            >
              See Features →
            </Link>
          </div>
        </div>

        {/* Right: Illustration */}
        <div className="flex-1 flex justify-center">
          <div className="relative w-full max-w-sm">
            <div className="absolute inset-0 bg-blue-100 rounded-3xl blur-2xl opacity-40" />
            <div className="relative bg-white border border-gray-100 rounded-3xl shadow-xl p-6 space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-300" />
                <div className="w-3 h-3 rounded-full bg-yellow-300" />
                <div className="w-3 h-3 rounded-full bg-green-300" />
                <span className="ml-2 text-xs text-gray-400 font-mono">prompt_editor.jsx  </span>
              </div>
              <div className="font-mono text-sm text-gray-700 space-y-2 bg-gray-50 rounded-xl p-4">
                <p><span className="text-blue-400">system:</span> <span className="text-gray-500">"You are a helpful..."</span></p>
                <p><span className="text-blue-400">user:</span> <span className="text-gray-500">"Summarize this in..."</span></p>
                <p><span className="text-green-500">✓ output score:</span> <span className="text-blue-950 font-bold">94/100</span></p>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-400">v1.4 · 3 variants tested</span>
                <span className="text-xs font-semibold text-blue-950 bg-blue-50 px-2 py-1 rounded-lg">GPT-4o</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="bg-white border-y border-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-center text-3xl font-bold text-blue-950 mb-12">
            Loved by builders worldwide
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-gray-50 border border-gray-100 rounded-2xl p-6 space-y-4 hover:shadow-md transition-all"
              >
                <p className="text-gray-600 text-sm leading-relaxed">"{t.text}"</p>
                <div className="flex items-center gap-3 pt-2">
                  <div className="w-10 h-10 rounded-full bg-blue-950 text-white flex items-center justify-center text-xs font-bold">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-blue-950">{t.name}</p>
                    <p className="text-xs text-gray-400">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Value Section ── */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-14 space-y-3">
          <h2 className="text-3xl font-bold text-blue-950">Why Promptify?</h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm">
            Everything your team needs to go from a rough idea to a production-ready prompt pipeline.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v) => (
            <div
              key={v.title}
              className="bg-white border border-gray-100 rounded-2xl p-6 space-y-3 hover:border-blue-200 hover:shadow-md transition-all group"
            >
              <span className="text-2xl">{v.icon}</span>
              <h3 className="font-bold text-blue-950 text-base group-hover:text-blue-700 transition-colors">
                {v.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="bg-blue-950 py-24">
        <div className="max-w-3xl mx-auto px-6 text-center space-y-6">
          <h2 className="text-4xl font-extrabold text-white leading-tight">
            Ready to build smarter prompts?
          </h2>
          <p className="text-blue-300 text-base">
            Join thousands of teams already using Promptify to supercharge their AI workflows.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <Link
              to="/Contact"
              className="px-8 py-3 bg-white text-blue-950 font-bold rounded-xl text-sm hover:bg-blue-50 transition-all shadow-lg"
            >
              Get Started — It's Free
            </Link>
            <Link
              to="/Features"
              className="px-8 py-3 border border-blue-700 text-blue-300 font-semibold rounded-xl text-sm hover:bg-blue-900 transition-all"
            >
              Explore Features
            </Link>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-white border-t border-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-10">

          {/* 1. Quick Links */}
          <div className="flex flex-col gap-3">
            <p className="text-xs font-bold uppercase tracking-widest text-blue-950 mb-1">Quick Links</p>
            {quickLinks.map((l) => (
              <Link
                key={l}
                to={l === 'Home' ? '/' : `/${l}`}
                className="text-sm text-gray-400 hover:text-blue-950 transition-colors"
              >
                {l}
              </Link>
            ))}
          </div>

          {/* 2. Social Icons */}
          <div className="flex flex-col gap-3">
            <p className="text-xs font-bold uppercase tracking-widest text-blue-950 mb-1">Follow Us</p>
            {socialIcons.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="flex items-center gap-3 text-sm text-gray-400 hover:text-blue-950 transition-colors group"
              >
                <span className="w-8 h-8 rounded-lg bg-gray-100 group-hover:bg-blue-950 group-hover:text-white text-blue-950 flex items-center justify-center text-xs font-bold transition-all">
                  {s.icon}
                </span>
                {s.label}
              </a>
            ))}
          </div>

          {/* 3. Privacy Policy */}
          <div className="flex flex-col gap-3">
            <p className="text-xs font-bold uppercase tracking-widest text-blue-950 mb-1">Legal</p>
            {policies.map((p) => (
              <a
                key={p}
                href="#"
                className="text-sm text-gray-400 hover:text-blue-950 transition-colors"
              >
                {p}
              </a>
            ))}
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="max-w-7xl mx-auto px-6 mt-10 pt-6 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-xs text-gray-300">© 2025 Promptify. All rights reserved.</p>
          <p className="text-xs text-gray-300">Built with ❤️ for AI teams</p>
        </div>
      </footer>

    </div>
  )
}