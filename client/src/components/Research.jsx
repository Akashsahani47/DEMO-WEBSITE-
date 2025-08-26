import React from "react";
import { motion } from "framer-motion";

const Research = () => {
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

  // Methodology Icons
  const AnalysisIcon = () => (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
      <path
        d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );

  const ChartIcon = () => (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="18"
        y1="20"
        x2="18"
        y2="10"
        stroke="currentColor"
        strokeWidth="2"
      />
      <line
        x1="12"
        y1="20"
        x2="12"
        y2="4"
        stroke="currentColor"
        strokeWidth="2"
      />
      <line
        x1="6"
        y1="20"
        x2="6"
        y2="14"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );

  const SearchIcon = () => (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" />
      <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" />
    </svg>
  );

  const AssessmentIcon = () => (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 11H5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M19 4H15a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );

  const methodology = [
    {
      icon: <AnalysisIcon />,
      title: "Fundamental Analysis",
      description:
        "Financial statement analysis, ratio analysis, and valuation models",
    },
    {
      icon: <ChartIcon />,
      title: "Technical Analysis",
      description: "Chart patterns, trend analysis, and technical indicators",
    },
    {
      icon: <SearchIcon />,
      title: "Industry Research",
      description: "Sector dynamics, competitive landscape, and market trends",
    },
    {
      icon: <AssessmentIcon />,
      title: "Risk Assessment",
      description: "Risk-reward analysis and scenario planning",
    },
  ];

  const sampleReports = [
    {
      title: "Technology Sector Analysis",
      description: "Comprehensive review of IT sector with stock picks",
      recommendation: "BUY",
      date: "Jan 2025",
      color: "bg-green-100 text-green-800",
    },
    {
      title: "Banking Sector Deep Dive",
      description: "Analysis of PSU vs Private banks performance",
      recommendation: "HOLD",
      date: "Dec 2024",
      color: "bg-yellow-100 text-yellow-800",
    },
  ];

  const disclosures = [
    {
      title: "Conflict of Interest",
      description:
        "All potential conflicts of interest are disclosed in our research reports",
      icon: "⚠️",
      color: "bg-red-50 border-red-200",
    },
    {
      title: "Investment Holdings",
      description:
        "Any positions held by analyst or firm in recommended stocks",
      icon: "ℹ️",
      color: "bg-blue-50 border-blue-200",
    },
    {
      title: "Research Independence",
      description:
        "Our research is independent and free from external influence",
      icon: "✅",
      color: "bg-green-50 border-green-200",
    },
  ];

  return (
    <section id="research" className="section-padding bg-navy-50">
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
            Research & <span className="text-gradient">Analysis</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg lg:text-xl text-navy-600 max-w-3xl mx-auto"
          >
            In-depth research methodology and sample reports showcasing our
            analytical expertise
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Sample Reports */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-1 bg-white rounded-2xl p-6 border-2 border-primary-200 shadow-lg"
          >
            <h3 className="text-2xl font-bold text-navy-900 mb-8 text-center">
              Sample Research Reports
            </h3>

            <div className="space-y-6">
              {sampleReports.map((report, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="bg-white rounded-xl p-6 shadow-lg border border-navy-100 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-lg font-semibold text-navy-900">
                      {report.title}
                    </h4>
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${report.color}`}
                    >
                      {report.recommendation}
                    </span>
                  </div>
                  <p className="text-navy-600 text-sm mb-4">
                    {report.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-navy-500 text-sm">{report.date}</span>
                  </div>
                </motion.div>
              ))}

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full btn-primary"
              >
                View Sample Reports
              </motion.button>
            </div>
          </motion.div>

          {/* Research Methodology */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-1 bg-white rounded-2xl p-6 border-2 border-primary-200 shadow-lg"
          >
            <h3 className="text-2xl font-bold text-navy-900 mb-8 text-center">
              Research Methodology
            </h3>

            <div className="space-y-4">
              {methodology.map((method, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-md border border-navy-100"
                >
                  <motion.div
                    className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600"
                    whileHover={{
                      rotate: 360,
                      transition: { duration: 0.6, ease: "easeInOut" },
                    }}
                  >
                    {method.icon}
                  </motion.div>
                  <div>
                    <h4 className="font-semibold text-navy-900 mb-1">
                      {method.title}
                    </h4>
                    <p className="text-navy-600 text-sm">
                      {method.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Mandatory Disclosures */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-1 bg-white rounded-2xl p-6 border-2 border-primary-200 shadow-lg"
          >
            <h3 className="text-2xl font-bold text-navy-900 mb-8 text-center">
              Mandatory Disclosures
            </h3>

            <div className="space-y-6">
              {disclosures.map((disclosure, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className={`p-6 rounded-xl border-2 ${disclosure.color} transition-all duration-300`}
                >
                  <div className="flex items-center space-x-3 mb-3">
                    <span className="text-2xl">{disclosure.icon}</span>
                    <h4 className="font-semibold text-navy-900">
                      {disclosure.title}
                    </h4>
                  </div>
                  <p className="text-navy-700 text-sm">
                    {disclosure.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-600 to-navy-700 rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Access Professional Research Reports
            </h3>
            <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
              Get detailed equity research reports with buy/sell recommendations
              based on comprehensive analysis
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary-600 hover:bg-primary-50 px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Subscribe Now
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Research;
