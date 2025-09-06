import { FaVirusCovid, FaLungs, FaPills, FaBrain } from "react-icons/fa6";

export default function Cards() {
  const cards = [
    {
      title: "Covid-19 Test",
      icon: <FaVirusCovid className="text-blue-500 text-3xl" />,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem velit viverra amet faucibus.",
      highlight: false,
    },
    {
      title: "Heart Lungs",
      icon: <FaLungs className="text-white text-3xl" />,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem velit viverra amet faucibus.",
      highlight: true,
    },
    {
      title: "Suppliment",
      icon: <FaPills className="text-blue-500 text-3xl" />,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem velit viverra amet faucibus.",
      highlight: false,
    },
    {
      title: "Mental Health",
      icon: <FaBrain className="text-blue-500 text-3xl" />,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem velit viverra amet faucibus.",
      highlight: false,
    },
  ];

  return (
    <div className="px-6">
      <h2 className="text-4xl font-bold leading-[10px] mb-16 text-center md:text-left max-sm:text-[30px]">
        Our Consulting Specialists
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className={`rounded-2xl shadow-md border text-center transition-all duration-500 transform cursor-pointer w-[280px] h-[240px] mx-auto ${
              card.highlight
                ? "bg-blue-600 text-white hover:bg-white hover:text-black"
                : "bg-white hover:bg-blue-600 hover:text-white"
            }`}
          >
            <div className="flex flex-col items-center justify-center h-full px-4 space-y-4">
              <div
                className={`p-3 rounded-full transition-all duration-500 ${
                  card.highlight
                    ? "bg-blue-500 group-hover:bg-blue-100"
                    : "bg-blue-100 group-hover:bg-blue-200"
                }`}
              >
                {card.icon}
              </div>
              <h3 className="font-bold text-lg">{card.title}</h3>
              <p className="text-sm">{card.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
