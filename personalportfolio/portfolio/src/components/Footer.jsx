import { ArrowUp } from "lucide-react";


export function Footer(){
    return (<footer className="py-12 px-4 bg-card relative border-amber-400t border-border mt-12 pt-8 flex flex-wrap justify-between items-center">
        <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} AmaanAnsari.co. All rights reserved.</p>

        <a href="#home" className="rounded-full p-2 bg-primary/10 hover:bg-primary/20 text-primary transition-colors">
            <ArrowUp size={20}/>
        </a>
    </footer>)
}