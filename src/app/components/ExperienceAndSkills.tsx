"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar, ChevronRight } from "lucide-react";

const experiences = [
  {
    company: "Transilience AI",
    position: "Software Engineer",
    duration: "Jul 2024 - Present",
    description:
      "Building frontend for cybersecurity applications and streaming components for custom streaming endpoints.",
    highlights: [
      "Custom streaming solutions",
      "Cybersecurity interfaces",
      "Real-time data processing",
    ],
  },
  {
    company: "ThoughtGreen Technologies Inc",
    position: "Software Engineer",
    duration: "Feb 2021 - Jul 2024",
    description:
      "Led development of iFinish application, developed user modules with TypeScript, React, and ChartJs.",
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
      "Developed and maintained company website, ensured cross-browser compatibility, and improved website performance.",
    highlights: [
      "Web optimization",
      "Cross-browser testing",
      "Performance tuning",
    ],
  },
];

const skillCategories = [
  {
    name: "Core Technologies",
    skills: ["JavaScript", "TypeScript", "React", "NextJS", "NodeJS"],
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
                      <p className="text-gray-300 mb-4">{exp.description}</p>
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
