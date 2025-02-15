import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container px-4 md:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="space-y-3">
            <h4 className="text-sm font-medium">Solutions</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/solutions/cctv" className="text-muted-foreground hover:text-foreground">
                  CCTV Systems
                </Link>
              </li>
              <li>
                <Link href="/solutions/biometric" className="text-muted-foreground hover:text-foreground">
                  Biometric Access
                </Link>
              </li>
              <li>
                <Link href="/solutions/video-door" className="text-muted-foreground hover:text-foreground">
                  Video Door Phones
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="text-sm font-medium">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/wholesale" className="text-muted-foreground hover:text-foreground">
                  Wholesale
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="text-sm font-medium">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-muted-foreground">Gurgaon, India</li>
              <li className="text-muted-foreground">contact@sastechnologies.net</li>
              <li className="text-muted-foreground">+91 XXX XXX XXXX</li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="text-sm font-medium">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-foreground">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-foreground">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          © 2024 SAS Technologies. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

