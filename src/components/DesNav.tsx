import Image from "next/image"
import Link from "next/link"
import { Button } from "./ui/button"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

export default function DesNav() {
    return (
        <div className="desNav w-full px-20 lg:px-24 xl:px-32 py-5 flex justify-between items-center transition-all duration-400 ease-in-out">
            <div className="logo flex items-center justify-center" id="logo">
                <Link href='/'><Image src="/idea.svg" height={50} width={50} alt="logo" className="icon"/></Link>
                <h1 className="leading-tight pt-2">IDEA <br /> Idea</h1>
            </div>
            <div className="nav flex items-center">
                <Link href='/' className="p-3 home text-[#004956]">Home</Link>
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="w-56 flex flex-col">
                                    <Link href='/' className="p-3">Link </Link >
                                    <Link href='/' className="p-3">Link </Link >
                                    <Link href='/' className="p-3">Link </Link >
                                    <Link href='/' className="p-3">Link </Link >
                                    <Link href='/' className="p-3">Link </Link >
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Item Two</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="w-56 flex flex-col">
                                    <Link href='/' className="p-3">Link </Link >
                                    <Link href='/' className="p-3">Link </Link >
                                    <Link href='/' className="p-3">Link </Link >
                                    <Link href='/' className="p-3">Link </Link >
                                    <Link href='/' className="p-3">Link </Link >
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Item Three</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="w-56 flex flex-col">
                                    <Link href='/' className="p-3">Link </Link >
                                    <Link href='/' className="p-3">Link </Link >
                                    <Link href='/' className="p-3">Link </Link >
                                    <Link href='/' className="p-3">Link </Link >
                                    <Link href='/' className="p-3">Link </Link >
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Item Four</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="w-56 flex flex-col">
                                    <Link href='/' className="p-3">Link </Link >
                                    <Link href='/' className="p-3">Link </Link >
                                    <Link href='/' className="p-3">Link </Link >
                                    <Link href='/' className="p-3">Link </Link >
                                    <Link href='/' className="p-3">Link </Link >
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
                <div className="h-10 w-[1px] border border-gray-400 mx-5"></div>
                <div className="flex items-center gap-5">
                    <Button variant="ghost" className="btn">Login</Button>
                    <Button className="btn">Register</Button>
                </div>
            </div>
        </div>
    )
}