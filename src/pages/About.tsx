import { motion } from "motion/react";
import { CheckCircle2, Rocket, Target, Zap } from "lucide-react";

export function About() {
  return (
    <div className="pt-24 pb-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
          >
            Empowering Digital Growth for <span className="text-primary">Modern Brands</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            At NEXA1337, we help brands unlock their full potential through modern technology, creative design, and performance-driven strategies.
          </motion.p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card p-8 rounded-2xl border border-border/50"
          >
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
              <Target className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed">
              To transform complex challenges into simple, scalable digital solutions. We blend creativity with technology to build impactful digital experiences that help businesses grow smarter and faster.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card p-8 rounded-2xl border border-border/50"
          >
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
              <Rocket className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="text-muted-foreground leading-relaxed">
              To be the global catalyst for digital innovation, connecting brands with world-class expertise and data-driven strategies that ensure sustainable growth in an ever-evolving digital landscape.
            </p>
          </motion.div>
        </div>

        {/* Why Choose Us (Content from site) */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose NEXA1337</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Global Network",
                desc: "We connect brands with world-class digital experts, ensuring every project meets international standards.",
                points: ["Worldwide Collaboration", "Multilingual Support", "Scalable Projects"]
              },
              {
                title: "Data-Driven Growth",
                desc: "Our strategies rely on analytics and real-time data to optimize performance and boost results sustainably.",
                points: ["Performance Tracking", "Business Insights", "Conversion Optimization"]
              },
              {
                title: "Secure & Reliable",
                desc: "With enterprise-grade hosting, encrypted systems, and proactive monitoring, your digital assets stay safe 24/7.",
                points: ["99.9% Uptime", "Data Protection", "Trusted Infrastructure"]
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-muted/30 p-6 rounded-xl"
              >
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm">{item.desc}</p>
                <ul className="space-y-2">
                  {item.points.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-center text-sm font-medium">
                      <CheckCircle2 className="w-4 h-4 text-primary mr-2" />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Roadmap */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">Our Roadmap to Success</h2>
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border hidden md:block"></div>

            {[
              {
                step: "01",
                title: "Discovery & Strategy",
                desc: "We start by understanding your business goals, target audience, and market landscape to build a solid foundation."
              },
              {
                step: "02",
                title: "Design & Prototyping",
                desc: "Our creative team crafts intuitive, user-centric designs that align with your brand identity and vision."
              },
              {
                step: "03",
                title: "Development & Integration",
                desc: "We bring designs to life using cutting-edge technologies, ensuring robust performance and seamless integration."
              },
              {
                step: "04",
                title: "Testing & Launch",
                desc: "Rigorous testing ensures a bug-free experience before we deploy your solution to the world."
              },
              {
                step: "05",
                title: "Growth & Optimization",
                desc: "Post-launch, we monitor performance and optimize strategies to drive continuous growth and ROI."
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`relative flex items-center justify-between mb-12 md:mb-24 ${
                  idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="hidden md:block w-5/12"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold z-10 border-4 border-background hidden md:flex">
                  {item.step}
                </div>
                <div className="w-full md:w-5/12 bg-card p-6 rounded-xl border border-border/50 shadow-sm relative">
                  <div className="md:hidden absolute -top-5 left-6 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold border-4 border-background">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold mb-2 mt-4 md:mt-0">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
