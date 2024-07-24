'use client'
import { Button } from "./ui/button"
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { useState } from "react";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTrigger
} from "@/components/ui/sheet"
import { CiMenuFries } from "react-icons/ci";
import Image from "next/image"
import Link from "next/link"
export default function MobNav() {
    const [openThree, setOpenThree] = useState(false)
    const [openOne, setOpenOne] = useState(false)
    const [openTwo, setOpenTwo] = useState(false)
    const [openFour, setOpenFour] = useState(false)
    const menuOne = () => {
        setOpenOne(!openOne)
        setOpenTwo(false)
        setOpenThree(false)
        setOpenFour(false)
    }
    const menuTwo = () => {
        setOpenTwo(!openTwo)
        setOpenOne(false)
        setOpenThree(false)
        setOpenFour(false)
    }
    const menuThree = () => {
        setOpenThree(!openThree)
        setOpenOne(false)
        setOpenTwo(false)
        setOpenFour(false)
    }
    const menuFour = () => {
        setOpenFour(!openFour)
        setOpenOne(false)
        setOpenTwo(false)
        setOpenThree(false)
    }
    return (
        <div className="mobNav bg-[#BAF3E6] w-full flex items-center justify-between px-5 py-5">
            <div className="logo flex items-center justify-center" id="logo">
                <Link href='/'><Image src="/idea.svg" height={50} width={50} alt="logo" className="icon"/></Link>
                <h1 className="leading-tight pt-2">IDEA<br />Idea</h1>
            </div>
            <div className="flex items-center">
                <Sheet>
                    <SheetTrigger>
                        <CiMenuFries className="text-3xl hover:text-black" />
                    </SheetTrigger>
                    <SheetContent side="bottom">
                        <SheetHeader>
                            <div className="logo flex items-center" id="logo">
                                <Link href='/'><Image src="/idea.svg" height={50} width={50} alt="logo" /></Link>
                                <h1 className="leading-tight pt-2">IDEA<br />Idea</h1>
                            </div>
                        </SheetHeader>
                        <div className="py-10 flex flex-col overflow-auto">
                            <Link href='/' className="p-3 text-[#004956] home w-fit">Home</Link>
                            <div className="p-3 link-one" >
                                <Link href='/' className="flex items-center justify-between" onClick={menuOne}>
                                    <h1>Item One</h1>
                                    {openOne ? <FaMinus /> : <FaPlus />}
                                </Link>
                                <div className={`${openOne ? '' : 'hidden'} menu-one transition-all duration-300 ease-in-out`} id="menu-one">
                                    <ul className="w-56 flex flex-col">
                                        <Link href='/' className="p-3">Link </Link >
                                        <Link href='/' className="p-3">Link </Link >
                                        <Link href='/' className="p-3">Link </Link >
                                        <Link href='/' className="p-3">Link </Link >
                                        <Link href='/' className="p-3">Link </Link >
                                    </ul>
                                </div>
                            </div>
                            <div className="p-3 link-two" >
                                <Link href='/' className="flex items-center justify-between" onClick={menuTwo}>
                                    <h1>Item Two</h1>
                                    {openTwo ? <FaMinus /> : <FaPlus />}
                                </Link>
                                <div className={`${openTwo ? '' : 'hidden'} menu-two transition-all duration-300 ease-in-out`} id="menu-two">
                                    <ul className="w-56 flex flex-col">
                                        <Link href='/' className="p-3">Link </Link >
                                        <Link href='/' className="p-3">Link </Link >
                                        <Link href='/' className="p-3">Link </Link >
                                        <Link href='/' className="p-3">Link </Link >
                                        <Link href='/' className="p-3">Link </Link >
                                    </ul>
                                </div>
                            </div>
                            <div className="p-3 link-three" >
                                <Link href='/' className="flex items-center justify-between" onClick={menuThree}>
                                    <h1>Item Three</h1>
                                    {openThree ? <FaMinus /> : <FaPlus />}
                                </Link>
                                <div className={`${openThree ? '' : 'hidden'} menu-three transition-all duration-300 ease-in-out`} id="menu-three">
                                    <ul className="w-56 flex flex-col">
                                        <Link href='/' className="p-3">Link </Link >
                                        <Link href='/' className="p-3">Link </Link >
                                        <Link href='/' className="p-3">Link </Link >
                                        <Link href='/' className="p-3">Link </Link >
                                        <Link href='/' className="p-3">Link </Link >
                                    </ul>
                                </div>
                            </div>
                            <div className="p-3 link-four" >
                                <Link href='/' className="flex items-center justify-between" onClick={menuFour}>
                                    <h1>Item Four</h1>
                                    {openFour ? <FaMinus /> : <FaPlus />}
                                </Link>
                                <div className={`${openFour ? '' : 'hidden'} menu-four transition-all duration-300 ease-in-out`} id="menu-four">
                                    <ul className="w-56 flex flex-col">
                                        <Link href='/' className="p-3">Link </Link >
                                        <Link href='/' className="p-3">Link </Link >
                                        <Link href='/' className="p-3">Link </Link >
                                        <Link href='/' className="p-3">Link </Link >
                                        <Link href='/' className="p-3">Link </Link >
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="h-[1px] w-full border border-gray-400 mb-5"></div>
                        <div className="flex flex-col items-center gap-5">
                            <Button variant="ghost" className="btn--hero w-[250px]">Login</Button>
                            <Button className="btn--hero w-[250px]">Register</Button>
                        </div>
                    </SheetContent>
                </Sheet>

            </div>
        </div>
    )
}