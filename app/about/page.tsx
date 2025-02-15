"use client";

import Image from "next/image"
import { Shield, Users, Building2, Award, MapPin, Users2 } from "lucide-react"
import { FadeIn } from "@/components/animations/fade-in"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  const brands = [
    { name: "Prama", image: "/prama-logo.jpg", description: "Authentic CCTV products with warranties and support" },
    { name: "Hikvision", image: "/hikvision-logo.jpg", description: "Advanced surveillance technology" },
    { name: "CP Plus", image: "/cpplus-logo.jpg", description: "High-quality security solutions" },
    { name: "WD", image: "/wd-logo.jpg", description: "Reliable storage solutions" },
    { name: "Godrej", image: "/godrej-logo.jpg", description: "Trusted security brand" },
    { name: "D-Link", image: "/dlink-logo.jpg", description: "Networking excellence" }
  ];

  return (
    <div className="container px-4 md:px-6 lg:px-8">
      <FadeIn>
        <div className="mx-auto max-w-4xl space-y-12 py-16 md:py-24 text-center">
          <div className="space-y-6">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About SAS Technologies</h1>
            <p className="mx-auto max-w-[800px] text-muted-foreground md:text-xl">
              A leading distributor of high-quality CCTV and security solutions, catering exclusively to dealers and installers. 
              We specialize in providing advanced surveillance products from globally recognized brands, ensuring our partners 
              have access to the best technology at competitive prices.
            </p>
          </div>
          <div className="relative h-[400px] overflow-hidden rounded-lg">
            <Image src="/company-image.jpg" alt="SAS Technologies Office" fill className="object-cover" />
          </div>
        </div>
      </FadeIn>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {[
          { Icon: Shield, title: "Expertise", description: "20+ years of industry experience in security solutions" },
          { Icon: Users, title: "Customer Focus", description: "Dedicated support team for technical assistance" },
          { Icon: Building2, title: "Wide Coverage", description: "Serving dealers across Gurgaon and PAN India" },
          { Icon: Award, title: "Quality Assured", description: "Authorized distributor of premium security brands" },
          { Icon: MapPin, title: "Location", description: "Headquarters in Gurugram, Haryana" },
          { Icon: Users2, title: "Growing Team", description: "11-50 dedicated employees" }
        ].map((item, index) => (
          <FadeIn key={index} delay={index * 0.2}>
            <div className="space-y-3 text-center p-6 rounded-lg bg-card">
              <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <item.Icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          </FadeIn>
        ))}
      </div>

      {/* Authorized Brands Section */}
      <FadeIn>
        <div className="mt-24 text-center">
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl mb-12">Authorized Brands</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {brands.map((brand, index) => (
              <FadeIn key={brand.name} delay={index * 0.1}>
                <div className="p-4 rounded-lg bg-card">
                  <div className="relative h-20 mb-4">
                    <Image src={brand.image} alt={brand.name} fill className="object-contain" />
                  </div>
                  <p className="text-sm text-muted-foreground">{brand.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </FadeIn>

      <FadeIn>
        <div className="mt-24 text-center space-y-8">
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Join SAS Technologies</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground">
            Where technology meets trust, and together, let's create safer spaces for everyone.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg">View Our Solutions</Button>
            <Button size="lg" variant="outline">Contact Us</Button>
          </div>
        </div>
      </FadeIn>
    </div>
  )
}

