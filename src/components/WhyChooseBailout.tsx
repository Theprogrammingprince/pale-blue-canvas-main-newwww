import { Rocket, Flag, Handshake, Search, BarChart3, Shield } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const WhyChooseBailout = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Rocket,
      titleKey: "why.f1Title",
      descKey: "why.f1Desc",
    },
    {
      icon: Flag,
      titleKey: "why.f2Title",
      descKey: "why.f2Desc",
    },
    {
      icon: Handshake,
      titleKey: "why.f3Title",
      descKey: "why.f3Desc",
    },
    {
      icon: Search,
      titleKey: "why.f4Title",
      descKey: "why.f4Desc",
    },
    {
      icon: BarChart3,
      titleKey: "why.f5Title",
      descKey: "why.f5Desc",
    },
    {
      icon: Shield,
      titleKey: "why.f6Title",
      descKey: "why.f6Desc",
    },
  ];

  return (
    <section id="why-choose-bailout" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 bg-accent text-accent-foreground text-sm font-medium rounded-full mb-4">
            {t("why.badge")}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground">
            {t("why.title1")} <span className="text-gradient">{t("why.titleHighlight")}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl border border-border p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col"
            >
              <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {t(feature.titleKey)}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {t(feature.descKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseBailout;
