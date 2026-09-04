import { createFileRoute } from "@tanstack/react-router";

import { COMPANY } from "@/lib/site-data";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions â€” Veetech Automation FZE" },
      {
        name: "description",
        content:
          "Terms governing the use of the Veetech Automation FZE website and the information published on it.",
      },
      { property: "og:title", content: "Terms & Conditions â€” Veetech Automation FZE" },
      { property: "og:description", content: "Website terms of use and content disclaimer." },
      { property: "og:url", content: "/terms" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <article className="container-vt section-y max-w-3xl">
      <h1 className="font-display text-4xl font-semibold">Terms &amp; Conditions</h1>
      <div className="mt-8 space-y-6 text-sm leading-relaxed text-muted-foreground">
        <h2 className="font-display text-lg font-semibold text-foreground">Use of this website</h2>
        <p>
          By accessing this website you agree to use it for lawful purposes and in a way that does
          not infringe the rights of others.
        </p>
        <h2 className="font-display text-lg font-semibold text-foreground">Content and accuracy</h2>
        <p>
          Product and service descriptions are provided for general information. Specifications,
          configurations and scope are confirmed only in a written quotation or contract, and are
          subject to change as designs are developed to customer requirements.
        </p>
        <h2 className="font-display text-lg font-semibold text-foreground">Intellectual property</h2>
        <p>
          All content on this website, including text, images and marks, is the property of Veetech
          Automation FZE and may not be reproduced without written permission.
        </p>
        <h2 className="font-display text-lg font-semibold text-foreground">Contact</h2>
        <p>
          Questions about these terms can be sent to{" "}
          <a href={`mailto:${COMPANY.email}`} className="text-accent underline-offset-4 hover:underline">
            {COMPANY.email}
          </a>
          .
        </p>
      </div>
    </article>
  );
}
