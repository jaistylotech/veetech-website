export const REDIRECT_MAP: Record<string, string> = {
  // Superior Value Creation / On-site & Value-added Services
  "/pressure-testing": "/superior-value-creation/pressure-testing",
  "/flushing": "/superior-value-creation/flushing",
  "/equipment-rental": "/superior-value-creation/equipment-rental",
  "/long-term-service-agreement": "/superior-value-creation/long-term-service-agreement",
  "/maintenance-contracts": "/superior-value-creation/maintenance-contracts",
  "/product-training": "/superior-value-creation/product-training",
  "/refurbishments-recertification": "/superior-value-creation/refurbishments-recertification",
  "/refurbishment-recertification": "/superior-value-creation/refurbishments-recertification",
  "/refurbishments": "/superior-value-creation/refurbishments-recertification",
  "/refurbishment": "/superior-value-creation/refurbishments-recertification",

  // Careers / Job Openings (Legacy postings mapped to unified careers hub)
  "/senior-projects-engineer-whcp": "/careers",

  // Solutions & Engineered Solutions
  "/other-engineered-solutions": "/solutions/engineered-solutions",
  "/other-engineered-solutions/lube-oil-systems": "/solutions/engineered-solutions/lube-oil-systems",
  "/other-engineered-solutions/metering-skids": "/solutions/engineered-solutions/metering-skids",
  "/other-engineered-solutions/dra-injection-systems": "/solutions/engineered-solutions/dra-injection-systems",
  "/other-engineered-solutions/hipps-systems": "/solutions/engineered-solutions/hipps-systems",
  "/other-engineered-solutions/nitrogen-generator-packages": "/solutions/engineered-solutions/nitrogen-generator-packages",
  "/other-engineered-solutions/surge-relief-skids": "/solutions/engineered-solutions/surge-relief-skids",
  "/lube-oil-systems": "/solutions/engineered-solutions/lube-oil-systems",
  "/metering-skids": "/solutions/engineered-solutions/metering-skids",
  "/dra-injection-systems": "/solutions/engineered-solutions/dra-injection-systems",
  "/hipps-systems": "/solutions/engineered-solutions/hipps-systems",
  "/nitrogen-generator-packages": "/solutions/engineered-solutions/nitrogen-generator-packages",
  "/surge-relief-skids": "/solutions/engineered-solutions/surge-relief-skids",
  "/chemical-injection-packages": "/solutions/chemical-injection-packages",
  "/wellhead-control-systems": "/solutions/wellhead-control-systems",
  "/modular-packages": "/solutions/modular-packages",
  "/engineered-solutions": "/solutions/engineered-solutions",
  "/products": "/solutions",

  // General Company Pages
  "/about-us": "/about",
  "/contact-us": "/contact",
  "/services": "/after-market-services",
  "/after-market": "/after-market-services",
  "/terms-and-conditions": "/terms",
  "/terms-of-service": "/terms",
  "/privacy": "/privacy-policy",
};

/**
 * Returns the destination URL if the requested pathname matches a legacy URL,
 * or null if no redirect is required.
 */
export function getRedirectUrl(pathname: string): string | null {
  const normalized = (pathname.replace(/\/+$/, "") || "/").toLowerCase();

  // Direct match
  const directMatch = REDIRECT_MAP[normalized];
  if (directMatch) {
    return directMatch;
  }

  // Dynamic legacy job URLs
  if (
    normalized.startsWith("/careers/") ||
    normalized.startsWith("/jobs/") ||
    normalized.startsWith("/job/") ||
    normalized.includes("senior-projects-engineer")
  ) {
    return "/careers";
  }

  // Other engineered solutions fallback
  if (normalized.startsWith("/other-engineered-solutions/")) {
    const slug = normalized.replace("/other-engineered-solutions/", "");
    const subMatch = REDIRECT_MAP[`/other-engineered-solutions/${slug}`];
    if (subMatch) {
      return subMatch;
    }
    return "/solutions/engineered-solutions";
  }

  return null;
}
