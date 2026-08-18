import { createFileRoute } from "@tanstack/react-router";

import { COMPANY } from "@/lib/site-data";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — VeeTech Automation FZE" },
      {
        name: "description",
        content:
          "How VeeTech Automation FZE collects, uses and protects information submitted through this website.",
      },
      { property: "og:title", content: "Privacy Policy — VeeTech Automation FZE" },
      { property: "og:description", content: "Our approach to personal data and website enquiries." },
      { property: "og:url", content: "/privacy-policy" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/privacy-policy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <article className="container-vt section-y max-w-3xl">
      <h1 className="font-display text-4xl font-semibold">Privacy Policy</h1>
      <div className="mt-8 space-y-6 text-sm leading-relaxed text-muted-foreground">
        <p>
          VeeTech Automation FZE respects the privacy of visitors to this website. This policy
          explains what information we collect and how we use it.
        </p>
        <h2 className="font-display text-lg font-semibold text-foreground">Information we collect</h2>
        <p>
          We collect only the information you choose to provide through our enquiry form — such as
          your name, company, email address, phone number and the details of your requirement.
        </p>
        <h2 className="font-display text-lg font-semibold text-foreground">How we use it</h2>
        <p>
          Information submitted is used solely to respond to your enquiry and to provide technical
          and commercial information about our products and services. We do not sell or rent
          personal information to third parties.
        </p>
        <h2 className="font-display text-lg font-semibold text-foreground">Retention and security</h2>
        <p>
          Enquiry information is retained for as long as needed to serve the business relationship
          and is protected with reasonable organisational and technical measures.
        </p>
        <h2 className="font-display text-lg font-semibold text-foreground">Contact</h2>
        <p>
          For any question about this policy, or to request removal of your details, write to{" "}
          <a href={`mailto:${COMPANY.email}`} className="text-accent underline-offset-4 hover:underline">
            {COMPANY.email}
          </a>
          .
        </p>
      </div>
    </article>
  );
}
