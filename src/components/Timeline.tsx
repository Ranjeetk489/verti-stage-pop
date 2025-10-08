import { useState } from "react";
import {
  AccordionRoot,
  AccordionItem,
  AccordionItemTrigger,
  AccordionItemContent,
} from "@chakra-ui/react";
import { CheckCircle2, Circle } from "lucide-react";

interface TimelineStage {
  id: string;
  title: string;
  description: string;
  content: string;
  completed?: boolean;
}

interface TimelineProps {
  stages: TimelineStage[];
}

export function Timeline({ stages }: TimelineProps) {
  const [openItem, setOpenItem] = useState<string[]>([]);

  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Timeline vertical line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[hsl(var(--timeline-line))]" />

      <AccordionRoot
        collapsible
        value={openItem}
        onValueChange={(e) => setOpenItem(e.value)}
        className="space-y-6"
      >
        {stages.map((stage, index) => {
          const isOpen = openItem.includes(stage.id);
          const isCompleted = stage.completed;

          return (
            <AccordionItem
              key={stage.id}
              value={stage.id}
              className="border-none"
            >
              <div className="relative">
                {/* Stage indicator */}
                <div className="absolute left-0 flex items-center justify-center">
                  <div
                    className={`
                      relative z-10 flex h-16 w-16 items-center justify-center rounded-full
                      border-4 border-background transition-all duration-300
                      ${
                        isCompleted
                          ? "bg-gradient-primary text-primary-foreground shadow-glow"
                          : isOpen
                          ? "bg-primary text-primary-foreground shadow-md animate-pulse-glow"
                          : "bg-card text-muted-foreground shadow-sm hover:shadow-md"
                      }
                    `}
                  >
                    {isCompleted ? (
                      <CheckCircle2 className="h-7 w-7" />
                    ) : (
                      <span className="text-lg font-bold">{index + 1}</span>
                    )}
                  </div>
                </div>

                {/* Content card */}
                <div className="ml-24 animate-fade-in">
                  <AccordionItemTrigger
                    className={`
                      rounded-xl border bg-card p-6 shadow-sm transition-all duration-300
                      hover:shadow-md hover:border-primary/50 w-full text-left
                      ${isOpen ? "border-primary shadow-md" : ""}
                    `}
                  >
                    <div className="space-y-1 flex-1">
                      <h3 className="text-xl font-semibold text-card-foreground">
                        {stage.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {stage.description}
                      </p>
                    </div>
                  </AccordionItemTrigger>

                  <AccordionItemContent className="mt-2 overflow-hidden">
                    <div className="rounded-xl border bg-muted/50 p-6 shadow-sm">
                      <p className="text-muted-foreground leading-relaxed">
                        {stage.content}
                      </p>
                    </div>
                  </AccordionItemContent>
                </div>
              </div>
            </AccordionItem>
          );
        })}
      </AccordionRoot>
    </div>
  );
}
