import Image from "next/image"
import { Star } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    id: 1,
    name: "Lewis-Skelly",
    location: "Moi University, Eldoret",
    image: "/lewis (1).jpeg?height=100&width=100",
    rating: 5,
    text: "The bikes were in excellent condition and the booking process was so easy! We had a wonderful day exploring the city.",
  },
  {
    id: 2,
    name: "Nicole Mwendwa",
    location: "Moi University, Eldoret",
    image: "/lewis (2).jpeg?height=100&width=100",
    rating: 5,
    text: "Great service and high-quality bikes. The staff was very helpful in recommending routes for our skill level.",
  },
  {
    id: 3,
    name: "Mcdonge",
    location: "Moi University, Eldoret",
    image: "/lewis (3).jpeg?height=100&width=100",
    rating: 4,
    text: "We rented bikes for our family of four and had an amazing time. The kids' bikes were perfect for their size and the trails were beautiful.",
  },
]

export default function TestimonialSection() {
  return (
    <section className="bg-muted/30 py-12 md:py-16 lg:py-20">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">What Our Customers Say</h2>
          <p className="text-muted-foreground max-w-[700px]">
            Don't just take our word for it. Here's what our customers have to say about their experience with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="border-0 shadow-md">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>

                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>

                <p className="italic">{testimonial.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

