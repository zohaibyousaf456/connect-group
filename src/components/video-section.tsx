import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"

export function VideoSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="bg-black rounded-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[400px]">
            {/* Left side - Text content */}
            <div className="flex flex-col justify-center p-8 lg:p-12">
              <h2 className="text-white text-3xl lg:text-4xl font-bold mb-6 leading-tight">
                Want expert advice on
                <br />
                business growth and
                <br />
                success in Dubai?
              </h2>
              <p className="text-white text-lg mb-8 max-w-md leading-relaxed">
                Our videos cover solutions and expert advice on today's biggest business challenges. Dive deeper with
                our YouTube content.
              </p>
              <Button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full flex items-center gap-2 w-fit">
                <Play className="w-4 h-4 fill-white" />
                Watch Now
              </Button>
            </div>

            {/* Right side - Video image */}
            <div className="relative">
              <img
                src="/advice.jpg"
                alt="Business experts discussing growth strategies"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
