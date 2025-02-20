"use client"

import { useState } from "react"

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("")

  return (
    <input
      type="text"
      placeholder="Search..."
      className="w-full p-2 border border-gray-300 rounded text-black"
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  )
}

