'use client'
import { motion, Variants } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { FaArrowRight } from "react-icons/fa6"
export default function Dummy() {
    const scrollRef = useRef(null)
    const dummyVariants: Variants = {
        offscreen: {
            y: 50,
            opacity: 0,
        },
        onscreen: {
            y: 0,
            opacity: 1,
        }
    };
    return (
        <div ref={scrollRef}>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
                viewport={{ once: true }}
                className="bg-[#BAF3E6] flex flex-col xl:flex-row lg:flex-row md:flex-row justify-between items-center py-20 px-5">
                <motion.div
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true }}
                    className=""
                    variants={dummyVariants}
                    transition={{ type: "spring", duration: 1, bounce: 0.4, delay: 0.7 }}
                >
                    <Image src="/dummy.png" alt="dummy--image" height={1000} width={1000} className="w-full h-full mb-5 xl:mb-0 lg:mb-0 md:mb-0" />
                </motion.div>
                {/*second div*/}
                <motion.div>
                    {/*Title div*/}
                    <motion.div
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true }}
                        className="w-full p-5"
                        variants={dummyVariants}
                        transition={{ type: "spring", duration: 1, bounce: 0.4, delay: 0.8 }}
                    >
                        <p className="xl:text-4xl lg:text-3xl md:text-2xl text-xl font-bold text-[#004956]">Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
                    </motion.div>
                    {/*li 1 div*/}
                    <motion.div
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true }}
                        className="w-full p-5 flex items-center justify-start gap-5"
                        variants={dummyVariants}
                        transition={{ type: "spring", duration: 1, bounce: 0.4, delay: 0.9 }}
                    >
                        <FaArrowRight className="text-[#004956]" />
                        <p className="text-[#457077] xl:text-lg lg:text-lg md:text-base text-sm">Lorem ipsum dolor sit amet</p>
                    </motion.div>
                    {/*li 2 div*/}
                    <motion.div
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true }}
                        className="w-full p-5 flex items-center justify-start gap-5"
                        variants={dummyVariants}
                        transition={{ type: "spring", duration: 1, bounce: 0.4, delay: 1 }}
                    >
                        <FaArrowRight className="text-[#004956]" />
                        <p className="text-[#457077] xl:text-lg lg:text-lg md:text-base text-sm">Lorem a ipsum d dolor  sit amet  lor sit amet </p>
                    </motion.div>
                    {/*li 3 div*/}
                    <motion.div
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true }}
                        className="w-full p-5 flex items-center justify-start gap-5"
                        variants={dummyVariants}
                        transition={{ type: "spring", duration: 1, bounce: 0.4, delay: 1.1 }}
                    >
                        <FaArrowRight className="text-[#004956]" />
                        <p className="text-[#457077] xl:text-lg lg:text-lg md:text-base text-sm">Lorem ipsum dolor sit amet lor sit amet</p>
                    </motion.div>
                    {/*li 4 div*/}
                    <motion.div
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true }}
                        className="w-full p-5 flex items-center justify-start gap-5"
                        variants={dummyVariants}
                        transition={{ type: "spring", duration: 1, bounce: 0.4, delay: 1.2 }}
                    >
                        <FaArrowRight className="text-[#004956]" />
                        <p className="text-[#457077] xl:text-lg lg:text-lg md:text-base text-sm">Lorem ipsum dolor sit amet lor amet amet amet amet</p>
                    </motion.div>
                </motion.div>
            </motion.div>
        </div>
    )
}
