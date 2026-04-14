/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { 
  Anchor, 
  Settings, 
  Package, 
  ShieldCheck, 
  ArrowRight, 
  Globe, 
  Hammer, 
  Truck, 
  Search,
  Mail,
  Phone,
  MapPin,
  Menu,
  X,
  MessageCircle,
  ChevronRight,
  ArrowLeft,
  CheckCircle2,
  Briefcase,
  PenTool,
  Wrench,
  ArrowUpCircle,
  ChevronDown
} from "lucide-react";
import { useState, useEffect, ReactNode } from "react";

const Logo = ({ className = "h-8" }: { className?: string, color?: string }) => {
  return (
    <img 
      src="/logo.png" 
      alt="TOWARD Logo" 
      className={`object-contain ${className}`}
      referrerPolicy="no-referrer"
      onError={(e) => {
        // Fallback if image is not uploaded yet
        e.currentTarget.style.display = 'none';
        e.currentTarget.nextElementSibling?.classList.remove('hidden');
      }}
    />
  );
};

interface Service {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  fullDescription: string;
  icon: ReactNode;
  image: string;
  features: string[];
  specs: { label: string; value: string }[];
  subSections?: {
    title: string;
    description: string;
    features: string[];
    image?: string;
  }[];
}

interface Product {
  name: string;
  desc: string;
  image?: string;
  onError?: (e: any) => void;
  fullDescription?: string;
  features?: string[];
  specs?: { label: string; value: string }[];
  applications?: string[];
  safety?: string;
  service?: string;
}

interface Equipment {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  products: Product[];
}

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedEquipment, setSelectedEquipment] = useState<Equipment | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedLegalPage, setSelectedLegalPage] = useState<string | null>(null);
  const [selectedAutomationPage, setSelectedAutomationPage] = useState<boolean>(false);
  const [selectedAboutPage, setSelectedAboutPage] = useState<boolean>(false);
  const [selectedChinaAlternativesPage, setSelectedChinaAlternativesPage] = useState<boolean>(false);

  // Prevent scroll when sub-page is open
  useEffect(() => {
    if (selectedService || selectedEquipment || selectedProduct || selectedLegalPage || selectedAutomationPage || selectedAboutPage || selectedChinaAlternativesPage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedService, selectedEquipment, selectedProduct, selectedLegalPage, selectedAutomationPage, selectedAboutPage, selectedChinaAlternativesPage]);

  const automationPage = {
    title: "Terminal Automation",
    subtitle: "The Future of Port Operations",
    description: "Transforming traditional port operations into fully autonomous, high-efficiency hubs. Our comprehensive automation solutions integrate advanced robotics, AI-driven control systems, and real-time data analytics to maximize throughput, reduce emissions, and ensure zero-harm operations.",
    sections: [
        {
          title: "Automated Guided Vehicles (AGV)",
          content: "Our AGVs are fully autonomous, battery-powered vehicles designed for horizontal transport of containers. They operate 24/7 with zero local emissions, navigating through advanced laser and GPS systems to ensure precise and safe movement within the terminal.",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/AGV_con_carro.jpg/1280px-AGV_con_carro.jpg",
          onError: (e: any) => { e.currentTarget.src = "https://picsum.photos/seed/agv/1200/800"; }
        },
        {
          title: "Automated Stacking Cranes (ASC)",
          content: "ASCs provide high-density yard management with minimal human intervention. These rail-mounted cranes are capable of fully automated stacking and retrieval, optimizing yard space and ensuring consistent, high-speed container handling.",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Portainer_%28gantry_crane%29.jpg/1280px-Portainer_%28gantry_crane%29.jpg",
          onError: (e: any) => { e.currentTarget.src = "https://picsum.photos/seed/port-asc/1200/800"; }
        },
        {
          title: "Remote Operation Systems (ROS)",
          content: "Our ROS allows operators to control multiple cranes from a centralized, ergonomic office environment. This not only improves safety by removing personnel from the yard but also increases productivity through better working conditions and multi-crane management.",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Control_room_-_Lucens_reactor_-_1968_-_L17-0251-0105.jpg/1280px-Control_room_-_Lucens_reactor_-_1968_-_L17-0251-0105.jpg",
          onError: (e: any) => { e.currentTarget.src = "https://picsum.photos/seed/ros/1200/800"; }
        },
        {
          title: "AI-Driven TOS Integration",
          content: "The heart of our automation is the seamless integration with Terminal Operating Systems (TOS). Our AI algorithms optimize equipment scheduling, traffic flow, and yard allocation in real-time, predicting bottlenecks before they occur.",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Utah_Data_Center_Panorama_%28cropped%29.jpg/1280px-Utah_Data_Center_Panorama_%28cropped%29.jpg",
          onError: (e: any) => { e.currentTarget.src = "https://picsum.photos/seed/tos/1200/800"; }
        }
    ]
  };

  const legalPages = {
    privacy: {
      title: "Privacy Policy",
      content: `
        <h2 class="text-2xl font-bold mb-4">1. Information We Collect</h2>
        <p class="mb-6">We collect information you provide directly to us, such as when you request a quote, contact our support team, or sign up for our newsletter. This may include your name, email address, company name, and phone number.</p>
        
        <h2 class="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
        <p class="mb-6">We use the information we collect to provide, maintain, and improve our services, to communicate with you about your inquiries, and to send you technical notices and support messages.</p>
        
        <h2 class="text-2xl font-bold mb-4">3. Data Security</h2>
        <p class="mb-6">We take reasonable measures to help protect information about you from loss, theft, misuse and unauthorized access, disclosure, alteration and destruction.</p>
        
        <h2 class="text-2xl font-bold mb-4">4. Contact Us</h2>
        <p class="mb-6">If you have any questions about this Privacy Policy, please contact us at privacy@toward-global.com.</p>
      `
    },
    terms: {
      title: "Terms of Service",
      content: `
        <h2 class="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
        <p class="mb-6">By accessing or using TOWARD's services, you agree to be bound by these Terms of Service. If you do not agree to all of these terms, do not use our services.</p>
        
        <h2 class="text-2xl font-bold mb-4">2. Use of Services</h2>
        <p class="mb-6">You may use our services only for lawful purposes and in accordance with these Terms. You agree not to use the services in any way that violates any applicable local, state, national, or international law.</p>
        
        <h2 class="text-2xl font-bold mb-4">3. Intellectual Property</h2>
        <p class="mb-6">The services and their entire contents, features, and functionality are owned by TOWARD and are protected by international copyright, trademark, and other intellectual property laws.</p>
        
        <h2 class="text-2xl font-bold mb-4">4. Limitation of Liability</h2>
        <p class="mb-6">In no event will TOWARD be liable for any indirect, incidental, special, consequential or punitive damages arising out of or in connection with your use of the services.</p>
      `
    },
    cookie: {
      title: "Cookie Policy",
      content: `
        <h2 class="text-2xl font-bold mb-4">1. What Are Cookies</h2>
        <p class="mb-6">Cookies are small text files that are placed on your computer by websites that you visit. They are widely used in order to make websites work, or work more efficiently, as well as to provide information to the owners of the site.</p>
        
        <h2 class="text-2xl font-bold mb-4">2. How We Use Cookies</h2>
        <p class="mb-6">We use cookies to understand how you use our website and to improve your experience. This includes keeping you logged in and remembering your preferences.</p>
        
        <h2 class="text-2xl font-bold mb-4">3. Managing Cookies</h2>
        <p class="mb-6">Most web browsers allow some control of most cookies through the browser settings. To find out more about cookies, including how to see what cookies have been set, visit www.aboutcookies.org.</p>
      `
    }
  };

  const capabilities = [
    {
      id: "tailored-engineering",
      title: "Tailored Engineering",
      description: "Custom-designed engineering solutions specifically adapted to your unique operational requirements and site conditions.",
      fullDescription: "Our engineering team delivers innovative, custom-designed solutions for your specific industrial needs. From conceptual design to detailed structural analysis, we ensure every project meets the highest standards of quality and performance.",
      icon: <PenTool className="w-8 h-8" />,
      image: "https://images.weserv.nl/?url=images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1200",
      features: [
        "Structural Design",
        "Mechanical Engineering",
        "Automation Systems",
        "CAD Modeling",
        "Prototyping"
      ],
      specs: [
        { label: "Software", value: "AutoCAD, SolidWorks" },
        { label: "Standards", value: "ISO, ASME" },
        { label: "Project Scale", value: "Customized" }
      ]
    },
    {
      id: "msw-consulting",
      title: "MSW Consulting",
      description: "Strategic consulting for Municipal Solid Waste management and industrial waste handling optimization.",
      fullDescription: "Expert consulting services for large-scale waste management operations. We analyze your current processes, identify bottlenecks, and provide actionable strategies to maximize efficiency and environmental compliance.",
      icon: <Briefcase className="w-8 h-8" />,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Krupp_stacker_rtca_kestrel_mine.jpg/1280px-Krupp_stacker_rtca_kestrel_mine.jpg",
      features: [
        "Operational Audits",
        "Waste Flow Optimization",
        "Environmental Compliance",
        "Feasibility Studies"
      ],
      specs: [
        { label: "Expertise", value: "MSW Management" },
        { label: "ROI Improvement", value: "Up to 30%" }
      ]
    },
    {
      id: "china-alternatives",
      title: "China Alternatives",
      description: "High-quality Chinese alternative components and equipment providing cost-effective excellence.",
      fullDescription: "We identify and supply high-performance alternative components from leading Chinese manufacturers, offering significant cost savings without compromising on quality or reliability.",
      icon: <Globe className="w-8 h-8" />,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/LUN-A.jpg/1280px-LUN-A.jpg",
      features: [
        "Strategic Sourcing",
        "Quality Verification",
        "Cost Optimization",
        "Supply Chain Management"
      ],
      specs: [
        { label: "Cost Savings", value: "20-40%" },
        { label: "Quality Check", value: "100% Verified" }
      ]
    },
    {
      id: "onsite-support",
      title: "On-site Support",
      description: "Direct on-site technical assistance, maintenance, and operational support globally.",
      fullDescription: "Our rapid-response teams provide direct on-site support for installation, maintenance, and troubleshooting, ensuring your operations remain at peak performance regardless of location.",
      icon: <Wrench className="w-8 h-8" />,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Control_room_-_Lucens_reactor_-_1968_-_L17-0251-0105.jpg/1280px-Control_room_-_Lucens_reactor_-_1968_-_L17-0251-0105.jpg",
      features: [
        "Installation Support",
        "Emergency Repairs",
        "Technical Training",
        "Condition Monitoring"
      ],
      specs: [
        { label: "Response Time", value: "Global Support" },
        { label: "Technicians", value: "Certified Experts" }
      ]
    }
  ];

  const services: Service[] = [
    {
      id: "consulting",
      title: "Consulting",
      description: "Strategic industrial consulting to optimize operations, reduce costs, and improve safety.",
      fullDescription: "TOWARD offers expert consulting services for industrial operations. We analyze your current processes, identify bottlenecks, and provide actionable strategies to maximize efficiency and profitability.",
      icon: <Briefcase className="w-8 h-8" />,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Krupp_stacker_rtca_kestrel_mine.jpg/1280px-Krupp_stacker_rtca_kestrel_mine.jpg",
      features: [
        "Operational Audits",
        "Cost Reduction Strategies",
        "Safety Compliance",
        "Workflow Optimization",
        "Feasibility Studies"
      ],
      specs: [
        { label: "Industry Experience", value: "20+ Years" },
        { label: "ROI Improvement", value: "Up to 30%" },
        { label: "Global Reach", value: "50+ Countries" }
      ],
      subSections: [
        {
          title: "General Industry Consulting",
          description: "Comprehensive consulting for traditional heavy industries, manufacturing, and port operations. We focus on lean management, equipment lifecycle optimization, and operational safety to ensure your facility operates at peak performance.",
          features: [
            "Operational Audits & Bottleneck Analysis",
            "Cost Reduction Strategies",
            "Safety & Compliance Audits",
            "Workflow & Logistics Optimization",
            "Feasibility Studies for Expansion"
          ],
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Krupp_stacker_rtca_kestrel_mine.jpg/1280px-Krupp_stacker_rtca_kestrel_mine.jpg"
        },
        {
          title: "MSW (Municipal Solid Waste) Consulting",
          description: "Specialized consulting for modern waste management facilities. We help municipalities and private operators design, upgrade, and optimize waste-to-energy plants, sorting facilities, and landfill operations to meet strict environmental standards.",
          features: [
            "Waste Flow & Sorting Optimization",
            "Waste-to-Energy (WtE) Feasibility",
            "Environmental Compliance & Emissions",
            "Facility Upgrade Planning",
            "Equipment Selection (Shredders, Screens, Balers)"
          ],
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/AlbertaSulfurAtVancouverBC.jpg/1280px-AlbertaSulfurAtVancouverBC.jpg"
        }
      ]
    },
    {
      id: "engineering",
      title: "Engineering",
      description: "Custom engineering solutions for complex industrial challenges and heavy machinery design.",
      fullDescription: "Our engineering team delivers innovative, custom-designed solutions for your specific industrial needs. From conceptual design to detailed structural analysis, we ensure every project meets the highest standards of quality and performance.",
      icon: <PenTool className="w-8 h-8" />,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Control_room_-_Lucens_reactor_-_1968_-_L17-0251-0105.jpg/1280px-Control_room_-_Lucens_reactor_-_1968_-_L17-0251-0105.jpg",
      features: [
        "Structural Design",
        "Mechanical Engineering",
        "Automation Systems",
        "CAD Modeling",
        "Prototyping"
      ],
      specs: [
        { label: "Software", value: "AutoCAD, SolidWorks" },
        { label: "Standards", value: "ISO, ASME" },
        { label: "Project Scale", value: "Up to $50M" }
      ]
    },
    {
      id: "maintenance",
      title: "Maintenance",
      description: "Comprehensive preventative and corrective maintenance programs to minimize downtime.",
      fullDescription: "Keep your operations running smoothly with our proactive maintenance services. We offer scheduled inspections, predictive maintenance using IoT sensors, and rapid-response repair teams to ensure maximum equipment availability.",
      icon: <Wrench className="w-8 h-8" />,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Visitors_holding_capstan_bars_turn_the_capstan.jpg/1280px-Visitors_holding_capstan_bars_turn_the_capstan.jpg",
      features: [
        "Preventative Maintenance",
        "Predictive Analytics",
        "Emergency Repairs",
        "Condition Monitoring",
        "Asset Management"
      ],
      specs: [
        { label: "Response Time", value: "< 24 Hours" },
        { label: "Uptime Guarantee", value: "99.9%" },
        { label: "Technicians", value: "Certified Experts" }
      ]
    },
    {
      id: "upgrades",
      title: "Upgrades",
      description: "Modernize your existing equipment with the latest technology for enhanced performance.",
      fullDescription: "Extend the lifespan of your heavy machinery with our comprehensive upgrade services. We replace outdated components with state-of-the-art technology, improving efficiency, safety, and environmental compliance without the cost of new equipment.",
      icon: <ArrowUpCircle className="w-8 h-8" />,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Krupp_twin_boom_portal_reclaimer_rtca_kestrel_mine.jpg/1280px-Krupp_twin_boom_portal_reclaimer_rtca_kestrel_mine.jpg",
      features: [
        "Control System Modernization",
        "Energy Efficiency Retrofits",
        "Capacity Expansions",
        "Safety Enhancements",
        "Software Updates"
      ],
      specs: [
        { label: "Lifespan Extension", value: "10-15 Years" },
        { label: "Efficiency Gain", value: "Avg. 25%" },
        { label: "Downtime", value: "Minimized" }
      ]
    },
    {
      id: "parts-services",
      title: "Parts & Services",
      description: "Global supply chain for critical spare parts and specialized technical support.",
      fullDescription: "TOWARD maintains a vast inventory of high-quality spare parts for all major industrial brands. Combined with our expert technical support, we ensure you have the right components and knowledge exactly when you need them.",
      icon: <Package className="w-8 h-8" />,
      image: "https://upload.wikimedia.org/wikipedia/commons/4/44/AnchorWindlass.jpg",
      features: [
        "OEM & Aftermarket Parts",
        "Global Logistics",
        "Inventory Management",
        "Technical Support",
        "Custom Fabrication"
      ],
      specs: [
        { label: "Inventory", value: "50,000+ SKUs" },
        { label: "Delivery", value: "Global < 48h" },
        { label: "Quality Check", value: "100% Pre-shipment" }
      ]
    },
    {
      id: "inspection",
      title: "Third-Party Inspection",
      subtitle: "Independent Quality Assurance",
      description: "Unbiased, professional inspection services to ensure your equipment meets all safety, quality, and regulatory standards.",
      fullDescription: "TOWARD provides comprehensive third-party inspection services for industrial equipment. Our independent experts conduct rigorous assessments, from structural integrity checks to operational safety audits, providing you with the confidence that your assets are compliant and reliable.",
      icon: <Search className="w-8 h-8" />,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Intermodal_terminal_loading.jpg/1280px-Intermodal_terminal_loading.jpg",
      features: [
        "Structural Integrity Audits",
        "Safety Compliance Checks",
        "Regulatory Documentation",
        "Pre-shipment Inspections"
      ],
      specs: [
        { label: "Standards", value: "ISO, ASME, AWS" },
        { label: "Reporting", value: "Detailed Digital Reports" },
        { label: "Expertise", value: "Certified Inspectors" },
        { label: "Turnaround", value: "Rapid Assessment" }
      ]
    }
  ];

  const equipments: Equipment[] = [
    {
      id: "terminals",
      title: "Terminals",
      subtitle: "Port & Container Handling",
      description: "State-of-the-art equipment designed for maximum throughput, reliability, and energy efficiency in modern port terminals.",
      image: "https://upload.wikimedia.org/wikipedia/commons/7/79/PACECO_Container_Crane_2.jpg",
      products: [
        { 
          name: "Ship-to-Shore (STS) Cranes", 
          desc: "High-speed container loading and unloading.",
          image: "https://upload.wikimedia.org/wikipedia/commons/7/79/PACECO_Container_Crane_2.jpg",
          onError: (e: any) => { e.currentTarget.src = "https://picsum.photos/seed/port-sts/1200/800"; },
          fullDescription: "Our Ship-to-Shore (STS) cranes are the benchmark for high-performance container handling. Engineered for the world's largest vessels, they feature advanced sway control, semi-automated positioning, and energy recovery systems. Designed for 24/7 operation in extreme maritime conditions, these cranes maximize quay productivity and minimize vessel turnaround time.",
          features: ["Electronic Anti-Sway & Snag Protection", "Semi-Automated Cycle Control", "Regenerative Power Feedback", "High-Tensile Steel Box Girder Design", "Remote Diagnostics & Monitoring"],
          specs: [{ label: "Safe Working Load", value: "80t (Twin) / 100t (Tandem)" }, { label: "Outreach", value: "Up to 75m (26 rows)" }, { label: "Hoisting Speed", value: "90-180 m/min" }, { label: "Trolley Speed", value: "240-300 m/min" }],
          applications: ["Deep-Water Container Terminals", "Automated Hub Ports", "Intermodal Transshipment"],
          safety: "Equipped with SIL-rated safety PLC systems, laser-based collision avoidance, and emergency dynamic braking. Our STS cranes meet all major international safety standards including FEM and OSHA.",
          service: "Comprehensive lifecycle support including 24/7 remote monitoring, annual structural inspections, and on-site technician training programs."
        },
        { 
          name: "Rubber-Tired Gantry (RTG)", 
          desc: "Flexible yard stacking operations.",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Intermodal_terminal_loading.jpg/1280px-Intermodal_terminal_loading.jpg",
          onError: (e: any) => { e.currentTarget.src = "https://picsum.photos/seed/port-rtg/1200/800"; },
          fullDescription: "Our RTGs provide the ultimate flexibility for container yard management. Available in hybrid, fully electric (E-RTG), and diesel-electric configurations, they offer precise stacking and high maneuverability. Integrated with GPS auto-steering and container profiling systems, they ensure safe and efficient yard operations with reduced carbon footprint.",
          features: ["GPS Auto-Steering & Stack Profiling", "Hybrid Power with Energy Storage", "Zero-Emission Electric Drive Options", "Active Load Anti-Sway System", "Intelligent Maintenance Alerts"],
          specs: [{ label: "Stacking Height", value: "1 over 6 high" }, { label: "Span", value: "Up to 8 rows + truck lane" }, { label: "Lifting Capacity", value: "41t under spreader" }, { label: "Gantry Speed", value: "135 m/min" }],
          applications: ["Container Yard Stacking", "Inland Port Operations", "Temporary Storage Hubs"],
          safety: "Features active anti-collision sensors, tire pressure monitoring, and automated fire suppression systems in the engine compartment.",
          service: "Modular component design for rapid replacement, predictive maintenance analytics, and global spare parts availability."
        },
        { 
          name: "Rail-Mounted Gantry (RMG)", 
          desc: "High-density automated yard cranes.",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Portainer_%28gantry_crane%29.jpg/1280px-Portainer_%28gantry_crane%29.jpg",
          onError: (e: any) => { e.currentTarget.src = "https://picsum.photos/seed/port-rmg/1200/800"; },
          fullDescription: "Designed for high-density, automated container terminals, our RMGs deliver exceptional reliability and precision. Fully electric and automation-ready, they are optimized for high-speed gantry travel and precise container placement. Ideal for intermodal rail hubs and large-scale automated yards where consistency and throughput are paramount.",
          features: ["Full Level 4 Automation Capability", "High-Precision Laser Scanning", "Zero Local Emissions", "High-Speed Gantry & Trolley Drives", "Advanced Fleet Management Integration"],
          specs: [{ label: "Stacking Height", value: "1 over 5 / 1 over 6" }, { label: "Span", value: "Up to 50m (15+ rows)" }, { label: "Hoisting Speed", value: "50-70 m/min" }, { label: "Automation", value: "Remote/Fully Auto" }]
        },
        { 
          name: "Straddle Carriers", 
          desc: "Versatile horizontal transport and stacking.",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/SISU_Valmet_44011_Straddle_carrier_p5.JPG/1280px-SISU_Valmet_44011_Straddle_carrier_p5.JPG",
          onError: (e: any) => { e.currentTarget.src = "https://picsum.photos/seed/port-straddle/1200/800"; },
          fullDescription: "Our Straddle Carriers decouple quay and yard operations, providing unmatched agility in container transport. Featuring independent wheel suspension and hybrid drive technology, they offer superior maneuverability and fuel efficiency. Capable of both horizontal transport and stacking, they are the versatile workhorses of modern flexible terminals.",
          features: ["Hybrid Diesel-Electric Drive", "Independent 4-Wheel Steering", "Decoupled Operation Logic", "Ergonomic 360° Vision Cabin", "Low Ground Pressure Design"],
          specs: [{ label: "Lifting Capacity", value: "40t / 50t" }, { label: "Stacking", value: "1 over 2 / 1 over 3" }, { label: "Travel Speed", value: "30 km/h (Loaded)" }, { label: "Drive System", value: "AC Variable Frequency" }]
        },
        { 
          name: "Shiploader", 
          desc: "High-capacity bulk material loading.",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/CSIRO_ScienceImage_1006_Discharging_ballast_water.jpg/1280px-CSIRO_ScienceImage_1006_Discharging_ballast_water.jpg",
          onError: (e: any) => { e.currentTarget.src = "https://picsum.photos/seed/shiploader/1200/800"; },
          fullDescription: "Our high-capacity Shiploaders are engineered for efficient, dust-free loading of bulk commodities. Available in fixed, radial, or traveling configurations, they feature telescopic booms and rotating chutes to ensure even distribution and minimize vessel shifting. Built with advanced environmental controls to meet the strictest port regulations.",
          features: ["Telescopic & Slewing Boom Design", "Integrated Dust Suppression Systems", "Automated Hatch Coverage Logic", "Corrosion-Resistant Marine Finish", "Remote Wireless Control"],
          specs: [{ label: "Loading Rate", value: "Up to 10,000 t/h" }, { label: "Vessel Size", value: "Handymax to Capesize" }, { label: "Boom Length", value: "Up to 65m" }, { label: "Material", value: "Coal, Iron Ore, Grain, Fertilizer" }]
        },
        { 
          name: "Shipunloader", 
          desc: "Efficient continuous bulk material unloading.",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/CSIRO_ScienceImage_1006_Discharging_ballast_water.jpg/1280px-CSIRO_ScienceImage_1006_Discharging_ballast_water.jpg",
          onError: (e: any) => { e.currentTarget.src = "https://picsum.photos/seed/shipunloader/1200/800"; },
          fullDescription: "Designed for high-volume continuous unloading, our Shipunloaders provide superior efficiency and environmental performance. Whether using screw-type or bucket-elevator technology, they ensure a steady, high-capacity flow of material from ship to shore, significantly reducing spillage and energy consumption compared to grab cranes.",
          features: ["Continuous Material Flow Technology", "Enclosed Conveying for Zero Dust", "Variable Speed Feed Control", "Automatic Hatch Cleaning Mode", "Low Specific Energy Consumption"],
          specs: [{ label: "Unloading Rate", value: "Up to 4,500 t/h" }, { label: "Vessel Size", value: "Up to 250,000 DWT" }, { label: "Drive Type", value: "Electric / Hydraulic" }, { label: "Material", value: "Coal, Cement, Alumina, Grain" }]
        }
      ]
    },
    {
      id: "mines",
      title: "Mines",
      subtitle: "Bulk Material Handling",
      description: "Heavy-duty solutions for the most demanding mining environments, ensuring continuous flow and maximum operational availability.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Krupp_stacker_rtca_kestrel_mine.jpg/1280px-Krupp_stacker_rtca_kestrel_mine.jpg",
      products: [
        { 
          name: "Stacker", 
          desc: "High-efficiency bulk material stockpiling.",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Krupp_stacker_rtca_kestrel_mine.jpg/1280px-Krupp_stacker_rtca_kestrel_mine.jpg",
          onError: (e: any) => { e.currentTarget.src = "https://picsum.photos/seed/stacker/1200/800"; },
          fullDescription: "Our Stackers are the core of efficient stockpile management. Capable of chevron, windrow, and cone-shell stacking, they ensure optimal material blending and yard utilization. Built for extreme durability in dusty and abrasive mining environments, they feature fully automated slewing and luffing controls for 24/7 unattended operation.",
          features: ["Automated Stacking Methods (Chevron/Windrow)", "High-Capacity Luffing & Slewing", "Heavy-Duty Lattice or Box Boom", "Integrated Fire & Dust Suppression", "Real-Time Stockpile Mapping"],
          specs: [{ label: "Stacking Rate", value: "Up to 12,000 t/h" }, { label: "Boom Length", value: "Up to 60m" }, { label: "Slewing Range", value: "±110°" }, { label: "Luffing Range", value: "-15° to +18°" }],
          applications: ["Coal Terminals", "Iron Ore Mines", "Bauxite Processing Plants"],
          safety: "Includes ultrasonic collision detection, structural strain monitoring, and emergency manual override systems.",
          service: "Specialized wear-part replacement programs and remote structural health monitoring services."
        },
        { 
          name: "Reclaimer", 
          desc: "Precision bulk material recovery.",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Krupp_twin_boom_portal_reclaimer_rtca_kestrel_mine.jpg/1280px-Krupp_twin_boom_portal_reclaimer_rtca_kestrel_mine.jpg",
          onError: (e: any) => { e.currentTarget.src = "https://picsum.photos/seed/reclaimer/1200/800"; },
          fullDescription: "Designed for high-capacity material recovery, our Reclaimers provide a steady and controllable feed to your processing plant. Available in bucket-wheel, bridge-type, or scraper configurations, they are engineered for maximum reliability and precision. Advanced automation ensures consistent reclaiming rates regardless of stockpile geometry.",
          features: ["High-Torque Bucket Wheel Drive", "Variable Speed Reclaiming Control", "Automated Yard Scanning & Collision Avoidance", "Wear-Resistant Liner Technology", "Remote Operation Capability"],
          specs: [{ label: "Reclaiming Rate", value: "Up to 10,000 t/h" }, { label: "Wheel Diameter", value: "Up to 14m" }, { label: "Number of Buckets", value: "8 - 12" }, { label: "Automation", value: "Fully Autonomous" }]
        },
        { 
          name: "Conveyor Systems", 
          desc: "Reliable long-distance material transport.",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/AlbertaSulfurAtVancouverBC.jpg/1280px-AlbertaSulfurAtVancouverBC.jpg",
          onError: (e: any) => { e.currentTarget.src = "https://picsum.photos/seed/conveyor/1200/800"; },
          fullDescription: "Our overland and in-pit conveyor systems are the lifeline of modern mining. Engineered for extreme distances and challenging terrain, they offer a cost-effective and eco-friendly alternative to truck haulage. Featuring energy-efficient idlers, advanced belt tensioning, and real-time health monitoring, they ensure maximum uptime and lowest cost-per-ton transport.",
          features: ["Energy-Efficient Idler Design", "Dynamic Belt Tensioning Systems", "Real-Time Belt Rip & Heat Detection", "Modular Drive Stations", "Curved Overland Capability"],
          specs: [{ label: "Conveying Capacity", value: "Up to 20,000 t/h" }, { label: "Belt Width", value: "Up to 2,800mm" }, { label: "Belt Speed", value: "Up to 7.5 m/s" }, { label: "Drive Power", value: "Up to 10,000 kW" }]
        }
      ]
    },
    {
      id: "floating-transfer-units",
      title: "Floating Transfer Units",
      subtitle: "Offshore Bulk Handling Solutions",
      description: "High-capacity floating transfer stations and transshippers designed for efficient offshore loading and unloading of bulk cargo where deep-water ports are unavailable.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Lodbrok_i_Ystads_hamn_5_nov_2020.jpg/1280px-Lodbrok_i_Ystads_hamn_5_nov_2020.jpg",
      products: [
        { 
          name: "Cargo Handling System", 
          desc: "Integrated bulk material management for offshore units.",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/CSIRO_ScienceImage_1006_Discharging_ballast_water.jpg/1280px-CSIRO_ScienceImage_1006_Discharging_ballast_water.jpg",
          onError: (e: any) => { e.currentTarget.src = "https://picsum.photos/seed/cargo/1200/800"; },
          fullDescription: "Our integrated Cargo Handling Systems are the brain of any floating transfer unit. They manage the entire flow of material from intake to discharge, including automated blending, weighing, and sampling. Designed for the dynamic motions of open-sea operations, they ensure a continuous and safe transfer process even in challenging weather conditions.",
          features: ["Integrated PLC Control & SCADA", "Automated Blending & Sampling", "Dynamic Motion Compensation", "Enclosed Dust-Free Conveying", "Real-Time Cargo Tracking"],
          specs: [{ label: "Transfer Rate", value: "Up to 6,000 t/h" }, { label: "Accuracy", value: "±0.5% (Certified)" }, { label: "Control", value: "Fully Automated" }, { label: "Redundancy", value: "Dual-Path Options" }]
        },
        { 
          name: "C-Loop", 
          desc: "Advanced continuous vertical conveying technology.",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/CSIRO_ScienceImage_1006_Discharging_ballast_water.jpg/1280px-CSIRO_ScienceImage_1006_Discharging_ballast_water.jpg",
          onError: (e: any) => { e.currentTarget.src = "https://picsum.photos/seed/cloop/1200/800"; },
          fullDescription: "The C-Loop is our proprietary vertical conveying solution, specifically designed for high-capacity material transfer in space-constrained offshore environments. By using a unique continuous loop design, it eliminates the need for large-footprint inclined conveyors, allowing for more compact and efficient floating transfer station designs.",
          features: ["Continuous Vertical Material Flow", "Ultra-Compact Footprint", "Low Material Degradation", "Enclosed Design for Environmental Protection", "High Reliability with Few Moving Parts"],
          specs: [{ label: "Vertical Lift", value: "Up to 45m" }, { label: "Capacity", value: "Up to 4,000 t/h" }, { label: "Belt Width", value: "Up to 2,200mm" }, { label: "Material", value: "Coal, Iron Ore, Grains" }]
        },
        { 
          name: "Floating Crane", 
          desc: "Heavy-duty offshore lifting and bulk transfer.",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Lodbrok_i_Ystads_hamn_5_nov_2020.jpg/1280px-Lodbrok_i_Ystads_hamn_5_nov_2020.jpg",
          onError: (e: any) => { e.currentTarget.src = "https://picsum.photos/seed/floating-crane/1200/800"; },
          fullDescription: "Our high-capacity Floating Cranes are the heavy lifters of offshore transshipment. Engineered for extreme durability and stability, they feature active heave compensation and high-speed grab operations. Capable of working in open sea states, they provide a reliable link between ocean-going vessels and barges, ensuring high productivity in any location.",
          features: ["Active Heave Compensation (AHC)", "High-Speed Four-Rope Grab Operation", "Heavy-Duty Marine Slewing Bearing", "Stable Barge-Mounted Design", "Advanced Load & Sea State Monitoring"],
          specs: [{ label: "Lifting Capacity", value: "Up to 50t (Grab) / 120t (Hook)" }, { label: "Outreach", value: "Up to 45m" }, { label: "Cycle Time", value: "Under 60 seconds" }, { label: "Sea State", value: "Up to 3.5m Hs" }]
        }
      ]
    },
    {
      id: "offshore-marine",
      title: "Offshore & Marine",
      subtitle: "Advanced Marine Engineering Solutions",
      description: "Specialized equipment and engineering solutions for offshore platforms, marine vessels, and deep-sea operations, ensuring safety and reliability in harsh marine environments.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/LUN-A.jpg/1280px-LUN-A.jpg",
      products: [
        { 
          name: "Offshore Cranes", 
          desc: "High-capacity lifting for platforms and vessels.",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/LUN-A.jpg/1280px-LUN-A.jpg",
          onError: (e: any) => { e.currentTarget.src = "https://picsum.photos/seed/offshore-crane/1200/800"; },
          fullDescription: "Our offshore cranes are engineered for the most demanding marine environments. Featuring Active Heave Compensation (AHC) and explosion-proof components, they ensure safe and precise lifting for oil rigs, wind installation vessels, and offshore platforms. Built to meet the strictest DNV GL and ABS standards, they provide unparalleled reliability in deep-sea operations.",
          features: ["Active Heave Compensation (AHC)", "Explosion-Proof (ATEX/IECEx) Options", "Subsea Lifting Capability", "Remote Diagnostics & Condition Monitoring", "Personnel Lifting Certified"],
          specs: [{ label: "Lifting Capacity", value: "Up to 400t" }, { label: "Operating Depth", value: "Up to 3,000m" }, { label: "Certification", value: "DNV GL / ABS / Lloyd's" }, { label: "Drive System", value: "Electro-Hydraulic / VFD" }],
          applications: ["Oil & Gas Platforms", "Offshore Wind Installation", "Subsea Construction Vessels"],
          safety: "Equipped with AOPS (Automatic Overload Protection System) and MOPS (Manual Overload Protection System), emergency lowering, and redundant power units.",
          service: "Certified offshore technician support, annual load testing, and comprehensive wire rope management programs."
        },
        { 
          name: "Winches & Mooring Systems", 
          desc: "Secure positioning and anchoring solutions.",
          image: "https://upload.wikimedia.org/wikipedia/commons/4/44/AnchorWindlass.jpg",
          onError: (e: any) => { e.currentTarget.src = "https://picsum.photos/seed/winch/1200/800"; },
          fullDescription: "Our advanced winches and mooring systems ensure the secure positioning of offshore vessels and platforms in any sea state. From deep-water anchoring to high-tension towing, our systems feature precise load monitoring and emergency release capabilities. Designed for extreme loads and long-term deployment in corrosive marine environments.",
          features: ["Auto-Tensioning & Load Monitoring", "Emergency Quick Release (EQR)", "Deep-Water Mooring Capability", "Corrosion-Resistant Drum & Brake Design", "Integrated Control & Monitoring System"],
          specs: [{ label: "Pulling Force", value: "Up to 500t" }, { label: "Brake Holding", value: "Up to 1,000t" }, { label: "Drive Type", value: "High-Pressure Hydraulic / VFD" }, { label: "Application", value: "FPSO, Drilling Rigs, Support Vessels" }]
        },
        { 
          name: "Deck Machinery", 
          desc: "Robust equipment for marine operations.",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Visitors_holding_capstan_bars_turn_the_capstan.jpg/1280px-Visitors_holding_capstan_bars_turn_the_capstan.jpg",
          onError: (e: any) => { e.currentTarget.src = "https://picsum.photos/seed/deck/1200/800"; },
          fullDescription: "A comprehensive range of deck machinery designed for safety, efficiency, and durability. From anchor windlasses and capstans to specialized launch and recovery systems (LARS), our equipment is built to perform in the most demanding maritime conditions. Featuring compact footprints and low-maintenance designs, they are the ideal choice for modern commercial and offshore vessels.",
          features: ["Compact & Space-Saving Design", "High Corrosion Resistance (C5-M)", "Fail-Safe Braking Systems", "Low Noise & Vibration Operation", "Easy Integration with Vessel Power"],
          specs: [{ label: "Equipment Type", value: "Windlasses, Capstans, LARS" }, { label: "Power Source", value: "Electric / Hydraulic" }, { label: "Standards", value: "ISO / OCIMF Compliant" }, { label: "Material", value: "High-Grade Marine Steel" }]
        },
        { 
          name: "Subsea Handling Systems", 
          desc: "Precision equipment for deep-water deployment.",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Lodbrok_i_Ystads_hamn_5_nov_2020.jpg/1280px-Lodbrok_i_Ystads_hamn_5_nov_2020.jpg",
          onError: (e: any) => { e.currentTarget.src = "https://picsum.photos/seed/subsea/1200/800"; },
          fullDescription: "Our subsea handling systems provide the precision and control required for deep-water deployment and recovery of ROVs, subsea modules, and umbilicals. Featuring advanced active heave compensation and constant tension control, they ensure safe operations in high sea states. Fully integrated with control cabins and umbilical power units for a complete subsea solution.",
          features: ["Advanced AHC & Constant Tension", "Integrated Umbilical Management", "Precision ROV Launch & Recovery", "Remote Control & Automation Ready", "Fail-Safe Deployment Logic"],
          specs: [{ label: "Operating Depth", value: "Up to 4,000m" }, { label: "SWL", value: "Up to 300t" }, { label: "Wire Capacity", value: "Up to 5,000m" }, { label: "Sea State", value: "Up to 4.5m Hs" }]
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white text-industrial-black font-sans selection:bg-primary selection:text-industrial-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-industrial-black/95 backdrop-blur-sm border-b border-white/10 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => { setSelectedService(null); setSelectedEquipment(null); }}>
          <div className="bg-primary px-3 py-1.5 flex items-center justify-center">
            <Logo className="h-8" />
            <span className="hidden font-logo text-3xl text-industrial-black leading-none tracking-wide">TOWARD</span>
          </div>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10 text-[11px] font-bold uppercase tracking-[0.2em] text-white/70">
          <a href="#home" onClick={() => { setSelectedService(null); setSelectedEquipment(null); }} className="hover:text-primary transition-colors">Home</a>
          
          {/* Equipment Dropdown */}
          <div className="relative group">
            <button className="hover:text-primary transition-colors flex items-center gap-1 uppercase tracking-[0.2em]">
              Equipment <ChevronDown className="w-3 h-3" />
            </button>
            <div className="absolute top-full left-0 mt-4 w-72 bg-industrial-black border border-white/10 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 flex flex-col py-2">
              {/* Level 2: Partner Equipment */}
              <div className="relative group/sub">
                <div className="px-4 py-3 hover:bg-white/5 hover:text-primary transition-colors text-white/70 flex justify-between items-center cursor-default">
                  Partner Equipment <ChevronRight className="w-3 h-3" />
                </div>
                {/* Level 3 */}
                <div className="absolute left-full top-0 w-64 bg-industrial-black border border-white/10 shadow-xl opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-200 flex flex-col py-2">
                  <a href="#equipment" onClick={() => { setSelectedService(null); setSelectedEquipment(equipments[0]); }} className="px-4 py-3 hover:bg-white/5 hover:text-primary transition-colors text-white/70">Terminals</a>
                  <a href="#equipment" onClick={() => { setSelectedService(null); setSelectedEquipment(equipments[1]); }} className="px-4 py-3 hover:bg-white/5 hover:text-primary transition-colors text-white/70">Mines</a>
                  <a href="#equipment" onClick={() => { setSelectedService(null); setSelectedEquipment(equipments[3]); }} className="px-4 py-3 hover:bg-white/5 hover:text-primary transition-colors text-white/70">Offshore & Marine</a>
                </div>
              </div>

              {/* Level 2: Proprietary Equipment */}
              <div className="relative group/sub">
                <div className="px-4 py-3 hover:bg-white/5 hover:text-primary transition-colors text-white/70 flex justify-between items-center cursor-default">
                  Proprietary Equipment <ChevronRight className="w-3 h-3" />
                </div>
                {/* Level 3 */}
                <div className="absolute left-full top-0 w-64 bg-industrial-black border border-white/10 shadow-xl opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-200 flex flex-col py-2">
                  <a href="#equipment" onClick={() => { setSelectedService(null); setSelectedEquipment(equipments[2]); }} className="px-4 py-3 hover:bg-white/5 hover:text-primary transition-colors text-white/70">Floating Transfer Units</a>
                </div>
              </div>
            </div>
          </div>

          {/* Services Dropdown */}
          <div className="relative group">
            <button className="hover:text-primary transition-colors flex items-center gap-1 uppercase tracking-[0.2em]">
              Services <ChevronDown className="w-3 h-3" />
            </button>
            <div className="absolute top-full left-0 mt-4 w-64 bg-industrial-black border border-white/10 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 flex flex-col py-2">
              <a href="#services" onClick={() => { setSelectedEquipment(null); setSelectedService(services[0]); }} className="px-4 py-3 hover:bg-white/5 hover:text-primary transition-colors text-white/70">Consulting</a>
              <a href="#services" onClick={() => { setSelectedEquipment(null); setSelectedService(services[1]); }} className="px-4 py-3 hover:bg-white/5 hover:text-primary transition-colors text-white/70">Engineering</a>
              <a href="#services" onClick={() => { setSelectedEquipment(null); setSelectedService(services[2]); }} className="px-4 py-3 hover:bg-white/5 hover:text-primary transition-colors text-white/70">Maintenance</a>
              <a href="#services" onClick={() => { setSelectedEquipment(null); setSelectedService(services[3]); }} className="px-4 py-3 hover:bg-white/5 hover:text-primary transition-colors text-white/70">Upgrades</a>
              <a href="#services" onClick={() => { setSelectedEquipment(null); setSelectedService(services[4]); }} className="px-4 py-3 hover:bg-white/5 hover:text-primary transition-colors text-white/70">Parts & Services</a>
              <a href="#services" onClick={() => { setSelectedEquipment(null); setSelectedService(services[5]); }} className="px-4 py-3 hover:bg-white/5 hover:text-primary transition-colors text-white/70">Third-Party Inspection</a>
            </div>
          </div>

          <button 
            onClick={() => { setSelectedService(null); setSelectedEquipment(null); setSelectedAutomationPage(true); }} 
            className="hover:text-primary transition-colors uppercase tracking-[0.2em]"
          >
            Automation
          </button>
          <button 
            onClick={() => { setSelectedService(null); setSelectedEquipment(null); setSelectedAboutPage(true); }} 
            className="hover:text-primary transition-colors uppercase tracking-[0.2em]"
          >
            About
          </button>
          <a href="#contact" onClick={() => { setSelectedService(null); setSelectedEquipment(null); }} className="hover:text-primary transition-colors">Contact</a>
        </div>

        <div className="flex items-center gap-4">
          <button className="hidden md:block px-6 py-2 bg-primary text-industrial-black text-[11px] font-bold uppercase tracking-widest hover:bg-white transition-all">
            Inquiry
          </button>
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-industrial-black pt-24 px-8 flex flex-col gap-8 text-white text-2xl font-bold uppercase tracking-tighter">
          <a href="#home" onClick={() => { setIsMenuOpen(false); setSelectedService(null); setSelectedEquipment(null); }}>Home</a>
          
          <div className="flex flex-col gap-4">
            <span className="text-white/50 text-sm tracking-widest">Equipment</span>
            <a href="#equipment" className="pl-4 text-xl" onClick={() => { setIsMenuOpen(false); setSelectedService(null); setSelectedEquipment(equipments[0]); }}>Terminals</a>
            <a href="#equipment" className="pl-4 text-xl" onClick={() => { setIsMenuOpen(false); setSelectedService(null); setSelectedEquipment(equipments[1]); }}>Mines</a>
            <a href="#equipment" className="pl-4 text-xl" onClick={() => { setIsMenuOpen(false); setSelectedService(null); setSelectedEquipment(equipments[2]); }}>Floating Transfer Units</a>
            <a href="#equipment" className="pl-4 text-xl" onClick={() => { setIsMenuOpen(false); setSelectedService(null); setSelectedEquipment(equipments[3]); }}>Offshore & Marine</a>
          </div>

          <div className="flex flex-col gap-4">
            <span className="text-white/50 text-sm tracking-widest">Services</span>
            <a href="#services" className="pl-4 text-xl" onClick={() => { setIsMenuOpen(false); setSelectedEquipment(null); setSelectedService(services[0]); }}>Consulting</a>
            <a href="#services" className="pl-4 text-xl" onClick={() => { setIsMenuOpen(false); setSelectedEquipment(null); setSelectedService(services[1]); }}>Engineering</a>
            <a href="#services" className="pl-4 text-xl" onClick={() => { setIsMenuOpen(false); setSelectedEquipment(null); setSelectedService(services[2]); }}>Maintenance</a>
            <a href="#services" className="pl-4 text-xl" onClick={() => { setIsMenuOpen(false); setSelectedEquipment(null); setSelectedService(services[3]); }}>Upgrades</a>
            <a href="#services" className="pl-4 text-xl" onClick={() => { setIsMenuOpen(false); setSelectedEquipment(null); setSelectedService(services[4]); }}>Parts & Services</a>
            <a href="#services" className="pl-4 text-xl" onClick={() => { setIsMenuOpen(false); setSelectedEquipment(null); setSelectedService(services[5]); }}>Third-Party Inspection</a>
          </div>

          <button 
            onClick={() => { setIsMenuOpen(false); setSelectedService(null); setSelectedEquipment(null); setSelectedAutomationPage(true); }}
            className="text-left uppercase tracking-tighter"
          >
            Automation
          </button>
          <button 
            onClick={() => { setIsMenuOpen(false); setSelectedService(null); setSelectedEquipment(null); setSelectedAboutPage(true); }}
            className="text-left uppercase tracking-tighter"
          >
            About
          </button>
          <a href="#contact" onClick={() => { setIsMenuOpen(false); setSelectedService(null); setSelectedEquipment(null); }}>Contact</a>
        </div>
      )}

      {/* Sub-page Overlay (Service Details) */}
      <AnimatePresence>
        {selectedService && (
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-white overflow-y-auto"
          >
            <div className="relative">
              {/* Sub-page Header */}
              <div className="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b border-industrial-black/5 px-6 py-4 flex justify-between items-center">
                <button 
                  onClick={() => setSelectedService(null)}
                  className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest hover:text-primary transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" /> Back to Home
                </button>
                <div className="bg-primary px-3 py-1.5 flex items-center justify-center">
                  <Logo className="h-6" />
                  <span className="hidden font-logo text-2xl text-industrial-black leading-none tracking-wide">TOWARD</span>
                </div>
              </div>

              {/* Sub-page Content */}
              <div className="max-w-7xl mx-auto px-6 py-12 lg:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                  <div className="space-y-10">
                    <div>
                      <div className="text-primary mb-6">{selectedService.icon}</div>
                      <h1 className="text-5xl lg:text-7xl font-black uppercase tracking-tighter leading-none mb-6">
                        {selectedService.title}
                      </h1>
                      <p className="text-xl text-industrial-black/60 leading-relaxed">
                        {selectedService.fullDescription}
                      </p>
                    </div>

                    {selectedService.subSections ? (
                      <div className="space-y-16 pt-8 border-t border-industrial-black/10">
                        {selectedService.subSections.map((section, idx) => (
                          <div key={idx} className="space-y-6">
                            {section.image && (
                              <div className="aspect-video bg-industrial-black overflow-hidden mb-8">
                                <img 
                                  src={section.image} 
                                  alt={section.title} 
                                  className="w-full h-full object-cover" 
                                  referrerPolicy="no-referrer"
                                  onError={(e) => {
                                    e.currentTarget.src = `https://picsum.photos/seed/${section.title}/800/600`;
                                  }}
                                />
                              </div>
                            )}
                            <h3 className="text-3xl font-black uppercase tracking-tighter">{section.title}</h3>
                            <p className="text-industrial-black/70 text-lg leading-relaxed">{section.description}</p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                              {section.features.map((feature, i) => (
                                <div key={i} className="flex items-start gap-3">
                                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                  <span className="font-medium text-industrial-black/80">{feature}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <>
                        <div className="space-y-6">
                          <h3 className="text-xl font-bold uppercase tracking-widest border-b border-industrial-black/10 pb-4">Key Features</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {selectedService.features.map((feature, i) => (
                              <div key={i} className="flex items-center gap-3">
                                <CheckCircle2 className="w-5 h-5 text-primary" />
                                <span className="font-medium text-industrial-black/80">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="space-y-6">
                          <h3 className="text-xl font-bold uppercase tracking-widest border-b border-industrial-black/10 pb-4">Technical Specs</h3>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {selectedService.specs.map((spec, i) => (
                              <div key={i}>
                                <div className="text-[10px] font-bold uppercase tracking-widest opacity-40 mb-1">{spec.label}</div>
                                <div className="text-lg font-bold">{spec.value}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </>
                    )}

                    <button className="w-full lg:w-auto px-12 py-5 bg-industrial-black text-white font-bold uppercase tracking-widest hover:bg-primary hover:text-industrial-black transition-all">
                      Request Technical Proposal
                    </button>
                  </div>

                  <div className="space-y-8">
                    <div className="aspect-[4/5] bg-industrial-black overflow-hidden">
                      <img 
                        src={selectedService.image} 
                        alt={selectedService.title} 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          e.currentTarget.src = `https://picsum.photos/seed/${selectedService.title}/800/1000`;
                        }}
                      />
                    </div>
                    <div className="p-8 bg-primary/5 border border-primary/20">
                      <h4 className="font-bold uppercase tracking-widest mb-4">Why TOWARD?</h4>
                      <p className="text-sm text-industrial-black/60 leading-relaxed">
                        Our engineering teams bring decades of field experience to every project. We don't just provide equipment; we provide operational assurance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sub-page Overlay (Equipment Details) */}
      <AnimatePresence>
        {selectedEquipment && (
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-white overflow-y-auto"
          >
            <div className="relative">
              {/* Sub-page Header */}
              <div className="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b border-industrial-black/5 px-6 py-4 flex justify-between items-center">
                <button 
                  onClick={() => setSelectedEquipment(null)}
                  className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest hover:text-primary transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" /> Back to Home
                </button>
                <div className="bg-primary px-3 py-1.5 flex items-center justify-center">
                  <Logo className="h-6" />
                  <span className="hidden font-logo text-2xl text-industrial-black leading-none tracking-wide">TOWARD</span>
                </div>
              </div>

              {/* Sub-page Hero */}
              <div className="relative h-[40vh] bg-industrial-black flex items-center">
                <div className="absolute inset-0 z-0">
                  <img 
                    src={selectedEquipment.image} 
                    alt={selectedEquipment.title}
                    className="w-full h-full object-cover opacity-40"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      e.currentTarget.src = `https://picsum.photos/seed/${selectedEquipment.title}/1920/1080`;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-industrial-black to-transparent"></div>
                </div>
                <div className="relative z-10 px-6 md:px-20">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-[2px] w-8 bg-primary"></div>
                    <span className="text-primary font-bold uppercase tracking-[0.2em] text-xs">Equipment</span>
                  </div>
                  <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-2">
                    {selectedEquipment.title}
                  </h1>
                  <p className="text-white/70 text-lg max-w-2xl">
                    {selectedEquipment.subtitle}
                  </p>
                </div>
              </div>

              {/* Sub-page Content */}
              <div className="px-6 md:px-20 py-20 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                  <div className="lg:col-span-2">
                    <h2 className="text-2xl font-bold uppercase tracking-tighter mb-6">Overview</h2>
                    <p className="text-industrial-black/70 text-lg leading-relaxed mb-12">
                      {selectedEquipment.description}
                    </p>

                    <h2 className="text-2xl font-bold uppercase tracking-tighter mb-6">Product Range</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {selectedEquipment.products.map((product, index) => (
                        <div 
                          key={index} 
                          className={`bg-gray-50 border border-gray-100 transition-all overflow-hidden flex flex-col ${product.image ? 'cursor-pointer hover:border-primary/50 hover:shadow-lg group' : 'hover:border-primary/30'}`}
                          onClick={() => product.image && setSelectedProduct(product)}
                        >
                          {product.image && (
                            <div className="h-48 overflow-hidden relative">
                              <img 
                                src={product.image} 
                                alt={product.name} 
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                                referrerPolicy="no-referrer"
                                onError={(e) => {
                                  e.currentTarget.src = `https://picsum.photos/seed/${product.name}/800/600`;
                                }}
                              />
                              <div className="absolute inset-0 bg-industrial-black/10 group-hover:bg-transparent transition-colors"></div>
                            </div>
                          )}
                          <div className="p-6 flex-1 flex flex-col">
                            {!product.image && <CheckCircle2 className="text-primary w-6 h-6 mb-4" />}
                            <h3 className="font-bold text-sm uppercase tracking-wider mb-2 group-hover:text-primary transition-colors">{product.name}</h3>
                            <p className="text-industrial-black/60 text-sm leading-relaxed mb-4 flex-1">{product.desc}</p>
                            {product.image && (
                              <button className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-primary mt-auto">
                                View Details <ArrowRight className="w-3 h-3" />
                              </button>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-industrial-black text-white p-8 h-fit sticky top-24">
                    <h3 className="text-xl font-bold uppercase tracking-tighter mb-6">Request Quote</h3>
                    <p className="text-white/60 text-sm mb-8">
                      Interested in our {selectedEquipment.title.toLowerCase()} solutions? Contact our sales team for detailed specifications and pricing.
                    </p>
                    <button className="w-full px-6 py-4 bg-primary text-industrial-black text-[11px] font-bold uppercase tracking-widest hover:bg-white transition-all flex items-center justify-between group">
                      Contact Sales
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sub-page Overlay (Product Details) */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[70] bg-white overflow-y-auto"
          >
            <div className="relative">
              {/* Sub-page Header */}
              <div className="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b border-industrial-black/5 px-6 py-4 flex justify-between items-center">
                <button 
                  onClick={() => setSelectedProduct(null)}
                  className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest hover:text-primary transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" /> Back to Equipment
                </button>
                <div className="bg-primary px-3 py-1.5 flex items-center justify-center">
                  <Logo className="h-6" />
                  <span className="hidden font-logo text-2xl text-industrial-black leading-none tracking-wide">TOWARD</span>
                </div>
              </div>

              {/* Sub-page Hero */}
              <div className="relative h-[40vh] bg-industrial-black flex items-center">
                <div className="absolute inset-0 z-0">
                  <img 
                    src={selectedProduct.image} 
                    alt={selectedProduct.name}
                    className="w-full h-full object-cover opacity-40"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      e.currentTarget.src = `https://picsum.photos/seed/${selectedProduct.name}/1920/1080`;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-industrial-black to-transparent"></div>
                </div>
                <div className="relative z-10 px-6 md:px-20">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-[2px] w-8 bg-primary"></div>
                    <span className="text-primary font-bold uppercase tracking-[0.2em] text-xs">Product Detail</span>
                  </div>
                  <h1 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-2">
                    {selectedProduct.name}
                  </h1>
                  <p className="text-white/70 text-lg max-w-2xl">
                    {selectedProduct.desc}
                  </p>
                </div>
              </div>

              {/* Sub-page Content */}
              <div className="px-6 md:px-20 py-20 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                  <div className="lg:col-span-2 space-y-16">
                    {/* Overview */}
                    <section>
                      <h2 className="text-2xl font-bold uppercase tracking-tighter mb-6 flex items-center gap-3">
                        <div className="w-8 h-[1px] bg-primary"></div> Overview
                      </h2>
                      <p className="text-industrial-black/70 text-lg leading-relaxed">
                        {selectedProduct.fullDescription || selectedProduct.desc}
                      </p>
                    </section>

                    {/* Features */}
                    {selectedProduct.features && (
                      <section>
                        <h2 className="text-2xl font-bold uppercase tracking-tighter mb-8 flex items-center gap-3">
                          <div className="w-8 h-[1px] bg-primary"></div> Key Features
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          {selectedProduct.features.map((feature, index) => (
                            <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 border border-gray-100 group hover:border-primary/30 transition-colors">
                              <CheckCircle2 className="text-primary w-5 h-5 shrink-0 mt-0.5" />
                              <span className="text-industrial-black/80 font-medium">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </section>
                    )}

                    {/* Applications */}
                    <section>
                      <h2 className="text-2xl font-bold uppercase tracking-tighter mb-6 flex items-center gap-3">
                        <div className="w-8 h-[1px] bg-primary"></div> Typical Applications
                      </h2>
                      <div className="flex flex-wrap gap-3">
                        {(selectedProduct.applications || ["Port Terminals", "Mining Sites", "Offshore Platforms", "Industrial Hubs"]).map((app, index) => (
                          <span key={index} className="px-4 py-2 bg-industrial-black text-white text-[10px] font-bold uppercase tracking-widest">
                            {app}
                          </span>
                        ))}
                      </div>
                    </section>

                    {/* Safety & Environment */}
                    <section className="bg-industrial-black p-10 text-white relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
                      <h2 className="text-2xl font-bold uppercase tracking-tighter mb-6 flex items-center gap-3">
                        <div className="w-8 h-[1px] bg-primary"></div> Safety & Environment
                      </h2>
                      <p className="text-white/70 leading-relaxed italic border-l-2 border-primary pl-6">
                        {selectedProduct.safety || "Our equipment is designed with a 'Zero Harm' philosophy, integrating advanced fail-safe systems and eco-efficient power management to minimize environmental impact while ensuring operator safety."}
                      </p>
                    </section>

                    {/* Service & Support */}
                    <section>
                      <h2 className="text-2xl font-bold uppercase tracking-tighter mb-6 flex items-center gap-3">
                        <div className="w-8 h-[1px] bg-primary"></div> Global Service & Support
                      </h2>
                      <p className="text-industrial-black/60 leading-relaxed mb-8">
                        {selectedProduct.service || "TOWARD provides 24/7 global support, including remote diagnostics, on-site maintenance, and rapid spare parts delivery to ensure your operations never stop."}
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {["24/7 Support", "Remote Monitoring", "Global Parts Network"].map((item, i) => (
                          <div key={i} className="border border-industrial-black/5 p-4 text-center">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-primary">{item}</span>
                          </div>
                        ))}
                      </div>
                    </section>
                  </div>

                  <div className="space-y-8">
                    {selectedProduct.specs && (
                      <div className="bg-gray-50 p-8 border border-gray-100 sticky top-24">
                        <h3 className="text-xl font-bold uppercase tracking-tighter mb-8 pb-4 border-b border-industrial-black/10">Technical Specifications</h3>
                        <div className="space-y-6">
                          {selectedProduct.specs.map((spec, index) => (
                            <div key={index} className="space-y-1">
                              <div className="text-industrial-black/40 text-[10px] font-bold uppercase tracking-widest">{spec.label}</div>
                              <div className="font-black text-lg tracking-tight">{spec.value}</div>
                            </div>
                          ))}
                        </div>
                        <div className="mt-12 pt-8 border-t border-industrial-black/10">
                          <button 
                            onClick={() => {
                              setSelectedProduct(null);
                              setSelectedEquipment(null);
                              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="w-full px-6 py-4 bg-primary text-industrial-black text-[11px] font-bold uppercase tracking-widest hover:bg-white border border-transparent hover:border-industrial-black transition-all flex items-center justify-between group"
                          >
                            Request Full Specs
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sub-page Overlay (Automation) */}
      <AnimatePresence>
        {selectedAutomationPage && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 z-[80] bg-white overflow-y-auto"
          >
            <div className="relative min-h-screen flex flex-col">
              {/* Header */}
              <div className="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b border-industrial-black/5 px-6 py-4 flex justify-between items-center">
                <button 
                  onClick={() => setSelectedAutomationPage(false)}
                  className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest hover:text-primary transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" /> Back to Home
                </button>
                <div className="bg-primary px-3 py-1.5 flex items-center justify-center">
                  <Logo className="h-6" />
                  <span className="hidden font-logo text-2xl text-industrial-black leading-none tracking-wide">TOWARD</span>
                </div>
              </div>

              {/* Hero */}
              <div className="relative h-[60vh] bg-industrial-black flex items-center px-6 md:px-20 overflow-hidden">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Utah_Data_Center_Panorama_%28cropped%29.jpg/1280px-Utah_Data_Center_Panorama_%28cropped%29.jpg" 
                  alt="Automation" 
                  className="absolute inset-0 w-full h-full object-cover opacity-40"
                  referrerPolicy="no-referrer"
                />
                <div className="relative z-10 max-w-4xl">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-[2px] bg-primary"></div>
                    <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs">{automationPage.subtitle}</span>
                  </div>
                  <h1 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-8">
                    {automationPage.title}
                  </h1>
                  <p className="text-white/60 text-lg md:text-xl max-w-2xl leading-relaxed">
                    {automationPage.description}
                  </p>
                </div>
              </div>

              {/* Detailed Sections */}
              <div className="py-24 px-6 md:px-20 max-w-7xl mx-auto w-full">
                <div className="space-y-32">
                  {automationPage.sections.map((section, i) => (
                    <div key={i} className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-16 items-center`}>
                      <div className="flex-1">
                        <div className="text-primary font-bold text-4xl mb-6">0{i + 1}</div>
                        <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-6">{section.title}</h2>
                        <p className="text-industrial-black/60 text-lg leading-relaxed mb-8">
                          {section.content}
                        </p>
                        <div className="h-1 w-20 bg-primary"></div>
                      </div>
                      <div className="flex-1 w-full h-[400px] bg-industrial-black/5 overflow-hidden">
                        <img 
                          src={section.image} 
                          alt={section.title} 
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
                          referrerPolicy="no-referrer"
                          onError={(section as any).onError}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <footer className="bg-industrial-black text-white py-20 px-6 md:px-20 text-center">
                <div className="max-w-2xl mx-auto">
                  <h3 className="text-3xl font-black uppercase tracking-tighter mb-6">Ready to Automate?</h3>
                  <p className="text-white/50 mb-10">Our experts are ready to help you design the future of your terminal.</p>
                  <button 
                    onClick={() => { setSelectedAutomationPage(false); window.location.hash = 'contact'; }}
                    className="px-10 py-4 bg-primary text-industrial-black font-bold uppercase tracking-widest text-sm hover:bg-white transition-all"
                  >
                    Contact an Expert
                  </button>
                </div>
              </footer>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sub-page Overlay (Legal Pages) */}
      <AnimatePresence>
        {selectedLegalPage && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed inset-0 z-[80] bg-white overflow-y-auto"
          >
            <div className="relative min-h-screen flex flex-col">
              {/* Header */}
              <div className="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b border-industrial-black/5 px-6 py-4 flex justify-between items-center">
                <button 
                  onClick={() => setSelectedLegalPage(null)}
                  className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest hover:text-primary transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" /> Close
                </button>
                <div className="bg-primary px-3 py-1.5 flex items-center justify-center">
                  <Logo className="h-6" />
                  <span className="hidden font-logo text-2xl text-industrial-black leading-none tracking-wide">TOWARD</span>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 px-6 md:px-20 py-20 max-w-4xl mx-auto w-full">
                <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-12">
                  {legalPages[selectedLegalPage as keyof typeof legalPages].title}
                </h1>
                <div 
                  className="prose prose-lg max-w-none text-industrial-black/70 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: legalPages[selectedLegalPage as keyof typeof legalPages].content }}
                />
              </div>

              {/* Footer */}
              <footer className="bg-industrial-black text-white py-12 px-6 md:px-20 text-center">
                <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest">
                  &copy; 2026 TOWARD GLOBAL. ALL RIGHTS RESERVED.
                </p>
              </footer>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sub-page Overlay (China Alternatives) */}
      <AnimatePresence>
        {selectedChinaAlternativesPage && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 z-[80] bg-white overflow-y-auto"
          >
            <div className="relative min-h-screen flex flex-col">
              {/* Header */}
              <div className="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b border-industrial-black/5 px-6 py-4 flex justify-between items-center">
                <button 
                  onClick={() => setSelectedChinaAlternativesPage(false)}
                  className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest hover:text-primary transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" /> Back to Home
                </button>
                <div className="bg-primary px-3 py-1.5 flex items-center justify-center">
                  <Logo className="h-6" />
                  <span className="hidden font-logo text-2xl text-industrial-black leading-none tracking-wide">TOWARD</span>
                </div>
              </div>

              {/* Hero */}
              <div className="relative h-[50vh] bg-industrial-black flex items-center px-6 md:px-20 overflow-hidden">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/LUN-A.jpg/1280px-LUN-A.jpg" 
                  alt="China Alternatives" 
                  className="absolute inset-0 w-full h-full object-cover opacity-40"
                  referrerPolicy="no-referrer"
                  onError={(e: any) => { e.currentTarget.src = "https://picsum.photos/seed/china/1920/1080"; }}
                />
                <div className="relative z-10 max-w-4xl">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-[2px] bg-primary"></div>
                    <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs">Localized Excellence</span>
                  </div>
                  <h1 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-8">
                    China <br /> <span className="text-primary">Alternatives</span>.
                  </h1>
                  <p className="text-white/60 text-lg md:text-xl max-w-2xl leading-relaxed">
                    Premium localized component solutions matching international quality standards. We provide high-performance Chinese alternatives for global industrial parts, ensuring quality, reliability, and cost-efficiency.
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 py-24 px-6 md:px-20 max-w-7xl mx-auto w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                  <div className="space-y-16">
                    <section>
                      <h2 className="text-3xl font-black uppercase tracking-tighter mb-8 flex items-center gap-4">
                        <div className="w-10 h-10 bg-primary/10 flex items-center justify-center text-primary">01</div>
                        Reducers & Drive Systems
                      </h2>
                      <div className="bg-gray-50 p-10 border-l-4 border-primary">
                        <p className="text-industrial-black/70 text-lg leading-relaxed mb-6">
                          We offer high-end Chinese reducer brands like <span className="font-bold text-industrial-black">Kdrive</span>, which utilize the same production lines and quality control standards as global leaders like SEW.
                        </p>
                        <ul className="space-y-4">
                          {["Identical production line standards", "Interchangeable with global brands", "Superior lead times and cost-efficiency", "Full technical support and warranty"].map((item, i) => (
                            <li key={i} className="flex items-center gap-3 text-sm font-medium">
                              <CheckCircle2 className="text-primary w-5 h-5" /> {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </section>

                    <section>
                      <h2 className="text-3xl font-black uppercase tracking-tighter mb-8 flex items-center gap-4">
                        <div className="w-10 h-10 bg-primary/10 flex items-center justify-center text-primary">02</div>
                        STS & Port Elevators
                      </h2>
                      <div className="bg-gray-50 p-10 border-l-4 border-primary">
                        <p className="text-industrial-black/70 text-lg leading-relaxed mb-6">
                          For Ship-to-Shore (STS) cranes and port infrastructure, we provide <span className="font-bold text-industrial-black">Shenyang Elevator</span> solutions, a trusted name in heavy-duty vertical transport.
                        </p>
                        <ul className="space-y-4">
                          {["Marine-grade corrosion protection", "High-duty cycle reliability", "Customized for crane structures", "Global safety certification compliance"].map((item, i) => (
                            <li key={i} className="flex items-center gap-3 text-sm font-medium">
                              <CheckCircle2 className="text-primary w-5 h-5" /> {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </section>
                  </div>

                  <div className="space-y-16">
                    <section>
                      <h2 className="text-3xl font-black uppercase tracking-tighter mb-8 flex items-center gap-4">
                        <div className="w-10 h-10 bg-primary/10 flex items-center justify-center text-primary">03</div>
                        Slewing Bearings
                      </h2>
                      <div className="bg-gray-50 p-10 border-l-4 border-primary">
                        <p className="text-industrial-black/70 text-lg leading-relaxed mb-6">
                          We source slewing bearings from China's <span className="font-bold text-industrial-black">first-tier manufacturers</span>, ensuring high load capacity and long service life for cranes and excavators.
                        </p>
                        <ul className="space-y-4">
                          {["Advanced heat treatment technology", "Precision machining for smooth rotation", "Available in various sizes up to 10m", "Rigorous non-destructive testing"].map((item, i) => (
                            <li key={i} className="flex items-center gap-3 text-sm font-medium">
                              <CheckCircle2 className="text-primary w-5 h-5" /> {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </section>

                    <section className="bg-industrial-black p-10 text-white">
                      <h2 className="text-3xl font-black uppercase tracking-tighter mb-6 text-primary">Custom Sourcing</h2>
                      <p className="text-white/70 text-lg leading-relaxed mb-8">
                        Whatever your component needs, we can implement a <span className="text-white font-bold">high-quality Chinese alternative</span>. We guarantee both quality and quantity, providing a seamless transition from international brands to localized excellence.
                      </p>
                      <button 
                        onClick={() => { setSelectedChinaAlternativesPage(false); window.location.hash = 'contact'; }}
                        className="w-full py-4 bg-primary text-industrial-black font-bold uppercase tracking-widest text-sm hover:bg-white transition-all flex items-center justify-center gap-3"
                      >
                        Request a Quote <ArrowRight className="w-4 h-4" />
                      </button>
                    </section>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <footer className="bg-industrial-black text-white py-12 px-6 md:px-20 text-center">
                <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest">
                  &copy; 2026 TOWARD GLOBAL. ALL RIGHTS RESERVED.
                </p>
              </footer>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sub-page Overlay (About) */}
      <AnimatePresence>
        {selectedAboutPage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] bg-white overflow-y-auto"
          >
            <div className="relative min-h-screen flex flex-col">
              {/* Header */}
              <div className="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b border-industrial-black/5 px-6 py-4 flex justify-between items-center">
                <button 
                  onClick={() => setSelectedAboutPage(false)}
                  className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest hover:text-primary transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" /> Back to Home
                </button>
                <div className="bg-primary px-3 py-1.5 flex items-center justify-center">
                  <Logo className="h-6" />
                  <span className="hidden font-logo text-2xl text-industrial-black leading-none tracking-wide">TOWARD</span>
                </div>
              </div>

              {/* Hero */}
              <div className="relative h-[50vh] bg-industrial-black flex items-center px-6 md:px-20 overflow-hidden">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Intermodal_terminal_loading.jpg/1280px-Intermodal_terminal_loading.jpg" 
                  alt="About TOWARD" 
                  className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale"
                  referrerPolicy="no-referrer"
                  onError={(e: any) => { e.currentTarget.src = "https://picsum.photos/seed/about/1920/1080"; }}
                />
                <div className="relative z-10 max-w-4xl">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-[2px] bg-primary"></div>
                    <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs">Our Legacy</span>
                  </div>
                  <h1 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-8">
                    The <span className="text-primary">TOWARD</span> <br /> Commitment.
                  </h1>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="max-w-7xl mx-auto px-6 md:px-20 py-24">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                    <div className="space-y-12">
                      <section>
                        <h2 className="text-3xl font-black uppercase tracking-tighter mb-6">Our Story</h2>
                        <p className="text-industrial-black/70 text-lg leading-relaxed mb-6">
                          Founded on the principles of engineering excellence and operational integrity, TOWARD has grown from a specialized parts supplier to a global player in industrial solutions. We have dedicated over 25 years to mastering the complexities of port, mining, and offshore machinery.
                        </p>
                        <p className="text-industrial-black/70 text-lg leading-relaxed">
                          Our journey began with a simple mission: to provide the most reliable spare parts for heavy industrial equipment. Today, we are a comprehensive solution provider, offering everything from high-end equipment manufacturing to complex engineering consultations and automated systems integration.
                        </p>
                      </section>

                      <div className="space-y-6">
                        <div className="p-8 bg-gray-50 border-l-4 border-primary">
                          <h4 className="font-black uppercase tracking-tighter text-xl mb-4">Our Mission</h4>
                          <p className="text-sm text-industrial-black/60 leading-relaxed">
                            To empower global industries through innovative engineering, reliable equipment, and unparalleled service excellence.
                          </p>
                        </div>
                        <div className="p-8 bg-gray-50 border-l-4 border-primary">
                          <h4 className="font-black uppercase tracking-tighter text-xl mb-4">Our Vision</h4>
                          <p className="text-sm text-industrial-black/60 leading-relaxed">
                            To be the world's most trusted partner for critical industrial infrastructure and automation solutions.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-12">
                      <section>
                        <h2 className="text-3xl font-black uppercase tracking-tighter mb-8">Core Values</h2>
                        <div className="space-y-6">
                          {[
                            { title: "Integrity", desc: "We uphold the highest ethical standards in every project and partnership." },
                            { title: "Innovation", desc: "We constantly push the boundaries of what's possible in industrial automation." },
                            { title: "Safety", desc: "Zero-harm is our philosophy. We design for the safety of people and the environment." },
                            { title: "Excellence", desc: "We don't just meet standards; we set them through meticulous attention to detail." }
                          ].map((value, i) => (
                            <div key={i} className="flex gap-6 group">
                              <div className="text-primary font-black text-2xl opacity-30 group-hover:opacity-100 transition-opacity">0{i + 1}</div>
                              <div>
                                <h4 className="font-bold uppercase tracking-wider text-sm mb-2">{value.title}</h4>
                                <p className="text-industrial-black/60 text-sm leading-relaxed">{value.desc}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </section>

                      <div className="bg-industrial-black p-10 text-white">
                        <h3 className="text-2xl font-black uppercase tracking-tighter mb-6">Global Presence</h3>
                        <p className="text-white/60 text-sm leading-relaxed mb-8">
                          With headquarters in Nantong, China, and a network of service centers across six continents, we provide rapid response and local expertise to our global clientele.
                        </p>
                        <div className="flex items-center gap-4">
                          <Globe className="text-primary w-8 h-8" />
                          <span className="text-[10px] font-bold uppercase tracking-widest">Serving 100+ Projects Worldwide</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Timeline/Milestones */}
                <div className="bg-gray-50 py-24 px-6 md:px-20">
                  <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-black uppercase tracking-tighter mb-16 text-center">Our Milestones</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-industrial-black/10 border border-industrial-black/10">
                      {[
                        { year: "1999", title: "Foundation", desc: "TOWARD established as a specialized parts supplier." },
                        { year: "2008", title: "Global Expansion", desc: "First major international contract in the Middle East." },
                        { year: "2015", title: "Engineering Hub", desc: "Launch of our dedicated R&D and engineering center." },
                        { year: "2022", title: "Automation Era", desc: "Introduction of our first fully autonomous terminal solution." }
                      ].map((milestone, i) => (
                        <div key={i} className="bg-white p-10 hover:bg-primary transition-colors group">
                          <div className="text-primary font-black text-4xl mb-4 group-hover:text-industrial-black transition-colors">{milestone.year}</div>
                          <h4 className="font-bold uppercase tracking-wider text-sm mb-4">{milestone.title}</h4>
                          <p className="text-industrial-black/60 text-xs leading-relaxed group-hover:text-industrial-black/80 transition-colors">{milestone.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <footer className="bg-industrial-black text-white py-12 px-6 md:px-20 text-center">
                <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest">
                  &copy; 2026 TOWARD GLOBAL. ALL RIGHTS RESERVED.
                </p>
              </footer>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        {/* Hero Section */}
        <section id="home" className="relative h-screen flex items-center pt-24 overflow-hidden bg-industrial-black">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/7/79/PACECO_Container_Crane_2.jpg" 
              alt="Industrial Port"
              className="w-full h-full object-cover opacity-40"
              referrerPolicy="no-referrer"
              onError={(e) => {
                e.currentTarget.src = "https://picsum.photos/seed/port-terminal/1920/1080";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-industrial-black via-industrial-black/60 to-transparent"></div>
          </div>

          <div className="relative z-10 px-6 md:px-20 max-w-5xl">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="h-[2px] w-12 bg-primary"></div>
                <span className="text-primary font-bold uppercase tracking-[0.3em] text-xs">Global Industrial Excellence</span>
              </div>
              <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter mb-8 uppercase">
                Powering <br />
                <span className="text-primary">Global</span> Industry.
              </h1>
              <p className="text-lg md:text-xl text-white/60 max-w-xl mb-10 leading-relaxed font-medium">
                TOWARD provides end-to-end solutions for large-scale port, mining, and offshore operations. From heavy equipment to precision engineering and maintenance.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#services" className="px-10 py-4 bg-primary text-industrial-black font-bold uppercase tracking-widest text-sm hover:bg-white transition-all flex items-center gap-3">
                  Our Solutions <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Vertical Text Accent */}
          <div className="absolute right-10 bottom-40 hidden lg:block origin-bottom-right rotate-90 opacity-10">
            <Logo className="h-24 opacity-50 grayscale" />
            <span className="hidden font-logo text-9xl text-white leading-none tracking-wide">TOWARD</span>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-primary py-12 px-6 md:px-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Continents", value: "6" },
              { label: "Years Experience", value: "25+" },
              { label: "Engineers Connected", value: "50+" },
              { label: "Projects Involved", value: "100+" }
            ].map((stat, i) => (
              <div key={i} className="text-industrial-black">
                <div className="text-4xl font-black tracking-tighter">{stat.value}</div>
                <div className="text-[10px] font-bold uppercase tracking-widest opacity-70">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 px-6 md:px-20 bg-[#f9f9f9]">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6">
                Core <span className="text-primary bg-industrial-black px-2">Capabilities</span>
              </h2>
              <p className="text-industrial-black/60 text-lg leading-relaxed">
                We specialize in the full lifecycle of industrial machinery, ensuring maximum uptime and operational safety in the most demanding environments.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-industrial-black/10 border border-industrial-black/10">
            {capabilities.map((capability, index) => (
              <motion.div 
                key={index}
                className="group relative bg-white overflow-hidden cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => {
                  if (capability.id === 'china-alternatives') {
                    setSelectedChinaAlternativesPage(true);
                  } else {
                    setSelectedService(capability as any);
                  }
                }}
              >
                <div className="p-10 md:p-16 relative z-10 h-full flex flex-col justify-between min-h-[400px]">
                  <div>
                    <div className="text-primary mb-8 group-hover:scale-110 transition-transform duration-500 origin-left">
                      {capability.icon}
                    </div>
                    <h3 className="text-3xl font-black uppercase tracking-tighter mb-4 group-hover:text-primary transition-colors">
                      {capability.title}
                    </h3>
                    <p className="text-industrial-black/60 leading-relaxed max-w-sm">
                      {capability.description}
                    </p>
                  </div>
                  <div className="mt-8">
                    <button className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest group-hover:gap-4 transition-all">
                      Learn More <ChevronRight className="w-4 h-4 text-primary" />
                    </button>
                  </div>
                </div>
                {/* Background Image on Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none">
                  <img 
                    src={capability.image} 
                    alt={capability.title} 
                    className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000" 
                    referrerPolicy="no-referrer"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Automation Section */}
        <section id="automation" className="py-24 px-6 md:px-20 bg-industrial-black text-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-[2px] bg-primary"></div>
                  <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm">Smart Ports</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-6">
                  Terminal <br />
                  <span className="text-white/50">Automation</span>
                </h2>
                <p className="text-white/70 text-lg mb-8 leading-relaxed">
                  Transforming traditional port operations into fully autonomous, high-efficiency hubs. Our comprehensive automation solutions integrate advanced robotics, AI-driven control systems, and real-time data analytics to maximize throughput, reduce emissions, and ensure zero-harm operations.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    { title: "Automated Guided Vehicles (AGV)", desc: "Zero-emission autonomous transport" },
                    { title: "Automated Stacking Cranes (ASC)", desc: "High-density yard management" },
                    { title: "Remote Control Stations (ROS)", desc: "Ergonomic remote operation" },
                    { title: "TOS Integration", desc: "Seamless terminal operating system sync" }
                  ].map((feature, i) => (
                    <div key={i} className="border border-white/10 p-6 hover:border-primary/50 transition-colors group">
                      <CheckCircle2 className="text-primary w-6 h-6 mb-4 group-hover:scale-110 transition-transform" />
                      <h4 className="font-bold text-sm uppercase tracking-wider mb-2">{feature.title}</h4>
                      <p className="text-white/50 text-xs leading-relaxed">{feature.desc}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative h-[600px]"
              >
                <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-10"></div>
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Utah_Data_Center_Panorama_%28cropped%29.jpg/1280px-Utah_Data_Center_Panorama_%28cropped%29.jpg" 
                  alt="Terminal Automation" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.src = "https://picsum.photos/seed/automation/1200/800";
                  }}
                />
                {/* Floating Stats */}
                <div className="absolute bottom-8 left-8 right-8 bg-industrial-black/90 backdrop-blur-md border border-white/10 p-6 z-20 flex justify-between items-center">
                  <div>
                    <div className="text-3xl font-bold text-primary mb-1">40%</div>
                    <div className="text-xs text-white/50 uppercase tracking-wider">Efficiency Increase</div>
                  </div>
                  <div className="w-px h-12 bg-white/10"></div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-1">100%</div>
                    <div className="text-xs text-white/50 uppercase tracking-wider">Electric / Zero Emission</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 px-6 md:px-20 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="aspect-square bg-industrial-black overflow-hidden">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Control_room_-_Lucens_reactor_-_1968_-_L17-0251-0105.jpg/1280px-Control_room_-_Lucens_reactor_-_1968_-_L17-0251-0105.jpg" 
                alt="Engineering" 
                className="w-full h-full object-cover opacity-80 grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.src = "https://picsum.photos/seed/engineering/1000/1000";
                }}
              />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-primary p-12 hidden md:block">
              <div className="text-5xl font-black tracking-tighter">25+</div>
              <div className="text-[10px] font-bold uppercase tracking-widest">Years of Trust</div>
            </div>
          </div>
          <div className="space-y-8">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
              The <span className="text-primary">TOWARD</span> Commitment
            </h2>
            <p className="text-lg text-industrial-black/70 leading-relaxed">
              Founded on the principles of engineering excellence and operational integrity, TOWARD has grown from a specialized parts supplier to a global player in industrial solutions.
            </p>
            <div className="space-y-4">
              {[
                "Unmatched technical expertise in port machinery",
                "Global network for rapid spare parts deployment",
                "Certified third-party inspection protocols",
                "Sustainable equipment modification strategies"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-primary"></div>
                  <span className="font-bold uppercase tracking-widest text-xs">{item}</span>
                </div>
              ))}
            </div>
            <button 
              onClick={() => setSelectedAboutPage(true)}
              className="px-10 py-4 border-2 border-industrial-black font-bold uppercase tracking-widest text-sm hover:bg-industrial-black hover:text-white transition-all"
            >
              Company Profile
            </button>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="bg-industrial-black py-24 px-6 md:px-20 text-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
              <div>
                <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8">
                  Get in <span className="text-primary">Touch</span>
                </h2>
                <p className="text-white/50 text-lg mb-12">
                  Ready to optimize your operations? Our dedicated team of experts is available for global consultations.
                </p>
                <div className="space-y-8">
                  <div className="flex items-start gap-6">
                    <div className="bg-primary/10 p-4 text-primary">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-widest opacity-50 mb-1">Email Us</div>
                      <div className="text-xl font-bold">contact@towardglobal.com</div>
                    </div>
                  </div>
                  <a href="https://wa.me/8618361400966" target="_blank" rel="noopener noreferrer" className="flex items-start gap-6 group">
                    <div className="bg-primary/10 p-4 text-primary group-hover:bg-primary group-hover:text-industrial-black transition-colors">
                      <MessageCircle className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-widest opacity-50 mb-1">WhatsApp us</div>
                      <div className="text-xl font-bold">+86 18361400966</div>
                    </div>
                  </a>
                  <div className="flex items-start gap-6">
                    <div className="bg-primary/10 p-4 text-primary">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-widest opacity-50 mb-1">Global HQ</div>
                      <div className="text-xl font-bold">Nantong, China</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white/5 p-10 border border-white/10">
                <div className="text-2xl font-black uppercase tracking-tighter mb-8">Global Network</div>
                <div className="space-y-6">
                  <div className="flex justify-between items-center border-b border-white/10 pb-4">
                    <span className="font-bold uppercase tracking-widest text-xs">Asia Pacific</span>
                    <span className="text-primary text-[10px] font-bold uppercase tracking-widest">Active</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-4">
                    <span className="font-bold uppercase tracking-widest text-xs">Middle East</span>
                    <span className="text-primary text-[10px] font-bold uppercase tracking-widest">Active</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-4">
                    <span className="font-bold uppercase tracking-widest text-xs">Europe & Africa</span>
                    <span className="text-primary text-[10px] font-bold uppercase tracking-widest">Active</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-4">
                    <span className="font-bold uppercase tracking-widest text-xs">Americas</span>
                    <span className="text-primary text-[10px] font-bold uppercase tracking-widest">Active</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/10 pb-4">
                    <span className="font-bold uppercase tracking-widest text-xs">Australia</span>
                    <span className="text-primary text-[10px] font-bold uppercase tracking-widest">Active</span>
                  </div>
                </div>
                <div className="mt-12 p-6 bg-primary text-industrial-black">
                  <Globe className="w-10 h-10 mb-4" />
                  <div className="font-black uppercase tracking-tighter text-xl">24/7 Support</div>
                  <p className="text-sm font-medium opacity-80 mt-2">Global technical support for critical equipment failures.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-industrial-black border-t border-white/10 py-12 px-6 md:px-20 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-3">
          <div className="bg-primary px-3 py-1.5 flex items-center justify-center">
            <Logo className="h-8" />
            <span className="hidden font-logo text-3xl text-industrial-black leading-none tracking-wide">TOWARD</span>
          </div>
        </div>
        <div className="flex gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
          <button onClick={() => setSelectedLegalPage('privacy')} className="hover:text-white transition-colors uppercase">Privacy Policy</button>
          <button onClick={() => setSelectedLegalPage('cookie')} className="hover:text-white transition-colors uppercase">Cookie Policy</button>
          <button onClick={() => setSelectedLegalPage('terms')} className="hover:text-white transition-colors uppercase">Terms of Service</button>
        </div>
        <div className="text-[10px] font-bold uppercase tracking-widest text-white/20">
          &copy; 2026 TOWARD GLOBAL. ALL RIGHTS RESERVED.
        </div>
      </footer>
    </div>
  );
}



