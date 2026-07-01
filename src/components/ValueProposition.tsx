import { Sparkles, Clock, Bell, ShieldCheck, TrendingDown, BarChart } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ValueProposition = () => {
  const { t } = useLanguage();

  const borrowerBenefits = [
    { icon: Sparkles, titleKey: "vp.b1Title", descKey: "vp.b1Desc" },
    { icon: Clock, titleKey: "vp.b2Title", descKey: "vp.b2Desc" },
    { icon: Bell, titleKey: "vp.b3Title", descKey: "vp.b3Desc" },
  ];

  const lenderBenefits = [
    { icon: TrendingDown, titleKey: "vp.l1Title", descKey: "vp.l1Desc" },
    { icon: ShieldCheck, titleKey: "vp.l2Title", descKey: "vp.l2Desc" },
    { icon: BarChart, titleKey: "vp.l3Title", descKey: "vp.l3Desc" },
  ];

  return (
    <section className="py-20 md:py-32 bg-subtle-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-accent text-accent-foreground text-sm font-medium rounded-full mb-4">
            {t("vp.tag")}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            {t("vp.title1")}{" "}
            <span className="text-gradient">{t("vp.titleHighlight")}</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="bg-card rounded-3xl border border-border p-8 lg:p-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent rounded-full text-accent-foreground text-sm font-medium mb-6">
              {t("vp.borrowerTag")}
            </div>
            <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-8">
              {t("vp.borrowerTitle")}
            </h3>
            <div className="space-y-6">
              {borrowerBenefits.map((benefit) => (
                <div key={benefit.titleKey} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-1">{t(benefit.titleKey)}</h4>
                    <p className="text-muted-foreground">{t(benefit.descKey)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-hero-gradient rounded-3xl p-8 lg:p-10 text-primary-foreground">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-background/20 rounded-full text-primary-foreground text-sm font-medium mb-6">
              {t("vp.lenderTag")}
            </div>
            <h3 className="text-2xl md:text-3xl font-display font-bold mb-8">
              {t("vp.lenderTitle")}
            </h3>
            <div className="space-y-6">
              {lenderBenefits.map((benefit) => (
                <div key={benefit.titleKey} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-background/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">{t(benefit.titleKey)}</h4>
                    <p className="text-primary-foreground/80">{t(benefit.descKey)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
