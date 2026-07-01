import { Target, Eye } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const MissionVision = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative p-8 lg:p-10 bg-card rounded-3xl border border-border overflow-hidden group hover:shadow-lg transition-shadow">
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="relative">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">{t("mv.missionTitle")}</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">{t("mv.missionDesc")}</p>
              </div>
            </div>

            <div className="relative p-8 lg:p-10 bg-hero-gradient rounded-3xl overflow-hidden group">
              <div className="absolute top-0 right-0 w-40 h-40 bg-background/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="relative text-primary-foreground">
                <div className="w-16 h-16 bg-background/20 rounded-2xl flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">{t("mv.visionTitle")}</h3>
                <p className="text-lg text-primary-foreground/90 leading-relaxed">{t("mv.visionDesc")}</p>
              </div>
            </div>
          </div>

          <div className="mt-12 p-8 lg:p-10 bg-subtle-gradient rounded-3xl border border-border">
            <h3 className="text-xl font-display font-bold text-foreground mb-6 text-center">{t("mv.longTermTitle")}</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🇳🇬</span>
                </div>
                <p className="text-foreground font-medium">{t("mv.lt1")}</p>
              </div>
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌉</span>
                </div>
                <p className="text-foreground font-medium">{t("mv.lt2")}</p>
              </div>
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📊</span>
                </div>
                <p className="text-foreground font-medium">{t("mv.lt3")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
