import Link from "next/link"
import { CalendarDays, Clock, Users, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import HeroSection from "@/components/hero-section"
import FeaturedBicycles from "@/components/featured-bicycles"
import PackageSection from "@/components/package-section"
import TestimonialSection from "@/components/testimonial-section"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection />

      <section className="container py-12 md:py-16 lg:py-20">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">How It Works</h2>
          <p className="text-muted-foreground max-w-[700px]">
            Booking a bicycle with us is simple and straightforward. Follow these steps to get riding in no time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardContent className="pt-6">
              <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                <CalendarDays className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Choose Your Date</h3>
              <p className="text-muted-foreground">
                Select the date and time you want to start your bicycle adventure.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Select Package</h3>
              <p className="text-muted-foreground">
                Choose from individual, couple, or group packages based on your needs.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Enjoy Your Ride</h3>
              <p className="text-muted-foreground">
                Pick up your bicycle at the scheduled time and enjoy your adventure.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="flex justify-center mt-10">
          <Button asChild size="lg">
            <Link href="/bicycles">
              Browse Bicycles
              <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <FeaturedBicycles />
      <PackageSection />
      <TestimonialSection />
    </main>
  )
}

