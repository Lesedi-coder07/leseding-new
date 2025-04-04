import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle, Code, Headphones, Mail, MapPin, Phone, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import Form from "@/components/form"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Navigation */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/images/lcs-logo.png"
              alt="Leseding Consulting Services Logo"
              width={40}
              height={40}
              className="h-10 w-auto"
            />
            <span className="hidden text-xl font-bold sm:inline-block">Leseding Consulting Services</span>
          </div>
          <nav className="hidden md:flex md:gap-6 lg:gap-10">
            <Link href="#about" className="text-sm font-medium transition-colors hover:text-primary">
              About
            </Link>
            <Link href="#services" className="text-sm font-medium transition-colors hover:text-primary">
              Services
            </Link>
            <Link href="#clients" className="text-sm font-medium transition-colors hover:text-primary">
              Clients
            </Link>
            <Link href="#contact" className="text-sm font-medium transition-colors hover:text-primary">
              Contact
            </Link>
          </nav>
          <Button asChild className="hidden bg-primary hover:bg-primary/90 sm:flex">
            <Link href="#contact">
              Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-radial from-white via-blue-50 to-green-50 py-20 md:py-32">
          <div className="container relative z-10 flex flex-col items-center text-center">
            <div className="mb-8 flex justify-center">
              <Image
                src="/images/lcs-logo.png"
                alt="Leseding Consulting Services Logo"
                width={120}
                height={120}
                className="h-28 w-auto"
              />
            </div>
            <h1 className="max-w-3xl text-4xl text-black font-bold tracking-tight sm:text-5xl md:text-6xl">
              Leading ICT Solutions for Forward-Thinking Businesses
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
              Leseding Consulting Services delivers innovative technology solutions that drive business growth and
              digital transformation.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-primary text-white hover:bg-primary/90" asChild>
                <Link href="#services">Our Services</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-white hover:bg-primary/10" asChild>
                <Link href="#contact">Contact Us</Link>
              </Button>
            </div>
          </div>
          <div className="absolute inset-0 z-0 opacity-20">
            <div className="h-full w-full gradient-bg"></div>
          </div>
        </section>

           {/* Clients Section */}
           <section id="clients" className="py-20">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                Trusted by Industry Leaders
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                We're proud to work with some of South Africa's most respected brands
              </p>
            </div>
            <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-3">
              <div className="flex flex-col items-center justify-center rounded-lg border bg-white p-8 shadow-sm transition-all hover:shadow-md hover:border-primary/30">
                <Image
                  src="/fnbb.png"
                  alt="FNB logo"
                  width={160}
                  height={80}
                  className="h-16 w-auto object-contain"
                />
                <p className="mt-4 text-center text-sm text-black font-medium">First National Bank</p>
              </div>
              <div className="flex flex-col items-center justify-center rounded-lg border bg-white p-8 shadow-sm transition-all hover:shadow-md hover:border-secondary/30">
                <Image
                  src="/fr.png"
                  alt="FirstRand logo"
                  width={160}
                  height={80}
                  className="h-16 w-auto object-contain"
                />
                <p className="mt-4 text-center text-sm text-black font-medium">FirstRand</p>
              </div>
              <div className="flex flex-col items-center justify-center rounded-lg border bg-white p-8 shadow-sm transition-all hover:shadow-md hover:border-accent/30">
                <Image
                  src="/bmw.png"
                  alt="BMW logo"
                  width={160}
                  height={80}
                  className="h-16 w-auto object-contain"
                />
                <p className="mt-4 text-center text-sm text-black font-medium">BMW</p>
              </div>

            
              
              
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                About Leseding Consulting Services
              </h2>
              <p className="mt-6 text-lg text-muted-foreground">
                Leseding Consulting Services (LCS) is a leading South African ICT company specializing in innovative
                technology solutions. With a proven track record of excellence, we partner with businesses to deliver
                transformative digital experiences that drive growth and efficiency.
              </p>
              <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3">
                <div className="flex flex-col items-center rounded-lg border p-6 shadow-sm transition-all hover:shadow-md">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mt-4 text-lg font-medium">Expertise</h3>
                  <p className="mt-2 text-center text-sm text-muted-foreground">
                    Over a decade of experience in delivering cutting-edge ICT solutions
                  </p>
                </div>
                <div className="flex flex-col items-center rounded-lg border p-6 shadow-sm transition-all hover:shadow-md">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10">
                    <Users className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="mt-4 text-lg font-medium">Client-Focused</h3>
                  <p className="mt-2 text-center text-sm text-muted-foreground">
                    Tailored solutions designed to meet your specific business needs
                  </p>
                </div>
                <div className="flex flex-col items-center rounded-lg border p-6 shadow-sm transition-all hover:shadow-md">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                    <Code className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="mt-4 text-lg font-medium">Innovation</h3>
                  <p className="mt-2 text-center text-sm text-muted-foreground">
                    Embracing the latest technologies to keep your business ahead
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="gradient-bg py-20">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">Our Services</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Comprehensive ICT solutions tailored to your business needs
              </p>
            </div>
            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-lg border-l-4 border-l-[#1e88e5] border bg-card p-6 shadow-sm transition-all hover:shadow-[0_0_15px_rgba(30,136,229,0.3)]">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Headphones className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-medium">ICT Services</h3>
                <p className="text-sm text-muted-foreground">
                  Comprehensive technology solutions including infrastructure management, cloud services, and IT support
                  to keep your business running smoothly.
                </p>
              </div>
              <div className="rounded-lg border-l-4 border-l-[#43a047] border bg-card p-6 shadow-sm transition-all hover:shadow-[0_0_15px_rgba(67,160,71,0.3)]">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10">
                  <Code className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="mb-2 text-xl font-medium">Software & Web Development</h3>
                <p className="text-sm text-muted-foreground">
                  Custom software solutions and responsive web applications designed to enhance your digital presence
                  and streamline operations.
                </p>
              </div>
              <div className="rounded-lg border-l-4 border-l-[#f57c00] border bg-card p-6 shadow-sm transition-all hover:shadow-[0_0_15px_rgba(245,124,0,0.3)]">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <h3 className="mb-2 text-xl font-medium">Technical Recruitment</h3>
                <p className="text-sm text-muted-foreground">
                  Specialized recruitment services for technical and soft skills positions, connecting businesses with
                  top talent in the ICT sector.
                </p>
              </div>
              <div className="rounded-lg border-l-4 border-l-[#757575] border bg-card p-6 shadow-sm transition-all hover:shadow-[0_0_15px_rgba(117,117,117,0.3)]">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gray-200">
                  <CheckCircle className="h-6 w-6 text-gray-600" />
                </div>
                <h3 className="mb-2 text-xl font-medium">Skills Development</h3>
                <p className="text-sm text-muted-foreground">
                  Comprehensive training programs focused on developing both technical and soft skills to empower your
                  workforce.
                </p>
              </div>
            </div>
          </div>
        </section>

     

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-primary via-secondary to-accent py-16 text-white">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to Transform Your Business?</h2>
              <p className="mt-4 text-lg opacity-90">
                Partner with Leseding Consulting Services for innovative ICT solutions that drive growth
              </p>
              <Button size="lg" variant="secondary" className="mt-8 bg-white text-primary hover:bg-white/90" asChild>
                <Link href="#contact">Get Started Today</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="gradient-bg py-20">
          <div className="container">
            <div className="mx-auto max-w-5xl">
              <div className="grid gap-10 md:grid-cols-2">
                <div>
                  <h2 className="text-3xl font-bold tracking-tight text-primary">Contact Us</h2>
                  <p className="mt-4 text-lg text-muted-foreground">
                    Reach out to discuss how we can help your business succeed
                  </p>
                  <div className="mt-8 space-y-6">
                    <div className="flex items-start">
                      <MapPin className="mr-4 h-6 w-6 text-primary" />
                      <div>
                        <h3 className="text-base font-medium">Our Office</h3>
                        <p className="mt-1 text-sm text-muted-foreground">09 Stream Crescent, Boskruin, Randburg, 2188</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Mail className="mr-4 h-6 w-6 text-secondary" />
                      <div>
                        <h3 className="text-base font-medium">Email</h3>
                        <p className="mt-1 text-sm text-muted-foreground">info@lesedingconsulting.co.za</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Phone className="mr-4 h-6 w-6 text-accent" />
                      <div>
                        <h3 className="text-base font-medium">Phone</h3>
                        <p className="mt-1 text-sm text-muted-foreground">+27 83 592 4242</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg border bg-card p-6 shadow-sm">
                  <h3 className="text-xl font-medium text-primary">Send us a message</h3>
                 <Form />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-gradient-to-r from-blue-50 via-green-50 to-orange-50 py-12">
        <div className="container">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-2">
              <Image
                src="/images/lcs-logo.png"
                alt="Leseding Consulting Services Logo"
                width={40}
                height={40}
                className="h-10 w-auto"
              />
              <span className="text-xl text-black font-bold">Leseding Consulting Services</span>
            </div>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm text-muted-foreground">
              <Link href="#about" className="transition-colors hover:text-primary">
                About
              </Link>
              <Link href="#services" className="transition-colors hover:text-secondary">
                Services
              </Link>
              <Link href="#clients" className="transition-colors hover:text-accent">
                Clients
              </Link>
              <Link href="#contact" className="transition-colors hover:text-primary">
                Contact
              </Link>
            </div>
          </div>
          
          {/* Social Media Links */}
          <div className="mt-8 flex justify-center gap-6">
            <Link
              href="https://twitter.com/LesedingS"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
              </svg>
              <span className="sr-only">X (Twitter)</span>
            </Link>
            
            <Link
              href="https://www.youtube.com/channel/UCDhDb6FAP76W3wImPzcN1cg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-red-600 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <path d="M2.5 17a24.12 24.12 0 0 1 0 -10 2 2 0 0 1 1.4 -1.4 49 49 0 0 1 16.2 0 2 2 0 0 1 1.4 1.4 24.12 24.12 0 0 1 0 10 2 2 0 0 1 -1.4 1.4 49 49 0 0 1 -16.2 0 2 2 0 0 1 -1.4 -1.4" />
                <path d="M10 15l5 -3l-5 -3z" />
              </svg>
              <span className="sr-only">YouTube</span>
            </Link>
            
            <Link
              href="https://www.linkedin.com/company/leseding-consulting-services"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-blue-600 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>

          <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Leseding Consulting Services. All rights reserved.</p>
            <p>Built by <a href="https://sultatech.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 transition-colors">Sulta Tech</a></p>
          </div>
        </div>
      </footer>
    </div>
  )
}

