import { Rocket, Flag, Handshake, Search, BarChart3, Shield } from "lucide-react";

const features = [
  {
    icon: Rocket,
    title: "Fast Funding Process",
    description:
      "Bailout simplifies the funding journey by removing unnecessary delays and complicated procedures that businesses often face when seeking financial support. Our streamlined application process allows businesses to submit their information quickly and get matched with relevant funding opportunities without going through multiple platforms. By reducing paperwork, automating verification steps, and providing clear guidance at every stage, we help businesses access funding faster so they can focus on growth, operations, and innovation rather than administrative stress.",
  },
  {
    icon: Flag,
    title: "Built for Nigerian MSMEs",
    description:
      "Bailout is specifically designed to support Nigerian entrepreneurs, startups, and small to medium-scale businesses. We understand the unique challenges businesses face in Nigeria, including limited access to capital, complex funding requirements, and lack of reliable information. Our platform provides solutions tailored to the local business environment, helping entrepreneurs access opportunities that align with their realities while promoting financial inclusion and sustainable economic growth.",
  },
  {
    icon: Handshake,
    title: "Trusted Funding Partners",
    description:
      "We collaborate with verified financial institutions, grant providers, and funding organizations to ensure that every opportunity listed on our platform is legitimate and reliable. Our verification process helps protect users from fraudulent schemes while providing access to credible funding sources. By partnering with trusted institutions, we create a secure ecosystem where businesses can confidently explore funding opportunities and build long-term financial relationships.",
  },
  {
    icon: Search,
    title: "Transparent & No Hidden Fees",
    description:
      "Transparency is at the core of our platform. Bailout provides clear information about eligibility requirements, funding terms, application processes, and any associated costs before you apply. We eliminate hidden charges and misleading information so businesses can make informed financial decisions. Our goal is to build trust by ensuring users understand every step of the funding process from application to approval.",
  },
  {
    icon: BarChart3,
    title: "Smart Funding Match",
    description:
      "Our intelligent matching system connects businesses with funding opportunities that best suit their profile, industry, and financial needs. Instead of applying to multiple programs blindly, businesses receive personalized recommendations that increase their chances of approval. This data-driven approach saves time, reduces rejection rates, and helps businesses access funding that aligns with their goals and growth plans.",
  },
  {
    icon: Shield,
    title: "Secure & Protected Platform",
    description:
      "We prioritize the security and privacy of your business information by implementing strong data protection measures and secure verification systems. All information shared on Bailout is handled with strict confidentiality and protected against unauthorized access. Our platform is built to provide a safe and reliable environment where businesses can apply for funding with confidence.",
  },
];

const WhyChooseBailout = () => {
  return (
    <section id="why-choose-bailout" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 bg-accent text-accent-foreground text-sm font-medium rounded-full mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground">
            Why Choose <span className="text-gradient">Bailout</span>
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
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseBailout;
