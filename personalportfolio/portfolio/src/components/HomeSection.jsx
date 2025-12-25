import { ArrowDown } from "lucide-react";

export function HomeSection(){
    return (<section id="home" className="relative min-h-screen flex flex-col items-center justify-center px-4">
        <div className="container max-w-4xl mx-auto text-center z-10">
            <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                    <span className="opacity-0 animate-fade-in">Hi, I'm</span>
                    <span className="text-primary opacity-0 animate-fade-in-delay-1"> Amaan</span>
                    <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">Ansari</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-4">
                    Software Engineer with 1+ years of experience in front-end development, proficient in building responsive and scalable web applications. Qualified UGC NET with a strong academic record, holding an MSc in Computer Science with 80% marks. Proven ability to design and implement user-friendly interfaces using JavaScript and modern frameworks like React.js and Next.js.
                </p>

                <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                    <a href="#projects" className="cosmic-button">
                        View My Work
                    </a>
                </div>
            </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
            <span className="text-sm text-muted-foreground mb-2">Scroll</span>
            <ArrowDown className="h-5 w-5 text-primary"/>
        </div>
    </section>)
}