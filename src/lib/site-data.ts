export const COMPANY = {
  name: "VeeTech Automation FZE",
  shortName: "VeeTech Automation",
  formerName: "Versatech Automation FZE",
  email: "sales@veetech.ae",
  phone: "+971 4 881 1214",
  phoneHref: "+97148811214",
  poBox: "P.O. Box 18642",
  plot: "Plot Number: S30913",
  city: "Jebel Ali Free Zone, Dubai, UAE",
} as const;

export const NAV = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Solutions", to: "/solutions" },
  { label: "Services", to: "/services" },
  { label: "Careers", to: "/careers" },
  { label: "Contact", to: "/contact" },
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
    body: "Extensive field service and a dedicated after-market team providing comprehensive support for onsite installation, commissioning and start-up of equipment supplied worldwide.",
  },
  {
    title: "Spare Parts Management",
    body: "Supply of required spares at competitive prices with the minimum lead time possible. Special spares are stocked for easy availability, and customized spare parts management solutions can be offered on request.",
  },
  {
    title: "Preventive Maintenance",
    body: "Timely preventive maintenance is key to proper and safe site operations. Well-trained personnel carry out the necessary health checks, repair and periodic maintenance.",
  },
  {
    title: "Troubleshooting & Field Repairing",
    body: "A qualified team of service engineers and technicians equipped for troubleshooting and site repair works with minimum equipment downtime, onshore and offshore, including equipment supplied by other manufacturers.",
  },
  {
    title: "Refurbishment & Recertification",
    body: "Restoration of aged equipment including complete revamp: inspection, testing, repairing, replacing and upgrading worn components, followed by recertification — at our facility or at the customer site.",
  },
  {
    title: "Maintenance Contracts",
    body: "Maintenance contracts for equipment supplied by VeeTech Automation or by any other OEM.",
  },
  {
    title: "Long Term Service Agreements",
    body: "LTSAs that help prevent or eliminate malfunctioning of the system and increase its reliability.",
  },
  {
    title: "Flushing",
    body: "Power flushing of hydraulic systems to eliminate sludge, varnish, debris and contaminated or degraded fluid from conductor walls, internal surfaces and system dead spots.",
  },
  {
    title: "Pressure Testing",
    body: "Pressure testing equipment and experienced technicians provided for performing these services.",
  },
  {
    title: "Equipment Rental",
    body: "Mission-critical equipment such as flushing equipment, pressure testing equipment and nitrogen booster units offered on a rental basis.",
  },
  {
    title: "Product Training",
    body: "Product training for customer teams on the systems supplied by VeeTech Automation.",
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
  { title: "ISO 9001: 2015", note: "Quality management system" },
  { title: "ISO 14001: 2015", note: "Environmental management" },
  { title: "ISO 45001: 2018", note: "Occupational health & safety" },
  { title: "API Spec Q1", note: "Petroleum industry quality specification" },
  { title: "Quality Policy", note: "Company policy document" },
  { title: "HSE Policy", note: "Company policy document" },
] as const;

export const OPENINGS = [
  {
    title: "Sales Coordinator",
    summary:
      "Any graduate with 5+ years of experience as a Sales Coordinator in the Oil & Gas industry.",
    location: "Jebel Ali Free Zone, Dubai, UAE",
  },
  {
    title: "Project Engineer – CIS",
    summary:
      "The ideal candidate should have exposure to Chemical Injection Systems with relevant experience.",
    location: "Jebel Ali Free Zone, Dubai, UAE",
  },
  {
    title: "Senior Project Engineer – WHCP",
    summary:
      "10 years of experience with a minimum of 5 years overseas, preferably in the Middle East.",
    location: "Jebel Ali Free Zone, Dubai, UAE",
  },
] as const;
