const stats = [
  {
    number: "10+",
    label: "Projects Built",
  },
  {
    number: "15+",
    label: "Technologies",
  },
  {
    number: "100%",
    label: "Responsive",
  },
  {
    number: "Open",
    label: "Remote Work",
  },
];

const HeroStats = () => {
  return (
    <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
      {stats.map((item) => (
        <div
          key={item.label}
          className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
        >
          <h3 className="text-3xl font-bold text-white">
            {item.number}
          </h3>

          <p className="mt-2 text-sm text-gray-400">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
};

export default HeroStats;