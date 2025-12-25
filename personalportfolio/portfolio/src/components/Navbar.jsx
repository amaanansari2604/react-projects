import { useEffect, useState } from "react"
import { cn } from "../lib/utils"

const navItems = [
    {name: "Home", href: "#home"},
    {name: "About", href: "#about"},
    {name: "Skills", href: "#skills"},
    {name: "Projects", href: "#projects"},
    {name: "Contact", href: "#contact"},
]

export function Navbar(){
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.screenY > 10)
        }

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])
    return <nav className={cn("fixed w-full z-40 transition-all duration-300",
        isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
    )}>

        <div className="container flex items-center justify-between">
            <a href="#home" className="text-xl font-bold text-primary items-center">
                <span className="relative z-10">
                    <span className="text-glow text-foreground">Amaan Ansari</span> Portfolio
                </span>
            </a>

            {/* desktop version */}

            <div>
                {navItems.map((item,key) => (
                    <a href={item.href}>{item.name}</a>
                ))}
            </div>
            {/* mobile nav */}
        </div>
    </nav>
}