import { Metadata } from 'next'
import LayoutWrapper from '@/components/layout-wrapper'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'About Us - Connect Group',
  description: 'Learn about Connect Group\'s mission, values, and commitment to empowering businesses in the UAE and beyond.',
}

export default function AboutPage() {
  return (
    <LayoutWrapper>
      <div className="min-h-screen bg-gray-900 text-white">
        {/* Hero Section */}
        <section className="relative py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-400/5" />
          <div className="container mx-auto px-4 relative">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                About Us
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Empowering businesses with world-class services in Dubai, Saudi Arabia & beyond since 2016.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-24 bg-gradient-to-b from-gray-800 to-gray-900">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                  Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-300">Story</span>
                </h2>
                <div className="space-y-6 text-gray-300 leading-relaxed">
                  <p>
                    Founded in 2016 and based in Dubai, Connect Group brings over 9 years of experience delivering efficient business solutions for individuals and companies across the Middle East.
                  </p>
                  <p>
                    What started as a vision to simplify business operations in the UAE has grown into a comprehensive ecosystem of brands, each specialized in different aspects of business growth and success.
                  </p>
                  <p>
                    Today, we empower over 15,000 businesses with our world-class services, helping them launch, scale, and succeed in one of the world's most dynamic business environments.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/advice.JPG"
                    alt="Connect Group team"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-24 bg-gradient-to-b from-gray-900 to-gray-800">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Mission & <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-300">Vision</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Mission */}
              <div className="bg-gray-800 rounded-3xl p-8 shadow-lg border border-gray-700/50">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <div className="w-8 h-8 bg-white rounded-lg"></div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                <p className="text-gray-300 leading-relaxed">
                  To empower businesses with comprehensive, efficient, and reliable solutions that enable them to thrive in the UAE and beyond. We are committed to simplifying complex business processes and providing world-class services that drive growth and success.
                </p>
              </div>

              {/* Vision */}
              <div className="bg-gray-800 rounded-3xl p-8 shadow-lg border border-gray-700/50">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <div className="w-8 h-8 bg-white rounded-lg"></div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
                <p className="text-gray-300 leading-relaxed">
                  To be the leading business ecosystem in the Middle East, recognized for our innovation, reliability, and commitment to client success. We envision a future where every business has access to the tools and support they need to achieve their full potential.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-24 bg-gradient-to-b from-gray-800 to-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-300">Values</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                The principles that guide everything we do and shape our commitment to excellence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Excellence */}
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500/20 to-blue-400/20 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="w-10 h-10 bg-blue-600 rounded-2xl"></div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Excellence</h3>
                <p className="text-gray-300 leading-relaxed">
                  We strive for the highest standards in everything we do, delivering exceptional results for our clients.
                </p>
              </div>

              {/* Integrity */}
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500/20 to-green-400/20 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="w-10 h-10 bg-green-600 rounded-2xl"></div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Integrity</h3>
                <p className="text-gray-300 leading-relaxed">
                  We conduct business with honesty, transparency, and ethical practices in all our interactions.
                </p>
              </div>

              {/* Innovation */}
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500/20 to-purple-400/20 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="w-10 h-10 bg-purple-600 rounded-2xl"></div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Innovation</h3>
                <p className="text-gray-300 leading-relaxed">
                  We embrace new technologies and methodologies to provide cutting-edge solutions for our clients.
                </p>
              </div>

              {/* Partnership */}
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500/20 to-orange-400/20 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="w-10 h-10 bg-orange-600 rounded-2xl"></div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Partnership</h3>
                <p className="text-gray-300 leading-relaxed">
                  We build lasting relationships with our clients, working as trusted partners in their success.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-24 bg-gradient-to-b from-gray-900 to-gray-800">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Leadership <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-300">Team</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Meet the experienced professionals who lead Connect Group's mission to empower businesses.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Team Member 1 */}
              <div className="bg-gray-800 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-gray-700/50 group">
                <div className="relative w-24 h-24 rounded-2xl mx-auto mb-6 overflow-hidden">
                  <Image
                    src="/a.JPG"
                    alt="Ahmed Al-Rashid - Chief Executive Officer"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="96px"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">Ahmed Al-Rashid</h3>
                <p className="text-blue-400 font-medium mb-4">Chief Executive Officer</p>
                <p className="text-gray-300 leading-relaxed">
                  With over 15 years of experience in business development across the Middle East, Ahmed leads Connect Group's strategic vision and growth initiatives.
                </p>
              </div>

              {/* Team Member 2 */}
              <div className="bg-gray-800 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-gray-700/50 group">
                <div className="relative w-24 h-24 rounded-2xl mx-auto mb-6 overflow-hidden">
                  <Image
                    src="/b.JPG"
                    alt="Sarah Johnson - Chief Operating Officer"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="96px"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors">Sarah Johnson</h3>
                <p className="text-green-400 font-medium mb-4">Chief Operating Officer</p>
                <p className="text-gray-300 leading-relaxed">
                  Sarah oversees our operational excellence, ensuring seamless service delivery and maintaining our high standards of quality across all business units.
                </p>
              </div>

              {/* Team Member 3 */}
              <div className="bg-gray-800 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-gray-700/50 group">
                <div className="relative w-24 h-24 rounded-2xl mx-auto mb-6 overflow-hidden">
                  <Image
                    src="/c.JPG"
                    alt="Mohammed Hassan - Head of Legal Services"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="96px"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">Mohammed Hassan</h3>
                <p className="text-purple-400 font-medium mb-4">Head of Legal Services</p>
                <p className="text-gray-300 leading-relaxed">
                  Mohammed leads our legal team, providing expert guidance on UAE regulations and ensuring compliance for all our clients' business operations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-b from-gray-800 to-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-300">Partner</span> with Us?
              </h2>
              <p className="text-xl text-gray-300 mb-12">
                Join thousands of successful businesses that trust Connect Group for their growth journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-semibold transition-colors"
                >
                  Get Started Today
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center px-8 py-4 border border-gray-600 hover:border-gray-500 text-white rounded-full font-semibold transition-colors"
                >
                  Explore Our Services
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </LayoutWrapper>
  )
}
