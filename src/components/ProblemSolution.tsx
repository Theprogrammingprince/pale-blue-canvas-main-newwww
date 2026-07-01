import { AlertTriangle, CheckCircle2, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface ProblemSolutionProps {
  onGetStarted: () => void;
}

const ProblemSolution = ({ onGetStarted }: ProblemSolutionProps) => {
  const { t } = useLanguage();

  const problems = [t("ps.p1"), t("ps.p2"), t("ps.p3"), t("ps.p4")];
  const solutions = [t("ps.s1"), t("ps.s2"), t("ps.s3"), t("ps.s4")];

  return (
    <section id="solution" className="py-20 md:py-32 bg-subtle-gradient">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="relative">
            <div className="sticky top-32">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-destructive/10 text-destructive text-sm font-medium rounded-full mb-6">
                <AlertTriangle className="w-4 h-4" />
                {t("ps.problemTag")}
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-8">
                {t("ps.problemTitle")}
              </h2>
              <div className="space-y-4">
                {problems.map((problem, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border">
                    <div className="w-8 h-8 bg-destructive/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-destructive font-semibold">{index + 1}</span>
                    </div>
                    <p className="text-foreground leading-relaxed">{problem}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent text-primary text-sm font-medium rounded-full mb-6">
              <CheckCircle2 className="w-4 h-4" />
              {t("ps.solutionTag")}
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              {t("ps.solutionTitle")}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">{t("ps.solutionDesc")}</p>
            <div className="space-y-4 mb-8">
              {solutions.map((solution, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border hover:border-primary/30 transition-colors">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-foreground leading-relaxed">{solution}</p>
                </div>
              ))}
            </div>

            <div className="p-6 bg-hero-gradient rounded-2xl text-primary-foreground">
              <h3 className="text-xl font-semibold mb-2">{t("ps.ctaTitle")}</h3>
              <p className="text-primary-foreground/80 mb-4">{t("ps.ctaDesc")}</p>
              <button onClick={onGetStarted} className="inline-flex items-center gap-2 px-6 py-3 bg-background text-foreground font-medium rounded-xl hover:bg-background/90 transition-colors">
                {t("ps.ctaButton")}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
