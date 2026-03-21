import React, { useState } from 'react'
import { Link } from 'react-router-dom'

// ── Pricing Plans ──
const plans = [
  {
    name: 'Free',
    monthly: '$0',
    yearly: '$0',
    desc: 'Perfect for solo builders and hobbyists exploring AI prompting.',
    cta: 'Get Started Free',
    features: [
      '50 prompts / month',
      '1 workspace',
      'Basic prompt editor',
      'Community support',
      '3 model integrations',
      'Public prompt library',
    ],
    notIncluded: [
      'Prompt versioning',
      'Team collaboration',
      'Analytics dashboard',
      'API access',
      'Custom integrations',
      'SSO & SAML',
    ],
  },
  {
    name: 'Pro',
    monthly: '$19',
    yearly: '$15',
    desc: 'For professionals and small teams who ship AI products fast.',
    cta: 'Start Free Trial',
    features: [
      '5,000 prompts / month',
      '5 workspaces',
      'Advanced prompt editor',
      'Priority support',
      'All model integrations',
      'Private prompt library',
      'Prompt versioning',
      'Team collaboration (up to 10)',
      'Analytics dashboard',
      'API access',
    ],
    notIncluded: [
      'Custom integrations',
      'SSO & SAML',
    ],
  },
  {
    name: 'Enterprise',
    monthly: 'Custom',
    yearly: 'Custom',
    desc: 'For large teams with advanced security, compliance, and scale needs.',
    cta: 'Contact Sales',
    features: [
      'Unlimited prompts',
      'Unlimited workspaces',
      'Advanced prompt editor',
      'Dedicated support + SLA',
      'All model integrations',
      'Private prompt library',
      'Prompt versioning',
      'Unlimited team members',
      'Analytics dashboard',
      'API access',
      'Custom integrations',
      'SSO & SAML',
    ],
    notIncluded: [],
  },
]

// ── Comparison Table ──
const tableRows = [
  { feature: 'Prompts per month',      values: ['50', '5,000', 'Unlimited'] },
  { feature: 'Workspaces',             values: ['1', '5', 'Unlimited'] },
  { feature: 'Team members',           values: ['1', 'Up to 10', 'Unlimited'] },
  { feature: 'Prompt versioning',      values: [false, true, true] },
  { feature: 'Team collaboration',     values: [false, true, true] },
  { feature: 'Analytics dashboard',    values: [false, true, true] },
  { feature: 'API access',             values: [false, true, true] },
  { feature: 'All model integrations', values: [false, true, true] },
  { feature: 'Custom integrations',    values: [false, false, true] },
  { feature: 'SSO & SAML',            values: [false, false, true] },
  { feature: 'Dedicated support',      values: [false, false, true] },
  { feature: 'SLA guarantee',          values: [false, false, true] },
]

// ── FAQ Data ──
const faqs = [
  {
    q: 'Can I switch plans anytime?',
    a: 'Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately and billing is prorated.',
  },
  {
    q: 'Is there a free trial for Pro?',
    a: 'Absolutely. Pro comes with a 14-day free trial — no credit card required. Cancel anytime before the trial ends.',
  },
  {
    q: 'What happens if I exceed my prompt limit?',
    a: 'We ll notify you when you are close to your limit. You can upgrade your plan or purchase additional prompt credits.',
  },
  {
    q: 'How does team collaboration work?',
    a: 'On Pro, you can invite up to 10 teammates to your workspace. Everyone can view, edit, comment, and version prompts together in real time.',
  },
  {
    q: 'Which AI models does Promptify support?',
    a: 'We support GPT-4o, GPT-3.5, Claude 3, Mistral, Gemini, and more. Enterprise plans get early access to new model integrations.',
  },
  {
    q: 'Is my data secure?',
    a: 'Yes. We use AES-256 encryption at rest and TLS in transit. Enterprise plans include SOC 2 compliance and custom data retention policies.',
  },
]

export default function Pricing() {
  const [billing, setBilling] = useState('monthly')
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <div className="bg-gray-50 text-blue-950 font-sans">

      {/* ── Page Header ── */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center space-y-5">
        <span className="inline-block text-xs font-semibold tracking-widest uppercase text-blue-400 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
          Simple Pricing
        </span>
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-blue-950">
          Plans for Every <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-blue-700">
            Stage of Growth.
          </span>
        </h1>
        <p className="text-gray-400 text-lg max-w-xl mx-auto leading-relaxed">
          Start free. Scale as you grow. No hidden fees, no surprises — just straightforward pricing built for AI teams.
        </p>

        {/* Billing Toggle */}
        <div className="flex items-center justify-center gap-3 pt-2">
          <button
            onClick={() => setBilling('monthly')}
            className={`text-sm font-semibold px-5 py-2 rounded-xl transition-all ${
              billing === 'monthly'
                ? 'bg-blue-950 text-white shadow-md'
                : 'text-gray-400 hover:text-blue-950'
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBilling('yearly')}
            className={`flex items-center gap-2 text-sm font-semibold px-5 py-2 rounded-xl transition-all ${
              billing === 'yearly'
                ? 'bg-blue-950 text-white shadow-md'
                : 'text-gray-400 hover:text-blue-950'
            }`}
          >
            Yearly
            <span className="text-xs bg-green-100 text-green-600 font-bold px-2 py-0.5 rounded-full">
              Save 20%
            </span>
          </button>
        </div>
      </section>

      {/* ── Pricing Cards ── */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="bg-white border border-gray-100 rounded-2xl p-8 space-y-6 hover:border-blue-200 hover:shadow-lg transition-all flex flex-col"
            >
              {/* Plan Name + Price */}
              <div className="space-y-2">
                <span className="text-xs font-semibold tracking-widest uppercase text-blue-400 bg-blue-50 border border-blue-100 px-2 py-0.5 rounded-full">
                  {plan.name}
                </span>
                <div className="flex items-end gap-1 pt-2">
                  <span className="text-4xl font-extrabold text-blue-950">
                    {billing === 'yearly' ? plan.yearly : plan.monthly}
                  </span>
                  {plan.monthly !== 'Custom' && (
                    <span className="text-gray-400 text-sm mb-1">/mo</span>
                  )}
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">{plan.desc}</p>
              </div>

              {/* Divider */}
              <div className="border-t border-gray-100" />

              {/* Features Included */}
              <ul className="space-y-2.5 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="mt-0.5 w-4 h-4 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-xs font-bold shrink-0">✓</span>
                    {f}
                  </li>
                ))}
                {plan.notIncluded.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-gray-300">
                    <span className="mt-0.5 w-4 h-4 rounded-full bg-gray-100 text-gray-300 flex items-center justify-center text-xs font-bold shrink-0">—</span>
                    {f}
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Link
                to="/Contact"
                className="block text-center px-6 py-3 bg-blue-950 text-white rounded-xl font-semibold text-sm hover:bg-blue-800 transition-all shadow-sm hover:shadow-blue-200"
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* ── Comparison Table ── */}
      <section className="bg-white border-y border-gray-100 py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14 space-y-3">
            <h2 className="text-3xl font-bold text-blue-950">Full Feature Comparison</h2>
            <p className="text-gray-400 text-sm max-w-xl mx-auto">
              A detailed breakdown of everything included in each plan.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100 bg-gray-50">
                  <th className="text-left py-4 px-6 text-gray-400 font-medium w-2/5">Feature</th>
                  {plans.map((plan) => (
                    <th key={plan.name} className="py-4 px-6 text-center font-bold text-blue-950">
                      {plan.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tableRows.map((row, idx) => (
                  <tr
                    key={row.feature}
                    className={`border-b border-gray-50 ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/40'}`}
                  >
                    <td className="py-4 px-6 text-gray-500 font-medium">{row.feature}</td>
                    {row.values.map((val, i) => (
                      <td key={i} className="py-4 px-6 text-center">
                        {typeof val === 'boolean' ? (
                          val ? (
                            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-50 text-blue-600 font-bold text-xs mx-auto">✓</span>
                          ) : (
                            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gray-100 text-gray-300 font-bold text-xs mx-auto">—</span>
                          )
                        ) : (
                          <span className="font-semibold text-gray-700">{val}</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="border-t border-gray-100 bg-gray-50">
                  <td className="py-5 px-6" />
                  {plans.map((plan) => (
                    <td key={plan.name} className="py-5 px-6 text-center">
                      <Link
                        to="/Contact"
                        className="inline-block px-5 py-2 bg-blue-950 text-white rounded-xl text-xs font-bold hover:bg-blue-800 transition-all"
                      >
                        {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                      </Link>
                    </td>
                  ))}
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="max-w-3xl mx-auto px-6 py-24 space-y-6">
        <div className="text-center mb-10 space-y-3">
          <h2 className="text-3xl font-bold text-blue-950">Frequently Asked Questions</h2>
          <p className="text-gray-400 text-sm">
            Can't find what you're looking for? <Link to="/Contact" className="text-blue-500 hover:underline">Reach out to us.</Link>
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white border border-gray-100 rounded-2xl overflow-hidden hover:border-blue-100 transition-all"
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
                  <p className="text-sm text-gray-400 leading-relaxed border-t border-gray-50 pt-4">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="bg-blue-950 py-24">
        <div className="max-w-3xl mx-auto px-6 text-center space-y-6">
          <h2 className="text-4xl font-extrabold text-white leading-tight">
            Still not sure which plan?
          </h2>
          <p className="text-blue-300 text-base">
            Start with Free — no credit card needed. Upgrade whenever you're ready.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <Link
              to="/Contact"
              className="px-8 py-3 bg-white text-blue-950 font-bold rounded-xl text-sm hover:bg-blue-50 transition-all shadow-lg"
            >
              Talk to Sales
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