'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight, Menu, X } from "lucide-react"

export default function Component() {
  const [currentPage, setCurrentPage] = useState(1)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const programs = [
    { title: 'Global Classroom', icon: '🎓', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non egestas ipsum. Aliquam libero turpis, volutpat vel leo ut, tempor faucibus lorem.' },
    { title: 'On the Map', icon: '📍', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non egestas ipsum. Aliquam libero turpis, volutpat vel leo ut, tempor faucibus lorem.' },
    { title: 'Happy Bus', icon: '🚌', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non egestas ipsum. Aliquam libero turpis, volutpat vel leo ut, tempor faucibus lorem.' },
    { title: 'Scale Up', icon: '📈', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non egestas ipsum. Aliquam libero turpis, volutpat vel leo ut, tempor faucibus lorem.' },
    { title: 'Green Leaders', icon: '🌱', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non egestas ipsum. Aliquam libero turpis, volutpat vel leo ut, tempor faucibus lorem.' },
  ]

  const participants = [
    { name: 'Manishi Deldeniya', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non egestas ipsum. Aliquam libero turpis, volutpat vel leo ut, tempor faucibus lorem.' },
    { name: 'Shyamal De Silva', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non egestas ipsum. Aliquam libero turpis, volutpat vel leo ut, tempor faucibus lorem.' },
    { name: 'Januty Bowatte', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non egestas ipsum. Aliquam libero turpis, volutpat vel leo ut, tempor faucibus lorem.' },
    { name: 'John Doe', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non egestas ipsum. Aliquam libero turpis, volutpat vel leo ut, tempor faucibus lorem.' },
    { name: 'Jane Smith', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non egestas ipsum. Aliquam libero turpis, volutpat vel leo ut, tempor faucibus lorem.' },
    { name: 'Alex Johnson', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non egestas ipsum. Aliquam libero turpis, volutpat vel leo ut, tempor faucibus lorem.' },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-blue-600 text-white">
        <div className="container mx-auto px-8 md:px-16">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Image
                src="/images/White-Blue-Logo.png"
                alt="AIESEC Logo"
                width={120}
                height={40}
              />
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => setCurrentPage(1)} className="hover:text-blue-200">Home</button>
              <button onClick={() => setCurrentPage(2)} className="hover:text-blue-200">Projects</button>
              <button onClick={() => setCurrentPage(3)} className="hover:text-blue-200">Impact</button>
            </div>
            <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden bg-blue-600 px-4 py-2">
            <button onClick={() => { setCurrentPage(1); setMobileMenuOpen(false); }} className="block py-2 w-full text-left">Home</button>
            <button onClick={() => { setCurrentPage(2); setMobileMenuOpen(false); }} className="block py-2 w-full text-left">Projects</button>
            <button onClick={() => { setCurrentPage(3); setMobileMenuOpen(false); }} className="block py-2 w-full text-left">Impact</button>
          </div>
        )}
      </nav>

      {/* Page Content */}
      <div className="pt-16">
        {currentPage === 1 && (
          <div className="space-y-12">
            {/* Hero Section */}
            <section className="relative h-[500px]">
              <Image
                src="/images/cover-home.jpg"
                alt="Home Cover"
                width={1280}
                height={720}
                className="absolute inset-0 w-full h-full object-cover z-0"
              />
              <div className="container mx-auto px-8 md:px-16 h-full flex items-center relative z-10">
                <div className="max-w-2xl">
                  <Image
                    src="/images/GV-HORIZONTAL-WHITE.png"
                    alt="Global Volunteer Logo"
                    width={200}
                    height={100}
                    className="mb-6"
                  />
                  <h1 className="text-4xl md:text-6xl font-bold mb-4">Unleash your potential</h1>
                  <p className="text-lg mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non egestas ipsum. Aliquam libero turpis, volutpat vel leo ut, tempor faucibus lorem.</p>
                  <Button onClick={() => setCurrentPage(2)} className="bg-blue-600 text-white">Sign up Now</Button>
                </div>
              </div>
            </section>

            {/* Info Sections */}
            <section className="container mx-auto px-8 md:px-16 py-12">
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="What is AIESEC?"
                    width={300}
                    height={200}
                    className="mb-4 rounded-lg"
                  />
                  <h2 className="text-2xl font-bold mb-4">What is AIESEC?</h2>
                  <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non egestas ipsum. Aliquam libero turpis, volutpat vel leo ut, tempor faucibus lorem.</p>
                  <Button variant="outline">Learn More</Button>
                </div>
                <div>
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="What is Global Volunteering"
                    width={300}
                    height={200}
                    className="mb-4 rounded-lg"
                  />
                  <h2 className="text-2xl font-bold mb-4">What is Global Volunteering</h2>
                  <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non egestas ipsum. Aliquam libero turpis, volutpat vel leo ut, tempor faucibus lorem.</p>
                  <Button variant="outline">Sign up Now</Button>
                </div>
              </div>
            </section>

            {/* Statistics Section */}
            <section className="container mx-auto px-8 md:px-16 py-12 bg-gray-50">
              <h2 className="text-2xl font-bold mb-8 text-center">Why through AIESEC in University of Moratuwa</h2>
              <div className="grid grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold mb-2">1st</div>
                  <p>AIESEC in University of Moratuwa is one of the first local committees in AIESEC in Sri Lanka</p>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">1000+</div>
                  <p>More than +1000 Exchanges</p>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">100%</div>
                  <p>Quality experience for the Exchange participants</p>
                </div>
              </div>
            </section>

            {/* Impact Section */}
            <section className="container mx-auto px-8 md:px-16 py-12">
              <h2 className="text-2xl font-bold mb-8 text-center">Impact made by our Exchange Participants</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {participants.slice(0, 3).map((participant, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <Image
                        src={`/placeholder.svg?height=100&width=100`}
                        alt={participant.name}
                        width={100}
                        height={100}
                        className="rounded-full mx-auto mb-4"
                      />
                      <h3 className="text-xl font-bold mb-2 text-center">{participant.name}</h3>
                      <p className="text-center text-muted-foreground">{participant.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="text-center mt-8">
                <Button variant="outline">See more</Button>
              </div>
            </section>
          </div>
        )}

        {currentPage === 2 && (
          <div className="container mx-auto px-8 md:px-16 py-12">
            <div className="relative h-[300px] mb-12">
              <Image
                src="/placeholder.svg?height=720&width=1280"
                alt="Projects Cover"
                width={1280}
                height={720}
                className="rounded-lg w-full h-full object-cover"
              />
              <h1 className="text-3xl font-bold text-center absolute inset-0 flex items-center justify-center text-white z-10">Sustainable Development Goals</h1>
            </div>

            {/* SDG Logo */}
            <div className="flex justify-center mb-12">
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt="Youth 4 Global Goals"
                width={200}
                height={200}
                className="rounded-full"
              />
            </div>

            <p className="text-center max-w-2xl mx-auto mb-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non egestas ipsum. Aliquam libero turpis, volutpat vel leo ut, tempor faucibus lorem.</p>

            {/* Programs Grid */}
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {programs.map((program, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <Image
                      src={`/placeholder.svg?height=80&width=80`}
                      alt={`${program.title} logo`}
                      width={80}
                      height={80}
                      className="mb-4"
                    />
                    <h3 className="text-xl font-bold mb-2">{program.title}</h3>
                    <p className="text-muted-foreground">{program.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-8">
              <Button onClick={() => setCurrentPage(3)} className="bg-blue-600 text-white">Find more</Button>
            </div>
          </div>
        )}

        {currentPage === 3 && (
          <div className="container mx-auto px-8 md:px-16 py-12">
            <div className="relative h-[300px] mb-12">
              <Image
                src="/placeholder.svg?height=720&width=1280"
                alt="Impact Cover"
                width={1280}
                height={720}
                className="rounded-lg w-full h-full object-cover"
              />
              <h1 className="text-3xl font-bold text-center absolute inset-0 flex items-center justify-center text-white z-10">Ready to make a Global Impact</h1>
            </div>

            {/* Hovering Image Placeholders */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-12">
              {[...Array(6)].map((_, index) => (
                <div key={index} className="relative overflow-hidden rounded-lg group">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt={`Impact Image ${index + 1}`}
                    width={400}
                    height={300}
                    className="transition-transform duration-300 transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <p className="text-white text-lg font-bold">Impact Story {index + 1}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-center max-w-2xl mx-auto mb-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non egestas ipsum. Aliquam libero turpis, volutpat vel leo ut, tempor faucibus lorem.</p>

            {/* Participant Profiles */}
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
              {participants.map((participant, index) => (
                <Card key={index} className="overflow-hidden group">
                  <CardContent className="p-6">
                    
                    <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                      <div className="relative h-[200px] mb-4 overflow-hidden rounded-lg">
                        <Image
                          src={`/placeholder.svg?height=200&width=300`}
                          alt={participant.name}
                          layout="fill"
                          objectFit="cover"
                          className="transition-transform duration-300 transform group-hover:scale-110"
                        />
                      </div>
                    </Link>
                    <h3 className="text-xl font-bold mb-2 text-center">{participant.name}</h3>
                    <p className="text-muted-foreground text-center">{participant.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Button className="bg-blue-600 text-white">Sign up Now</Button>
            </div>
          </div>
        )}

        {/* Footer */}
        <footer className="bg-gray-100 py-6 mt-12">
          <div className="container mx-auto px-8 md:px-16">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="font-bold">AIESEC in University of Moratuwa</p>
              <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0">
                <div className="text-sm text-gray-600 text-center md:text-left flex flex-wrap justify-center md:justify-start">
                  <span className="mx-2">Email: aiesecmora@gmail.com</span>
                  <span className="mx-2">Mobile: +94 71 XXX XXX</span>
                  <span className="mx-2">Hotline: +94 70 XXX XXX</span>
                </div>
                <Image
                  src="/placeholder.svg?height=50&width=100"
                  alt="AIESEC Logo"
                  width={100}
                  height={50}
                  className="md:ml-4"
                />
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}