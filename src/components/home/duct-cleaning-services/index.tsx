import { motion } from "framer-motion";
import BenefitsCard from "./benefits-card";
import ProcessSteps from "./process-steps";
import BeforeAfter from "./before-after";
import { Button } from "@/components/ui/button";

const benefits = [
  {
    icon: "Lungs",
    title: "Improved Air Quality",
    description: "Remove dust, allergens, and pollutants from your air ducts to breathe cleaner, healthier air."
  },
  {
    icon: "Gauge",
    title: "Enhanced Efficiency",
    description: "Clean ducts allow your HVAC system to operate more efficiently, reducing energy consumption."
  },
  {
    icon: "CalendarCheck",
    title: "Extended System Life",
    description: "Regular duct cleaning helps extend HVAC lifespan by reducing strain and preventing damage."
  }
];

const processSteps = [
  { number: 1, title: "Inspection", description: "We thoroughly inspect your duct system to assess cleaning needs." },
  { number: 2, title: "Preparation", description: "We set up specialized equipment and prepare the workspace." },
  { number: 3, title: "Cleaning", description: "Professional cleaning using advanced tools and techniques." },
  { number: 4, title: "Final Inspection", description: "We verify all work and demonstrate the improved air quality." }
];

export default function DuctCleaningSection() {
  return (
    <section className="relative py-16 md:py-10 bg-background text-foreground" id="duct-cleaning">
      <div className="container mx-auto px-4 relative z-10">

        {/* Section Header */}
        <motion.div
          className="max-w-2xl mx-auto text-center mb-2"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
           
        </motion.div>

        {/* Benefits Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-2xl p-6 backdrop-blur-md shadow-xl hover:shadow-purple-500/30 transition-all duration-300 border border-border"
            >
              <BenefitsCard
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
              />
            </motion.div>
          ))}
        </div>

        {/* Process Section */}
        <motion.div
          className="rounded-2xl p-10 md:p-14 bg-gradient-to-br from-secondary to-primary/10 shadow-lg mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-3xl font-semibold text-center mb-8 text-white">
            Our Duct Cleaning Process
          </h3>
          <ProcessSteps steps={processSteps} />
        </motion.div>

        {/* Before/After Showcase */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-3xl font-semibold mb-8 text-center bg-gradient-to-r from-purple-400 to-primary bg-clip-text text-transparent">
            See The Difference
          </h3>
          <BeforeAfter />
        </motion.div>

        {/* CTA Section */}
        <motion.div
  className="rounded-2xl p-10 md:p-14 text-center bg-gradient-to-br from-[#1e1b4b] via-[#4435a5] to-[#6d28d9] shadow-2xl border border-white/10"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8, ease: 'easeOut' }}
>
  <h3 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-5 drop-shadow-md">
    Breathe Clean. Breathe Easy.
  </h3>
  <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8 font-medium">
    Let us clear the air — book a professional duct cleaning and feel the difference in every breath.
  </p>
  <div className="flex flex-wrap justify-center gap-4">
    <Button className="h-12 px-6 bg-white text-[#4435a5] font-bold hover:bg-white/90 shadow-lg rounded-full" size="lg">
      Schedule Now
    </Button>
    <Button
      variant="outline"
      className="h-12 px-6 border-white text-white hover:bg-white/10 rounded-full"
      size="lg"
    >
      Get a Free Quote
    </Button>
  </div>
</motion.div>

      </div>
    </section>
  );
}
