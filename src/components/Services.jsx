import React from "react";
import { motion } from "framer-motion";

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  // Service Icons
  const GridIcon = () => (
    <svg
      width="48"
      height="48"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="3"
        y="3"
        width="7"
        height="7"
        rx="1"
        stroke="currentColor"
        strokeWidth="2"
      />
      <rect
        x="14"
        y="3"
        width="7"
        height="7"
        rx="1"
        stroke="currentColor"
        strokeWidth="2"
      />
      <rect
        x="14"
        y="14"
        width="7"
        height="7"
        rx="1"
        stroke="currentColor"
        strokeWidth="2"
      />
      <rect
        x="3"
        y="14"
        width="7"
        height="7"
        rx="1"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );

  const DocumentIcon = () => (
    <svg
      width="48"
      height="48"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <polyline points="14,2 14,8 20,8" stroke="currentColor" strokeWidth="2" />
      <line
        x1="16"
        y1="13"
        x2="8"
        y2="13"
        stroke="currentColor"
        strokeWidth="2"
      />
      <line
        x1="16"
        y1="17"
        x2="8"
        y2="17"
        stroke="currentColor"
        strokeWidth="2"
      />
      <polyline points="10,9 9,9 8,9" stroke="currentColor" strokeWidth="2" />
    </svg>
  );

  const TargetIcon = () => (
    <svg
      width="48"
      height="48"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="2" />
    </svg>
  );

  const TrendingIcon = () => (
    <svg
      width="48"
      height="48"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <polyline
        points="23 6 13.5 15.5 8.5 10.5 1 18"
        stroke="currentColor"
        strokeWidth="2"
      />
      <polyline
        points="17 6 23 6 23 12"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );

  const ShieldIcon = () => (
    <svg
      width="48"
      height="48"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );

  const PresentationIcon = () => (
    <svg
      width="48"
      height="48"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="2"
        y="4"
        width="20"
        height="12"
        rx="2"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path d="M8 21L12 17L16 21" stroke="currentColor" strokeWidth="2" />
      <path d="M12 17V16" stroke="currentColor" strokeWidth="2" />
    </svg>
  );

  const services = [
    {
      icon: <GridIcon />,
      title: "Equity Research Reports",
      description:
        "Detailed fundamental analysis of stocks with buy/sell recommendations",
    },
    {
      icon: <DocumentIcon />,
      title: "Portfolio Advisory",
      description:
        "Personalized portfolio management and asset allocation strategies",
    },
    {
      icon: <TargetIcon />,
      title: "Thematic Research",
      description: "Sector-wise analysis and thematic investment opportunities",
    },
    {
      icon: <TrendingIcon />,
      title: "Market Commentary",
      description: "Daily market updates and macro-economic analysis",
    },
    {
      icon: <ShieldIcon />,
      title: "Risk Management",
      description: "Portfolio risk assessment and hedging strategies",
    },
    {
      icon: <PresentationIcon />,
      title: "Investment Webinars",
      description: "Educational sessions and market outlook presentations",
    },
  ];

  return (
    <section id="services" className="section-padding bg-white">
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
            Our <span className="text-gradient">Services</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg lg:text-xl text-navy-600 max-w-3xl mx-auto"
          >
            Comprehensive research and advisory solutions for all investor types
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
              }}
              className="card p-8 text-center group cursor-pointer"
            >
              <motion.div
                whileHover={{
                  scale: 1.1,
                  rotate: 360,
                  transition: { duration: 0.6, ease: "easeInOut" },
                }}
                className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-primary-100 to-navy-100 rounded-2xl flex items-center justify-center text-primary-600 group-hover:text-primary-700 transition-colors"
              >
                {service.icon}
              </motion.div>

              <h3 className="text-xl font-bold text-navy-900 mb-4 group-hover:text-primary-600 transition-colors">
                {service.title}
              </h3>

              <p className="text-navy-600 leading-relaxed">
                {service.description}
              </p>

              {/* Hover effect line */}
              <motion.div
                initial={{ width: 0 }}
                whileHover={{ width: "60px" }}
                className="h-1 bg-gradient-to-r from-primary-500 to-navy-500 mx-auto mt-6 rounded-full"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
