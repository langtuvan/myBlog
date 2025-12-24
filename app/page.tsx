"use client";

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  CodeBracketIcon,
  CubeTransparentIcon,
  CloudIcon,
  CommandLineIcon,
} from "@heroicons/react/24/outline";

const navigation = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const skills = [
  {
    name: "Frontend Development",
    description:
      "Expert in React, Next.js, TypeScript, and modern JavaScript. Building responsive and performant user interfaces with Tailwind CSS.",
    icon: CodeBracketIcon,
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    name: "State Management",
    description:
      "Proficient in Redux, Zustand, and React Context for complex application state management.",
    icon: CubeTransparentIcon,
    technologies: ["Redux", "Zustand", "React Query", "Context API"],
  },
  {
    name: "Backend Integration",
    description:
      "Experience with REST APIs, GraphQL, and real-time data with WebSockets.",
    icon: CloudIcon,
    technologies: ["Node.js", "NestJs", "GraphQL", "Socket.io"],
  },
  {
    name: "Tools & Workflow",
    description:
      "Version control with Git, CI/CD pipelines, and modern development tools.",
    icon: CommandLineIcon,
    technologies: ["Git", "Webpack", "Vite"],
  },
];

const projects = [
  {
    name: "Booking Management System",
    description:
      "Built a full-stack e-commerce solution with Next.js, NestJs, and MongoDB. Implemented Booking cart, and admin dashboard.",
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    technologies: ["React", "NestJs", "MongoDB", "socket.io"],
    link: "https://nextapp-blush-kappa.vercel.app/",
  },
  {
    name: "Real-Time Chat Application",
    description:
      "Developed a real-time messaging app using Socket.io, React, and NestJs. Features include private messaging, group chats, and file sharing.",
    image:
      "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    technologies: ["React", "Socket.io", "NestJs", "PostgreSQL"],
    link: "#",
  },
  {
    name: "Task Management Dashboard",
    description:
      "Created a Kanban-style task board with drag-and-drop functionality, team collaboration features, and real-time updates.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    technologies: ["Next.js", "TypeScript", "Prisma", "Tailwind"],
    link: "#",
  },
  {
    name: "Weather Forecast App",
    description:
      "Built a weather application with location-based forecasts, interactive maps, and weather alerts using OpenWeather API.",
    image:
      "https://images.unsplash.com/photo-1561484930-998b6a7b22e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    technologies: ["React", "API Integration", "Geolocation", "Charts"],
    link: "#",
  },
];

const footerNavigation = {
  resources: [
    { name: "GitHub", href: "https://github.com" },
    { name: "Portfolio", href: "#projects" },
    { name: "Resume", href: "#" },
    { name: "Blog", href: "#" },
  ],
  connect: [
    { name: "langtuvan@hotmail.com", href: "mailto:langtuvan@hotmail.com" },
    { name: "0938 887 467", href: "tel:0938887467" },
    { name: "Ho Chi Minh City, Vietnam", href: "#" },
  ],
  social: [
    {
      name: "GitHub",
      href: "#",
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "X",
      href: "#",
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "#",
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
        </svg>
      ),
    },
  ],
};

export default function DeveloperPortfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Header */}
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          aria-label="Global"
          className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                &lt;Dev /&gt;
              </span>
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-200"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm/6 font-semibold text-gray-900 hover:text-indigo-600 dark:text-white dark:hover:text-indigo-400"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
              href="#contact"
              className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-400"
            >
              Hire Me
            </a>
          </div>
        </nav>
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 dark:bg-gray-900 dark:sm:ring-gray-100/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                  &lt;Dev /&gt;
                </span>
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-200"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10 dark:divide-white/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-white/5"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#contact"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-indigo-600 hover:bg-gray-50 dark:text-indigo-400 dark:hover:bg-white/5"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Hire Me
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      <main className="relative isolate">
        {/* Background */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-4 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
        >
          <div
            style={{
              clipPath:
                "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
            }}
            className="aspect-1108/632 w-277 flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25"
          />
        </div>

        {/* Hero section */}
        <div id="about" className="px-6 pt-14 lg:px-8">
          <div className="mx-auto max-w-3xl pt-24 text-center sm:pt-40">
            <div className="mb-8 inline-flex items-center rounded-full border border-indigo-600/20 bg-indigo-50 px-4 py-1.5 text-sm font-medium text-indigo-700 dark:border-indigo-400/20 dark:bg-indigo-950/50 dark:text-indigo-300">
              <CodeBracketIcon className="mr-2 h-5 w-5" />
              Available for hire
            </div>
            <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-7xl dark:text-white">
              JavaScript Developer
              <span className="block text-indigo-600 dark:text-indigo-400">
                React Specialist
              </span>
            </h1>
            <p className="mt-8 text-lg font-medium text-pretty text-gray-600 sm:text-xl/8 dark:text-gray-300">
              Building modern, responsive web applications with clean code and
              intuitive user experiences. Specialized in React, Next.js, and the
              JavaScript ecosystem.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#projects"
                className="rounded-md bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:hover:bg-indigo-400"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="text-sm/6 font-semibold text-gray-900 hover:text-indigo-600 dark:text-white dark:hover:text-indigo-400"
              >
                Contact Me <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>

        {/* Skills section */}
        <div
          id="skills"
          className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8"
        >
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
              Technical Skills
            </h2>
            <p className="mt-6 text-lg/8 text-gray-600 dark:text-gray-300">
              Expertise across the full stack with a focus on modern JavaScript
              frameworks and tools.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-md transition-shadow dark:border-white/10 dark:bg-white/5"
              >
                <skill.icon
                  aria-hidden="true"
                  className="h-10 w-10 text-indigo-600 dark:text-indigo-400"
                />
                <h3 className="mt-6 text-lg font-semibold text-gray-900 dark:text-white">
                  {skill.name}
                </h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  {skill.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {skill.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 dark:bg-indigo-950/50 dark:text-indigo-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Projects section */}
        <div
          id="projects"
          className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8"
        >
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
              Featured Projects
            </h2>
            <p className="mt-6 text-lg/8 text-gray-600 dark:text-gray-300">
              A selection of my recent work showcasing different technologies
              and approaches.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.name}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-lg transition-all dark:border-white/10 dark:bg-white/5"
              >
                <div className="relative h-56 overflow-hidden bg-gray-100 dark:bg-gray-800">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {project.name}
                  </h3>
                  <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center rounded-md bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800 dark:bg-gray-800 dark:text-gray-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6">
                    <a
                      href={project.link}
                      className="inline-flex items-center text-sm font-semibold text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
                    >
                      View Project
                      <span aria-hidden="true" className="ml-1">
                        →
                      </span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Contact CTA section */}
        <div id="contact" className="relative isolate mt-32 sm:mt-40">
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="relative overflow-hidden bg-gradient-to-br from-indigo-600 to-purple-600 px-6 py-20 shadow-2xl sm:rounded-3xl sm:px-16 md:py-24 dark:from-indigo-500 dark:to-purple-500">
              <div className="relative mx-auto max-w-2xl text-center">
                <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                  Let's Build Something Amazing
                </h2>
                <p className="mt-6 text-lg text-indigo-100">
                  I'm currently available for freelance work and exciting
                  projects. Let's discuss how I can help bring your ideas to
                  life.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <a
                    href="mailto:contact@example.com"
                    className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    Get in Touch
                  </a>
                  <a
                    href="#"
                    className="text-sm/6 font-semibold text-white hover:text-indigo-100"
                  >
                    Download Resume <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
              <svg
                viewBox="0 0 1024 1024"
                aria-hidden="true"
                className="absolute top-1/2 left-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
              >
                <circle
                  r={512}
                  cx={512}
                  cy={512}
                  fill="url(#gradient)"
                  fillOpacity="0.7"
                />
                <defs>
                  <radialGradient id="gradient">
                    <stop stopColor="#7775D6" />
                    <stop offset={1} stopColor="#E935C1" />
                  </radialGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mx-auto max-w-7xl px-6 pt-20 pb-8 sm:pt-24 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <span className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
              &lt;Dev /&gt;
            </span>
            <p className="text-sm/6 text-balance text-gray-600 dark:text-gray-400">
              Crafting exceptional web experiences with modern JavaScript and
              React. Let's build the future together.
            </p>
            <div className="flex gap-x-6">
              {footerNavigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-300"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon aria-hidden="true" className="size-6" />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div>
              <h3 className="text-sm/6 font-semibold text-gray-900 dark:text-white">
                Resources
              </h3>
              <ul role="list" className="mt-6 space-y-4">
                {footerNavigation.resources.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-sm/6 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm/6 font-semibold text-gray-900 dark:text-white">
                Connect
              </h3>
              <ul role="list" className="mt-6 space-y-4">
                {footerNavigation.connect.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-sm/6 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 dark:border-white/10">
          <p className="text-sm/6 text-gray-600 dark:text-gray-400">
            &copy; 2025 langtuvan@hotmail.com . All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
