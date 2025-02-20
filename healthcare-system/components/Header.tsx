"use client"

import SignInButton from "./SignInButton"
import { ModeToggle } from "./ModeToggle"

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-background">
      <h1 className="text-2xl font-bold">Healthcare Management System</h1>
      <div className="flex items-center space-x-4">
        <ModeToggle />
        <SignInButton />
      </div>
    </header>
  )
}

