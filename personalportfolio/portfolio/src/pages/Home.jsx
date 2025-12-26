import { Navbar } from "../components/Navbar";
import { StarBackground } from "../components/StarComponent";
import { ThemeToggle } from "../components/ThemeToggle";
import { HomeSection } from "../components/HomeSection";
import { AboutSection } from "../components/AboutSection";
import { SkillSection } from "../components/SkillsSection";
import { ProjectSection } from "../components/ProjectSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";

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
            <main>
                <HomeSection/>
                <AboutSection/>
                <SkillSection/>
                <ProjectSection/>
                <ContactSection/>
            </main>
           {/* footer */}
           <Footer/>
        </div>
        </>
    )
}