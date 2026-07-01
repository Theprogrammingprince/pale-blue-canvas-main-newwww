import { useLanguage } from "@/contexts/LanguageContext";

const Team = () => {
  const { t } = useLanguage();

  const teamMembers = [
    { name: "Jeremiah Michael", roleKey: "team.jmRole", descKey: "team.jmDesc", initials: "JM" },
    { name: "Ismail Abdulmumuni", roleKey: "team.iaRole", descKey: "team.iaDesc", initials: "IA" },
    { name: "Segun Orebanjo", roleKey: "team.soRole", descKey: "team.soDesc", initials: "SO" },
    { name: "Abbah Mohammed", roleKey: "team.amRole", descKey: "team.amDesc", initials: "AM" },
  ];

  return (
    <section id="team" className="py-20 md:py-32 bg-subtle-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-accent text-accent-foreground text-sm font-medium rounded-full mb-4">
            {t("team.tag")}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            {t("team.title1")}{" "}
            <span className="text-gradient">{t("team.titleHighlight")}</span>
          </h2>
          <p className="text-lg text-muted-foreground">{t("team.subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="group bg-card rounded-2xl border border-border p-6 text-center hover:shadow-xl hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-24 h-24 bg-hero-gradient rounded-full flex items-center justify-center mx-auto mb-5 group-hover:scale-105 transition-transform duration-300">
                <span className="text-2xl font-bold text-primary-foreground">{member.initials}</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-1">{member.name}</h3>
              <p className="text-primary font-medium text-sm mb-3">{t(member.roleKey)}</p>
              <p className="text-muted-foreground text-sm leading-relaxed">{t(member.descKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
