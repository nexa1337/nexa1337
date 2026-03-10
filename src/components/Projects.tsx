import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, X, ChevronDown, Check } from "lucide-react";

interface Project {
  id: number;
  title: string;
  category: "Web Development" | "Branding" | "AI Solutions";
  description: string;
  image: string;
  popupData: {
    images: string[];
    client: string;
    sales: string;
    delivery: string;
    revisions: string;
    included: string[];
    technologies: string;
    fullDescription: string;
  };
}

const projects: Project[] = [
  {
    id: 1,
    title: "Premium Car Rental WordPress Theme",
    category: "Web Development",
    description: "Take your car rental or car hire business to the next level ...",
    image: "https://demo.awaikenthemes.com/landing/wp-content/uploads/2024/07/novaride-light-1.jpg",
    popupData: {
      images: [
        "https://demo.awaikenthemes.com/landing/wp-content/uploads/2024/07/novaride-light-1.jpg",
        "https://rentic.axiomthemes.com/splash/src/img/demo/1.jpg",
        "https://limodrive.wpthemeverse.com/wp-content/uploads/2024/10/limodrive_home1.png",
        "https://luxedrive.qodeinteractive.com/wp-content/uploads/2023/03/l-img-2.jpg",
        "https://autozone.templines.com/wp-content/uploads/2025/08/autozone-envato-themes-com_Or4yz0qz.webp",
      ],
      client: "Rental Agencies",
      sales: "50+",
      delivery: "1-2 weeks",
      revisions: "2",
      included: ["Theme Installation", "Demo Content Setup", "1 Month Support"],
      technologies: "WordPress, PHP, CSS",
      fullDescription: "A fully functional car rental theme with booking system integration, fleet management, and responsive design. Perfect for rental agencies looking to automate their booking process.",
    },
  },
  {
    id: 2,
    title: "Premium Health & Medical WordPress Theme",
    category: "Web Development",
    description: "Build trust and attract more patients with a clean, professional, and modern ...",
    image: "https://medicate.peacefulqode.co.in/wp-content/uploads/2022/04/1-4.jpg",
    popupData: {
      images: [
        "https://medicate.peacefulqode.co.in/wp-content/uploads/2022/04/1-4.jpg",
        "https://neoocular.qodeinteractive.com/wp-content/uploads/2021/10/landing-img-01-main-home-1.jpg",
        "https://denticare.bold-themes.com/wp-content/uploads/2020/03/main_demo_allen.png",
        "https://denticare.bold-themes.com/wp-content/uploads/2020/03/main_demo_oscar.png",
      ],
      client: "Clinics, Doctors",
      sales: "80+",
      delivery: "1-2 weeks",
      revisions: "2",
      included: ["Theme Installation", "SEO Optimization", "Appointment Booking"],
      technologies: "WordPress, Elementor",
      fullDescription: "Designed for medical professionals, this theme offers appointment scheduling, doctor profiles, and service listings in a clean, trustworthy layout.",
    },
  },
  {
    id: 3,
    title: "Premium Beauty & Hairdressers WordPress Theme",
    category: "Web Development",
    description: "Create a stunning online presence for your beauty salon, spa, or hairdressing ...",
    image: "https://spalabele.wpengine.com/wp-content/uploads/2023/07/home-1-768x1024.jpg",
    popupData: {
      images: [
        "https://spalabele.wpengine.com/wp-content/uploads/2023/07/home-1-768x1024.jpg",
        "https://reina.qodeinteractive.com/wp-content/uploads/2020/12/landing-iwt-img3.jpg",
        "https://reina.qodeinteractive.com/wp-content/uploads/2020/12/landing-iwt-img8.jpg",
        "https://curly.qodeinteractive.com/wp-content/uploads/2018/05/landing-home-img-1.jpg",
        "https://curly.qodeinteractive.com/wp-content/uploads/2018/05/landing-home-img-4.jpg",
      ],
      client: "Salons, Spas",
      sales: "120+",
      delivery: "1 week",
      revisions: "3",
      included: ["Theme Setup", "Gallery Configuration", "Price List Setup"],
      technologies: "WordPress, WooCommerce",
      fullDescription: "Elegant and stylish theme for beauty businesses. Features include service menus, photo galleries, and online booking capabilities.",
    },
  },
  {
    id: 4,
    title: "Premium Local Restaurants & Cafes WordPress Theme",
    category: "Web Development",
    description: "Give your restaurant or café the online presence it deserves with ...",
    image: "https://patiotime.loftocean.com/wp-content/uploads/2022/05/home-04-2.jpg",
    popupData: {
      images: [
        "https://patiotime.loftocean.com/wp-content/uploads/2022/05/home-04-2.jpg",
        "https://patiotime.loftocean.com/wp-content/uploads/2022/10/home-10.jpg",
        "https://caverta.matchthemes.com/wp-content/uploads/2023/12/caverta-cafe-restaurant-theme.jpg",
        "https://jimmie.qodeinteractive.com/wp-content/uploads/2023/04/land-home-01.jpg",
        "https://jimmie.qodeinteractive.com/wp-content/uploads/2023/04/land-home-03.jpg",
      ],
      client: "Restaurants, Cafes",
      sales: "200+",
      delivery: "1 week",
      revisions: "2",
      included: ["Menu Setup", "Reservation System", "Google Maps Integration"],
      technologies: "WordPress, PHP",
      fullDescription: "Mouth-watering design for food businesses. Includes digital menu, table reservation system, and integration with delivery platforms.",
    },
  },
  {
    id: 5,
    title: "Premium Social Media Branding",
    category: "Branding",
    description: "Transform your brand’s online presence with eye-catching social media designs ...",
    image: "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs3/209131124/original/7b4c7b2c3edf94bc91118305357a4b0cdfd4a06c/canva-template-presentation-social-media-posts-flyer-brochure-menu-design.png",
    popupData: {
      images: [
        "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs3/209131124/original/7b4c7b2c3edf94bc91118305357a4b0cdfd4a06c/canva-template-presentation-social-media-posts-flyer-brochure-menu-design.png",
        "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs2/165968954/original/406ea3e699b97ac101049fd7797013e372891edb/create-flyer-for-social-media-posts-and-products.png",
        "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs2/209131124/original/3f54b35d0f65194f3c8130e7280dca937b7a8330/canva-template-presentation-social-media-posts-flyer-brochure-menu-design.png",
        "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/209131124/original/43094e52b6ed0807eb1b2b470439b2567f59a4a1/canva-template-presentation-social-media-posts-flyer-brochure-menu-design.png",
      ],
      client: "Startups, Influencers",
      sales: "300+",
      delivery: "3-5 days",
      revisions: "Unlimited",
      included: ["Logo Design", "Social Media Kit", "Brand Guidelines"],
      technologies: "Adobe Illustrator, Photoshop",
      fullDescription: "Complete social media branding package including profile pictures, banners, and post templates to ensure consistent brand identity across all platforms.",
    },
  },
  {
    id: 6,
    title: "Premium social media advertising",
    category: "Branding",
    description: "Reach the right audience and grow your business faster with powerful social media advertising ...",
    image: "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs2/335059253/original/eada4959421eae260a0a688dbec6945bb43a4d4f/drive-conversions-with-creative-online-shop-ads.jpg",
    popupData: {
      images: [
        "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs2/335059253/original/eada4959421eae260a0a688dbec6945bb43a4d4f/drive-conversions-with-creative-online-shop-ads.jpg",
        "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs3/335059253/original/1756d9f79b12eb86ccc16a3ac8b08ce9a04616ea/drive-conversions-with-creative-online-shop-ads.jpg",
        "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs3/406375295/original/32b5e0ff4c18ae3c21bf972bb24bf3d0a404ae43/design-stunning-posters-professionally.jpg",
        "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs2/406375295/original/22ce9cbb53887f0b94c5804aa55f349231e38d10/design-stunning-posters-professionally.jpg",
      ],
      client: "E-commerce, Local Biz",
      sales: "150+",
      delivery: "1 week",
      revisions: "3",
      included: ["Ad Creatives", "Copywriting", "Audience Targeting"],
      technologies: "Facebook Ads, Instagram Ads",
      fullDescription: "Strategic social media campaigns designed to drive traffic and conversions. Includes ad creative design, copywriting, and audience targeting setup.",
    },
  },
  {
    id: 7,
    title: "Customer Support AI",
    category: "AI Solutions",
    description: "Deliver instant, 24/7 support with intelligent AI-powered customer service that never sleeps ...",
    image: "https://www.tidio.com/wp-content/uploads/1-chatbot-vs-livechat.png",
    popupData: {
      images: [
        "https://www.tidio.com/wp-content/uploads/1-chatbot-vs-livechat.png",
        "https://www.tidio.com/wp-content/uploads/17-lyro-playground-for-testing-a-knowledge-base-chatbot.webp",
        "https://res.cloudinary.com/dn1j6dpd7/image/fetch/f_auto,q_auto,w_736/https://chatbot-blog.livechat.com/app/uploads/2025/04/chatbot-guide-chatbot-with-AI-knowledge.png",
      ],
      client: "Websites, Mobile Apps",
      sales: "100+",
      delivery: "2-3 weeks",
      revisions: "2",
      included: [
        "Full project implementation",
        "3 months of technical support",
        "Complete documentation",
        "Training materials",
        "Source code access",
        "Deployment assistance",
      ],
      technologies: "AI tools",
      fullDescription: "Deliver instant, 24/7 support with intelligent AI-powered customer service that never sleeps. Our Customer Support AI understands questions, provides accurate answers, and resolves issues in real time — boosting satisfaction while reducing workload. From live chat to automated ticket handling, it learns from every interaction to offer faster and smarter responses. Enhance your customer experience, cut response times, and keep your clients happy — all while saving time and money with the future of support automation.",
    },
  },
  {
    id: 8,
    title: "Workflow Automation",
    category: "AI Solutions",
    description: "Save time, cut costs, and boost productivity with intelligent workflow automation ...",
    image: "https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/Sec_O_Ps_light_2_1eea5b5172.webp",
    popupData: {
      images: [
        "https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/Sec_O_Ps_light_2_1eea5b5172.webp",
        "https://images.ctfassets.net/0sppvm4cmdq7/1uN9XmvzzQqZFJq8yE8NKe/6ebe64226f343c509d95f8f29ec28ea5/Screen_Shot_2024-10-30_at_3.05.50_PM.png",
        "https://pbs.twimg.com/media/G2nou3-acAAMJ6F?format=jpg&name=4096x4096",
      ],
      client: "Enterprises",
      sales: "40+",
      delivery: "2-4 weeks",
      revisions: "3",
      included: ["Process Analysis", "Automation Scripts", "Integration Setup"],
      technologies: "Python, Zapier, API",
      fullDescription: "Automate repetitive tasks and streamline your business processes. We analyze your workflow and implement intelligent automation solutions to save time and reduce errors.",
    },
  },
];

export function Projects() {
  const [filter, setFilter] = useState<"all" | "web" | "branding" | "ai">("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isIncludedOpen, setIsIncludedOpen] = useState(false);

  const filteredProjects = projects.filter((project) => {
    if (filter === "all") return true;
    if (filter === "web") return project.category === "Web Development";
    if (filter === "branding") return project.category === "Branding";
    if (filter === "ai") return project.category === "AI Solutions";
    return true;
  });

  const openProject = (project: Project) => {
    setSelectedProject(project);
    setActiveImageIndex(0);
    setIsIncludedOpen(false);
  };

  const closeProject = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
          >
            Our Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            Discover our latest work and creative solutions
          </motion.p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            { id: "all", label: "All Projects" },
            { id: "web", label: "Web Development" },
            { id: "branding", label: "Branding" },
            { id: "ai", label: "AI Solutions" },
          ].map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id as any)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === category.id
                  ? "bg-primary text-primary-foreground shadow-lg scale-105"
                  : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative overflow-hidden rounded-xl bg-card border border-border/50 shadow-sm hover:shadow-md transition-all"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button
                      onClick={() => openProject(project)}
                      className="bg-primary text-primary-foreground px-6 py-2 rounded-full font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                    >
                      Quick View
                    </button>
                  </div>
                </div>
                <div className="p-4">
                  <span className="text-xs font-medium text-primary mb-2 block">
                    {project.category}
                  </span>
                  <h3 className="text-lg font-bold mb-2 line-clamp-1 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="mt-12 text-center">
          <button className="bg-primary text-primary-foreground px-8 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all">
            View All Projects
          </button>
        </div>
      </div>

      {/* Project Popup */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={closeProject}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-background w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl relative flex flex-col md:flex-row"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeProject}
                className="absolute top-4 right-4 z-10 p-2 bg-background/80 backdrop-blur rounded-full hover:bg-muted transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Gallery Section */}
              <div className="w-full md:w-1/2 p-6 bg-muted/10 flex flex-col gap-4">
                <div className="aspect-video w-full rounded-xl overflow-hidden bg-muted relative shadow-md">
                  <img
                    src={selectedProject.popupData.images[activeImageIndex]}
                    alt={selectedProject.title}
                    className="w-full h-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                  {selectedProject.popupData.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                        activeImageIndex === idx
                          ? "border-primary ring-2 ring-primary/20"
                          : "border-transparent opacity-70 hover:opacity-100"
                      }`}
                    >
                      <img
                        src={img}
                        alt={`Thumbnail ${idx + 1}`}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Details Section */}
              <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col">
                <span className="text-sm font-medium text-primary mb-2">
                  {selectedProject.category}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  {selectedProject.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed text-sm md:text-base">
                  {selectedProject.popupData.fullDescription}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                  <div className="space-y-1">
                    <strong className="block text-foreground">Client:</strong>
                    <span className="text-muted-foreground">
                      {selectedProject.popupData.client}
                    </span>
                  </div>
                  <div className="space-y-1">
                    <strong className="block text-foreground">Sales:</strong>
                    <span className="text-muted-foreground">
                      {selectedProject.popupData.sales}
                    </span>
                  </div>
                  <div className="space-y-1">
                    <strong className="block text-foreground">Delivery:</strong>
                    <span className="text-muted-foreground">
                      {selectedProject.popupData.delivery}
                    </span>
                  </div>
                  <div className="space-y-1">
                    <strong className="block text-foreground">Revisions:</strong>
                    <span className="text-muted-foreground">
                      {selectedProject.popupData.revisions}
                    </span>
                  </div>
                  <div className="col-span-2 space-y-1">
                    <strong className="block text-foreground">Technologies:</strong>
                    <span className="text-muted-foreground">
                      {selectedProject.popupData.technologies}
                    </span>
                  </div>
                </div>

                <div className="mb-8 border rounded-xl overflow-hidden">
                  <button
                    onClick={() => setIsIncludedOpen(!isIncludedOpen)}
                    className="w-full flex items-center justify-between p-4 bg-muted/30 hover:bg-muted/50 transition-colors text-sm font-semibold"
                  >
                    <span>What's Included</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        isIncludedOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {isIncludedOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <ul className="p-4 space-y-2 bg-muted/10 text-sm">
                          {selectedProject.popupData.included.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                              <span className="text-muted-foreground">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

