import { Navbar } from "../components/Navbar";
import { StarBackground } from "../components/StarComponent";
import { ThemeToggle } from "../components/ThemeToggle";

export function Home(){
    return (
        <>
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
           {/* theme toggle */}
            <ThemeToggle/>
           {/* background effects */}
            <StarBackground/>
           {/* navbar */}
            <Navbar/>
           {/* main content */}

           {/* footer */}
        </div>
        </>
    )
}