import { MapPin, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header>
      <div className="bg-blue-700 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>HQ: Floor 8 & 9, City Tower 2, Sheikh Zayed Road, Dubai, UAE</span>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>contact@connectgroup.co</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+971 4 33 16 688</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <nav className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <div className="text-2xl font-bold">
                <span className="text-red-500">connect</span>
                <div className="text-xs text-gray-600 uppercase tracking-wider">GROUP</div>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#" className="text-gray-700 hover:text-red-500 font-medium">
                Home
              </a>
              <a href="#" className="text-gray-700 hover:text-red-500 font-medium flex items-center gap-1">
                Services
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              <a href="#" className="text-gray-700 hover:text-red-500 font-medium flex items-center gap-1">
                Brands
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              <a href="#" className="text-gray-700 hover:text-red-500 font-medium">
                Insights
              </a>
              <a href="#" className="text-gray-700 hover:text-red-500 font-medium">
                About Us
              </a>
              <a href="#" className="text-gray-700 hover:text-red-500 font-medium">
                Contact Us
              </a>
            </div>
            <Button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full">Contact us</Button>
          </nav>
        </div>
      </div>
    </header>
  )
}
