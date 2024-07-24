'use client'
import { motion, Variants } from "framer-motion"
import { useRef } from "react";
import Image from "next/image";
import { Button } from "./ui/button";
export default function Hero() {
    const scrollRef = useRef(null)
    const heroVariants: Variants = {
        offscreen: {
            y: 20,
            opacity: 0,
        },
        onscreen: {
            y: 0,
            opacity:1,
        }
    };
    return (
        <div className="hero bg-[#BAF3E6] w-full min-h-[80vh] flex flex-col gap-7 pt-20 text-[#004956]">
            <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true }}
            >
                <motion.div variants={heroVariants} transition={{ type: "spring", duration: .5, bounce: 0.4 }}>
                    <h1 className="hero--title text-center xl:text-4xl lg:text-4xl md:text-3xl text-xl font-bold">Welcome to our website</h1>
                </motion.div>
            </motion.div>
            <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true }}
                className="hero--subtitle text-md w-11/12 xl:w-3/4 lg:w-3/4 md:w-4/5 text-center p-3"
            >
                <motion.div variants={heroVariants} transition={{ type: "spring", duration: 1, bounce: 0.4 }}>
                    <p >
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
                        Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
                        mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum
                        lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per
                        conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero.
                    </p>
                </motion.div>
            </motion.div>
            <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true }}
            >
                <motion.div
                    variants={heroVariants}
                    transition={{ type: "spring", duration: 1.3, bounce: 0.4 }}
                    className="flex flex-col xl:flex-row lg:flex-row md:flex-row items-center gap-5">
                    <Button variant="ghost" className="btn--hero w-[200px]">Login</Button>
                    <Button className="btn--hero w-[200px]">Register</Button>
                </motion.div>
            </motion.div>
            <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true }}
            >
                <motion.div
                    variants={heroVariants}
                    transition={{ type: "spring", duration: 1.5, bounce: 0.4 }}
                    className="w-full flex items-center justify-center"
                >
                    <Image src="/hero.gif" alt="hero--image" height={1000} width={1000} className="hero--image xl:w-10/12 lg:w-10/12 md:w-10/12 w-full" unoptimized />
                </motion.div>
            </motion.div>
            <div ref={scrollRef} className="w-full flex flex-col items-center justify-center bg-white">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: .6, ease: "easeInOut", delay: 0.2 }}
                    viewport={{ once: true }}
                    className="bg-white w-full flex flex-col items-center justify-center text-center py-20"
                >
                    <h1 className="text-4xl text-center font-bold mb-4 w-11/12 xl:w-3/4 lg:w-3/4 md:w-4/5">Welcome to our new website which was made with nextjs and tailwind</h1>
                    <p className="text-[#949393] text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.</p>
                    <div className="flex flex-col xl:flex-row lg:flex-row md:flex-row items-center gap-16 p-8">
                        <div className="flex items-center gap-6">
                            <div className="w-16 h-14 bg-transparent btn--box border-4 border-[#BAF3E6]"><Image src="/idea.svg" alt="hero--image" height={1000} width={1000} className="w-full h-full" /></div>
                            <h1 className="text-3xl font-bold">Idea Website</h1>
                        </div>
                        <div className="flex items-center gap-6">
                            <div className="w-16 h-14 bg-transparent btn--box border-4 border-[#BAF3E6]"><Image src="/idea.svg" alt="hero--image" height={1000} width={1000} className="w-full h-full" /></div>
                            <h1 className="text-3xl font-bold">Idea Website</h1>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}