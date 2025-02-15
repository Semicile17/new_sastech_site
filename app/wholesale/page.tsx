"use client";

import { FadeIn } from "@/components/animations/fade-in"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"

export default function WholesalePage() {
  return (
    <div className="container px-4 md:px-6 lg:px-8">
      <FadeIn>
        <div className="mx-auto max-w-3xl space-y-8 py-16 md:py-24 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Wholesale Solutions</h1>
          <p className="text-muted-foreground md:text-xl">
            Premium security products at wholesale prices. Perfect for retailers and system integrators.
          </p>
        </div>
      </FadeIn>

      <div className="grid gap-8 pb-16 md:grid-cols-2 lg:grid-cols-3">
        {[
          { title: "CCTV Cameras", image: "/placeholder.svg", price: "Contact for pricing" },
          { title: "Access Control Systems", image: "/placeholder.svg", price: "Contact for pricing" },
          { title: "Network Equipment", image: "/placeholder.svg", price: "Contact for pricing" }
        ].map((product, index) => (
          <FadeIn key={index} delay={index * 0.2}>
            <Card className="overflow-hidden">
              <div className="relative aspect-video">
                <Image src={product.image} alt={product.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold">{product.title}</h3>
                <p className="mt-2 text-muted-foreground">{product.price}</p>
                <Button className="mt-4 w-full">Enquire Now</Button>
              </div>
            </Card>
          </FadeIn>
        ))}
      </div>
    </div>
  )
}

