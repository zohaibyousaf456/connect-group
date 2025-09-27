import { Building, Monitor, Truck, Shield, Scale, Briefcase } from "lucide-react"

export function ServicesSection() {
  const services = [
    { icon: Building, title: "Business Solutions" },
    { icon: Monitor, title: "Recruitment and Outsourcing" },
    { icon: Building, title: "Real Estate Services" },
    { icon: Truck, title: "Transport Services" },
    { icon: Briefcase, title: "Visa Services" },
    { icon: Scale, title: "Legal Services" },
    { icon: Shield, title: "Security Services" },
    { icon: Briefcase, title: "Marketing Services" },
    { icon: Monitor, title: "HR Software" },
  ]

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">Reinventing the way companies succeed</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="flex items-center gap-3 text-left">
              <service.icon className="w-5 h-5 text-gray-600 flex-shrink-0" />
              <span className="text-gray-900 font-medium">{service.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
