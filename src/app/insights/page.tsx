import { Metadata } from 'next'
import LayoutWrapper from '@/components/layout-wrapper'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Insights - Connect Group',
  description: 'Stay updated with the latest business insights, industry trends, and expert advice from Connect Group.',
}

export default function InsightsPage() {
  return (
    <LayoutWrapper>
      <div className="min-h-screen bg-gray-900 text-white">
        {/* Hero Section */}
        <section className="relative py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-400/5" />
          <div className="container mx-auto px-4 relative">
            <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 pb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
  Insights
</h1>

              <p className="text-xl text-gray-300 leading-relaxed">
                Stay ahead with expert insights, industry trends, and actionable advice for your business success in the UAE.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Articles */}
        <section className="py-24 bg-gradient-to-b from-gray-800 to-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Latest <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-300">Insights</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover expert perspectives on business growth, market trends, and regulatory updates.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Article 1 */}
               <article className="bg-gray-800 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-gray-700/50 group">
                 <div className="mb-6">
                   <div className="relative w-full h-48 rounded-2xl mb-4 overflow-hidden">
                     <Image
                       src="/a.JPG"
                       alt="UAE Free Zone vs Mainland business setup"
                       fill
                       className="object-cover transition-transform duration-700 group-hover:scale-110"
                       sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent" />
                   </div>
                   <span className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-blue-500/10 text-blue-400">
                     Business Setup
                   </span>
                 </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                  UAE Free Zone vs Mainland: Which is Right for Your Business?
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  A comprehensive guide to help you choose the right business setup option for your company in the UAE.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">Dec 15, 2024</span>
                  <span className="text-blue-400 font-medium hover:text-blue-300 transition-colors cursor-pointer">
                    Read More →
                  </span>
                </div>
              </article>

              {/* Article 2 */}
               <article className="bg-gray-800 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-gray-700/50 group">
                 <div className="mb-6">
                   <div className="relative w-full h-48 rounded-2xl mb-4 overflow-hidden">
                     <Image
                       src="/b.JPG"
                       alt="Emiratisation requirements and HR services"
                       fill
                       className="object-cover transition-transform duration-700 group-hover:scale-110"
                       sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent" />
                   </div>
                   <span className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-green-500/10 text-green-400">
                     HR Services
                   </span>
                 </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors">
                  Emiratisation Requirements: What Every Business Needs to Know
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Understanding the latest Emiratisation policies and how they impact your workforce planning.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">Dec 12, 2024</span>
                  <span className="text-green-400 font-medium hover:text-green-300 transition-colors cursor-pointer">
                    Read More →
                  </span>
                </div>
              </article>

              {/* Article 3 */}
               <article className="bg-gray-800 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-gray-700/50 group">
                 <div className="mb-6">
                   <div className="relative w-full h-48 rounded-2xl mb-4 overflow-hidden">
                     <Image
                       src="/c.JPG"
                       alt="Freelance visa application process in Dubai"
                       fill
                       className="object-cover transition-transform duration-700 group-hover:scale-110"
                       sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent" />
                   </div>
                   <span className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-purple-500/10 text-purple-400">
                     Visa Services
                   </span>
                 </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
                  Freelance Visa in Dubai: Complete Application Guide
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Step-by-step guide to obtaining a freelance visa in Dubai, including requirements and process.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">Dec 10, 2024</span>
                  <span className="text-purple-400 font-medium hover:text-purple-300 transition-colors cursor-pointer">
                    Read More →
                  </span>
                </div>
              </article>

              {/* Article 4 */}
               <article className="bg-gray-800 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-gray-700/50 group">
                 <div className="mb-6">
                   <div className="relative w-full h-48 rounded-2xl mb-4 overflow-hidden">
                     <Image
                       src="/e.JPG"
                       alt="Digital transformation and IT services in UAE"
                       fill
                       className="object-cover transition-transform duration-700 group-hover:scale-110"
                       sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent" />
                   </div>
                   <span className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-orange-500/10 text-orange-400">
                     IT Services
                   </span>
                 </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-orange-400 transition-colors">
                  Digital Transformation in the UAE: Trends and Opportunities
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Explore how UAE businesses are leveraging technology for growth and competitive advantage.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">Dec 8, 2024</span>
                  <span className="text-orange-400 font-medium hover:text-orange-300 transition-colors cursor-pointer">
                    Read More →
                  </span>
                </div>
              </article>

              {/* Article 5 */}
               <article className="bg-gray-800 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-gray-700/50 group">
                 <div className="mb-6">
                   <div className="relative w-full h-48 rounded-2xl mb-4 overflow-hidden">
                     <Image
                       src="/f.JPG"
                       alt="UAE corporate tax compliance and legal services"
                       fill
                       className="object-cover transition-transform duration-700 group-hover:scale-110"
                       sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent" />
                   </div>
                   <span className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-red-500/10 text-red-400">
                     Legal Services
                   </span>
                 </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-red-400 transition-colors">
                  UAE Corporate Tax: Compliance and Planning Strategies
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Understanding the UAE corporate tax regime and how to ensure compliance for your business.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">Dec 5, 2024</span>
                  <span className="text-red-400 font-medium hover:text-red-300 transition-colors cursor-pointer">
                    Read More →
                  </span>
                </div>
              </article>

              {/* Article 6 */}
               <article className="bg-gray-800 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-gray-700/50 group">
                 <div className="mb-6">
                   <div className="relative w-full h-48 rounded-2xl mb-4 overflow-hidden">
                     <Image
                       src="/g.JPG"
                       alt="Dubai office space trends and real estate market"
                       fill
                       className="object-cover transition-transform duration-700 group-hover:scale-110"
                       sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent" />
                   </div>
                   <span className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-teal-500/10 text-teal-400">
                     Real Estate
                   </span>
                 </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-teal-400 transition-colors">
                  Dubai Office Space Trends: What's Driving the Market
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Analysis of current office space trends in Dubai and what businesses should consider.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">Dec 3, 2024</span>
                  <span className="text-teal-400 font-medium hover:text-teal-300 transition-colors cursor-pointer">
                    Read More →
                  </span>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-24 bg-gradient-to-b from-gray-900 to-gray-800">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Stay <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-300">Updated</span>
              </h2>
              <p className="text-xl text-gray-300 mb-12">
                Subscribe to our newsletter for the latest insights, regulatory updates, and business tips.
              </p>
              
              <div className="max-w-md mx-auto">
                <div className="flex gap-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-6 py-4 rounded-full bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:border-blue-500 focus:ring-blue-500 transition-colors"
                  />
                  <button className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-semibold transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </LayoutWrapper>
  )
}
