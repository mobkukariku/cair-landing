import { motion } from "framer-motion";

export default function Content22() {
    return (
        <div>
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="text-[30px] font-bold"
            >
                2022: Year of Change
            </motion.h2>

            <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="w-[500px] text-gray-300 mt-5"
            >
                In 2022, many significant events took place in the world of technology,
                education, and culture. This year became known as a period of rapid
                growth for online platforms and digital solutions.
            </motion.p>

            <motion.ul
                className="space-y-2 text-tags mt-10"
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: {},
                    visible: {
                        transition: {
                            staggerChildren: 0.2, // delay between list items
                        },
                    },
                }}
            >
                {[
                    {
                        color: "bg-blue-500",
                        text: "📱 Launch of a new social platform for students",
                    },
                    {
                        color: "bg-green-500",
                        text: "🚀 Advancements in space technology and private rocket launches",
                    },
                    {
                        color: "bg-purple-500",
                        text: "🎓 Growing popularity of online courses and educational services",
                    },
                    {
                        color: "bg-pink-500",
                        text: "🎨 Rise of digital art and NFTs",
                    },
                ].map((item, i) => (
                    <motion.li
                        key={i}
                        className="flex items-start gap-2"
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className={`mt-1 w-2 h-2 ${item.color} rounded-full`} />
                        {item.text}
                    </motion.li>
                ))}
            </motion.ul>
        </div>
    );
}
