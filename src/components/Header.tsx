import { useState } from "react";
import { Menu, X, ChevronDown, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage, type Language } from "@/contexts/LanguageContext";
import AuthModal from "@/components/AuthModal";

const languages = [
  { code: "en" as Language, name: "English" },
  { code: "yo" as Language, name: "Yoruba" },
  { code: "ha" as Language, name: "Hausa" },
  { code: "ig" as Language, name: "Igbo" },
  { code: "pcm" as Language, name: "Pidgin" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLangDropdown, setShowLangDropdown] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const { lang, setLang, t } = useLanguage();

  const navLinks = [
    { href: "#about", label: t("nav.about") },
    { href: "#solution", label: t("nav.solution") },
    { href: "#features", label: t("nav.features") },
    { href: "#team", label: t("nav.team") },
    { href: "#help", label: t("nav.help") },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#" className="flex items-center gap-2">
            <img src="/sitelogo.png" alt="Bailout" className="h-16 w-auto max-w-[180px] sm:h-20 md:h-24" />
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <div className="relative hidden md:block">
              <button
                onClick={() => setShowLangDropdown(!showLangDropdown)}
                className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {languages.find((l) => l.code === lang)?.name}
                <ChevronDown className="w-4 h-4" />
              </button>
              {showLangDropdown && (
                <div className="absolute top-full right-0 mt-2 bg-card border border-border rounded-lg shadow-lg py-2 min-w-[120px] animate-fade-in">
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => {
                        setLang(l.code);
                        setShowLangDropdown(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-sm hover:bg-accent transition-colors ${
                        lang === l.code ? "text-primary font-medium" : "text-foreground"
                      }`}
                    >
                      {l.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <Button className="hidden md:inline-flex" onClick={() => setShowAuthModal(true)}>{t("nav.getStarted")}</Button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-foreground hover:bg-accent rounded-lg transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden border-t border-border py-4 animate-fade-in">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="px-4 py-3 text-base font-medium text-foreground hover:bg-accent rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="px-4 py-3 border-t border-border mt-2">
                <select
                  value={lang}
                  onChange={(e) => setLang(e.target.value as Language)}
                  className="w-full p-2 bg-secondary rounded-lg text-sm"
                >
                  {languages.map((l) => (
                    <option key={l.code} value={l.code}>
                      {l.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="px-4 pt-2">
                <Button className="w-full" onClick={() => { setIsMenuOpen(false); setShowAuthModal(true); }}>{t("nav.getStarted")}</Button>
              </div>
            </nav>
          </div>
        )}
      </div>
      {showAuthModal && <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} />}
    </header>
  );
};

export default Header;
