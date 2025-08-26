import React from "react";
import { motion } from "framer-motion";

const Blog = () => {
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

  const marketUpdates = [
    "Regular updates on market trends, sector analysis, and investment opportunities",
    "Articles covering fundamental and technical analysis insights",
    "Market insights from our certified research analysts",
    "Educational posts on investment strategies and financial planning",
  ];

  const regulatoryUpdates = [
    "Latest SEBI circulars and regulatory changes affecting investors",
    "Updates on tax implications and policy changes",
    "Compliance requirements and investor protection measures",
    "Important announcements relevant to retail and institutional investors",
  ];

  return (
    <section id="blog" className="section-padding bg-white">
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
            Blog & <span className="text-gradient">Insights</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg lg:text-xl text-navy-600 max-w-3xl mx-auto"
          >
            Stay informed with our latest market analysis and educational
            content
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Market Updates & Analysis */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary-50 to-navy-50 rounded-2xl p-8 lg:p-12 border-2 border-primary-200"
          >
            <div className="mb-8">
              <motion.div
                className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center text-primary-600 mb-6"
                whileHover={{
                  rotate: 360,
                  transition: { duration: 0.6, ease: "easeInOut" },
                }}
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polyline
                    points="22 12 18 12 15 21 9 3 6 12 2 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.div>
              <h3 className="text-3xl font-bold text-navy-900 mb-4">
                Market Updates & Analysis
              </h3>
            </div>

            <div className="space-y-4 mb-8">
              {marketUpdates.map((update, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3"
                >
                  <div className="flex-shrink-0 w-2 h-2 bg-primary-500 rounded-full mt-3"></div>
                  <p className="text-navy-700 leading-relaxed">{update}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-xl p-6 shadow-lg border border-navy-100"
            >
              <h4 className="font-semibold text-navy-900 mb-2">
                Latest Market Insight
              </h4>
              <p className="text-navy-600 text-sm mb-4">
                "Technology sector shows strong fundamentals despite recent
                market volatility. Key picks for long-term investors..."
              </p>
              <div className="flex justify-between items-center text-sm text-navy-500">
                <span>Published: Jan 15, 2025</span>
                <span>5 min read</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Regulatory Updates */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-navy-50 to-primary-50 rounded-2xl p-8 lg:p-12 border-2 border-primary-200"
          >
            <div className="mb-8">
              <motion.div
                className="w-16 h-16 bg-navy-100 rounded-2xl flex items-center justify-center text-navy-600 mb-6"
                whileHover={{
                  rotate: 360,
                  transition: { duration: 0.6, ease: "easeInOut" },
                }}
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="3"
                    y="4"
                    width="18"
                    height="18"
                    rx="2"
                    ry="2"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <line
                    x1="16"
                    y1="2"
                    x2="16"
                    y2="6"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <line
                    x1="8"
                    y1="2"
                    x2="8"
                    y2="6"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <line
                    x1="3"
                    y1="10"
                    x2="21"
                    y2="10"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </motion.div>
              <h3 className="text-3xl font-bold text-navy-900 mb-4">
                Regulatory Updates
              </h3>
            </div>

            <div className="space-y-4 mb-8">
              {regulatoryUpdates.map((update, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3"
                >
                  <div className="flex-shrink-0 w-2 h-2 bg-navy-500 rounded-full mt-3"></div>
                  <p className="text-navy-700 leading-relaxed">{update}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-xl p-6 shadow-lg border border-navy-100"
            >
              <h4 className="font-semibold text-navy-900 mb-2">
                Recent SEBI Update
              </h4>
              <p className="text-navy-600 text-sm mb-4">
                "New regulations for investment advisers come into effect from
                Q2 2025. Here's what investors need to know..."
              </p>
              <div className="flex justify-between items-center text-sm text-navy-500">
                <span>Published: Jan 12, 2025</span>
                <span>3 min read</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
