import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="py-16 bg-red-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="/b.jpg"
              alt="Professional businesswoman"
              className="w-full h-80 object-cover rounded-lg"
            />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-red-500 rounded flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-sm transform rotate-45"></div>
              </div>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Elevate your Business in the
              <br />
              UAE With our Dedicated
              <br />
              Guidance at Every Turn.
            </h2>
            <p className="text-gray-600 mb-6">Connect Group: Your ally in business growth.</p>
            <Button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full">Read More</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
