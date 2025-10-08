import { Timeline } from "@/components/Timeline";

const timelineStages = [
  {
    id: "stage-1",
    title: "Project Initiation",
    description: "Define scope and objectives",
    content: "Establish project goals, identify stakeholders, and create initial documentation. This phase sets the foundation for successful project execution.",
    completed: true,
  },
  {
    id: "stage-2",
    title: "Requirements Gathering",
    description: "Collect and document requirements",
    content: "Conduct stakeholder interviews, analyze business needs, and document functional and non-functional requirements for the project.",
    completed: true,
  },
  {
    id: "stage-3",
    title: "Design & Planning",
    description: "Create technical architecture",
    content: "Develop system architecture, create wireframes and mockups, and establish technical specifications. Plan resource allocation and timeline.",
    completed: false,
  },
  {
    id: "stage-4",
    title: "Development Setup",
    description: "Environment configuration",
    content: "Set up development environments, configure version control, establish CI/CD pipelines, and prepare necessary tools and frameworks.",
    completed: false,
  },
  {
    id: "stage-5",
    title: "Core Development",
    description: "Build main features",
    content: "Implement core functionality, develop user interfaces, integrate backend services, and ensure code quality through reviews and testing.",
    completed: false,
  },
  {
    id: "stage-6",
    title: "Testing Phase",
    description: "Quality assurance",
    content: "Conduct unit testing, integration testing, and user acceptance testing. Identify and resolve bugs, optimize performance.",
    completed: false,
  },
  {
    id: "stage-7",
    title: "Documentation",
    description: "Create comprehensive docs",
    content: "Write technical documentation, user guides, API references, and maintenance procedures. Ensure knowledge transfer materials are complete.",
    completed: false,
  },
  {
    id: "stage-8",
    title: "Deployment Preparation",
    description: "Ready for launch",
    content: "Prepare production environment, conduct security audits, create deployment scripts, and establish monitoring and alerting systems.",
    completed: false,
  },
  {
    id: "stage-9",
    title: "Production Launch",
    description: "Go live",
    content: "Deploy to production, monitor system performance, address any immediate issues, and ensure smooth transition to live operations.",
    completed: false,
  },
  {
    id: "stage-10",
    title: "Post-Launch Support",
    description: "Maintenance and optimization",
    content: "Provide ongoing support, gather user feedback, implement improvements, and ensure system stability and performance optimization.",
    completed: false,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Project Timeline
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Track your project progress through 10 carefully planned stages
          </p>
        </div>

        <Timeline stages={timelineStages} />
      </div>
    </div>
  );
};

export default Index;
