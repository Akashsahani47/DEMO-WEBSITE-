import React from "react";
import { motion } from "framer-motion";

const Compliance = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="compliance" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl lg:text-5xl font-bold text-navy-900 mb-6"
          >
            Compliance & <span className="text-gradient">Disclosures</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg lg:text-xl text-navy-600 max-w-3xl mx-auto"
          >
            Full transparency and regulatory compliance
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Regulatory Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary-50 to-navy-50 rounded-2xl p-8 lg:p-12 border-2 border-primary-200"
          >
            <h3 className="text-3xl font-bold text-navy-900 mb-8">
              Regulatory Information
            </h3>

            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold text-navy-900 mb-2">
                  SEBI Registration Number:
                </h4>
                <p className="text-lg text-navy-600 font-mono">INH000007789</p>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-navy-900 mb-2">
                  Compliance Officer:
                </h4>
                <p className="text-navy-600">Mr. Rajesh Kumar</p>
                <p className="text-navy-500">
                  Email: compliance@financewise.com
                </p>
                <p className="text-navy-500">Phone: +91-9876543210</p>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-navy-900 mb-2">
                  Grievance Officer:
                </h4>
                <p className="text-navy-600">Ms. Priya Sharma</p>
                <p className="text-navy-500">
                  Email: grievance@financewise.com
                </p>
                <p className="text-navy-500">Phone: +91-9876543211</p>
              </div>
            </div>
          </motion.div>

          {/* Important Disclaimers */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary-50 to-navy-50 rounded-2xl p-8 lg:p-12 border-2 border-primary-200"
          >
            <h3 className="text-3xl font-bold text-navy-900 mb-8">
              Important Disclaimers
            </h3>

            <div className="space-y-6 text-navy-600">
              <p className="leading-relaxed">
                • Investment in securities market are subject to market risks,
                read all the related documents carefully before investing.
              </p>

              <p className="leading-relaxed">
                • Past performance may not be indicative of future results.
              </p>

              <p className="leading-relaxed">
                • We do not guarantee returns or provide any assurance on
                investment performance.
              </p>

              <p className="leading-relaxed">
                • All investment decisions should be made based on your risk
                profile and financial goals.
              </p>

              <p className="leading-relaxed">
                • For investor grievances, visit:{" "}
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.05 }}
                  className="text-primary-600 hover:text-primary-700 font-semibold underline"
                >
                  SEBI SCORES Portal
                </motion.a>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Compliance;
