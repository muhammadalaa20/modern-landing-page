'use client'
import DesNav from "./DesNav"
import MobNav from "./MobNav"
import { useEffect } from "react"
export default function Header() {
    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 0) {
                document.getElementById('header')?.classList.add('header')
                document.getElementById('desNav')?.classList.add('scale-95')
                document.getElementById('mobNav')?.classList.add('scale-95')

            } else {
                document.getElementById('header')?.classList.remove('header')
                document.getElementById('desNav')?.classList.remove('scale-95')
                document.getElementById('mobNav')?.classList.remove('scale-95')
            }
        }
        window.addEventListener('scroll', onScroll)
        return () => {
            window.removeEventListener('scroll', onScroll)
        }
    })
    return (
        <header className=" w-full sticky top-0 bg-[#BAF3E6]  z-40" id="header">
            {/* Desktop nav */}
            <div className="hidden lg:block xl:block transition-all duration-300 ease-in-out" id="desNav">
                <DesNav />
            </div>
            {/* Mobile nav */}
            <div className="block lg:hidden xl:hidden transition-all duration-300 ease-in-out" id="mobNav">
                <MobNav />
            </div>
        </header>
    )
}