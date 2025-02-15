"use client";

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FadeIn } from "@/components/animations/fade-in"

export default function SolutionsPage() {
  const solutions = [
    {
      title: "IP Cameras",
      description: "We offer the finest selection of IP Cameras of the finest Brands",
      features: [
        "4K Resolution",
        "Night Vision",
        "Motion Detection",
        "Remote Viewing"
      ],
      image: "/ip-cameras.jpg"
    },
    {
      title: "HD Cameras",
      description: "High-definition surveillance solutions for crystal clear footage",
      features: [
        "1080p Resolution",
        "Wide Angle View",
        "Weather Resistant",
        "Easy Installation"
      ],
      image: "/hd-cameras.jpg"
    },
    {
      title: "NVRs & DVRs",
      description: "Professional recording solutions for all security needs",
      features: [
        "Multiple Channel Support",
        "Large Storage Capacity",
        "Smart Search",
        "Mobile Access"
      ],
      image: "/nvr-dvr.jpg"
    },
    {
      title: "Wifi Cameras",
      description: "Wireless security solutions at affordable prices",
      features: [
        "Easy Setup",
        "Mobile Viewing",
        "Two-way Audio",
        "Cloud Storage"
      ],
      image: "/wifi-cameras.jpg"
    },
    {
      title: "Biometric Systems",
      description: "State-of-the-art access control and attendance systems",
      features: [
        "Fingerprint Recognition",
        "Face Detection",
        "Time Attendance",
        "Access Control"
      ],
      image: "/biometric.jpg"
    },
    {
      title: "Video Door Phones",
      description: "Advanced door entry systems for enhanced security",
      features: [
        "HD Video",
        "Night Vision",
        "Mobile Connectivity",
        "Easy Installation"
      ],
      image: "/door-phones.jpg"
    }
  ];

  const accessories = [
    {
      title: "Racks",
      description: "Professional mounting solutions",
      image: "/racks.jpg"
    },
    {
      title: "Routers",
      description: "High-performance networking equipment",
      image: "/routers.jpg"
    },
    {
      title: "SMPS",
      description: "Reliable power supply units",
      image: "/smps.jpg"
    },
    {
      title: "POE Switch",
      description: "Efficient power over ethernet solutions",
      image: "/poe-switch.jpg"
    },
    {
      title: "Monitors",
      description: "Professional surveillance displays",
      image: "/monitors.jpg"
    },
    {
      title: "Cables",
      description: "High-quality connectivity solutions",
      image: "/cables.jpg"
    }
  ];

  return (
    <div className="container px-6 md:px-8 lg:px-12 max-w-7xl mx-auto">
      <FadeIn>
        <div className="mx-auto max-w-3xl space-y-8 py-16 md:py-24 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Security Solutions</h1>
          <p className="text-muted-foreground md:text-xl">
            Discover an extensive selection of CCTV cameras, biometric access control systems, premium quality cables, 
            and robust connectors—all tailored to meet your security needs in Gurgaon and beyond.
          </p>
        </div>
      </FadeIn>

      {/* Main Solutions */}
      <div className="mt-12 grid gap-8 md:gap-10 pb-16 md:grid-cols-2 lg:grid-cols-3">
        {solutions.map((solution, index) => (
          <FadeIn key={solution.title} delay={index * 0.2}>
            <Card className="h-full flex flex-col">
              <CardHeader className="flex-none">
                <div className="relative h-52 overflow-hidden rounded-t-lg">
                  <Image 
                    src={solution.image} 
                    alt={solution.title} 
                    fill 
                    className="object-cover transition-transform duration-300 hover:scale-105" 
                  />
                </div>
                <CardTitle className="mt-4 text-xl">{solution.title}</CardTitle>
                <CardDescription className="min-h-[50px]">{solution.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-between">
                <ul className="list-inside list-disc space-y-2 text-sm text-muted-foreground mb-4">
                  {solution.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                <Button className="w-full bg-primary hover:bg-primary/90 transition-colors">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </FadeIn>
        ))}
      </div>

      {/* Accessories Section */}
      <FadeIn>
        <div className="mx-auto max-w-3xl space-y-8 py-16 text-center">
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
            Your One-Stop Shop for Security Accessories in Gurgaon
          </h2>
          <p className="text-muted-foreground">
            From durable racks and high-capacity hard drives to an extensive range of essential tools and accessories, 
            we provide everything you need to create a complete and reliable security setup.
          </p>
        </div>
      </FadeIn>

      <div className="grid gap-8 md:gap-10 pb-16 md:grid-cols-2 lg:grid-cols-3">
        {accessories.map((accessory, index) => (
          <FadeIn key={accessory.title} delay={index * 0.2}>
            <Card className="h-full flex flex-col">
              <CardHeader className="flex-none">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <Image 
                    src={accessory.image} 
                    alt={accessory.title} 
                    fill 
                    className="object-cover transition-transform duration-300 hover:scale-105" 
                  />
                </div>
                <CardTitle className="mt-4 text-xl">{accessory.title}</CardTitle>
                <CardDescription className="min-h-[50px]">{accessory.description}</CardDescription>
              </CardHeader>
            </Card>
          </FadeIn>
        ))}
      </div>

      {/* Brands Section */}
      <FadeIn>
        <div className="mx-auto max-w-3xl space-y-8 py-16 text-center">
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
            Premium Brands for Unmatched Security Solutions
          </h2>
          <p className="text-muted-foreground">
            We are proud to be authorized resellers of globally trusted brands like Hikvision, CP Plus, Hawkvision, and PRAMA. 
            Our extensive range ensures that every customer gets the best security solutions tailored to their requirements in Gurgaon.
          </p>
        </div>
      </FadeIn>
    </div>
  )
}

