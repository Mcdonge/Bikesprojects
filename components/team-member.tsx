"use client"

import Image from "next/image"
import { Instagram, Linkedin, Twitter } from "lucide-react"

import { Button } from "@/components/ui/button"

interface TeamMemberProps {
  name: string
  role: string
  image: string
  bio: string
}

export function TeamMember({ name, role, image, bio }: TeamMemberProps) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative h-72 overflow-hidden">
        <Image 
          src={image || "/placeholder.svg"} 
          alt={name} 
          fill 
          className="object-cover transition-transform duration-300 group-hover:scale-105" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-8">
        <h3 className="font-bold text-2xl mb-2 text-gray-900">{name}</h3>
        <p className="text-maroon-600 font-medium text-lg mb-4">{role}</p>
        <p className="text-gray-600 mb-6 leading-relaxed">{bio}</p>
        <div className="flex space-x-3">
          <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full hover:bg-maroon-100 transition-colors">
            <Linkedin className="h-5 w-5 text-maroon-600" />
          </Button>
          <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full hover:bg-maroon-100 transition-colors">
            <Twitter className="h-5 w-5 text-maroon-600" />
          </Button>
          <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full hover:bg-maroon-100 transition-colors">
            <Instagram className="h-5 w-5 text-maroon-600" />
          </Button>
        </div>
      </div>
    </div>
  )
}

