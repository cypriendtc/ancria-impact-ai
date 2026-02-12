import pageHeroBg from "@/assets/page-hero-bg.jpg";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  highlight?: string;
}

const PageHero = ({ title, subtitle, highlight }: PageHeroProps) => (
  <section className="relative py-20 md:py-28 px-4 md:px-8 mb-10 md:mb-16 flex items-center justify-center text-center overflow-hidden">
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url(${pageHeroBg})` }}
    />
    <div className="absolute inset-0 bg-[hsl(var(--hero-bg)/0.7)]" />
    <div className="relative z-10 container mx-auto max-w-3xl">
      <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-white">
        {title}
        {highlight && <span className="text-gradient"> {highlight}</span>}
      </h1>
      {subtitle && (
        <p className="text-lg text-white/80 leading-relaxed">{subtitle}</p>
      )}
    </div>
  </section>
);

export default PageHero;
