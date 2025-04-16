'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Phone, Globe2, MonitorCheck } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Phone,
    title: 'Schedule a Consultation Call',
    description: 'Discuss your needs and goals, and learn how we can realize your ideas.',
  },
  {
    number: '02',
    icon: Globe2,
    title: 'Explore Solutions and Team Setup',
    description: 'Examine solutions, clarify requirements, and onboard the ideal team for your needs.',
  },
  {
    number: '03',
    icon: MonitorCheck,
    title: 'Kick Off and Monitor the Project',
    description: 'Our team springs into action, keeping you informed and adjusting when necessary.',
  },
];

export default function ContactSection() {
  return (
    <section className="py-24 flex justify-center bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="container px-6 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4 text-white">
            <span className="text-red-500">Start Your Project</span> with Us Today
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
          We&apos;d love to connect with you and figure out how we can contribute to your success.
            Get started with an efficient, streamlined process:
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16 relative">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 z-10 hidden md:block">
                {index < steps.length - 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '2rem' }}
                    transition={{ delay: index * 0.2 + 0.3 }}
                    viewport={{ once: true }}
                    className="h-0.5 bg-red-500"
                  />
                )}
              </div>

              <div className="bg-gray-900 p-6 rounded-lg border border-gray-700 group hover:border-red-500 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="bg-red-500/10 rounded-full p-4">
                    <step.icon className="w-6 h-6 text-red-500" />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-white mb-2 group-hover:text-red-500 transition-colors">
                      {step.title}
                    </div>
                    <p className="text-gray-300">{step.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link href="/contact">
            <Button className="text-lg px-8 py-4 bg-red-500 hover:bg-red-600 text-white rounded-lg shadow-md">
              Schedule a Meeting
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
