import { Wallet, LineChart, Rocket, Lightbulb } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const WhatWeDo = () => {
  const { t } = useLanguage();

  const features = [
    { icon: Wallet, titleKey: "whatwedo.f1Title", descKey: "whatwedo.f1Desc" },
    { icon: LineChart, titleKey: "whatwedo.f2Title", descKey: "whatwedo.f2Desc" },
    { icon: Rocket, titleKey: "whatwedo.f3Title", descKey: "whatwedo.f3Desc" },
    { icon: Lightbulb, titleKey: "whatwedo.f4Title", descKey: "whatwedo.f4Desc" },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-accent text-accent-foreground text-sm font-medium rounded-full mb-4">
            {t("whatwedo.tag")}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            {t("whatwedo.title1")}{" "}
            <span className="text-gradient">{t("whatwedo.titleHighlight")}</span>
          </h2>
          <p className="text-lg text-muted-foreground">{t("whatwedo.subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.titleKey}
              className="group p-6 lg:p-8 bg-card rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 bg-accent group-hover:bg-primary/10 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{t(feature.titleKey)}</h3>
              <p className="text-muted-foreground leading-relaxed">{t(feature.descKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
