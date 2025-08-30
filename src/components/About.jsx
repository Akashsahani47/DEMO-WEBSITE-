import React from "react";
import { motion } from "framer-motion";

const About = () => {
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

  const CertificateIcon = () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
        fill="currentColor"
      />
    </svg>
  );

  const ExperienceIcon = () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
      <polyline
        points="12,6 12,12 16,14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const EducationIcon = () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22 10V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v4"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M7 20v-4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v4"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path d="M2 10h20" stroke="currentColor" strokeWidth="2" />
    </svg>
  );

  const credentials = [
    {
      icon: <CertificateIcon />,
      title: "SEBI Registration: INH000007789",
      description: "Certified Research Analyst with full regulatory compliance",
    },
    {
      icon: <ExperienceIcon />,
      title: "15+ Years Market Experience",
      description: "Deep expertise in equity research and financial analysis",
    },
    {
      icon: <EducationIcon />,
      title: "CFA & MBA Finance",
      description: "Strong educational background in finance and investments",
    },
  ];

  return (
    <section id="about" className="section-padding bg-navy-50">
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
            About Our <span className="text-gradient">Expertise</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg lg:text-xl text-navy-600 max-w-3xl mx-auto"
          >
            With SEBI registration and years of market experience, we provide
            comprehensive research and advisory services
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Professional Credentials */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h3
              variants={itemVariants}
              className="text-3xl font-bold text-navy-900 mb-8"
            >
              Professional Credentials
            </motion.h3>

            <div className="space-y-6">
              {credentials.map((credential, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-lg border-2 border-primary-200 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600">
                    {credential.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-navy-900 mb-2">
                      {credential.title}
                    </h4>
                    <p className="text-navy-600">{credential.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Philosophy */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 lg:p-12 shadow-2xl border-2 border-primary-200"
          >
            <h3 className="text-3xl font-bold text-navy-900 mb-6">
              Our Philosophy
            </h3>

            <div className="space-y-6">
              <p className="text-navy-700 leading-relaxed">
                We believe in providing research-driven investment advice based
                on fundamental analysis, risk management, and long-term wealth
                creation strategies.
              </p>

              <p className="text-navy-700 leading-relaxed">
                Our approach combines quantitative analysis with qualitative
                insights to deliver actionable investment recommendations while
                maintaining full transparency and compliance.
              </p>
            </div>

            {/* Stats */}
            <div className="flex justify-center mt-8 pt-8 border-t border-navy-100">
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-3xl font-bold text-primary-600 mb-2"
                >
                  15+
                </motion.div>
                <p className="text-navy-600 text-sm">Years Experience</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
