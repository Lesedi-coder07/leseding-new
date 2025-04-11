"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="md:hidden">
        <div className="flex justify-center items-center gap-2">
        <Image src="/images/lcs-logo.png" alt="Leseding Consulting Services Logo" width={40} height={40} />
        <p className="text-lg font-bold">LCS</p>
        </div>
      <Button
        variant="ghost"
        size="icon"
        className="fixed z-50 right-5 top-3"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <X className="h-5 w-5" />
        ) : (
          <Menu className="h-5 w-5" />
        )}
      </Button>

      {isOpen && (
        <div className="fixed right-0 w-screen p-20 flex shadow-lg justify-center bg-white">
          <div className="container mt-10 w-screen bg-white flex h-full flex-col items-center justify-center space-y-8">
            <Link
              href="#about"
              className="text-xl font-medium transition-colors hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="#services" 
              className="text-xl font-medium transition-colors hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              href="#clients"
              className="text-xl font-medium transition-colors hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Clients
            </Link>
            <Link
              href="#contact"
              className="text-xl font-medium transition-colors hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}
