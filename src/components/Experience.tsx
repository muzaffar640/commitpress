const experiences = [
  {
    company: "Transilience AI",
    position: "Software Engineer",
    duration: "Jul 2024 - Present",
    description:
      "Building frontend for cybersecurity applications and streaming components for custom streaming endpoints.",
  },
  {
    company: "ThoughtGreen Technologies Inc",
    position: "Software Engineer",
    duration: "Feb 2021 - Jul 2024",
    description:
      "Led development of iFinish application, developed user modules with TypeScript, React, and ChartJs.",
  },
  {
    company: "Ojeel",
    position: "Software Engineer",
    duration: "Feb 2020 - Feb 2021",
    description:
      "Developed and maintained company website, ensured cross-browser compatibility, and improved website performance.",
  },
];

export default function Experience() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 font-mono text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 text-center animate-fade-in">
          Professional Experience
        </h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg animate-fade-in hover:shadow-xl transition-shadow duration-300"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <h3 className="text-xl font-semibold mb-2 text-cyan-400">
                {exp.company}
              </h3>
              <p className="text-gray-300 mb-2">{exp.position}</p>
              <p className="text-gray-400 mb-4 text-sm">{exp.duration}</p>
              <p className="text-gray-300">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
