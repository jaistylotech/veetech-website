import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Veetech Automation FZE" },
      {
        name: "description",
        content:
          "Privacy Policy of Veetech Automation FZE explaining how we handle information when you visit and use our website.",
      },
      { property: "og:title", content: "Privacy Policy — Veetech Automation FZE" },
      { property: "og:description", content: "Our approach to personal data and website information handling." },
      { property: "og:url", content: "/privacy-policy" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/privacy-policy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <article 
      className="container-vt section-y max-w-4xl select-none no-copy"
      onCopy={(e) => e.preventDefault()}
      onContextMenu={(e) => e.preventDefault()}
    >
      <nav aria-label="Breadcrumb" className="mb-6">
        <ol className="flex items-center gap-2 text-sm text-muted-foreground">
          <li>
            <Link to="/" className="hover:text-accent transition-colors font-medium">
              Home
            </Link>
          </li>
          <li aria-hidden="true" className="select-none text-muted-foreground/60">/</li>
          <li className="font-semibold text-foreground">
            Privacy Policy
          </li>
        </ol>
      </nav>

      <div className="border-b border-border pb-6 mb-8">
        <h1 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-foreground">
          Privacy Policy
        </h1>
        <p className="mt-2 text-sm text-muted-foreground font-medium">
          Last Updated: 07-10-2026
        </p>
      </div>

      <div className="space-y-8 text-base leading-relaxed text-muted-foreground">
        <p className="text-foreground/90 text-lg">
          <strong>Veetech Automation FZE</strong> (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) respects your privacy and is committed to protecting the information of visitors to our website,{" "}
          <a href="https://www.veetech.ae" target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-4 hover:text-navy-deep">
            www.veetech.ae
          </a>.
        </p>
        <p>
          This Privacy Policy explains how we handle information when you visit and use our website.
        </p>

        <section className="space-y-3">
          <h2 className="font-display text-xl font-semibold text-foreground">
            1. Information We Collect
          </h2>
          <p>
            Our website is primarily an informational website. We do not require visitors to create an account or provide personal information to access the general content of the website.
          </p>
          <p>
            We do not intentionally collect personal information through cookies, advertising trackers, or similar tracking technologies on this website.
          </p>
          <p>
            If you voluntarily contact us through an email address or other communication method displayed on the website, we may receive the information you choose to provide, such as your name, email address, company name, telephone number, and the contents of your message.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-xl font-semibold text-foreground">
            2. Use of Information
          </h2>
          <p>
            Any information voluntarily provided by you may be used solely for legitimate business purposes, including:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Responding to your enquiries or requests.</li>
            <li>Providing information about our products or services.</li>
            <li>Communicating with you regarding your enquiry.</li>
            <li>Maintaining and improving our website and services.</li>
            <li>Complying with applicable legal or regulatory requirements.</li>
          </ul>
          <p className="font-medium text-foreground">
            We do not sell or rent your personal information to third parties.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-xl font-semibold text-foreground">
            3. Cookies and Tracking Technologies
          </h2>
          <p>
            The website may use necessary cookies and third-party services such as Google Maps and LinkedIn. Such services may process technical information in accordance with their respective privacy policies. We do not use tracking technologies for targeted advertising or profiling.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-xl font-semibold text-foreground">
            4. Third-Party Websites
          </h2>
          <p>
            Our website may contain links to third-party websites for informational or convenience purposes. We are not responsible for the privacy practices, content, security, or policies of external websites.
          </p>
          <p>
            We recommend reviewing the privacy policy of any third-party website you visit.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-xl font-semibold text-foreground">
            5. Data Retention
          </h2>
          <p>
            Information voluntarily provided through enquiries or communications will be retained only for as long as reasonably necessary to respond to the enquiry, provide services, maintain appropriate business records, or comply with applicable legal obligations.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-xl font-semibold text-foreground">
            6. Your Privacy Rights
          </h2>
          <p>
            Depending on your location and applicable law, you may have rights regarding your personal information, including the right to request access to, correction of, or deletion of personal information held by us.
          </p>
          <p>
            To make a privacy-related request, please contact us using the details provided below.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-xl font-semibold text-foreground">
            7. Changes to This Privacy Policy
          </h2>
          <p>
            We may update this Privacy Policy from time to time to reflect changes in our website, business practices, technology, or applicable legal requirements.
          </p>
          <p>
            The updated version will be published on this page with the revised &quot;Last Updated&quot; date.
          </p>
        </section>

        <section className="space-y-3 border-t border-border pt-6 mt-8">
          <h2 className="font-display text-xl font-semibold text-foreground">
            8. Contact Us
          </h2>
          <p>
            If you have any questions regarding this Privacy Policy or the handling of personal information, please contact us:
          </p>
          <p className="font-medium text-foreground">
            Email:{" "}
            <a href="mailto:sales@veetech.ae" className="text-accent underline underline-offset-4 hover:text-navy-deep">
              sales@veetech.ae
            </a>
          </p>
        </section>
      </div>
    </article>
  );
}
