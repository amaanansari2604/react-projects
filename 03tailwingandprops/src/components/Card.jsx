import React from 'react'

export default function Card({username, btnText="visit me", someObj}) {
    console.log(someObj, " props ")
  return (
    <div className="flex flex-col items-center gap-6 p-7 md:flex-row md:gap-8 rounded-2xl">
    <div>
      <img className="size-48 shadow-xl rounded-md" alt="" src="https://i.pinimg.com/736x/f8/f6/7b/f8f67b8ca9ec9d9a806409914ee3e84a.jpg" />
    </div>
    <div className="flex items-center md:items-start">
      <span className="text-2xl font-medium">{username}</span>
      <span className="font-medium text-sky-500">The Anti-Patterns</span>
      <span className="flex gap-2 font-medium text-gray-600 dark:text-gray-400">
        <span>No. 4</span>
        <span>·</span>
        <span>{btnText}</span>
      </span>
    </div>
  </div>
  )
}
