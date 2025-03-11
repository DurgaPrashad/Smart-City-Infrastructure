import Link from "next/link"
import { ArrowRight, BarChart3, Cpu, Leaf, MapPin, Zap } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-2 items-center text-primary font-bold text-xl">
            <Leaf className="h-6 w-6" />
            <span>SmartCity</span>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-2">
              <Link href="/dashboard" className="text-sm font-medium transition-colors hover:text-primary">
                Dashboard
              </Link>
              <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">
                About
              </Link>
              <Button size="sm">Get Started</Button>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Sustainable Smart Infrastructure
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    AI-powered, IoT-integrated smart city solutions that optimize energy consumption, traffic flow, and
                    waste management.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg">
                    Explore Dashboard
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="lg">
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last">
                <img
                  alt="Smart City Visualization"
                  className="h-full w-full"
                  src="/placeholder.svg?height=550&width=800"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Key Features</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our integrated platform provides comprehensive solutions for modern urban challenges
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader className="flex flex-row items-center gap-2">
                  <Zap className="h-6 w-6 text-primary" />
                  <CardTitle>Smart Energy</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    IoT sensors monitor energy usage while AI optimizes distribution and integrates with renewable
                    sources.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-2">
                  <MapPin className="h-6 w-6 text-primary" />
                  <CardTitle>Traffic Control</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Real-time monitoring with AI-based prediction and smart traffic lights that adjust to vehicle
                    density.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-2">
                  <Cpu className="h-6 w-6 text-primary" />
                  <CardTitle>Waste Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Smart bins monitor waste levels and AI optimizes collection routes and recycling processes.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-2">
                  <BarChart3 className="h-6 w-6 text-primary" />
                  <CardTitle>Air & Water Quality</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    IoT sensors track pollution levels while AI analyzes data for effective control strategies.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="md:col-span-2 lg:col-span-2">
                <CardHeader>
                  <CardTitle>Citizen Engagement</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    A comprehensive mobile app for citizens to report issues, access AI-powered assistance, and view
                    open data for urban planning.
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm">
                    Download App
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6">
        <div className="container flex flex-col items-center justify-center gap-4 md:flex-row md:gap-8">
          <p className="text-center text-sm leading-loose text-muted-foreground">
            © 2025 SmartCity Infrastructure. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Terms
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Privacy
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

