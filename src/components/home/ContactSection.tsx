'use client';

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
    <section className="py-24 flex justify-center bg-black/10">
      <div className="container px-6 md:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4 text-foreground">
            <span className="text-[#5454e1]">Start Your Project</span> with Us Today
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
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
                    className="h-0.5 bg-primary"
                  />
                )}
              </div>

              <div className="bg-white p-6 rounded-lg border border-border group hover:border-primary transition-all duration-300 shadow-md">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 rounded-full p-4">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-primary mb-2 group-hover:text-primary transition-colors">
                      {step.title}
                    </div>
                    <p className="text-black">{step.description}</p>
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
          <Link
            href="/contact"
            passHref
            className="inline-block text-lg px-6 py-2 bg-[#00008b] hover:bg-blue-700 text-white rounded-lg shadow-md transition-colors duration-300"
          >
            Schedule a Meeting
          </Link>
        </motion.div>
      </div>
    </section>
  );
}