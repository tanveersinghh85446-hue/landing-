import React from 'react'
import { Link } from 'react-router-dom'
import { IoIosFlash } from 'react-icons/io'
import { IoIosLock } from 'react-icons/io'
import { FaHandshake } from 'react-icons/fa'
import { VscGraphLeft } from 'react-icons/vsc'

// ── Stats ──
const stats = [
  { value: '12,000+', label: 'Teams Worldwide' },
  { value: '4.2M+',   label: 'Prompts Generated' },
  { value: '99.9%',   label: 'Uptime SLA' },
  { value: '40+',     label: 'Model Integrations' },
]

// ── Timeline ──
const timeline = [
  {
    year: '2022',
    title: 'The Idea Sparked',
    desc: 'Two engineers at a late-night hackathon realized there was no proper tooling for managing AI prompts at scale. Promptify was born on a napkin.',
  },
  {
    year: '2023',
    title: 'First 1,000 Users',
    desc: 'We launched a public beta and reached 1,000 users in 3 weeks — purely through word of mouth. Teams loved having a single source of truth for their prompts.',
  },
  {
    year: 'Early 2024',
    title: 'Seed Round & Team Growth',
    desc: 'Raised $3.2M in seed funding. Expanded the team to 12 people across engineering, design, and growth.',
  },
  {
    year: 'Late 2024',
    title: 'Enterprise Launch',
    desc: 'Shipped SSO, custom integrations, and dedicated support. Onboarded our first Fortune 500 customers.',
  },
  {
    year: '2025',
    title: 'Going Global',
    desc: 'Crossed 12,000 teams worldwide. Opened a second office in London and launched multi-language support.',
  },
]

// ── Team ──
const team = [
  {
    name: 'Aryan Mehta',
    role: 'Co-Founder & CEO',
    avatar: 'AM',
    bio: 'Previously eng lead at OpenAI. Obsessed with developer tooling and prompt systems.',
  },
  {
    name: 'Priya Nair',
    role: 'Co-Founder & CTO',
    avatar: 'PN',
    bio: 'Ex-Stripe infrastructure engineer. Loves distributed systems and strong chai.',
  },
  {
    name: 'David Kim',
    role: 'Head of Design',
    avatar: 'DK',
    bio: 'Designed products at Figma and Notion. Believes great UX is invisible.',
  },
  {
    name: 'Layla Hassan',
    role: 'Head of Growth',
    avatar: 'LH',
    bio: 'Grew Jasper AI from 0 to 100k users. Data-driven with a storytellers heart.',
  },
  {
    name: 'Marcus Osei',
    role: 'Lead Engineer',
    avatar: 'MO',
    bio: 'Full-stack wizard. Built Promptifys core prompt engine from scratch.',
  },
  {
    name: 'Sofia Reyes',
    role: 'Customer Success',
    avatar: 'SR',
    bio: 'Ex-Intercom. Ensures every team gets maximum value from day one.',
  },
]

// ── Values ──
const values = [
  {
    icon: <IoIosFlash />,
    title: 'Speed Over Perfection',
    desc: 'We ship fast, learn faster. Every feature starts as a hypothesis and earns its place through usage.',
  },
  {
    icon: <IoIosLock />,
    title: 'Trust by Default',
    desc: 'We earn trust through transparency — in our code, our pricing, and our communication.',
  },
  {
    icon: <FaHandshake />,
    title: 'Built With Builders',
    desc: 'Our best features come from our users. We treat every piece of feedback as a gift.',
  },
  {
    icon: <VscGraphLeft />,
    title: 'Measure Everything',
    desc: 'Good intuitions, great data. We back every decision with evidence and share what we learn.',
  },
]

export default function About() {
  return (
    <div className="bg-gray-50 text-blue-950 font-sans">

      {/* ── Hero / Mission ── */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center space-y-5">
        <span className="inline-block text-xs font-semibold tracking-widest uppercase text-blue-400 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
          Our Story
        </span>
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-blue-950">
          We're on a Mission to <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-blue-700">
            Fix Prompt Chaos.
          </span>
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
          Promptify was built by engineers who were tired of copy-pasting prompts across Notion docs, Slack threads, and random text files. We believe great AI starts with great prompts — and great prompts deserve real tooling.
        </p>
      </section>

      {/* ── Stats Strip ── */}
      <section className="bg-blue-950 py-14">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center space-y-1">
              <p className="text-4xl font-extrabold text-white">{s.value}</p>
              <p className="text-sm text-blue-300 font-medium">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Company Timeline ── */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <div className="text-center mb-14 space-y-3">
          <h2 className="text-3xl font-bold text-blue-950">How We Got Here</h2>
          <p className="text-gray-400 text-sm max-w-xl mx-auto">
            From a hackathon napkin sketch to thousands of teams worldwide.
          </p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gray-200 md:left-1/2" />

          <div className="space-y-10">
            {timeline.map((item, i) => (
              <div
                key={item.year}
                className={`relative flex flex-col md:flex-row gap-6 md:gap-12 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 top-5 w-5 h-5 rounded-full bg-blue-950 border-4 border-gray-50 -translate-x-1/2 z-10" />

                {/* Year label */}
                <div className={`hidden md:flex md:w-1/2 ${i % 2 === 0 ? 'justify-end pr-10' : 'justify-start pl-10'} items-start pt-3`}>
                  <span className="text-xs font-bold uppercase tracking-widest text-blue-400 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
                    {item.year}
                  </span>
                </div>

                {/* Card */}
                <div className={`ml-14 md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:pl-10' : 'md:pr-10'}`}>
                  <div className="bg-white border border-gray-100 rounded-2xl p-6 space-y-2 hover:border-blue-200 hover:shadow-md transition-all">
                    <span className="md:hidden text-xs font-bold uppercase tracking-widest text-blue-400">{item.year}</span>
                    <h3 className="font-bold text-blue-950 text-base">{item.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="bg-white border-y border-gray-100 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14 space-y-3">
            <h2 className="text-3xl font-bold text-blue-950">What We Believe</h2>
            <p className="text-gray-400 text-sm max-w-xl mx-auto">
              These aren't framed posters on the wall. They're how we actually work, every day.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-gray-50 border border-gray-100 rounded-2xl p-6 space-y-3 hover:border-blue-200 hover:shadow-md transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-700 text-xl group-hover:bg-blue-950 group-hover:text-white transition-all">
                  {v.icon}
                </div>
                <h3 className="font-bold text-blue-950 text-base group-hover:text-blue-700 transition-colors">
                  {v.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-14 space-y-3">
          <h2 className="text-3xl font-bold text-blue-950">Meet the Team</h2>
          <p className="text-gray-400 text-sm max-w-xl mx-auto">
            A small, focused team of builders who care deeply about developer experience and AI tooling.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((member) => (
            <div
              key={member.name}
              className="bg-white border border-gray-100 rounded-2xl p-6 space-y-4 hover:border-blue-200 hover:shadow-md transition-all group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-950 text-white flex items-center justify-center text-sm font-bold shrink-0 group-hover:bg-blue-700 transition-all">
                  {member.avatar}
                </div>
                <div>
                  <p className="font-bold text-blue-950 text-sm">{member.name}</p>
                  <p className="text-xs text-blue-400 font-medium">{member.role}</p>
                </div>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="bg-blue-950 py-24">
        <div className="max-w-3xl mx-auto px-6 text-center space-y-6">
          <h2 className="text-4xl font-extrabold text-white leading-tight">
            Want to join our journey?
          </h2>
          <p className="text-blue-300 text-base">
            We're always looking for curious, driven people. Come build the future of AI tooling with us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <Link
              to="/Contact"
              className="px-8 py-3 bg-white text-blue-950 font-bold rounded-xl text-sm hover:bg-blue-50 transition-all shadow-lg"
            >
              Get in Touch
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