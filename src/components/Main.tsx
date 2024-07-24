'use client'
import { motion } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import Dummy from "./Dummy"
import CarouselDummy from "./Carousel"
export default function Main() {
    const mainRef = useRef(null)
    return (
        <div ref={mainRef}>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
                viewport={{ once: true }}
                className="w-full py-20 flex flex-col items-center justify-center bg-base-200">
                <div className="w-full flex flex-col items-center justify-center p-8 gap-7">
                    <h1 className="text-4xl font-bold text-center text-[#004956]">Main</h1>
                    <p className="text-center text-[#457077]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="w-full grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 gap-10 p-5">
                    {/*first Card*/}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: .5, ease: "easeInOut", delay: 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center justify-start gap-6 bg-white p-5 rounded-xl border-4 border-base-200 hover:border-[#BAF3E6] cursor-pointer">
                        <div className="w-16 h-14 bg-transparent btn--box border-4 border-[#BAF3E6]"><Image src="/idea.svg" alt="hero--image" height={1000} width={1000} className="w-full h-full" /></div>
                        <div>
                            <h1 className="text-3xl font-bold">Idea Website</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </motion.div>
                    {/*second Card*/}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: .5, ease: "easeInOut", delay: 0.2 }}
                        viewport={{ once: true }}
                        className="flex items-center justify-start gap-6 bg-white p-5 rounded-xl border-4 border-base-200 hover:border-[#BAF3E6] cursor-pointer">
                        <div className="w-16 h-14 bg-transparent btn--box border-4 border-[#BAF3E6]"><Image src="/idea.svg" alt="hero--image" height={1000} width={1000} className="w-full h-full" /></div>
                        <div>
                            <h1 className="text-3xl font-bold">Idea Website</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </motion.div>
                    {/*third Card*/}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: .5, ease: "easeInOut", delay: 0.3 }}
                        viewport={{ once: true }}
                        className="flex items-center justify-start gap-6 bg-white p-5 rounded-xl border-4 border-base-200 hover:border-[#BAF3E6] cursor-pointer">
                        <div className="w-16 h-14 bg-transparent btn--box border-4 border-[#BAF3E6]"><Image src="/idea.svg" alt="hero--image" height={1000} width={1000} className="w-full h-full" /></div>
                        <div>
                            <h1 className="text-3xl font-bold">Idea Website</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </motion.div>
                    {/*fourth Card*/}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: .5, ease: "easeInOut", delay: 0.4 }}
                        viewport={{ once: true }}
                        className="flex items-center justify-start gap-6 bg-white p-5 rounded-xl border-4 border-base-200 hover:border-[#BAF3E6] cursor-pointer">
                        <div className="w-16 h-14 bg-transparent btn--box border-4 border-[#BAF3E6]"><Image src="/idea.svg" alt="hero--image" height={1000} width={1000} className="w-full h-full" /></div>
                        <div>
                            <h1 className="text-3xl font-bold">Idea Website</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </motion.div>
                    {/*fifth Card*/}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: .5, ease: "easeInOut", delay: 0.5 }}
                        viewport={{ once: true }}
                        className="flex items-center justify-start gap-6 bg-white p-5 rounded-xl border-4 border-base-200 hover:border-[#BAF3E6] cursor-pointer">
                        <div className="w-16 h-14 bg-transparent btn--box border-4 border-[#BAF3E6]"><Image src="/idea.svg" alt="hero--image" height={1000} width={1000} className="w-full h-full" /></div>
                        <div>
                            <h1 className="text-3xl font-bold">Idea Website</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </motion.div>
                    {/*sixth Card*/}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: .5, ease: "easeInOut", delay: 0.6 }}
                        viewport={{ once: true }}
                        className="flex items-center justify-start gap-6 bg-white p-5 rounded-xl border-4 border-base-200 hover:border-[#BAF3E6] cursor-pointer">
                        <div className="w-16 h-14 bg-transparent btn--box border-4 border-[#BAF3E6]"><Image src="/idea.svg" alt="hero--image" height={1000} width={1000} className="w-full h-full" /></div>
                        <div>
                            <h1 className="text-3xl font-bold">Idea Website</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </motion.div>
                    {/*seventh Card*/}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: .5, ease: "easeInOut", delay: 0.7 }}
                        viewport={{ once: true }}
                        className="flex items-center justify-start gap-6 bg-white p-5 rounded-xl border-4 border-base-200 hover:border-[#BAF3E6] cursor-pointer">
                        <div className="w-16 h-14 bg-transparent btn--box border-4 border-[#BAF3E6]"><Image src="/idea.svg" alt="hero--image" height={1000} width={1000} className="w-full h-full" /></div>
                        <div>
                            <h1 className="text-3xl font-bold">Idea Website</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </motion.div>
                    {/*eighth Card*/}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: .5, ease: "easeInOut", delay: 0.8 }}
                        viewport={{ once: true }}
                        className="flex items-center justify-start gap-6 bg-white p-5 rounded-xl border-4 border-base-200 hover:border-[#BAF3E6] cursor-pointer">
                        <div className="w-16 h-14 bg-transparent btn--box border-4 border-[#BAF3E6]"><Image src="/idea.svg" alt="hero--image" height={1000} width={1000} className="w-full h-full" /></div>
                        <div>
                            <h1 className="text-3xl font-bold">Idea Website</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </motion.div>
                    {/*ninth Card*/}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: .5, ease: "easeInOut", delay: .9 }}
                        viewport={{ once: true }}
                        className="flex items-center justify-start gap-6 bg-white p-5 rounded-xl border-4 border-base-200 hover:border-[#BAF3E6] cursor-pointer">
                        <div className="w-16 h-14 bg-transparent btn--box border-4 border-[#BAF3E6]"><Image src="/idea.svg" alt="hero--image" height={1000} width={1000} className="w-full h-full" /></div>
                        <div>
                            <h1 className="text-3xl font-bold">Idea Website</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
            <Dummy/>
            <CarouselDummy/>
        </div>
    )
}