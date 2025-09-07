import { motion } from "framer-motion";
import { FaVirusCovid, FaLungs, FaPills, FaBrain } from "react-icons/fa6";

export default function Cards() {
  // Data for each card
  const cards = [
    {
      title: "Covid-19 Test",
      icon: <FaVirusCovid className="text-blue-500 text-3xl" />,
      desc: "Accurate and reliable Covid-19 testing to keep you and your family safe.",
      highlight: false,
    },
    {
      title: "Heart Lungs",
      icon: <FaLungs className="text-white text-3xl" />,
      desc: "Specialized care for your heart and lungs with trusted medical experts.",
      highlight: true,
    },
    {
      title: "Supplement",
      icon: <FaPills className="text-blue-500 text-3xl" />,
      desc: "High-quality supplements to support your daily health and wellness needs.",
      highlight: false,
    },
    {
      title: "Mental Health",
      icon: <FaBrain className="text-blue-500 text-3xl" />,
      desc: "Compassionate support and guidance for better mental well-being.",
      highlight: false,
    },
  ];

  return (
    <section className="px-6 py-16">
      {/* Section Heading */}
      <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-center md:text-left">
        Our Consulting Specialists
      </h2>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {cards.map((card, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className={`rounded-2xl shadow-lg border text-center cursor-pointer transform transition-all duration-500 ${
              card.highlight
                ? "bg-blue-600 text-white hover:bg-white hover:text-black"
                : "bg-white hover:bg-blue-600 hover:text-white"
            }`}
          >
            <div className="flex flex-col items-center justify-center h-[250px] px-6 space-y-4">
              <div
                className={`p-4 rounded-full transition-colors duration-500 ${
                  card.highlight ? "bg-blue-500" : "bg-blue-100"
                }`}
              >
                {card.icon}
              </div>
              <h3 className="font-semibold text-lg">{card.title}</h3>
              <p className="text-sm leading-relaxed">{card.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
