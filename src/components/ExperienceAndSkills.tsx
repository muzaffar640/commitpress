"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar, ChevronRight } from "lucide-react";

const experiences = [
  {
    company: "Transilience AI",
    position: "Founding Software Engineer",
    duration: "Jul 2024 - Present",
    description:
      "We are building Transilience AI to make Cybersecurity Engineers' life Joyful. Working on frontend development for cybersecurity applications and building streaming components for our custom streaming endpoint",
    highlights: [
      "Custom streaming solutions",
      "Cybersecurity interfaces",
      "Real-time data processing",
    ],
  },
  {
    company: "ThoughtGreen Technologies Inc",
    position: "Senior Software Engineer",
    duration: "Feb 2021 - Jul 2024",
    description:
      "Led development of iFinish application, developed user modules with TypeScript, React, and ChartJs.  Developed SFP Insights full-stack admin portal using GraphQL APIs with React, AWS Amplify, and DynamoDB, integrating stakeholder project management functionalities.Front-end developer for Smart Analytical Model (SAM) and Vital Monitoring System (VMS) health & safety applications, utilizing React and TypeScript with AI/ML integration. Built and Maintained several modules for Sardar Vallabhbhai Patel National Police Academy - NPA, a civil service training institution",
    highlights: [
      "Front-end architecture",
      "Data visualization",
      "Team leadership",
    ],
  },
  {
    company: "Ojeel",
    position: "Software Engineer",
    duration: "Feb 2020 - Feb 2021",
    description:
      "I developed and maintained the company website, integrating data from REST APIs and ensuring cross-browser compatibility across major browsers. I also enhanced the website’s performance by 32%, added new features, and collaborated closely with the UI/UX design team for smoother functionality",
    highlights: [
      "Web optimization",
      "Cross-browser testing",
      "Performance tuning",
    ],
  },
  {
    company: "Ananth Technologies",
    position: "Junior Front End Developer ",
    duration: "May 2019 - Feb 2020",
    description:
      "Successfully transitioned from mechanical design to software engineering, building 6 responsive websites with HTML, CSS, JavaScript. Exposure to creating SPA using ReactJS, by using the concept of virtual DOM",
    highlights: ["Web Development", "ReactJs", "Responsive Design"],
  },
  {
    company: "Ananth Technologies",
    position: "Computer Aided Design Engineer",
    duration: "Apr 2016 - May 2019",
    description:
      "I specialize in designing, analyzing, and refining concrete structures in Tilt-Up Technology, ensuring compliance with engineering standards using AotoCAD and Revit",
    highlights: [
      "Structural Design",
      "Concrete Engineering",
      "TiltUpTechnology",
      "AutoCAD",
      "Revit",
    ],
  },
];

const skillCategories = [
  {
    name: "Core Technologies",
    skills: [
      "JavaScript",
      "TypeScript",
      "React",
      "NextJS",
      "NodeJS",
      "AWS Amplify",
    ],
  },
  {
    name: "Backend & Database",
    skills: [
      "ExpressJs",
      "GraphQL",
      "MongoDB",
      "DynamoDB",
      "MySQL",
      "REST API",
    ],
  },
  {
    name: "Frontend & Design",
    skills: [
      "Tailwind CSS",
      "Data Visualization",
      "Streaming Markdown",
      "AI Front end",
      "Storybook",
      "Jest",
    ],
  },
  {
    name: "Cloud & Security",
    skills: ["AWS", "Cyber Security", "Vulnerability Prioritization"],
  },
  {
    name: "Integrations",
    skills: ["OpenAI", "Stripe Integration", "Razorpay Integration"],
  },
];

export default function ExperienceAndSkills() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl font-bold mb-16 text-cyan-400 text-center">
          Experience & Expertise
        </h2>

        {/* Experience Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-cyan-400">
            Professional Journey
          </h3>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Building2 className="text-cyan-400" size={20} />
                        <h4 className="text-xl font-semibold text-white">
                          {exp.company}
                        </h4>
                      </div>
                      <div className="flex items-center gap-2 mb-3 text-gray-300">
                        <Calendar size={16} />
                        <span>{exp.duration}</span>
                      </div>
                      <p className="text-cyan-400 font-medium mb-3">
                        {exp.position}
                      </p>
                      <div className="text-gray-300 mb-4">
                        {exp.description.split(". ").map((sentence, i) => (
                          <p key={i}>• {sentence.trim()}.</p>
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {exp.highlights.map((highlight, i) => (
                          <Badge
                            key={i}
                            variant="secondary"
                            className="bg-gray-700 text-cyan-400"
                          >
                            {highlight}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-cyan-400">
            Technical Expertise
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-all duration-300"
              >
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold mb-4 text-cyan-400">
                    {category.name}
                  </h4>
                  <ul className="space-y-2">
                    {category.skills.map((skill, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                      >
                        <ChevronRight size={16} className="text-cyan-400" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
