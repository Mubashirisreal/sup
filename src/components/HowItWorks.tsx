import React from 'react';
import { Link2, MessageCircle, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

const steps = [
  {
    icon: Link2,
    title: 'Connect Your Management tool',
    description: 'Integrate your Management tools in just a few clicks. Our seamless integration process ensures you are up and running in minutes.'
  },
  {
    icon: MessageCircle,
    title: 'Chat with Your Data',
    description: 'Ask questions, update records, and automate tasks using natural language. Let AI handle the complexity for you.'
  },
  {
    icon: TrendingUp,
    title: 'See Results',
    description: 'Watch your productivity soar with automated workflows and real-time updates. Track improvements in real-time.'
  }
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-gray-950">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-white">
            How It Works
          </h2>
          <p className="mt-4 text-xl text-gray-300">
            Simple, Fast, and Effective.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div 
              key={index} 
              className="relative h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 right-0 w-full h-0.5 bg-gray-800" />
              )}
              <div className="relative h-full bg-gray-800 rounded-xl p-8 border border-gray-700 flex flex-col">
                <div className="w-12 h-12 bg-blue-900/50 rounded-full flex items-center justify-center mb-6">
                  <step.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-300 flex-grow">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}