import { Mail, Phone, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import bailoutLogo from "@/assets/bailout-logo.jpg";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer id="help" className="bg-foreground text-background pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12">
          <div className="lg:col-span-1">
            <img src="/sitelogo.png" alt="Bailout" className="h-22 w-auto max-w-[180px] sm:h-20 md:h-24" />
            <p className="text-background/70 text-sm leading-relaxed mb-6">{t("footer.desc")}</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{t("footer.quickLinks")}</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-background/70 hover:text-background transition-colors">{t("footer.aboutUs")}</a></li>
              <li><a href="#solution" className="text-background/70 hover:text-background transition-colors">{t("footer.solution")}</a></li>
              <li><a href="#features" className="text-background/70 hover:text-background transition-colors">{t("footer.features")}</a></li>
              <li><a href="#team" className="text-background/70 hover:text-background transition-colors">{t("footer.ourTeam")}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{t("footer.forUsers")}</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">{t("footer.borrowers")}</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">{t("footer.lenders")}</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">{t("footer.grantProviders")}</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">{t("footer.institutions")}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{t("footer.contactUs")}</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary mt-0.5" />
                <a href="mailto:bailoutapp24@gmail.com" className="text-background/70 hover:text-background transition-colors">bailoutapp24@gmail.com</a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary mt-0.5" />
                <a href="tel:+2348144955862" className="text-background/70 hover:text-background transition-colors">0814 495 5862</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5" />
                <span className="text-background/70">Abuja, Nigeria</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-background/50 text-sm">{t("footer.copyright")}</p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-background/50 hover:text-background text-sm transition-colors">{t("footer.privacy")}</a>
              <a href="#" className="text-background/50 hover:text-background text-sm transition-colors">{t("footer.terms")}</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
