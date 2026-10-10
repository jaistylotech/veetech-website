import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms and Conditions — Veetech Automation FZE" },
      {
        name: "description",
        content:
          "Terms and Conditions governing the use of the Veetech Automation FZE website.",
      },
      { property: "og:title", content: "Terms and Conditions — Veetech Automation FZE" },
      { property: "og:description", content: "Website terms of use, disclaimers, and legal policies." },
      { property: "og:url", content: "/terms" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: TermsPage,
});

function TermsPage() {
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
            Terms and Conditions
          </li>
        </ol>
      </nav>

      <div className="border-b border-border pb-6 mb-8">
        <h1 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-foreground">
          Terms and Conditions
        </h1>
        <p className="mt-2 text-sm text-muted-foreground font-medium">
          Last Updated: 07-10-2026
        </p>
      </div>

      <div className="space-y-8 text-base leading-relaxed text-muted-foreground">
        <p className="text-foreground/90 text-lg">
          Welcome to the website of <strong>Veetech Automation FZE</strong> (&quot;Company&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;).
        </p>
        <p>
          By accessing or using this website, you agree to comply with these Terms and Conditions. If you do not agree with these terms, please discontinue use of the website.
        </p>

        <section className="space-y-3">
          <h2 className="font-display text-xl font-semibold text-foreground">
            1. Website Purpose
          </h2>
          <p>
            This website is provided primarily for general informational and business purposes.
          </p>
          <p>
            The information published on this website is intended to provide an overview of our company, products, services, activities, and other relevant information.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-xl font-semibold text-foreground">
            2. Use of Website
          </h2>
          <p>
            You agree to use this website only for lawful purposes and in a manner that does not:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Violate any applicable law or regulation.</li>
            <li>Attempt to gain unauthorized access to the website or its systems.</li>
            <li>Interfere with the operation or security of the website.</li>
            <li>Introduce malicious software, code, or other harmful material.</li>
            <li>Copy, reproduce, distribute, or misuse website content without authorization.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-xl font-semibold text-foreground">
            3. Accuracy of Information
          </h2>
          <p>
            We make reasonable efforts to ensure that information published on this website is accurate and up to date.
          </p>
          <p>
            However, information may occasionally contain errors, omissions, or outdated information. We reserve the right to modify, update, or remove website content at any time without prior notice.
          </p>
          <p>
            Information provided on the website should not be considered a binding offer, quotation, contract, or professional advice unless expressly stated otherwise.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-xl font-semibold text-foreground">
            4. Intellectual Property
          </h2>
          <p>
            Unless otherwise stated, all content appearing on this website, including but not limited to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Text</li>
            <li>Logos</li>
            <li>Trademarks</li>
            <li>Graphics</li>
            <li>Images</li>
            <li>Documents</li>
            <li>Website design</li>
            <li>Layout and other materials</li>
          </ul>
          <p>
            is owned by or licensed to <strong>Veetech Automation FZE</strong> and is protected by applicable intellectual property laws.
          </p>
          <p>
            You may view and access the website for personal or legitimate business purposes. You may not reproduce, modify, distribute, publish, or commercially exploit website content without our prior written permission, except where permitted by applicable law.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-xl font-semibold text-foreground">
            5. Third-Party Links
          </h2>
          <p>
            The website may contain links to third-party websites.
          </p>
          <p>
            These links are provided for convenience or informational purposes only. We do not control and are not responsible for the content, availability, security, privacy practices, or policies of third-party websites.
          </p>
          <p>
            Accessing third-party websites is at your own risk.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-xl font-semibold text-foreground">
            6. Disclaimer
          </h2>
          <p>
            The website and its content are provided on an &quot;as available&quot; basis.
          </p>
          <p>
            To the extent permitted by applicable law, we make no warranties that:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>The website will always be available or uninterrupted.</li>
            <li>The website will be free from errors or technical issues.</li>
            <li>The information provided will always be complete, accurate, or current.</li>
            <li>The website will be free from viruses or other harmful components.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-xl font-semibold text-foreground">
            7. Limitation of Liability
          </h2>
          <p>
            To the maximum extent permitted by applicable law, <strong>Veetech Automation FZE</strong> shall not be liable for any direct, indirect, incidental, consequential, or other losses arising from or related to your use of, or inability to use, this website or reliance on information published on it.
          </p>
          <p>
            Nothing in these Terms and Conditions excludes or limits liability where such exclusion or limitation is prohibited by applicable law.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-xl font-semibold text-foreground">
            8. Changes to the Website and Terms
          </h2>
          <p>
            We reserve the right to modify, suspend, or discontinue any part of the website at any time.
          </p>
          <p>
            We may also update these Terms and Conditions from time to time. The revised version will be published on this page with an updated &quot;Last Updated&quot; date.
          </p>
          <p>
            Your continued use of the website after changes are published constitutes acceptance of the updated terms, to the extent permitted by applicable law.
          </p>
        </section>

        <section className="space-y-3 border-t border-border pt-6 mt-8">
          <h2 className="font-display text-xl font-semibold text-foreground">
            9. Governing Law
          </h2>
          <p>
            These Terms and Conditions shall be governed by the applicable laws of the United Arab Emirates and the Emirate of Dubai. Any disputes shall be subject to the jurisdiction of the competent courts of Dubai, UAE.
          </p>
        </section>
      </div>
    </article>
  );
}
