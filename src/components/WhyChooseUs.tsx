import { Globe, LineChart, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";

export function WhyChooseUs() {
  const reasons = [
    {
      title: "Global Network",
      description:
        "We connect brands with world-class digital experts, ensuring every project meets international standards.",
      icon: Globe,
      features: [
        "Worldwide Collaboration",
        "Multilingual Support",
        "Scalable Projects",
      ],
    },
    {
      title: "Data-Driven Growth",
      description:
        "Our strategies rely on analytics and real-time data to optimize performance and boost results sustainably.",
      icon: LineChart,
      features: [
        "Performance Tracking",
        "Business Insights",
        "Conversion Optimization",
      ],
    },
    {
      title: "Secure & Reliable",
      description:
        "With enterprise-grade hosting, encrypted systems, and proactive monitoring, your digital assets stay safe 24/7.",
      icon: ShieldCheck,
      features: ["99.9% Uptime", "Data Protection", "Trusted Infrastructure"],
    },
  ];

  return (
    <section id="why-us" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-5xl font-bold tracking-tight mb-6"
            >
              Why Choose <span className="text-primary">N E X A 1337</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-muted-foreground mb-8 leading-relaxed"
            >
              Our team turns complex challenges into simple, scalable digital
              solutions, helping you grow smarter and faster. We blend creativity
              with technology to build impactful digital experiences for your
              audience.
            </motion.p>

            <div className="space-y-8">
              {reasons.map((reason, index) => {
                const Icon = reason.icon;
                return (
                  <motion.div
                    key={reason.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0 mt-1">
                      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
                      <p className="text-muted-foreground mb-3">
                        {reason.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {reason.features.map((feature) => (
                          <span
                            key={feature}
                            className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative rounded-2xl overflow-hidden aspect-square md:aspect-[4/3] lg:aspect-square bg-muted"
            >
              <img
                src="https://picsum.photos/seed/workspace/800/800"
                alt="Modern workspace"
                className="object-cover w-full h-full"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-background/80 via-background/20 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8 p-6 bg-background/80 backdrop-blur-md rounded-xl border border-border/50">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-xl">
                    +25
                  </div>
                  <div>
                    <h4 className="font-bold">Global Reach</h4>
                    <p className="text-sm text-muted-foreground">
                      From Morocco to the world
                    </p>
                  </div>
                </div>
                <p className="text-sm font-medium">
                  N E X A 1337 drives digital growth across borders.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
