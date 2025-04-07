import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle2, Users, Bike, Award } from "lucide-react"

import { Button } from "@/components/ui/button"
import { PageHeader } from "@/components/page-header"
import { TeamMember } from "@/components/team-member"

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <PageHeader
        title="Discover Miami Bikes"
        description="Where every ride tells a story of adventure, community, and sustainable mobility"
        image="/bike22.jpeg"
      />

      <div className="container mx-auto px-4 py-16">
        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-40">
          <div className="space-y-10">
            <h2 className="text-6xl font-bold bg-gradient-to-r from-gray-900 to-maroon-600 bg-clip-text text-transparent">
              Our Story
            </h2>
            <p className="text-gray-600 text-xl leading-relaxed">
              Founded in 2024, Miami Bikes began with a mission to make quality bikes accessible while promoting sustainable urban mobility. 
              From a small fleet to multiple locations, we've grown into Miami's premier bike rental service.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 pt-8">
              <Button asChild className="bg-maroon-600 hover:bg-maroon-700 h-14 px-10 text-lg">
                <Link href="/bicycles">
                  Explore Our Bikes <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="h-14 px-10 text-lg">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>

          <div className="relative h-[700px] rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
            <Image
              src="/bike2.jpeg"
              alt="Miami Bikes founder with bikes"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-40">
          <div className="text-center mb-24">
            <h2 className="text-6xl font-bold mb-8 bg-gradient-to-r from-gray-900 to-maroon-600 bg-clip-text text-transparent">
              Our Values
            </h2>
            <p className="text-gray-600 text-xl max-w-2xl mx-auto">
              Core principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="bg-white rounded-3xl p-12 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="h-24 w-24 rounded-full bg-maroon-100 flex items-center justify-center mb-10">
                <Bike className="h-12 w-12 text-maroon-600" />
              </div>
              <h3 className="text-3xl font-bold mb-6">Quality First</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                We maintain the highest standards for our bikes, ensuring every ride is safe and enjoyable.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-12 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="h-24 w-24 rounded-full bg-maroon-100 flex items-center justify-center mb-10">
                <Users className="h-12 w-12 text-maroon-600" />
              </div>
              <h3 className="text-3xl font-bold mb-6">Community</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                We build connections among riders through events, tours, and shared experiences.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-12 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="h-24 w-24 rounded-full bg-maroon-100 flex items-center justify-center mb-10">
                <Award className="h-12 w-12 text-maroon-600" />
              </div>
              <h3 className="text-3xl font-bold mb-6">Sustainability</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                We promote eco-friendly transportation, helping reduce carbon emissions in our city.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-40">
          <div className="text-center mb-24">
            <h2 className="text-6xl font-bold mb-8 bg-gradient-to-r from-gray-900 to-maroon-600 bg-clip-text text-transparent">
              Meet Our Team
            </h2>
            <p className="text-gray-600 text-xl max-w-2xl mx-auto">
              The passionate individuals behind Miami Bikes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <TeamMember
              name="John Smith"
              role="Founder & CEO"
              image="/bike1.jpeg"
              bio="Cycling enthusiast with 15+ years in the industry. Passionate about sustainable transportation."
            />
            <TeamMember
              name="Sarah Johnson"
              role="Operations Manager"
              image="/bike2.jpeg"
              bio="Ensures smooth operations across all locations. Expert in logistics and customer service."
            />
            <TeamMember
              name="Michael Rodriguez"
              role="Head Mechanic"
              image="/bike3.jpeg"
              bio="Expert in all types of bicycles and maintenance. Dedicated to keeping our fleet in top condition."
            />
            <TeamMember
              name="Emma Wilson"
              role="Customer Experience"
              image="/bike4.jpeg"
              bio="Dedicated to creating memorable experiences. Focused on making every ride special."
            />
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-gray-50 rounded-3xl p-16 md:p-20">
          <div className="text-center mb-24">
            <h2 className="text-6xl font-bold mb-8 bg-gradient-to-r from-gray-900 to-maroon-600 bg-clip-text text-transparent">
              Why Choose Miami Bikes?
            </h2>
            <p className="text-gray-600 text-xl max-w-2xl mx-auto">
              Experience the difference with our premium service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="flex items-start gap-8">
              <div className="h-16 w-16 rounded-full bg-maroon-100 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="h-8 w-8 text-maroon-600" />
              </div>
              <div>
                <h3 className="font-bold text-3xl mb-4">Premium Fleet</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Top-quality bikes maintained to the highest standards for a smooth, reliable ride.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-8">
              <div className="h-16 w-16 rounded-full bg-maroon-100 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="h-8 w-8 text-maroon-600" />
              </div>
              <div>
                <h3 className="font-bold text-3xl mb-4">Convenient Locations</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Multiple pickup points across the city for your convenience.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-8">
              <div className="h-16 w-16 rounded-full bg-maroon-100 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="h-8 w-8 text-maroon-600" />
              </div>
              <div>
                <h3 className="font-bold text-3xl mb-4">Flexible Rentals</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Choose from hourly to weekly rentals to suit your needs.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-8">
              <div className="h-16 w-16 rounded-full bg-maroon-100 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="h-8 w-8 text-maroon-600" />
              </div>
              <div>
                <h3 className="font-bold text-3xl mb-4">Expert Support</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Knowledgeable staff ready to help with route planning and bike selection.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-24 text-center">
            <Button asChild size="lg" className="bg-maroon-600 hover:bg-maroon-700 h-16 px-12 text-xl">
              <Link href="/bicycles">
                Start Your Adventure <ArrowRight className="ml-2 h-6 w-6" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}

