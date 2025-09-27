import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-sm text-gray-600 font-medium mb-4 uppercase tracking-wider">
              ONE ROOF. INFINITE POSSIBILITIES.
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-balance leading-tight">
              Unleash Your Potential With
            </h1>
            <h2 className="text-4xl md:text-5xl font-bold text-red-500 mb-6">Connect Group.</h2>
            <p className="text-xl text-gray-900 mb-8">
              We Provide <span className="text-red-500 font-semibold">Business Solutions</span>
            </p>
            <Button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-full text-lg">
              Contact us
            </Button>
          </div>

          <div className="relative">
            <div className="relative h-96 w-full">
              <div className="absolute inset-0 opacity-20">
                <svg className="w-full h-full" viewBox="0 0 400 300" fill="none">
                  {/* Dotted world map pattern */}
                  {Array.from({ length: 50 }).map((_, row) =>
                    Array.from({ length: 60 }).map((_, col) => {
                      const x = col * 7
                      const y = row * 6
                      // Create a rough world map shape with dots
                      const isLand =
                        (x > 50 && x < 150 && y > 80 && y < 180) || // Europe/Africa
                        (x > 200 && x < 350 && y > 60 && y < 200) || // Asia
                        (x > 20 && x < 120 && y > 120 && y < 220) || // Americas
                        (x > 280 && x < 380 && y > 180 && y < 250) // Australia
                      return isLand ? <circle key={`${row}-${col}`} cx={x} cy={y} r="1" fill="#9CA3AF" /> : null
                    }),
                  )}
                </svg>
              </div>

              <div className="absolute top-8 left-16 w-16 h-16 rounded-full overflow-hidden border-4 border-yellow-400">
                <img src="/a.jpg" alt="Team member" className="w-full h-full object-cover" />
              </div>

              <div className="absolute top-16 right-8 w-20 h-20 rounded-full overflow-hidden border-4 border-green-400">
                <img src="/b.jpg" alt="Team member" className="w-full h-full object-cover" />
              </div>

              <div className="absolute top-32 right-24 w-16 h-16 rounded-full overflow-hidden border-4 border-blue-400">
                <img src="/c.jpg" alt="Team member" className="w-full h-full object-cover" />
              </div>

              <div className="absolute top-48 left-8 w-18 h-18 rounded-full overflow-hidden border-4 border-orange-400">
                <img src="/e.jpg" alt="Team member" className="w-full h-full object-cover" />
              </div>

              <div className="absolute bottom-32 left-16 w-16 h-16 rounded-full overflow-hidden border-4 border-purple-400">
                <img src="/f.jpg" alt="Team member" className="w-full h-full object-cover" />
              </div>

              <div className="absolute bottom-16 right-32 w-16 h-16 rounded-full overflow-hidden border-4 border-red-400">
                <img src="/g.jpg" alt="Team member" className="w-full h-full object-cover" />
              </div>

              <div className="absolute bottom-8 right-8 w-14 h-14 rounded-full overflow-hidden border-4 border-green-500">
                <img src="/a.jpg" alt="Team member" className="w-full h-full object-cover" />
              </div>

              <div className="absolute bottom-24 right-16 w-16 h-16 rounded-full overflow-hidden border-4 border-purple-500">
                <img src="/b.jpg" alt="Team member" className="w-full h-full object-cover" />
              </div>

              <div className="absolute bottom-32 right-4 w-12 h-12 rounded-full overflow-hidden border-4 border-gray-400">
                <img src="/c.jpg" alt="Team member" className="w-full h-full object-cover" />
              </div>

              {/* Central n:n logo */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-gray-200">
                <div className="text-red-500 font-bold text-lg">n:n</div>
              </div>

              {/* Dotted connection lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <defs>
                  <pattern id="dots" patternUnits="userSpaceOnUse" width="4" height="4">
                    <circle cx="2" cy="2" r="1" fill="#9CA3AF" />
                  </pattern>
                </defs>

                {/* Lines connecting profiles to center */}
                <line x1="20%" y1="25%" x2="50%" y2="50%" stroke="url(#dots)" strokeWidth="2" />
                <line x1="85%" y1="30%" x2="50%" y2="50%" stroke="url(#dots)" strokeWidth="2" />
                <line x1="80%" y1="45%" x2="50%" y2="50%" stroke="url(#dots)" strokeWidth="2" />
                <line x1="15%" y1="60%" x2="50%" y2="50%" stroke="url(#dots)" strokeWidth="2" />
                <line x1="20%" y1="80%" x2="50%" y2="50%" stroke="url(#dots)" strokeWidth="2" />
                <line x1="75%" y1="85%" x2="50%" y2="50%" stroke="url(#dots)" strokeWidth="2" />
                <line x1="85%" y1="75%" x2="50%" y2="50%" stroke="url(#dots)" strokeWidth="2" />
                <line x1="85%" y1="65%" x2="50%" y2="50%" stroke="url(#dots)" strokeWidth="2" />
                <line x1="90%" y1="85%" x2="50%" y2="50%" stroke="url(#dots)" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
