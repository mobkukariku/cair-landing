// src/modules/landing/components/TimelineContent/Content24.tsx
import { motion } from "framer-motion";

const events2024 = [
    {
        id: 1,
        title: "AI Research Expansion",
        description: "Launched new research initiatives focusing on generative AI and machine learning optimization.",
        date: "Jan 2024",
    },
    {
        id: 2,
        title: "Tech Innovation Hub",
        description: "Opened a state-of-the-art innovation hub for students and startups to collaborate on cutting-edge projects.",
        date: "Apr 2024",
    },
    {
        id: 3,
        title: "Global Partnerships",
        description: "Established collaborations with top universities and tech companies worldwide.",
        date: "Jul 2024",
    },
    {
        id: 4,
        title: "Student Achievements",
        description: "SDU teams won multiple international hackathons and competitions in AI and robotics.",
        date: "Oct 2024",
    },
    {
        id: 5,
        title: "Sustainability Goals",
        description: "Integrated green computing and eco-friendly practices into all research and development activities.",
        date: "Dec 2024",
    },
];

export default function Content24() {
    return (
        <div className="flex flex-col gap-6">
            {events2024.map((event, index) => (
                <motion.div
                    key={event.id}
                    className="p-6 rounded-2xl bg-card shadow-md border border-gray-200"
                    initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                >
                    <h3 className="text-xl font-semibold text-tags">{event.title}</h3>
                    <p className="text-foreground opacity-80 mt-2">{event.description}</p>
                    <span className="text-sm text-gray-400 mt-3 block">{event.date}</span>
                </motion.div>
            ))}
        </div>
    );
}
