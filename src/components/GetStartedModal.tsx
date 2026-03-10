import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ChevronRight, Check, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

interface GetStartedModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type Step = "initial" | "category" | "platform" | "details" | "contact-form";

export function GetStartedModal({ isOpen, onClose }: GetStartedModalProps) {
  const [step, setStep] = useState<Step>("initial");
  const [selection, setSelection] = useState<{
    type?: "invoice" | "contact";
    category?: string;
    platform?: string;
  }>({});

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    country: "",
    service: "",
    message: ""
  });

  const reset = () => {
    setStep("initial");
    setSelection({});
    setFormData({
      fullName: "",
      email: "",
      country: "",
      service: "",
      message: ""
    });
  };

  const handleClose = () => {
    onClose();
    setTimeout(reset, 300);
  };

  const handleBack = () => {
    switch (step) {
      case "category":
        setStep("initial");
        break;
      case "platform":
        setStep("category");
        break;
      case "details":
        setStep("platform");
        break;
      case "contact-form":
        if (selection.type === "invoice") {
          setStep("details");
        } else {
          setStep("initial");
        }
        break;
      default:
        break;
    }
  };

  const handleInitialSelect = (type: "invoice" | "contact") => {
    setSelection({ ...selection, type });
    if (type === "invoice") {
      setStep("category");
    } else {
      setStep("contact-form");
    }
  };

  const handleCategorySelect = (category: string) => {
    setSelection({ ...selection, category });
    setStep("platform");
  };

  const getSubCategories = (category: string) => {
    switch (category) {
      case "Web Development":
        return ["Woocommerce", "Shopify", "Youcan.shop", "Php script", "Vibe Coding"];
      case "Automation & AI":
        return ["Chatbot", "AI Agent", "AI Automation"];
      case "Digital Marketing":
        return [
          "Social Media Management",
          "Facebook & Instagram Ads",
          "Google Ads",
          "SEO (Search Engine Optimization)",
          "Content Creation",
          "Email Marketing",
        ];
      case "Extra Services":
        return ["Google Maps Optimization", "Social Media Followers Growth"];
      default:
        return [];
    }
  };

  const handlePlatformSelect = (platform: string) => {
    setSelection({ ...selection, platform });
    setStep("details");
  };

  const getPlatformDetails = (platform: string) => {
    switch (platform) {
      // Web Development
      case "Woocommerce":
        return {
          items: [
            { name: "Domain", price: "$10 – $15 / year" },
            { name: "Hosting", price: "$40 – $120 / year" },
            { name: "Premium Theme", price: "$30 – $70" },
            { name: "Plugins", price: "$0 – $100" },
          ],
          nexaCost: "Basic: $400 – $800, Advanced: $800 – $1500",
          developerCost: "$150 – $400",
        };
      case "Shopify":
        return {
          items: [
            { name: "Domain", price: "$14 / year" },
            { name: "Shopify Subscription", price: "$39 / month" },
            { name: "Theme", price: "$0 – $380" },
          ],
          nexaCost: "Basic: $400 – $900, Advanced: $900 – $2000",
          developerCost: "$150 – $350",
        };
      case "Youcan.shop":
        return {
          items: [
            { name: "YouCan Subscription", price: "$10 – $20 / month" },
            { name: "Domain", price: "$10 – $14" },
            { name: "Theme", price: "$0 – $60" },
          ],
          nexaCost: "Store Creation: $200 – $500",
          developerCost: "$80 – $250",
        };
      case "Php script":
        return {
          items: [
            { name: "Hosting VPS", price: "$5 – $10 / month" },
            { name: "Domain", price: "$10" },
            { name: "Premium Script", price: "$20 – $80" },
          ],
          nexaCost: "Basic Website: $600 – $1500",
          developerCost: "$200 – $600",
        };
      case "Vibe Coding":
        return {
          items: [
            { name: "Domain", price: "$10" },
            { name: "Hosting (Vercel / Netlify)", price: "Free – $20" },
            { name: "Template/UI Kit", price: "$0 – $60" },
          ],
          nexaCost: "Landing Page: $300 – $700, Startup: $700 – $2000",
          developerCost: "$200 – $600",
        };

      // Automation & AI
      case "Chatbot":
        return {
          items: [
            { name: "External Cost", price: "$180/year" },
          ],
          nexaCost: "Setup: $150 – $500, Monthly: $30 – $150",
        };
      case "AI Agent":
      case "AI Automation":
        return {
          items: [
            { name: "External Cost", price: "$360/year" },
            { name: "VPS (Self-hosted only)", price: "$41.88/year" },
            { name: "Domain Name (Optional)", price: "$15" },
          ],
          nexaCost: "Setup: $500 – $3000, Monthly: $100 – $600",
        };

      // Digital Marketing
      case "Social Media Management":
        return {
          items: [],
          nexaCost: "Small: $100–$300/mo, Medium: $300–$800/mo",
        };
      case "Facebook & Instagram Ads":
        return {
          items: [
            { name: "Ads Cost (Your Account)", price: "From $10/day" },
          ],
          nexaCost: "Setup: $100–$300, Monthly: $200–$1000",
        };
      case "Google Ads":
        return {
          items: [
            { name: "Ads Cost (Your Account)", price: "From $10/day" },
          ],
          nexaCost: "Setup: $150–$400, Monthly: $300–$1200",
        };
      case "SEO (Search Engine Optimization)":
        return {
          items: [],
          nexaCost: "Basic: $200–$500/mo, Advanced: $500–$2000/mo",
        };
      case "Content Creation":
        return {
          items: [],
          nexaCost: "Post: $10–$40, Reels: $20–$80",
        };
      case "Email Marketing":
        return {
          items: [],
          nexaCost: "Setup: $100–$400, Monthly: $100–$500",
        };

      // Extra Services
      case "Google Maps Optimization":
        return {
          items: [
            { name: "Google Business Profile", price: "Free" },
            { name: "Tools (Optional SEO Tools)", price: "$0 – $30 / month" },
            { name: "Verification / Local Citations", price: "$0 – $50" },
          ],
          nexaCost: "Basic: $120 – $250, Advanced: $250 – $500",
          totalOverride: "$120 – $580"
        };
      case "Social Media Followers Growth":
        return {
          items: [
            { name: "Ads Budget", price: "$10 – $20 / day" },
            { name: "Growth Tools (Optional)", price: "$0 – $30 / month" },
            { name: "Content Creation (Optional)", price: "$0 – $100" },
          ],
          nexaCost: "Basic: $100 – $300, Advanced: $300 – $700",
          totalOverride: "$200 – $1200+"
        };

      default:
        return { items: [], nexaCost: "" };
    }
  };

  const calculateTotal = (platform: string) => {
    // This is a simplified estimation logic for display purposes
    // In a real app, we might parse the numbers more strictly
    const details = getPlatformDetails(platform);
    
    if ('totalOverride' in details && details.totalOverride) {
      return details.totalOverride;
    }

    // Helper to extract numbers from string
    const extractMinMax = (str: string) => {
      const numbers = str.match(/(\d+)/g)?.map(Number) || [0, 0];
      return { min: Math.min(...numbers), max: Math.max(...numbers) };
    };

    let minExternal = 0;
    let maxExternal = 0;

    details.items.forEach(item => {
      const { min, max } = extractMinMax(item.price);
      // Simple heuristic: if it says "month", multiply by 12 for yearly view, or keep as is?
      // The prompt mixes yearly and monthly costs. 
      // Let's just sum the raw numbers found as a rough "Initial Investment" estimate.
      minExternal += min;
      maxExternal += max;
    });

    const { min: minNexa, max: maxNexa } = extractMinMax(details.nexaCost);
    
    const minTotal = minExternal + minNexa;
    const maxTotal = maxExternal + maxNexa;

    return `$${minTotal} – $${maxTotal}`;
  };

  const countries = [
    "Morocco", "United States", "United Kingdom", "Canada", "France", "Germany", "Spain", "Italy", "Netherlands", "Belgium", 
    "Switzerland", "United Arab Emirates", "Saudi Arabia", "Qatar", "Kuwait", "Bahrain", "Oman", "Egypt", "Turkey", 
    "India", "China", "Japan", "South Korea", "Australia", "New Zealand", "Brazil", "Argentina", "Mexico", "South Africa",
    "Nigeria", "Kenya", "Ghana", "Senegal", "Ivory Coast", "Algeria", "Tunisia", "Libya", "Mauritania", "Portugal", "Russia",
    "Ukraine", "Poland", "Sweden", "Norway", "Denmark", "Finland", "Ireland", "Singapore", "Malaysia", "Indonesia", "Thailand",
    "Vietnam", "Philippines", "Pakistan", "Bangladesh", "Other"
  ];

  const handleProceedToContact = () => {
    if (selection.platform && selection.category) {
      const details = getPlatformDetails(selection.platform);
      const total = calculateTotal(selection.platform);
      
      const autoMessage = `Hi NEXA1337,

I am interested in starting a project with the following details:

*Category:* ${selection.category}
*Platform/Service:* ${selection.platform}
*Estimated Investment:* ${total}

*Breakdown:*
${details.items.map(item => `- ${item.name}: ${item.price}`).join('\n')}
- NEXA Service Cost: ${details.nexaCost}

Please let me know the next steps.`;

      setFormData(prev => ({
        ...prev,
        service: selection.category || "",
        message: autoMessage
      }));
    }
    setStep("contact-form");
  };

  const handleSendToWhatsApp = (e: FormEvent) => {
    e.preventDefault();
    
    const text = `*New Inquiry from Website*
---------------------------
*Name:* ${formData.fullName}
*Email:* ${formData.email}
*Country:* ${formData.country}
*Service:* ${formData.service || selection.category || "General Inquiry"}
---------------------------
*Message:*
${formData.message}`;

    const url = `https://wa.me/212723242286?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-[60]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed left-[50%] top-[50%] z-[70] w-[95vw] max-w-lg translate-x-[-50%] translate-y-[-50%] border border-border bg-card shadow-lg rounded-lg sm:rounded-xl max-h-[90vh] flex flex-col"
          >
            <div className="flex-none p-6 pb-2">
              <div className="flex items-center justify-between mb-4">
                {step !== "initial" ? (
                  <button
                    onClick={handleBack}
                    className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors bg-muted/50 hover:bg-muted px-3 py-1.5 rounded-md"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    Back
                  </button>
                ) : (
                  <div />
                )}
                <button
                  onClick={handleClose}
                  className="rounded-full p-1.5 text-muted-foreground hover:bg-accent hover:text-foreground transition-colors"
                >
                  <X className="h-5 w-5" />
                  <span className="sr-only">Close</span>
                </button>
              </div>

              <h2 className="text-lg sm:text-xl font-semibold leading-none tracking-tight text-center sm:text-left">
                {step === "initial" && "Get Started with NEXA1337"}
                {step === "category" && "Select a Service Category"}
                {step === "platform" && "Choose Your Platform"}
                {step === "details" && `Estimated Cost for ${selection.platform}`}
                {step === "contact-form" && "Contact Us"}
              </h2>
              <div className="text-sm text-muted-foreground mt-2 text-center sm:text-left">
                {step === "initial" && "Choose how you would like to proceed."}
                {step === "category" && "What kind of project are you looking for?"}
                {step === "platform" && "Which technology stack do you prefer?"}
                {step === "contact-form" && "Fill out the form below to send us a message via WhatsApp."}
                {step === "details" && (
                  <p className="text-xs sm:text-sm p-2 bg-muted rounded-md border border-border/50">
                    <strong>How to calculate:</strong> <br className="sm:hidden" />
                    <span className="text-foreground">Total</span> = <span className="text-primary">External Costs</span> (Hosting, Domain, etc.) + <span className="text-primary">NEXA1337 Service Cost</span>.
                  </p>
                )}
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-6 pt-2">
              {step === "initial" && (
                <div className="grid gap-3 sm:gap-4">
                  <button
                    onClick={() => handleInitialSelect("invoice")}
                    className="flex items-center justify-between p-3 sm:p-4 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-colors group"
                  >
                    <span className="font-medium text-sm sm:text-base">Free Invoice / Estimate</span>
                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground group-hover:text-primary" />
                  </button>
                  <button
                    onClick={() => handleInitialSelect("contact")}
                    className="flex items-center justify-between p-3 sm:p-4 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-colors group"
                  >
                    <span className="font-medium text-sm sm:text-base">Contact Form</span>
                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground group-hover:text-primary" />
                  </button>
                </div>
              )}

              {step === "category" && (
                <div className="grid gap-3 sm:gap-4">
                  {["Web Development", "Digital Marketing", "Automation & AI", "Extra Services"].map((cat) => (
                    <button
                      key={cat}
                      onClick={() => handleCategorySelect(cat)}
                      className="flex items-center justify-between p-3 sm:p-4 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-colors group"
                    >
                      <span className="font-medium text-sm sm:text-base">{cat}</span>
                      <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground group-hover:text-primary" />
                    </button>
                  ))}
                </div>
              )}

              {step === "platform" && selection.category && (
                <div className="grid gap-2 sm:gap-3">
                  {getSubCategories(selection.category).map((plat) => (
                    <button
                      key={plat}
                      onClick={() => handlePlatformSelect(plat)}
                      className="flex items-center justify-between p-3 sm:p-4 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-colors group"
                    >
                      <span className="font-medium text-sm sm:text-base">{plat}</span>
                      <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground group-hover:text-primary" />
                    </button>
                  ))}
                </div>
              )}

              {step === "details" && selection.platform && (
                <div className="space-y-4 sm:space-y-6">
                  <div className="space-y-3 sm:space-y-4">
                    <h3 className="font-medium text-primary text-sm sm:text-base">External Costs (Third-party)</h3>
                    {getPlatformDetails(selection.platform).items.length > 0 ? (
                      <ul className="space-y-2 sm:space-y-3 bg-muted/30 p-3 rounded-lg">
                        {getPlatformDetails(selection.platform).items.map((item, idx) => (
                          <li key={idx} className="flex flex-col sm:flex-row sm:justify-between sm:items-center text-xs sm:text-sm gap-1 sm:gap-0">
                            <span className="text-muted-foreground">{item.name}</span>
                            <span className="font-semibold">{item.price}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-xs sm:text-sm text-muted-foreground italic">No fixed external costs or varies by usage.</p>
                    )}
                  </div>
                  
                  <div className="pt-4 border-t border-border">
                    <h3 className="font-medium text-primary mb-3 text-sm sm:text-base">NEXA1337 Service Cost</h3>
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-3 sm:p-4 bg-primary/10 rounded-lg gap-2">
                      <span className="font-medium text-sm sm:text-base">Estimated Range</span>
                      <span className="font-bold text-base sm:text-lg text-primary">{getPlatformDetails(selection.platform).nexaCost}</span>
                    </div>
                  </div>

                  {["Web Development", "Extra Services"].includes(selection.category) && (
                    <div className="pt-4 border-t border-border">
                      <h3 className="font-medium text-primary mb-3 text-sm sm:text-base">Total Estimated Investment</h3>
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-3 sm:p-4 bg-accent rounded-lg gap-2">
                        <div className="flex flex-col">
                          <span className="font-medium text-sm sm:text-base">Approx. Total</span>
                          <span className="text-[10px] sm:text-xs text-muted-foreground">(External + Service Cost)</span>
                        </div>
                        <span className="font-bold text-lg sm:text-xl text-primary">{calculateTotal(selection.platform)}</span>
                      </div>
                    </div>
                  )}

                  {(selection.category === "Digital Marketing" || selection.category === "Extra Services") && (
                    <div className="mt-6 p-4 bg-muted/30 border border-border/50 rounded-xl text-xs sm:text-sm text-muted-foreground">
                      <p className="mb-2">
                        <strong className="text-foreground">Note on Paid Ads:</strong> Ad spend is paid directly from the client’s account and is not included in our package. Our service only covers campaign setup and management.
                      </p>
                      <p className="italic">
                        Example: Advertising budgets typically start from $10 per day and may increase depending on the campaign objective and the type of advertising strategy used.
                      </p>
                    </div>
                  )}

                  <div className="flex flex-col sm:flex-row gap-3 pt-2 sm:pt-4">
                    <button
                      onClick={() => setStep("platform")}
                      className="w-full sm:flex-1 py-2.5 sm:py-2 rounded-md border border-border hover:bg-accent transition-colors text-sm font-medium"
                    >
                      Back
                    </button>
                    <button
                      onClick={handleProceedToContact}
                      className="w-full sm:flex-1 py-2.5 sm:py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-center flex items-center justify-center text-sm font-medium"
                    >
                      Proceed to Contact
                    </button>
                  </div>
                </div>
              )}

              {step === "contact-form" && (
                <form onSubmit={handleSendToWhatsApp} className="space-y-4">
                  <div className="space-y-3">
                    <div className="space-y-1">
                      <label htmlFor="fullName" className="text-sm font-medium">Full Name</label>
                      <input
                        id="fullName"
                        required
                        className="w-full p-2.5 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm"
                        value={formData.fullName}
                        onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-1">
                      <label htmlFor="email" className="text-sm font-medium">Email</label>
                      <input
                        id="email"
                        type="email"
                        required
                        className="w-full p-2.5 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="john@example.com"
                      />
                    </div>
                     <div className="space-y-1">
                      <label htmlFor="country" className="text-sm font-medium">Country</label>
                      <select
                        id="country"
                        required
                        className="w-full p-2.5 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm"
                        value={formData.country}
                        onChange={(e) => setFormData({...formData, country: e.target.value})}
                      >
                        <option value="">Select a country</option>
                        {countries.map(c => <option key={c} value={c}>{c}</option>)}
                      </select>
                    </div>
                    <div className="space-y-1">
                      <label htmlFor="service" className="text-sm font-medium">Service Interest</label>
                      <select
                        id="service"
                        required
                        className="w-full p-2.5 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm"
                        value={formData.service}
                        onChange={(e) => setFormData({...formData, service: e.target.value})}
                      >
                        <option value="">Select a service</option>
                        <option value="Web Development">Web Development</option>
                        <option value="Digital Marketing">Digital Marketing</option>
                        <option value="Automation & AI">Automation & AI</option>
                        <option value="General Inquiry">General Inquiry</option>
                      </select>
                    </div>
                    <div className="space-y-1">
                      <label htmlFor="message" className="text-sm font-medium">Message</label>
                      <textarea
                        id="message"
                        required
                        rows={5}
                        className="w-full p-2.5 rounded-md border border-border bg-background resize-none focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm font-mono"
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        placeholder="Tell us about your project..."
                      />
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => setStep(selection.platform ? "details" : "initial")}
                      className="w-full sm:flex-1 py-2.5 sm:py-2 rounded-md border border-border hover:bg-accent transition-colors text-sm font-medium"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="w-full sm:flex-1 py-2.5 sm:py-2 rounded-md bg-[#25D366] text-white hover:bg-[#128C7E] transition-colors text-center flex items-center justify-center text-sm font-medium gap-2 shadow-sm"
                    >
                      Send via WhatsApp
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
