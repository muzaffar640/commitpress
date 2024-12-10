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

const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "NextJS",
  "NodeJS",
  "ExpressJs",
  "AWS",
  "GraphQL",
  "MongoDB",
  "DynamoDB",
  "MySQL",
  "REST API",
  "Tailwind CSS",
  "Data Visualization",
  "Markdown",
  "Streaming Markdown",
  "OpenAI",
  "AI Front end",
  "Stripe Integration",
  "Razorpay Integration",
  "Cyber Security",
  "Vulnerabiity Prioritization",
];

export default function ExperienceAndSkills() {
  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 font-mono text-cyan-400 text-center animate-fade-in">
          Experience & Skills
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-cyan-400">
              Work Experience
            </h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="bg-gray-900 p-6 rounded-lg shadow-lg animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <h4 className="text-xl font-semibold mb-2">{exp.company}</h4>
                  <p className="text-cyan-400 mb-2">{exp.position}</p>
                  <p className="text-gray-400 mb-4">{exp.duration}</p>
                  <p className="text-gray-300">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-cyan-400">
              Technical Skills
            </h3>
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg animate-fade-in animation-delay-300">
              <ul className="grid grid-cols-2 gap-4 text-gray-300">
                {skills.map((skill, index) => (
                  <li
                    key={index}
                    className="flex items-center space-x-2 hover:text-cyan-400 transition-colors duration-300"
                  >
                    <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
