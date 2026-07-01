import { User, Building2, Zap, BarChart3, CreditCard, Search } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Features = () => {
  const { t } = useLanguage();

  const features = [
    { icon: User, titleKey: "features.f1Title", descKey: "features.f1Desc", color: "bg-blue-500/10 text-blue-600" },
    { icon: Zap, titleKey: "features.f2Title", descKey: "features.f2Desc", color: "bg-emerald-500/10 text-emerald-600" },
    { icon: Search, titleKey: "features.f3Title", descKey: "features.f3Desc", color: "bg-purple-500/10 text-purple-600" },
    { icon: BarChart3, titleKey: "features.f4Title", descKey: "features.f4Desc", color: "bg-orange-500/10 text-orange-600" },
    { icon: CreditCard, titleKey: "features.f5Title", descKey: "features.f5Desc", color: "bg-pink-500/10 text-pink-600" },
    { icon: Building2, titleKey: "features.f6Title", descKey: "features.f6Desc", color: "bg-cyan-500/10 text-cyan-600" },
  ];

  return (
    <section id="features" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-accent text-accent-foreground text-sm font-medium rounded-full mb-4">
            {t("features.tag")}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            {t("features.title1")}{" "}
            <span className="text-gradient">{t("features.titleHighlight")}</span>
          </h2>
          <p className="text-lg text-muted-foreground">{t("features.subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature) => (
            <div
              key={feature.titleKey}
              className="group relative p-6 lg:p-8 bg-card rounded-2xl border border-border hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors" />
              <div className={`relative w-14 h-14 ${feature.color} rounded-xl flex items-center justify-center mb-5`}>
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="relative text-xl font-semibold text-foreground mb-3">{t(feature.titleKey)}</h3>
              <p className="relative text-muted-foreground leading-relaxed">{t(feature.descKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
