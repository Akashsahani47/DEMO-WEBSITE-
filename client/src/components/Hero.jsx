import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center section-padding pt-32"
    >
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-navy-900 leading-tight"
            >
              SEBI Registered
              <br />
              <span className="text-gradient">Research Analyst</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg lg:text-xl text-navy-600 mt-6 max-w-2xl mx-auto lg:mx-0"
            >
              Professional equity research and investment advisory services
              backed by years of market expertise and SEBI compliance
            </motion.p>

            {/* Analyst Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-8 grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto lg:mx-0"
            >
              <div className="text-center lg:text-left">
                <h3 className="text-2xl lg:text-3xl font-bold text-navy-900">
                  BRAJESH MAHESWARI
                </h3>
                <p className="text-navy-600 mt-1">
                  SEBI REGISTERED RESEARCH ANALYST
                </p>
              </div>
              <div className="text-center lg:text-left">
                <h3 className="text-xl lg:text-2xl font-semibold text-navy-900">
                  Contact No: +918163918739
                </h3>
                <p className="text-navy-600 mt-1">SEBI REG NO: INH000007789</p>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button
                onClick={() => scrollToSection("research")}
                className="btn-primary"
              >
                Get Research Reports
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="btn-secondary"
              >
                Book Consultation
              </button>
            </motion.div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative w-full max-w-lg mx-auto">
              {/* Background Decorations */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-100 to-navy-100 rounded-3xl transform rotate-6"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-200 to-navy-200 rounded-3xl transform -rotate-3"></div>

              {/* Main Content Card */}
              <motion.div
                whileHover={{ scale: 1.05, rotateY: 5 }}
                transition={{ duration: 0.3 }}
                className="relative bg-white rounded-3xl p-8 shadow-2xl border-2 border-primary-200"
              >
                {/* Chart SVG */}
                <div className="w-full h-64 mb-6">
                  <svg viewBox="0 0 400 200" className="w-full h-full">
                    {/* Grid lines */}
                    <defs>
                      <pattern
                        id="grid"
                        width="40"
                        height="20"
                        patternUnits="userSpaceOnUse"
                      >
                        <path
                          d="M 40 0 L 0 0 0 20"
                          fill="none"
                          stroke="#e2e8f0"
                          strokeWidth="1"
                        />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />

                    {/* Chart line */}
                    <motion.path
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 2, delay: 1 }}
                      d="M 20 160 Q 80 140 120 120 T 200 80 T 300 60 T 380 40"
                      stroke="#0ea5e9"
                      strokeWidth="3"
                      fill="none"
                      strokeLinecap="round"
                    />

                    {/* Data points */}
                    {[20, 80, 120, 200, 300, 380].map((x, i) => (
                      <motion.circle
                        key={i}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3, delay: 1.2 + i * 0.1 }}
                        cx={x}
                        cy={160 - i * 20}
                        r="4"
                        fill="#0ea5e9"
                      />
                    ))}
                  </svg>
                </div>

                <div className="text-center">
                  <h3 className="text-lg font-semibold text-navy-900 mb-2">
                    Market Performance
                  </h3>
                  <p className="text-navy-600 text-sm">
                    Professional analysis & insights
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
