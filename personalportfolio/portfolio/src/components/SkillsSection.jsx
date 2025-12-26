import { act, useState } from "react"
import { cn } from "../lib/utils"

const skills = [
    // frontend
    {name:"HTML/CSS", level: 95, category:"frontend"},
    {name:"Javascript", level: 80, category:"frontend"},
    {name:"Reactjs", level: 80, category:"frontend"},
    {name:"TypeScript", level: 85, category:"frontend"},
    {name:"Nextjs", level: 95, category:"frontend"},
    {name:"Tailwind CSS", level: 80, category:"frontend"},
    // backend
    {name:"Python", level: 95, category:"backend"},
    {name:"Nodejs", level: 95, category:"backend"},
    {name:"PostgreSQL", level: 95, category:"backend"},
    {name:"Express", level: 95, category:"backend"},
    //tools
    {name:"GIT/GITHUB", level: 95, category:"tools"},
    {name:"VS CODE", level: 95, category:"tools"},
    {name:"AWS", level: 95, category:"tools"},
    {name:"ADOBE", level: 95, category:"tools"},
]

const categories = ["all", "frontend", "backend", "tools"]

export function SkillSection(){

    const [activeCategory, setActiveCategory] = useState("all")

    const filterSkills = skills.filter((skill)=>(
        activeCategory === "all" || skill.category === activeCategory
    ))
    return (<section id="skills" className="py-24 px-4 relative bg-secondary/30">
                <div className="container mx-auto max-w-5xl">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                        My <span className="text-primary">Skills</span>
                    </h2>

                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {categories.map((category, key)=>(
                            <button key={key} onClick={() => setActiveCategory(category)} 
                            className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                                activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bd-secondary"
                            )}>
                                {category}
                            </button>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols2 lg:grid-cols-3 gap-6">
                        {filterSkills.map((skill, key)=>(
                                <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                                    <div className="text-left mb-4">
                                        <h3 className="font-semibold text-lg">{skill.name}</h3>
                                    </div>
                                    <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                                        <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out" style={{width:skill.level + "%"}}>
                                        </div>
                                    </div>
                                    <div className="text-right mt-1">
                                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                                    </div>
                                </div>
                        ))}
                    </div>
                </div>
    </section>)
}