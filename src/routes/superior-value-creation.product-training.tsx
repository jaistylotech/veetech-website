import { createFileRoute } from "@tanstack/react-router";

import { PageHero, Reveal, CtaSection } from "@/components/site/primitives";
import ctaPlant from "@/assets/cta-plant.jpg";

export const Route = createFileRoute(
  "/superior-value-creation/product-training",
)({
  head: () => ({
    meta: [
      { title: "Product Training - Veetech Automation FZE" },
      {
        name: "description",
        content:
          "Veetech Automation's highly experienced and talented trainers are ready to offer on-site equipment/operational training for client personnel.",
      },
    ],
  }),
  component: ProductTrainingPage,
});

function ProductTrainingPage() {
  return (
    <>
      <PageHero
        eyebrow="Superior Value Creation"
        title="Product Training"
        lead="On-site equipment and operational training for client personnel by experts."
        image="/client-media/superior-value-creation/sub-pages/training-hero.jpg"
        imageAlt="Product Training Banner"
        breadcrumbs={[
          { label: "Home", to: "/" },
          { label: "Superior Value Creation", to: "/superior-value-creation" },
          { label: "Product Training" },
        ]}
      />

      {/* Main Content Section */}
      <section className="section-y bg-white relative">
        <div className="container-vt">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            
            {/* Left Column: Content (Spans 7 columns) */}
            <div className="lg:col-span-7">
              <Reveal>
                <h2 className="font-display text-2xl md:text-3xl font-bold uppercase tracking-wide text-navy mb-8">
                  Operational & Equipment Training
                </h2>
                
                <div className="prose max-w-none text-slate-600 leading-relaxed text-lg">
                  <p className="mb-6">
                    Veetech Automation's highly experienced and talented trainers are ready to offer on-site equipment/operational training for client personnel. Depending on the specific requirements, in-house training at Veetech Automation's facility is also provided.
                  </p>
                  <p>
                    The training courses can be project-specific and customized. Additionally, training based on the entire product range to upskill the operational and maintenance personnel of clients can also be organized.
                  </p>
                </div>
              </Reveal>
            </div>

            {/* Right Column: Image (Spans 5 columns) */}
            <div className="lg:col-span-5 relative">
              <Reveal delay={150}>
                {/* Premium Image Frame styling matching the initial pages */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-slate-50">
                  <img
                    src="/client-media/superior-value-creation/sub-pages/training-1.jpg"
                    alt="Training facility floor with personnel"
                    className="w-full max-h-[450px] object-cover transition-transform duration-700 hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </Reveal>
            </div>

          </div>
        </div>
      </section>

      <CtaSection
        image={ctaPlant}
        title="Upskill Your Personnel"
        lead="Schedule a customized training session to empower your team."
      />
    </>
  );
}

