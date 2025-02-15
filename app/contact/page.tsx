"use client";

import { FadeIn } from "@/components/animations/fade-in"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Clock, Building } from "lucide-react"
import { BackgroundBeams } from "@/components/ui/background-beams"
import { TextGenerateEffect } from "@/components/ui/text-generate-effect"
import { HoverEffect } from "@/components/ui/card-hover-effect"

export default function ContactPage() {
  const contactInfo = [
    { 
      Icon: Building,
      title: "Office Address",
      text: "SAS Technologies, Sector 14, Gurgaon, Haryana",
      color: "from-blue-600 to-blue-400"
    },
    { 
      Icon: Phone,
      title: "Phone Number",
      text: "+91 98XXXXXXXX",
      color: "from-purple-600 to-purple-400"
    },
    { 
      Icon: Mail,
      title: "Email Us",
      text: "info@sastechnologies.in",
      color: "from-green-600 to-green-400"
    },
    { 
      Icon: Clock,
      title: "Business Hours",
      text: "Mon - Sat: 9:00 AM - 7:00 PM",
      color: "from-orange-600 to-orange-400"
    }
  ];

  return (
    <div className="relative min-h-screen">
      <BackgroundBeams />
      
      <div className="container relative z-10 px-4 md:px-6 lg:px-8">
        <div className="py-16 md:py-24">
          <FadeIn>
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-4">
                Get in Touch
              </h1>
              <TextGenerateEffect
                words="Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible."
                className="text-muted-foreground md:text-xl max-w-2xl mx-auto"
              />
            </div>
          </FadeIn>

          <div className="grid gap-8 lg:grid-cols-2 items-start">
            <FadeIn>
              <div className="grid gap-6 sm:grid-cols-2">
                {contactInfo.map((item, index) => (
                  <Card key={index} className="p-6 backdrop-blur-sm bg-white/10 border-none">
                    <div className={`inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br ${item.color} mb-4`}>
                      <item.Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.text}</p>
                  </Card>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <Card className="p-8 backdrop-blur-sm bg-white/10">
                <form className="space-y-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Input 
                      placeholder="First Name" 
                      className="bg-white/5 border-white/10 focus:border-white/20"
                    />
                    <Input 
                      placeholder="Last Name" 
                      className="bg-white/5 border-white/10 focus:border-white/20"
                    />
                  </div>
                  <Input 
                    placeholder="Email" 
                    type="email" 
                    className="bg-white/5 border-white/10 focus:border-white/20"
                  />
                  <Input 
                    placeholder="Phone" 
                    type="tel" 
                    className="bg-white/5 border-white/10 focus:border-white/20"
                  />
                  <Textarea 
                    placeholder="Your Message" 
                    className="min-h-[150px] bg-white/5 border-white/10 focus:border-white/20"
                  />
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-500 hover:to-blue-300 transition-all duration-200">
                    Send Message
                  </Button>
                </form>
              </Card>
            </FadeIn>
          </div>
        </div>
      </div>
    </div>
  )
}

