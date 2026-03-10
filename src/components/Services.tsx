import { Code, Megaphone, Bot, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export function Services() {
  const services = [
    {
      title: "Digital Marketing",
      description:
        "We help brands grow online through data-driven marketing, audience targeting, and creative campaigns that convert.",
      icon: Megaphone,
      features: [
        "SEO Optimization",
        "Social Media Strategy",
        "Content Campaigns",
        "Paid Ads (Google & Meta)",
      ],
    },
    {
      title: "Web Development",
      description:
        "We build fast, modern, and responsive websites that turn visitors into customers and strengthen your digital identity.",
      icon: Code,
      features: [
        "Business Websites",
        "E-Commerce Platforms",
        "Landing Pages",
        "UX / UI Design",
      ],
    },
    {
      title: "Automation & AI",
      description:
        "Automate your workflow, save time, and improve efficiency with smart AI tools tailored to your business.",
      icon: Bot,
      features: [
        "Process Automation",
        "Chatbots & Support",
        "Data Analytics",
        "AI Integrations",
      ],
    },
  ];

  return (
    <section id="services" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Smart Digital Solutions
          </h2>
          <p className="text-lg text-muted-foreground">
            Transforming Ideas into Digital Impact. We help brands unlock their
            full potential through modern technology, creative design, and
            performance-driven strategies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-background rounded-2xl p-8 shadow-sm border border-border/50 hover:border-primary/50 transition-colors group"
              >
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm">
                      <ArrowRight className="h-4 w-4 text-primary mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
