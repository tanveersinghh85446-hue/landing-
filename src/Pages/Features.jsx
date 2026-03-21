import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoIosFlash } from "react-icons/io"
import { IoIosLock } from "react-icons/io"
import { FaHandshake } from "react-icons/fa"
import { VscGraphLeft } from "react-icons/vsc"
import { BsStars } from "react-icons/bs"
import { MdOutlineIntegrationInstructions } from "react-icons/md"
import { TbPrompt } from "react-icons/tb"
import { RiTeamLine } from "react-icons/ri"

// ── Feature Cards Data ──
const features = [
  {
    icon: <IoIosFlash />,
    title: 'Real-Time Iteration',
    desc: 'Test and refine prompts instantly with live feedback. No waiting, no guesswork — just rapid results.',
    badge: 'Speed',
    color: 'blue',
  },
  {
    icon: <BsStars />,
    title: 'AI-Powered Suggestions',
    desc: 'Get smart prompt recommendations based on your goal, model, and past performance data.',
    badge: 'AI',
    color: 'indigo',
  },
  {
    icon: <IoIosLock />,
    title: 'Enterprise Security',
    desc: 'AES-256 encryption, SOC 2 compliance, and role-based access control for total peace of mind.',
    badge: 'Security',
    color: 'blue',
  },
  {
    icon: <RiTeamLine />,
    title: 'Team Collaboration',
    desc: 'Comment, review, and version-control prompts together — just like your engineering workflow.',
    badge: 'Teams',
    color: 'indigo',
  },
  {
    icon: <VscGraphLeft />,
    title: 'Performance Analytics',
    desc: 'Track output quality, cost per token, and model comparisons with detailed dashboards.',
    badge: 'Analytics',
    color: 'blue',
  },
  {
    icon: <MdOutlineIntegrationInstructions />,
    title: 'Seamless Integrations',
    desc: 'Connect with OpenAI, Anthropic, Mistral, and your existing tools via REST API or native plugins.',
    badge: 'Integrations',
    color: 'indigo',
  },
  {
    icon: <TbPrompt />,
    title: 'Prompt Library',
    desc: 'Save, tag, and reuse high-performing prompts across projects. Build your team\'s knowledge base.',
    badge: 'Library',
    color: 'blue',
  },
  {
    icon: <FaHandshake />,
    title: 'Model Agnostic',
    desc: 'Works with every major LLM. Switch models and benchmark outputs side-by-side effortlessly.',
    badge: 'Flexible',
    color: 'indigo',
  },
]

// ── Comparison Table Data ──
const plans = ['Free', 'Pro', 'Enterprise']
const tableRows = [
  { feature: 'Prompts per month',       values: ['50', '5,000', 'Unlimited'] },
  { feature: 'Prompt versioning',       values: [false, true, true] },
  { feature: 'Team collaboration',      values: [false, true, true] },
  { feature: 'AI suggestions',          values: [false, true, true] },
  { feature: 'Analytics dashboard',     values: [false, true, true] },
  { feature: 'API access',              values: [false, true, true] },
  { feature: 'Custom integrations',     values: [false, false, true] },
  { feature: 'SSO & SAML',             values: [false, false, true] },
  { feature: 'Dedicated support',       values: [false, false, true] },
  { feature: 'SLA guarantee',           values: [false, false, true] },
]

const planPrices = ['Free', '$19/mo', 'Custom']
const planHighlight = [false, true, false]

export default function Features() {
  const [activeTab, setActiveTab] = useState('monthly')

  return (
    <div className="bg-gray-50 text-blue-950 font-sans">

      {/* ── Page Header ── */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center space-y-5">
        <span className="inline-block text-xs font-semibold tracking-widest uppercase text-blue-400 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
          Everything You Need
        </span>
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-blue-950">
          Features Built for <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-blue-700">
            Serious AI Teams.
          </span>
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
          From solo experimenters to enterprise engineering teams — Promptify gives you every tool to go from rough idea to production-ready prompt.
        </p>
      </section>

      {/* ── Feature Cards Grid ── */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-white border border-gray-100 rounded-2xl p-6 space-y-4 hover:border-blue-200 hover:shadow-lg transition-all group cursor-default"
            >
              {/* Icon + Badge Row */}
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-700 text-xl group-hover:bg-blue-950 group-hover:text-white transition-all">
                  {f.icon}
                </div>
                <span className="text-xs font-semibold text-blue-400 bg-blue-50 border border-blue-100 px-2 py-0.5 rounded-full">
                  {f.badge}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-bold text-blue-950 text-base group-hover:text-blue-700 transition-colors">
                {f.title}
              </h3>

              {/* Desc */}
              <p className="text-sm text-gray-400 leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Comparison Table ── */}
      <section className="bg-white border-y border-gray-100 py-24">
        <div className="max-w-5xl mx-auto px-6">

          {/* Section Header */}
          <div className="text-center mb-14 space-y-3">
            <h2 className="text-3xl font-bold text-blue-950">Compare Plans</h2>
            <p className="text-gray-400 text-sm max-w-xl mx-auto">
              Choose the plan that fits your team's scale. Upgrade or downgrade anytime.
            </p>
            {/* Billing Toggle */}
            <div className="flex items-center justify-center gap-3 pt-2">
              <button
                onClick={() => setActiveTab('monthly')}
                className={`text-sm font-semibold px-4 py-1.5 rounded-lg transition-all ${
                  activeTab === 'monthly'
                    ? 'bg-blue-950 text-white'
                    : 'text-gray-400 hover:text-blue-950'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setActiveTab('yearly')}
                className={`text-sm font-semibold px-4 py-1.5 rounded-lg transition-all ${
                  activeTab === 'yearly'
                    ? 'bg-blue-950 text-white'
                    : 'text-gray-400 hover:text-blue-950'
                }`}
              >
                Yearly
                <span className="ml-1.5 text-xs text-green-500 font-bold">−20%</span>
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
            <table className="w-full text-sm">
              {/* Plan Headers */}
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="text-left py-5 px-6 text-gray-400 font-medium w-1/3">Feature</th>
                  {plans.map((plan, i) => (
                    <th key={plan} className={`py-5 px-6 text-center ${planHighlight[i] ? 'bg-blue-950 text-white' : 'text-blue-950'}`}>
                      <div className="flex flex-col items-center gap-1">
                        {planHighlight[i] && (
                          <span className="text-xs bg-blue-700 text-blue-200 px-2 py-0.5 rounded-full font-semibold mb-1">
                            Most Popular
                          </span>
                        )}
                        <span className="font-bold text-base">{plan}</span>
                        <span className={`text-xs font-medium ${planHighlight[i] ? 'text-blue-300' : 'text-gray-400'}`}>
                          {activeTab === 'yearly' && i === 1 ? '$15/mo' : planPrices[i]}
                        </span>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>

              {/* Rows */}
              <tbody>
                {tableRows.map((row, idx) => (
                  <tr
                    key={row.feature}
                    className={`border-b border-gray-50 ${idx % 2 === 0 ? 'bg-gray-50/50' : 'bg-white'}`}
                  >
                    <td className="py-4 px-6 text-gray-500 font-medium">{row.feature}</td>
                    {row.values.map((val, i) => (
                      <td
                        key={i}
                        className={`py-4 px-6 text-center ${planHighlight[i] ? 'bg-blue-950/5' : ''}`}
                      >
                        {typeof val === 'boolean' ? (
                          val ? (
                            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-50 text-blue-600 font-bold text-xs mx-auto">✓</span>
                          ) : (
                            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gray-100 text-gray-300 font-bold text-xs mx-auto">—</span>
                          )
                        ) : (
                          <span className={`font-semibold ${planHighlight[i] ? 'text-blue-950' : 'text-gray-600'}`}>{val}</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>

              {/* CTA Row */}
              <tfoot>
                <tr className="border-t border-gray-100">
                  <td className="py-6 px-6" />
                  {plans.map((plan, i) => (
                    <td key={plan} className={`py-6 px-6 text-center ${planHighlight[i] ? 'bg-blue-950/5' : ''}`}>
                      <Link
                        to="/Contact"
                        className={`inline-block px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                          planHighlight[i]
                            ? 'bg-blue-950 text-white hover:bg-blue-800 shadow-md'
                            : 'border border-gray-200 text-blue-950 hover:bg-gray-50'
                        }`}
                      >
                        {plan === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                      </Link>
                    </td>
                  ))}
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="bg-blue-950 py-24">
        <div className="max-w-3xl mx-auto px-6 text-center space-y-6">
          <h2 className="text-4xl font-extrabold text-white leading-tight">
            Start building better prompts today.
          </h2>
          <p className="text-blue-300 text-base">
            No credit card required. Free plan available. Up and running in minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <Link
              to="/Contact"
              className="px-8 py-3 bg-white text-blue-950 font-bold rounded-xl text-sm hover:bg-blue-50 transition-all shadow-lg"
            >
              Get Started — It's Free
            </Link>
            <Link
              to="/"
              className="px-8 py-3 border border-blue-700 text-blue-300 font-semibold rounded-xl text-sm hover:bg-blue-900 transition-all"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}