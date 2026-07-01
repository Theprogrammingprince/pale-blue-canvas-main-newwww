import { ArrowRight, TrendingUp, Shield, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

interface HeroProps {
  onGetStarted: () => void;
}

const Hero = ({ onGetStarted }: HeroProps) => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-subtle-gradient pt-20">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent rounded-full text-accent-foreground text-sm font-medium mb-8 animate-fade-up">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            {t("hero.badge")}
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-foreground leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            {t("hero.title1")}{" "}
            <span className="text-gradient">{t("hero.titleHighlight")}</span> {t("hero.title2")}
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            {t("hero.subtitle")}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button size="lg" className="text-base px-8 py-6 shadow-blue hover:shadow-xl transition-all duration-300 group" onClick={onGetStarted}>
              {t("hero.cta1")}
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="text-base px-8 py-6" onClick={() => document.getElementById("why-choose-bailout")?.scrollIntoView({ behavior: "smooth" })}>
              {t("hero.cta2")}
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <div className="flex flex-col items-center p-6 bg-card rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mb-3">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <span className="text-3xl font-bold text-foreground">{t("hero.stat1Value")}</span>
              <span className="text-sm text-muted-foreground">{t("hero.stat1Label")}</span>
            </div>
            <div className="flex flex-col items-center p-6 bg-card rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mb-3">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <span className="text-3xl font-bold text-foreground">{t("hero.stat2Value")}</span>
              <span className="text-sm text-muted-foreground">{t("hero.stat2Label")}</span>
            </div>
            <div className="flex flex-col items-center p-6 bg-card rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mb-3">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <span className="text-3xl font-bold text-foreground">{t("hero.stat3Value")}</span>
              <span className="text-sm text-muted-foreground">{t("hero.stat3Label")}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
