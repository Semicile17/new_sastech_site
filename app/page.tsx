"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Shield, Camera, Lock, Wifi, ChevronRight, Star } from "lucide-react"
import { FadeIn } from "@/components/animations/fade-in"
import { BackgroundBeams } from "@/components/ui/background-beams"
import { TextGenerateEffect } from "@/components/ui/text-generate-effect"
import { SparklesCore } from "@/components/ui/sparkles"
// Removing AnimatedTooltip import since it cannot be found
import { HoverEffect } from "@/components/ui/card-hover-effect"

export default function HomePage() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const products = [
    {
      title: "IP Cameras",
      description: "We offer the finest selection of IP Cameras of the finest Brands",
      image: "/ip-cameras.jpg"
    },
    {
      title: "HD Cameras",
      description: "We offer the finest selection of HD Cameras of the finest Brands",
      image: "/hd-cameras.jpg"
    },
    {
      title: "NVRs",
      description: "We offer the finest selection of NVR, DVR, and XVR systems for all your security needs.",
      image: "/nvr.jpg"
    },
    {
      title: "DVRs",
      description: "We offer the finest selection of NVR, DVR, and XVR systems for all your security needs.",
      image: "/dvr.jpg"
    },
    {
      title: "Wifi Cameras",
      description: "Wifi Cameras available at most affordable prices",
      image: "/wifi-cameras.jpg"
    },
    {
      title: "Biometric Systems",
      description: "State of the art Biometric locks and Attendance systems",
      image: "/biometric.jpg"
    }
  ]

  const accessories = [
    {
      title: "Racks",
      description: "We offer the finest selection of IP Cameras of the finest Brands",
      image: "/racks.jpg"
    },
    {
      title: "Routers",
      description: "We offer the finest selection of HD Cameras of the finest Brands",
      image: "/routers.jpg"
    },
    {
      title: "SMPS",
      description: "We offer the finest selection of NVR, DVR, and XVR systems",
      image: "/smps.jpg"
    },
    {
      title: "POE Switch",
      description: "Wifi Cameras available at most affordable prices",
      image: "/poe-switch.jpg"
    },
    {
      title: "Monitors",
      description: "State of the art Biometric locks and Attendance systems",
      image: "/monitors.jpg"
    },
    {
      title: "Cables",
      description: "Best quality video door phones satisfying your security needs",
      image: "/cables.jpg"
    }
  ]

  const testimonials = [
    {
      name: "Manoj Joshi",
      comment: "Fantastic products! It really helped in my daily tasks.",
      rating: 4.5
    },
    {
      name: "Rakesh Bhatia",
      comment: "Good quality, and the customer care was exceptional",
      rating: 4
    },
    {
      name: "Rohit Mahant",
      comment: "Exceeded expectations! Highly recommend.",
      rating: 5
    },
    {
      name: "Ankita Chaddha",
      comment: "Decent products for the price.",
      rating: 3.5
    }
  ]

  return (
    <div className="relative">
      {/* Hero Section */}
      <section ref={ref} className="relative min-h-screen overflow-hidden">
        <BackgroundBeams className="opacity-20" />
        <motion.div style={{ y, opacity }} className="absolute inset-0 z-[1]">
          <Image
            src="/security-bg.jpg"
            alt="Security Background"
            fill
            className="object-cover brightness-[0.4] filter contrast-125 saturate-150"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/80" />
        </motion.div>

        <div className="relative z-10 flex min-h-screen items-center justify-center">
          <div className="container px-4 md:px-6">
            <div className="absolute inset-0 h-screen w-full">
              <SparklesCore
                id="tsparticlesfullpage"
                background="transparent"
                minSize={0.6}
                maxSize={1.4}
                particleDensity={100}
                className="h-full w-full"
                particleColor="#FFFFFF"
              />
            </div>
            <motion.div className="text-center">
              <TextGenerateEffect
                words="Secure Your World with"
                className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl lg:text-7xl mb-2"
              />
              <TextGenerateEffect
                words="SAS Technologies"
                className="text-4xl font-bold tracking-tighter text-sky-500 sm:text-5xl md:text-6xl lg:text-7xl"
              />
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="mx-auto mt-4 max-w-[700px] text-lg text-gray-200 md:text-xl"
              >
                Your one-stop solution for CCTV and security needs. Trusted by businesses and individuals across Gurgaon
                and beyond.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="mt-8 flex flex-wrap justify-center gap-6"
              >
                <Button
                  className="relative group overflow-hidden bg-sky-500 hover:bg-sky-600 text-white px-8 py-6 text-lg rounded-xl transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(14,165,233,0.3)] hover:shadow-[0_0_40px_rgba(14,165,233,0.4)]"
                  asChild
                >
                  <a href="/contact" className="flex items-center font-medium">
                    Get Started
                    <div className="relative ml-2 group-hover:translate-x-1 transition-transform duration-200">
                      <ChevronRight className="w-5 h-5" />
                    </div>
                  </a>
                </Button>
                <Button
                  variant="outline"
                  className="relative group overflow-hidden border-2 border-white/50 hover:border-white text-white px-8 py-6 text-lg rounded-xl transition-all duration-300 hover:scale-105 backdrop-blur-sm hover:bg-white/10"
                  asChild
                >
                  <a href="/solutions" className="flex items-center font-medium">
                    Learn More
                    <div className="relative ml-2 group-hover:translate-x-1 transition-transform duration-200">
                      <ChevronRight className="w-5 h-5" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-all duration-1000" />
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gradient-to-b from-gray-900 to-background py-24">
        <div className="container px-4 md:px-6">
          <FeatureGrid />
        </div>
      </section>

      {/* Products Showcase with HoverEffect */}
      <section className="py-24">
        <div className="container px-4 md:px-6">
          <HoverEffect 
            items={products.map(product => ({
              title: product.title,
              description: product.description,
              link: `/solutions#${product.title.toLowerCase()}`,
              image: product.image
            }))}
          />
        </div>
      </section>

      {/* Statistics */}
      <section className="bg-sky-500 py-24 text-white">
        <div className="container px-4 md:px-6">
          <Statistics />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="container px-4 md:px-6">
          <TestimonialCarousel />
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-gray-900 py-24">
        <div className="container relative z-10 px-4 md:px-6">
          <CTASection />
        </div>
        <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#4f46e5,#06b6d4)] opacity-10"></div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <FadeIn>
            <h2 className="text-3xl font-bold text-center mb-12">Our Security Solutions</h2>
          </FadeIn>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product, index) => (
              <FadeIn key={product.title} delay={index * 0.1}>
                <Card className="overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                    <p className="text-muted-foreground">{product.description}</p>
                  </div>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Accessories Section */}
      <section className="py-16">
        <div className="container">
          <FadeIn>
            <h2 className="text-3xl font-bold text-center mb-12">Security Accessories</h2>
          </FadeIn>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {accessories.map((accessory, index) => (
              <FadeIn key={accessory.title} delay={index * 0.1}>
                <Card className="overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src={accessory.image}
                      alt={accessory.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{accessory.title}</h3>
                    <p className="text-muted-foreground">{accessory.description}</p>
                  </div>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <FadeIn>
            <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
          </FadeIn>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {testimonials.map((testimonial, index) => (
              <FadeIn key={testimonial.name} delay={index * 0.1}>
                <Card className="p-6">
                  <p className="text-muted-foreground mb-4">{testimonial.comment}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">{testimonial.name}</span>
                    <span className="text-yellow-400">{"⭐".repeat(Math.floor(testimonial.rating))}</span>
                  </div>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

function FeatureGrid() {
  const features = [
    {
      icon: Camera,
      title: "CCTV Systems",
      description: "Advanced surveillance solutions with HD quality and night vision",
    },
    {
      icon: Lock,
      title: "Access Control",
      description: "Secure entry management with biometric and card systems",
    },
    {
      icon: Shield,
      title: "Security Solutions",
      description: "Comprehensive security packages for all needs",
    },
    {
      icon: Wifi,
      title: "Network Solutions",
      description: "Complete networking infrastructure setup",
    },
  ]

  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
      {features.map((feature, index) => (
        <FeatureCard key={index} feature={feature} index={index} />
      ))}
    </div>
  )
}

function FeatureCard({ feature, index }: { feature: any; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <Card className="relative overflow-hidden p-6">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-50"></div>
        <div className="relative">
          <feature.icon className="h-12 w-12 text-blue-600" />
          <h3 className="mt-4 text-xl font-semibold">{feature.title}</h3>
          <p className="mt-2 text-muted-foreground">{feature.description}</p>
        </div>
      </Card>
    </motion.div>
  )
}

function ProductShowcase() {
  const products = [
    {
      title: "HD CCTV Camera",
      image: "/placeholder.svg",
      description: "1080p resolution with night vision",
    },
    {
      title: "Biometric System",
      image: "/placeholder.svg",
      description: "Advanced fingerprint recognition",
    },
    {
      title: "Video Door Phone",
      image: "/placeholder.svg",
      description: "Smart intercom system",
    },
  ]

  return (
    <div className="space-y-12">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Products</h2>
        <p className="mt-4 text-muted-foreground">Discover our range of security solutions</p>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} index={index} />
        ))}
      </div>
    </div>
  )
}

function ProductCard({ product, index }: { product: any; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      whileHover={{ scale: 1.05 }}
      className="group cursor-pointer"
    >
      <Card className="overflow-hidden">
        <div className="relative aspect-video">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold">{product.title}</h3>
          <p className="mt-2 text-muted-foreground">{product.description}</p>
        </div>
      </Card>
    </motion.div>
  )
}

function Statistics() {
  const stats = [
    { value: "1000+", label: "Installations" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "24/7", label: "Support" },
    { value: "10+", label: "Years Experience" },
  ]

  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <StatCard key={index} stat={stat} index={index} />
      ))}
    </div>
  )
}

function StatCard({ stat, index }: { stat: any; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="text-center"
    >
      <div className="text-4xl font-bold">{stat.value}</div>
      <div className="mt-2 text-sm opacity-80">{stat.label}</div>
    </motion.div>
  )
}

function TestimonialCarousel() {
  const testimonials = [
    {
      quote: "Excellent service and professional installation team.",
      author: "John Doe",
      role: "Business Owner",
      rating: 5,
    },
    {
      quote: "Best security solutions provider in Gurgaon.",
      author: "Jane Smith",
      role: "Office Manager",
      rating: 5,
    },
    {
      quote: "Reliable and efficient security systems.",
      author: "Mike Johnson",
      role: "Property Manager",
      rating: 5,
    },
  ]

  return (
    <div className="space-y-12">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">What Our Clients Say</h2>
      </div>
      <div className="grid gap-8 md:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} testimonial={testimonial} index={index} />
        ))}
      </div>
    </div>
  )
}

function TestimonialCard({ testimonial, index }: { testimonial: any; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <Card className="p-6">
        <div className="flex gap-1">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        <p className="mt-4 text-muted-foreground">{testimonial.quote}</p>
        <div className="mt-4">
          <div className="font-semibold">{testimonial.author}</div>
          <div className="text-sm text-muted-foreground">{testimonial.role}</div>
        </div>
      </Card>
    </motion.div>
  )
}

function CTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="text-center text-white"
    >
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Secure Your Space?</h2>
      <p className="mx-auto mt-4 max-w-[600px] text-lg opacity-90">
        Get in touch with us today for a free consultation and quote.
      </p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="mt-8 flex justify-center gap-4"
      >
        <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
          Contact Us
        </Button>
        <Button size="lg" variant="outline" className="text-black hover:bg-white/10">
          View Solutions
        </Button>
      </motion.div>
    </motion.div>
  )
}

