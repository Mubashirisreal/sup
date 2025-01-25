import React from 'react';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

const plans = [
  {
    name: 'Basic',
    price: '$29',
    period: '/month',
    features: [
      '1 CRM integration',
      '500 messages/month',
      'Basic support',
      'Standard response time',
      'Basic analytics'
    ],
    cta: 'Get Started',
    highlighted: false
  },
  {
    name: 'Pro',
    price: '$99',
    period: '/month',
    features: [
      '3 CRM integrations',
      'Unlimited messages',
      'Priority support',
      'Advanced analytics',
      'Custom workflows'
    ],
    cta: 'Start Free Trial',
    highlighted: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    features: [
      'Unlimited integrations',
      'Dedicated account manager',
      'Custom workflows',
      'SLA support',
      'White-label solution'
    ],
    cta: 'Contact Us',
    highlighted: false
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-white">
            Simple Pricing
          </h2>
          <p className="mt-4 text-xl text-gray-300">
            Choose a plan that fits your needs.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`bg-gray-800 rounded-xl p-8 border ${
                plan.highlighted
                  ? 'border-blue-500 shadow-lg shadow-blue-500/20'
                  : 'border-gray-700'
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: plan.highlighted ? 1.05 : 1.02 }}
            >
              <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
              <div className="mt-4 flex items-baseline">
                <span className="text-4xl font-bold text-white">{plan.price}</span>
                <span className="ml-1 text-gray-400">{plan.period}</span>
              </div>
              <ul className="mt-8 space-y-4">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <Check className="w-5 h-5 text-blue-400 mr-3" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`mt-8 w-full py-3 px-6 rounded-full font-semibold ${
                  plan.highlighted
                    ? 'bg-blue-500 text-white hover:bg-blue-600'
                    : 'bg-gray-700 text-white hover:bg-gray-600'
                } transition-colors`}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}