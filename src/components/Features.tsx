import React from 'react';
import { MessageSquare, Workflow, RefreshCw, Database } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: MessageSquare,
    title: 'AI-Powered Chatbot',
    description: 'Our chatbot understands natural language and integrates seamlessly with your CRM.'
  },
  {
    icon: Workflow,
    title: 'Automate Workflows',
    description: 'Automate repetitive tasks and focus on what matters most.'
  },
  {
    icon: RefreshCw,
    title: 'Real-Time Sync',
    description: 'Keep your data updated in real-time with every interaction.'
  },
  {
    icon: Database,
    title: 'Multi-CRM Support',
    description: 'Works with all major CRMs like Salesforce, HubSpot, and Zoho.'
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-white">
            Why Choose SuperBuddy?
          </h2>
          <p className="mt-4 text-xl text-gray-300">
            Transform the way you interact with your management tools.
          </p>
        </motion.div>

        <motion.div 
          className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="p-6 bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-700 hover:border-[#0900FF]/50"
              variants={item}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <feature.icon className="w-12 h-12 text-[#0900FF] mb-6" />
              <h3 className="text-xl font-semibold text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}