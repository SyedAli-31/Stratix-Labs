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
      <div className="container px-4 md:px-8 lg:px-16">
        {/* Section Heading */}
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

        {/* Step Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-white p-5 md:p-6 lg:p-8 rounded-xl border border-border group hover:border-primary transition-all duration-300 shadow-md flex flex-col h-full">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 rounded-full p-3 shrink-0">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h3 className="text-base md:text-lg font-semibold text-primary mb-1 group-hover:text-primary transition-colors leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-sm text-black leading-normal">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
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
