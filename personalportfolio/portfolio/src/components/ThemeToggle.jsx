import { useState } from "react";
import { Sun, Moon} from 'lucide-react';

export function ThemeToggle(){
    const [isDarkMode, setIsDarkMode] = useState(false);
    return <div>
        <button>{isDarkMode ?
         (<Sun className="h-6 w-6 text-yellow-300"/>) : 
         (<Moon className="h-6 w-6 text-blue-300" />)}</button>
    </div>
}