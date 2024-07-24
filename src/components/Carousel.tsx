'use client'
import { motion, Variants } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

export default function CarouselDummy() {
    const scrollRef = useRef(null)
    const carouselVariants: Variants = {
        offscreen: {
            y: 300,
            opacity: 0,
        },
        onscreen: {
            y: 0,
            opacity: 1,
        }
    };
    return (
        <div ref={scrollRef} className="w-full bg-[#F2F2F2]">
            <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true }}
                variants={carouselVariants}
                transition={{ type: "spring", duration: 1.5, bounce: 0.4, delay: 0.5 }}
                className="w-full bg-[#F2F2F2] flex items-center justify-center py-20 px-5"
            >
                <Carousel 
                opts={{
                    align: "start",
                  }}
                className="flex items-center justify-center p-5 w-4/5">
                    <CarouselContent>
                        <CarouselItem className="xl:basis-1/3 lg:basis-1/3 md:basis-1/2"><Image src="/car1.png" alt="carousel1--image" height={500} width={800} className="w-full h-full" /></CarouselItem>
                        <CarouselItem className="xl:basis-1/3 lg:basis-1/3 md:basis-1/2"><Image src="/car2.png" alt="carousel2--image" height={500} width={800} className="w-full h-full" /></CarouselItem>
                        <CarouselItem className="xl:basis-1/3 lg:basis-1/3 md:basis-1/2"><Image src="/car3.png" alt="carousel3--image" height={500} width={800} className="w-full h-full" /></CarouselItem>
                        <CarouselItem className="xl:basis-1/3 lg:basis-1/3 md:basis-1/2"><Image src="/car4.png" alt="carousel3--image" height={500} width={800} className="w-full h-full" /></CarouselItem>
                        <CarouselItem className="xl:basis-1/3 lg:basis-1/3 md:basis-1/2"><Image src="/car5.png" alt="carousel3--image" height={500} width={800} className="w-full h-full" /></CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </motion.div>
        </div>
    )
}
