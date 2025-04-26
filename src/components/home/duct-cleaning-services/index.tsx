import { motion } from "framer-motion";
import BeforeAfter from "./before-after";




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

        

        {/* Process Section */}
       

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
        
    
 


      </div>
    </section>
  );
}
