import { motion } from "motion/react";
import { Check } from "lucide-react";

export function PricingPage() {
  const plans = [
    {
      name: "N E X A 1337 Starter",
      price: "$499",
      period: "/month",
      description: "Essential digital presence and automation for growing businesses.",
      features: [
        "Basic Website (Up to 5 pages)",
        "Standard SEO Optimization",
        "1 AI Customer Support Chatbot",
        "Basic Social Media Management (8 posts/mo)",
        "Monthly Performance Report",
        "Email Support",
      ],
      highlight: false,
    },
    {
      name: "N E X A 1337 Pro",
      price: "$999",
      period: "/month",
      description: "Comprehensive growth engine with advanced AI and marketing.",
      features: [
        "Custom Web Application / E-commerce",
        "Advanced SEO & Content Strategy",
        "Custom AI Agents & Workflow Automation",
        "Full Social Media Management (15 posts + 4 Reels/mo)",
        "Paid Ads Management (Meta/Google)",
        "Priority 24/7 Support & Weekly Analytics",
      ],
      highlight: true,
    },
    {
      name: "N E X A 1337 Elite",
      price: "Custom",
      period: "",
      description: "Tailored enterprise solutions for maximum scale and efficiency.",
      features: [
        "Full-Stack Custom Software Development",
        "Enterprise-grade AI & Automation Systems",
        "Dedicated Account Manager & Growth Strategist",
        "Omnichannel Marketing Campaigns",
        "Brand Identity & Design System",
        "Unlimited Revisions & On-demand Support",
      ],
      highlight: false,
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
    <div className="pt-24 pb-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
          >
            Smart Pricing for <span className="text-primary">Smart Businesses</span>
          </motion.h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transparent pricing packages designed to scale with your business needs. No hidden fees, just results.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {plans.map((plan, idx) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative p-8 rounded-2xl border ${
                plan.highlight
                  ? "border-primary bg-primary/5 shadow-lg scale-105 z-10"
                  : "border-border/50 bg-card shadow-sm"
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}
              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <div className="flex items-baseline mb-4">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-muted-foreground ml-1">{plan.period}</span>
              </div>
              <p className="text-muted-foreground mb-6 text-sm">{plan.description}</p>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-center text-sm">
                    <Check className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  window.dispatchEvent(new CustomEvent('open-get-started'));
                }}
                className={`w-full py-3 rounded-lg font-medium transition-colors ${
                  plan.highlight
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "bg-muted hover:bg-muted/80 text-foreground"
                }`}
              >
                Get Started
              </button>
            </motion.div>
          ))}
        </div>

        {/* Detailed Service Pricing */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Service Breakdown</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center justify-between p-4 bg-card border border-border/40 rounded-xl hover:border-primary/50 transition-colors"
              >
                <span className="font-medium">{service.name}</span>
                <span className="text-primary font-bold">{service.price}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 p-6 bg-muted/30 border border-border/50 rounded-xl text-sm text-muted-foreground"
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
    </div>
  );
}
