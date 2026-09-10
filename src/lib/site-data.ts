export const COMPANY = {
  name: "Veetech Automation FZE",
  shortName: "Veetech Automation",
  formerName: "Versatech Automation FZE",
  email: "sales@Veetech.ae",
  phone: "+971 4 881 1214",
  phoneHref: "+97148811214",
  poBox: "P.O. Box 18642",
  plot: "Plot Number: S30913",
  city: "Jebel Ali Free Zone, Dubai, UAE",
} as const;

export const NAV = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { 
    label: "Products", 
    to: "/solutions",
    children: [
      { label: "Chemical Injection Packages", to: "/solutions/chemical-injection-packages" },
      { label: "Wellhead Control Systems", to: "/solutions/wellhead-control-systems" },
      { label: "Modular Packages", to: "/solutions/modular-packages" },
      { 
        label: "Other Engineered Solutions", 
        to: "/solutions/engineered-solutions",
        children: [
          { label: "Metering Skids", to: "/solutions/engineered-solutions/metering-skids" },
          { label: "DRA Injection Systems", to: "/solutions/engineered-solutions/dra-injection-systems" },
          { label: "HIPPS Systems", to: "/solutions/engineered-solutions/hipps-systems" },
          { label: "Nitrogen Generator Packages", to: "/solutions/engineered-solutions/nitrogen-generator-packages" },
          { label: "Surge Relief Skids", to: "/solutions/engineered-solutions/surge-relief-skids" },
          { label: "Lube Oil Systems", to: "/solutions/engineered-solutions/lube-oil-systems" },
        ]
      },
    ]
  },
  { 
    label: "Superior Value Creation", 
    to: "/superior-value-creation",
    children: [
      { label: "Refurbishments & Recertification", to: "/superior-value-creation/refurbishments-recertification" },
      { label: "Maintenance Contracts", to: "/superior-value-creation/maintenance-contracts" },
      { label: "Long Term Service Agreement", to: "/superior-value-creation/long-term-service-agreement" },
      { label: "Flushing", to: "/superior-value-creation/flushing" },
      { label: "Pressure Testing", to: "/superior-value-creation/pressure-testing" },
      { label: "Equipment Rental", to: "/superior-value-creation/equipment-rental" },
      { label: "Product Training", to: "/superior-value-creation/product-training" },
    ]
  },
  { label: "After Market Services", to: "/after-market-services" },
  { label: "Infrastructure", to: "/infrastructure" },
  { label: "Career", to: "/careers" },
  { label: "Contact Us", to: "/contact-us" },
] as const;

export const CAPABILITIES = [
  {
    no: "01",
    title: "Design",
    body: "System design developed around the application, the process conditions and the customer's specification.",
  },
  {
    no: "02",
    title: "Engineering",
    body: "Detailed engineering of hydraulic, pneumatic and electrical control systems to international standards.",
  },
  {
    no: "03",
    title: "Manufacturing",
    body: "Fabrication and assembly at our own facility in Jebel Ali Free Zone, Dubai.",
  },
  {
    no: "04",
    title: "Testing",
    body: "Systems are assembled and tested in a climate-controlled assembly and testing facility before despatch.",
  },
  {
    no: "05",
    title: "Commissioning",
    body: "Onsite installation, commissioning and start-up support for equipment supplied worldwide.",
  },
  {
    no: "06",
    title: "After-Market Support",
    body: "A dedicated after-market team covering maintenance, repair, refurbishment and spares.",
  },
] as const;

export const SOLUTIONS = [
  {
    slug: "/solutions/chemical-injection-packages",
    title: "Chemical Injection Packages",
    short:
      "Customized and integrated skid solutions used to control the dosing of chemicals across different applications.",
  },
  {
    slug: "/solutions/wellhead-control-systems",
    title: "Wellhead Control Systems",
    short:
      "Pneumatic, hydraulic and electric valve controls for sequential valve operation, manual override, emergency and safety shutdown.",
  },
  {
    slug: "/solutions/modular-packages",
    title: "Modular Packages",
    short:
      "Integrated skid-based wellsite units containing the equipment required between the X-mas tree and the main flow line.",
  },
  {
    slug: "/solutions/engineered-solutions",
    title: "Engineered Solutions",
    short:
      "Bespoke engineered solutions for upstream energy-sector applications, built around the customer's requirement.",
  },
] as const;

export const ENGINEERED_SOLUTIONS = [
  {
    slug: "/solutions/engineered-solutions/metering-skids",
    title: "Metering Skids",
    short: "Custom-built metering skids for precise measurement of liquid and gas.",
  },
  {
    slug: "/solutions/engineered-solutions/dra-injection-systems",
    title: "DRA Injection Systems",
    short: "Drag Reducing Agent (DRA) injection systems for pipeline flow improvement.",
  },
  {
    slug: "/solutions/engineered-solutions/hipps-systems",
    title: "HIPPS Systems",
    short: "High Integrity Pressure Protection Systems for ultimate facility safety.",
  },
  {
    slug: "/solutions/engineered-solutions/nitrogen-generator-packages",
    title: "Nitrogen Generator Packages",
    short: "On-site nitrogen generation for purging, blanketing, and other applications.",
  },
  {
    slug: "/solutions/engineered-solutions/surge-relief-skids",
    title: "Surge Relief Skids",
    short: "Surge relief systems to protect pipelines and equipment from pressure spikes.",
  },
  {
    slug: "/solutions/engineered-solutions/lube-oil-systems",
    title: "Lube Oil Systems",
    short: "API 614 compliant lube oil systems for critical rotating equipment.",
  },
] as const;

export const SERVICES = [
  {
    title: "Installation & Commissioning",
    image: "/client-media/after-market/installation.jpg",
    body: "Veetech Automation has the in-house capabilities to provide its valued customers with all the necessary services related to onsite installation, pre-commissioning, and commissioning activities for the entire range of products and solution packages.",
  },
  {
    title: "Spare Parts Management",
    image: "/client-media/after-market/spare-parts.jpg",
    body: "Supply of required spares at competitive prices with the minimum lead time possible. Special spares are stocked for easy availability, and customized spare parts management solutions can be offered on request.",
  },
  {
    title: "Preventive Maintenance",
    image: "/client-media/after-market/preventive-maintenance.jpg",
    body: "Timely preventive maintenance is key to proper and safe site operations. Well-trained personnel carry out the necessary health checks, repair and periodic maintenance.",
  },
  {
    title: "Troubleshooting & Field Repairing",
    image: "/client-media/after-market/troubleshooting.jpg",
    body: "A qualified team of service engineers and technicians equipped for troubleshooting and site repair works with minimum equipment downtime, onshore and offshore, including equipment supplied by other manufacturers.",
  },
  {
    title: "Refurbishment & Recertification",
    image: "/client-media/after-market/refurbishment.jpg",
    body: "Restoration of aged equipment including complete revamp: inspection, testing, repairing, replacing and upgrading worn components, followed by recertification - at our facility or at the customer site.",
  },
] as const;

export const SUPERIOR_VALUE_CREATION_SERVICES = [
  {
    slug: "/superior-value-creation/refurbishments-recertification",
    title: "Refurbishment & Recertification",
    short: "Extend the life of your products while meeting operational requirements.",
  },
  {
    slug: "/superior-value-creation/maintenance-contracts",
    title: "Maintenance Contracts",
    short: "Comprehensive maintenance contracts for equipment supplied by Veetech or OEMs.",
  },
  {
    slug: "/superior-value-creation/long-term-service-agreement",
    title: "Long Term Service Agreement",
    short: "LTSAs to prevent system malfunctioning and significantly increase reliability.",
  },
  {
    slug: "/superior-value-creation/flushing",
    title: "Flushing",
    short: "Power flushing hydraulic systems to eliminate sludge, varnish, and debris.",
  },
  {
    slug: "/superior-value-creation/pressure-testing",
    title: "Pressure Testing",
    short: "On-site pressure testing activities for field tubing of wellhead control panels.",
  },
  {
    slug: "/superior-value-creation/equipment-rental",
    title: "Equipment Rental",
    short: "Mission critical equipment like flushing units and pressure testing tools on rent.",
  },
  {
    slug: "/superior-value-creation/product-training",
    title: "Product Training",
    short: "On-site equipment and operational training for client personnel by experts.",
  },
] as const;

export const MARKETS = [
  "UAE",
  "Saudi Arabia",
  "Qatar",
  "Oman",
  "Kuwait",
  "Bahrain",
  "Iraq",
  "Kurdistan",
  "Egypt",
  "Turkmenistan",
  "Azerbaijan",
  "Kazakhstan",
  "Russia",
  "India",
  "Malaysia",
  "Singapore",
  "Greece",
  "Albania",
  "Romania",
  "Spain",
  "France",
  "Algeria",
  "Libya",
  "Sudan",
  "Nigeria",
  "Ghana",
  "Angola",
  "Uganda",
  "Mozambique",
] as const;

export const REGIONAL_OFFICES = [
  "Abu Dhabi",
  "Oman",
  "Qatar",
  "Kuwait",
  "Iraq",
  "Egypt",
  "Nigeria",
  "Algeria",
  "France",
  "Spain",
] as const;

export const CERTIFICATIONS = [
  { title: "ISO 9001: 2015", note: "Quality management system", link: "https://veetech.ae/wp-content/uploads/2023/05/ISO-9001-2015-Certificate-VEETECH.pdf" },
  { title: "ISO 14001: 2015", note: "Environmental management", link: "https://veetech.ae/wp-content/uploads/2025/01/dorabot.io_page-1.jpg" },
  { title: "ISO 45001: 2018", note: "Occupational health & safety", link: "https://veetech.ae/wp-content/uploads/2025/01/ISO-45001-2018-Certificate-Veetech_page-0001.jpg" },
  { title: "API Spec Q1", note: "Petroleum industry quality specification", link: "https://veetech.ae/wp-content/uploads/2025/01/API-Q1-10th-Ed-Certificate-Veetech.pdf" },
  { title: "Quality Policy", note: "Company policy document", link: "https://veetech.ae/wp-content/uploads/2025/05/Quality-Policy-CQPREV.05.pdf" },
  { title: "HSE Policy", note: "Company policy document", link: "https://veetech.ae/wp-content/uploads/2022/04/HSE-Policy-2.jpg" },
] as const;

export const OPENINGS = [
  {
    title: "Sales Coordinator",
    summary:
      "Any graduate with 5+ years of experience as a Sales Coordinator in the Oil & Gas industry.",
    location: "Jebel Ali Free Zone, Dubai, UAE",
  },
  {
    title: "Project Engineer â€“ CIS",
    summary:
      "The ideal candidate should have exposure to Chemical Injection Systems with relevant experience.",
    location: "Jebel Ali Free Zone, Dubai, UAE",
  },
  {
    title: "Senior Project Engineer â€“ WHCP",
    summary:
      "10 years of experience with a minimum of 5 years overseas, preferably in the Middle East.",
    location: "Jebel Ali Free Zone, Dubai, UAE",
  },
] as const;

export const QUICK_LINKS = [
  { label: "ABOUT US", to: "/about" },
  { label: "PRODUCTS", to: "/solutions" },
  { label: "SUPERIOR VALUE CREATION", to: "/superior-value-creation" },
  { label: "AFTER MARKET SERVICES", to: "/after-market-services" },
  { label: "INFRASTRUCTURE", to: "/infrastructure" },
  { label: "CAREER", to: "/careers" },
] as const;


