import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      text: "I worked for a Freelance Visa from Connect Group and I must say that the guidance and the support I received from the team was excellent. I was able to get my visa in just 2 weeks without any difficulty. Their Staff Outstanding Service which includes Guidance, Support and Follow up. I would definitely recommend Connect Group to anyone who is looking for Business Setup Services. Excellent!",
      name: "Chantal Smith",
      role: "Freelancer",
      avatar: "bg-blue-500",
    },
    {
      text: "I applied for a Freelance Visa from Connect Group and I must say that the Technology, Community Support, Channels, Coaching Support, Mindset, Networking, and Opportunities are all excellent. I was able to get my visa in just 2 weeks without any difficulty. Their Staff Outstanding Service which includes Guidance, Support and Follow up. I would definitely recommend Connect Group to anyone who is looking for Business Setup Services. Thank you, Connect Resources!",
      name: "Ravi Agrawal",
      role: "Business Owner",
      avatar: "bg-green-500",
    },
    {
      text: "I worked for a Freelance Visa from Connect Group and I must say that the guidance and the support I received from the team was excellent. I was able to get my visa in just 2 weeks without any difficulty. Their Staff Outstanding Service which includes Guidance, Support and Follow up. I would definitely recommend Connect Group to anyone who is looking for Business Setup Services. Excellent!",
      name: "James Wright",
      role: "Managing Director",
      avatar: "bg-purple-500",
    },
  ]

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center items-center gap-4 mb-8">
          <div className="flex -space-x-2">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className={`w-12 h-12 rounded-full border-2 border-white ${
                  i === 0 ? "bg-blue-500" : i === 1 ? "bg-green-500" : i === 2 ? "bg-purple-500" : "bg-orange-500"
                }`}
              ></div>
            ))}
          </div>
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Connected with over <span className="text-red-500">+15,000</span>
        </h2>
        <p className="text-xl text-gray-600 mb-12">happy clients!</p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 text-left">
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">{testimonial.text}</p>
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 ${testimonial.avatar} rounded-full`}></div>
                <div>
                  <div className="font-semibold text-sm">{testimonial.name}</div>
                  <div className="text-xs text-gray-500">{testimonial.role}</div>
                  <div className="flex gap-1 mt-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <Button variant="outline" className="px-8 py-3 rounded-full bg-transparent border-gray-300">
          TALK ABOUT NUMBERS
        </Button>
      </div>
    </section>
  )
}
