import { Check } from "lucide-react";
import { motion } from "motion/react";

export function Pricing() {
  const plans = [
    {
      name: "N E X A 1337 Starter",
      price: "$499",
      description: "Essential digital presence and automation for growing businesses.",
      features: [
        "Basic Website (Up to 5 pages)",
        "Standard SEO Optimization",
        "1 AI Customer Support Chatbot",
        "Basic Social Media Management (8 posts/mo)",
        "Monthly Performance Report",
        "Email Support",
      ],
      highlighted: false,
    },
    {
      name: "N E X A 1337 Pro",
      price: "$999",
      description: "Comprehensive growth engine with advanced AI and marketing.",
      features: [
        "Custom Web Application / E-commerce",
        "Advanced SEO & Content Strategy",
        "Custom AI Agents & Workflow Automation",
        "Full Social Media Management (15 posts + 4 Reels/mo)",
        "Paid Ads Management (Meta/Google)",
        "Priority 24/7 Support & Weekly Analytics",
      ],
      highlighted: true,
    },
    {
      name: "N E X A 1337 Elite",
      price: "Custom",
      description: "Tailored enterprise solutions for maximum scale and efficiency.",
      features: [
        "Full-Stack Custom Software Development",
        "Enterprise-grade AI & Automation Systems",
        "Dedicated Account Manager & Growth Strategist",
        "Omnichannel Marketing Campaigns",
        "Brand Identity & Design System",
        "Unlimited Revisions & On-demand Support",
      ],
      highlighted: false,
    },
  ];

  const services = [
    { name: "Custom Web Development", price: "Starting at $1,500" },
    { name: "AI Chatbots & Assistants", price: "Starting at $500" },
    { name: "Workflow Automation", price: "Starting at $1,000" },
    { name: "Social Media Management", price: "Starting at $400/mo" },
    { name: "Paid Advertising Management", price: "Starting at $600/mo" },
    { name: "Brand Identity & Design", price: "Starting at $800" },
    { name: "SEO & Content Strategy", price: "Starting at $500/mo" },
    { name: "Landing Pages & Funnels", price: "Starting at $700" },
  ];

  return (
    <section id="pricing" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            N E X A 1337 Packs
          </h2>
          <p className="text-lg text-muted-foreground">
            Smart Pricing for Smart Businesses
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex flex-col p-8 rounded-3xl ${
                plan.highlighted
                  ? "bg-primary text-primary-foreground shadow-xl scale-105 z-10"
                  : "bg-background border border-border/50 shadow-sm"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 right-8 transform -translate-y-1/2">
                  <span className="bg-accent text-accent-foreground text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p
                  className={`text-sm ${
                    plan.highlighted ? "text-primary-foreground/80" : "text-muted-foreground"
                  }`}
                >
                  {plan.description}
                </p>
              </div>
              <div className="mb-8 flex-grow">
                <ul className="space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <Check
                        className={`h-5 w-5 mr-3 shrink-0 ${
                          plan.highlighted ? "text-primary-foreground" : "text-primary"
                        }`}
                      />
                      <span className="text-sm leading-tight">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  window.dispatchEvent(new CustomEvent('open-get-started'));
                }}
                className={`mt-auto w-full inline-flex h-12 items-center justify-center rounded-xl px-8 text-sm font-medium transition-colors ${
                  plan.highlighted
                    ? "bg-background text-foreground hover:bg-accent hover:text-accent-foreground"
                    : "bg-primary text-primary-foreground hover:bg-primary/90"
                }`}
              >
                Get Started
              </button>
            </motion.div>
          ))}
        </div>

        <div className="mt-24">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              N E X A Collection
            </h2>
            <p className="text-lg text-muted-foreground">
              Individual services tailored to your needs
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-background p-6 rounded-2xl border border-border/50 hover:border-primary/50 transition-colors group"
              >
                <h4 className="font-bold text-sm mb-2 group-hover:text-primary transition-colors">
                  {service.name}
                </h4>
                <p className="text-xs text-muted-foreground font-mono">
                  {service.price}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 max-w-4xl mx-auto p-6 bg-muted/30 border border-border/50 rounded-xl text-sm text-muted-foreground"
          >
            <p className="mb-2">
              <strong className="text-foreground">Note on Paid Ads:</strong> Ad spend is paid directly from the client’s account and is not included in our package. Our service only covers campaign setup and management.
            </p>
            <p className="italic">
              Example: Advertising budgets typically start from $10 per day and may increase depending on the campaign objective and the type of advertising strategy used.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
