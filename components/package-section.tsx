import Link from "next/link"
import { Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function PackageSection() {
  return (
    <section className="container py-12 md:py-16 lg:py-20">
      <div className="flex flex-col items-center text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">Choose Your Package</h2>
        <p className="text-muted-foreground max-w-[700px]">
          We offer a variety of packages to suit your needs, whether you're riding solo, as a couple, or with a group.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle className="text-2xl">Individual</CardTitle>
            <CardDescription>Perfect for solo riders</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <div className="text-3xl font-bold">
              Ksh 60 <span className="text-muted-foreground text-base font-normal">/ hour</span>
            </div>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 text-primary" />
                <span>Single bicycle rental</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 text-primary" />
                <span>Helmet included</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 text-primary" />
                <span>Water bottle holder</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 text-primary" />
                <span>Basic maintenance kit</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 text-primary" />
                <span>Flexible booking</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full bg-maroon-600 hover:bg-maroon-700 text-white">
              <Link href="/bicycles?package=individual">Select Package</Link>
            </Button>
          </CardFooter>
        </Card>

        <Card className="flex flex-col border-primary">
          <CardHeader className="bg-maroon-600 text-white rounded-t-lg">
            <CardTitle className="text-2xl">Couple</CardTitle>
            <CardDescription className="text-white/80">Ideal for two riders</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <div className="text-3xl font-bold">
              Ksh 100 <span className="text-muted-foreground text-base font-normal">/ hour</span>
            </div>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 text-maroon-600" />
                <span>Two bicycle rentals</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 text-maroon-600" />
                <span>Helmets included</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 text-maroon-600" />
                <span>Water bottle holders</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 text-maroon-600" />
                <span>Basic maintenance kit</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 text-maroon-600" />
                <span>10% discount on hourly rate</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 text-maroon-600" />
                <span>Route map included</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full bg-maroon-600 hover:bg-maroon-700 text-white">
              <Link href="/bicycles?package=couple">Select Package</Link>
            </Button>
          </CardFooter>
        </Card>

        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle className="text-2xl">Group</CardTitle>
            <CardDescription>For 3-5 people</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <div className="text-3xl font-bold">
              Ksh 280 <span className="text-muted-foreground text-base font-normal">/ hour</span>
            </div>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 text-maroon-600" />
                <span>3-5 bicycle rentals</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 text-maroon-600" />
                <span>Helmets included</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 text-maroon-600" />
                <span>Water bottle holders</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 text-maroon-600" />
                <span>Maintenance kit</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 text-maroon-600" />
                <span>15% discount on hourly rate</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 text-maroon-600" />
                <span>Route map included</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 text-maroon-600" />
                <span>Group photo service</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full bg-maroon-600 hover:bg-maroon-700 text-white">
              <Link href="/bicycles?package=group">Select Package</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  )
}

