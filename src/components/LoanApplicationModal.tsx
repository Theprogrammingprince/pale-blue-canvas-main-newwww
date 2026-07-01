import { useState } from "react";
import { X, Loader2, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface LoanApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoanApplicationModal = ({ isOpen, onClose }: LoanApplicationModalProps) => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    // Step 1 – Personal Info
    fullName: "",
    email: "",
    phone: "",
    bvn: "",
    // Step 2 – Business Info
    businessName: "",
    cacNumber: "",
    businessType: "",
    sector: "",
    yearsInOperation: "",
    numberOfEmployees: "",
    // Step 3 – Financial Info
    monthlyRevenue: "",
    loanAmount: "",
    loanPurpose: "",
    existingLoans: "",
    collateral: "",
  });

  if (!isOpen) return null;

  const set = (field: string, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = async () => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  const handleClose = () => {
    setStep(1);
    setSubmitted(false);
    setForm({
      fullName: "", email: "", phone: "", bvn: "",
      businessName: "", cacNumber: "", businessType: "", sector: "",
      yearsInOperation: "", numberOfEmployees: "",
      monthlyRevenue: "", loanAmount: "", loanPurpose: "",
      existingLoans: "", collateral: "",
    });
    onClose();
  };

  const sectorOptions = [
    "Agriculture", "Food & Beverages", "Fashion & Textiles", "Technology",
    "Healthcare", "Education", "Retail & Trade", "Manufacturing",
    "Transportation & Logistics", "Construction", "Services", "Other",
  ];

  const businessTypes = ["Sole Proprietorship", "Partnership", "Limited Liability Company (LLC)", "Cooperative"];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={handleClose} />

      <div className="relative w-full max-w-2xl bg-card border border-border rounded-2xl shadow-2xl animate-fade-in max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border flex-shrink-0">
          <div>
            <h2 className="text-xl font-bold text-foreground">Loan / Grant Application</h2>
            {!submitted && <p className="text-sm text-muted-foreground mt-0.5">Step {step} of 3</p>}
          </div>
          <button onClick={handleClose} className="p-2 text-muted-foreground hover:text-foreground hover:bg-accent rounded-lg transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress bar */}
        {!submitted && (
          <div className="px-6 pt-4 flex-shrink-0">
            <div className="flex gap-2">
              {[1, 2, 3].map((s) => (
                <div key={s} className={`h-1.5 flex-1 rounded-full transition-colors duration-300 ${s <= step ? "bg-primary" : "bg-muted"}`} />
              ))}
            </div>
            <div className="flex justify-between mt-1.5 text-xs text-muted-foreground">
              <span>Personal Info</span>
              <span>Business Info</span>
              <span>Financial Info</span>
            </div>
          </div>
        )}

        {/* Body */}
        <div className="overflow-y-auto flex-1 p-6">
          {submitted ? (
            <div className="flex flex-col items-center justify-center py-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <CheckCircle2 className="w-9 h-9 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Application Submitted!</h3>
              <p className="text-muted-foreground max-w-sm">
                Thank you, <strong>{form.fullName}</strong>! We've received your application and will review it within 2–3 business days. You'll get an update at <strong>{form.email}</strong>.
              </p>
              <Button className="mt-8" onClick={handleClose}>Close</Button>
            </div>
          ) : step === 1 ? (
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground mb-4">Personal Information</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Full Name *</label>
                  <Input value={form.fullName} onChange={(e) => set("fullName", e.target.value)} placeholder="e.g. Amara Okonkwo" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Email Address *</label>
                  <Input type="email" value={form.email} onChange={(e) => set("email", e.target.value)} placeholder="your@email.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Phone Number *</label>
                  <Input value={form.phone} onChange={(e) => set("phone", e.target.value)} placeholder="e.g. 08012345678" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">BVN</label>
                  <Input value={form.bvn} onChange={(e) => set("bvn", e.target.value)} placeholder="11-digit BVN" maxLength={11} />
                </div>
              </div>
            </div>
          ) : step === 2 ? (
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground mb-4">Business Information</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Business Name *</label>
                  <Input value={form.businessName} onChange={(e) => set("businessName", e.target.value)} placeholder="e.g. Amara Foods Ltd" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">CAC Number</label>
                  <Input value={form.cacNumber} onChange={(e) => set("cacNumber", e.target.value)} placeholder="e.g. RC1234567" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Business Type *</label>
                  <select
                    value={form.businessType}
                    onChange={(e) => set("businessType", e.target.value)}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <option value="">Select type</option>
                    {businessTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Sector *</label>
                  <select
                    value={form.sector}
                    onChange={(e) => set("sector", e.target.value)}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <option value="">Select sector</option>
                    {sectorOptions.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Years in Operation *</label>
                  <select
                    value={form.yearsInOperation}
                    onChange={(e) => set("yearsInOperation", e.target.value)}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <option value="">Select</option>
                    <option value="less than 1">Less than 1 year</option>
                    <option value="1-2">1–2 years</option>
                    <option value="3-5">3–5 years</option>
                    <option value="6-10">6–10 years</option>
                    <option value="10+">10+ years</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Number of Employees</label>
                  <select
                    value={form.numberOfEmployees}
                    onChange={(e) => set("numberOfEmployees", e.target.value)}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <option value="">Select</option>
                    <option value="1-5">1–5</option>
                    <option value="6-10">6–10</option>
                    <option value="11-50">11–50</option>
                    <option value="51-200">51–200</option>
                    <option value="200+">200+</option>
                  </select>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground mb-4">Financial Information</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Average Monthly Revenue (₦) *</label>
                  <Input value={form.monthlyRevenue} onChange={(e) => set("monthlyRevenue", e.target.value)} placeholder="e.g. 500,000" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Loan Amount Requested (₦) *</label>
                  <Input value={form.loanAmount} onChange={(e) => set("loanAmount", e.target.value)} placeholder="e.g. 2,000,000" />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-foreground mb-1">Purpose of Loan *</label>
                  <textarea
                    value={form.loanPurpose}
                    onChange={(e) => set("loanPurpose", e.target.value)}
                    placeholder="Briefly describe how you plan to use the funds..."
                    rows={3}
                    className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring resize-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Existing Loans?</label>
                  <select
                    value={form.existingLoans}
                    onChange={(e) => set("existingLoans", e.target.value)}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <option value="">Select</option>
                    <option value="none">No existing loans</option>
                    <option value="yes-current">Yes, currently repaying</option>
                    <option value="yes-completed">Yes, fully repaid</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Collateral Available?</label>
                  <select
                    value={form.collateral}
                    onChange={(e) => set("collateral", e.target.value)}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <option value="">Select</option>
                    <option value="none">No collateral</option>
                    <option value="property">Property / Land</option>
                    <option value="vehicle">Vehicle</option>
                    <option value="equipment">Business Equipment</option>
                    <option value="other">Other assets</option>
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        {!submitted && (
          <div className="flex items-center justify-between p-6 border-t border-border flex-shrink-0">
            <Button variant="outline" onClick={() => step > 1 ? setStep(step - 1) : handleClose()} disabled={loading}>
              {step === 1 ? "Cancel" : "Back"}
            </Button>
            {step < 3 ? (
              <Button onClick={() => setStep(step + 1)}>Continue</Button>
            ) : (
              <Button onClick={handleSubmit} disabled={loading}>
                {loading && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
                Submit Application
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default LoanApplicationModal;
