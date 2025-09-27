import { Button } from "@/components/ui/button"

export function JourneySection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Number "1" - 3 photos stacked vertically */}
          <div className="relative flex items-center justify-center">
            <div className="flex items-center gap-6">
              <div className="flex flex-col gap-3">
                <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <img src="/a.jpg" alt="Profile" className="w-full h-full object-cover" />
                </div>
                <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <img src="/b.jpg" alt="Profile" className="w-full h-full object-cover" />
                </div>
                <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <img src="/c.jpg" alt="Profile" className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Number "0" - oval arrangement with hollow center */}
              <div className="relative w-48 h-64">
                {/* Top photos */}
                <div className="absolute top-0 left-8">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-lg">
                    <img src="/e.jpg" alt="Profile" className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="absolute top-0 right-8">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-lg">
                    <img src="/f.jpg" alt="Profile" className="w-full h-full object-cover" />
                  </div>
                </div>

                {/* Upper middle photos */}
                <div className="absolute top-12 left-2">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-lg">
                    <img src="/a.jpg" alt="Profile" className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="absolute top-12 right-2">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-lg">
                    <img src="/b.jpg" alt="Profile" className="w-full h-full object-cover" />
                  </div>
                </div>

                {/* Center left and right photos */}
                <div className="absolute top-24 left-0">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-lg">
                    <img src="/c.jpg" alt="Profile" className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="absolute top-24 right-0">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-lg">
                    <img src="/e.jpg" alt="Profile" className="w-full h-full object-cover" />
                  </div>
                </div>

                {/* Lower middle photos */}
                <div className="absolute bottom-12 left-2">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-lg">
                    <img src="/f.jpg" alt="Profile" className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="absolute bottom-12 right-2">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-lg">
                    <img src="/a.jpg" alt="Profile" className="w-full h-full object-cover" />
                  </div>
                </div>

                {/* Bottom photos */}
                <div className="absolute bottom-0 left-8">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-lg">
                    <img src="/b.jpg" alt="Profile" className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="absolute bottom-0 right-8">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-lg">
                    <img src="/c.jpg" alt="Profile" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="text-red-500 font-medium mb-2">From Dreams to Reality:</div>
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Learn About Our Journey</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Connect Group was founded in 2016 and it is located in Dubai, UAE. With more than 8 years of experience,
              our group is capable of providing the most efficient business services for individuals and companies that
              work in the UAE.
            </p>
            <Button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full">Contact Us</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
