import { useState } from "react";
import { createPortal } from "react-dom";
import { X, Mail, Lock, User, Eye, EyeOff, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type AuthView = "login" | "signup" | "forgot";

const AuthModal = ({ isOpen, onClose }: AuthModalProps) => {
  const [view, setView] = useState<AuthView>("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: "error" | "success"; text: string } | null>(null);

  if (!isOpen) return null;

  const reset = () => {
    setEmail("");
    setPassword("");
    setFullName("");
    setMessage(null);
    setShowPassword(false);
  };

  const switchView = (v: AuthView) => {
    reset();
    setView(v);
  };

  const handleLogin = async () => {
    if (!email || !password) {
      setMessage({ type: "error", text: "Please enter your email and password." });
      return;
    }
    setLoading(true);
    setMessage(null);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (error) {
      setMessage({ type: "error", text: error.message });
    } else {
      onClose();
      reset();
    }
  };

  const handleSignup = async () => {
    if (!fullName.trim()) {
      setMessage({ type: "error", text: "Please enter your full name." });
      return;
    }
    if (!email) {
      setMessage({ type: "error", text: "Please enter your email." });
      return;
    }
    if (password.length < 6) {
      setMessage({ type: "error", text: "Password must be at least 6 characters." });
      return;
    }
    setLoading(true);
    setMessage(null);
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { full_name: fullName },
        emailRedirectTo: window.location.origin,
      },
    });
    setLoading(false);
    if (error) {
      setMessage({ type: "error", text: error.message });
    } else {
      setMessage({
        type: "success",
        text: "Account created! Check your email to verify your account before logging in.",
      });
    }
  };

  const handleForgotPassword = async () => {
    if (!email) {
      setMessage({ type: "error", text: "Please enter your email address." });
      return;
    }
    setLoading(true);
    setMessage(null);
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`,
    });
    setLoading(false);
    if (error) {
      setMessage({ type: "error", text: error.message });
    } else {
      setMessage({
        type: "success",
        text: "Password reset email sent! Check your inbox.",
      });
    }
  };

  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-md bg-card border border-border rounded-2xl shadow-2xl p-6 sm:p-8 animate-fade-in my-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-muted-foreground hover:text-foreground hover:bg-accent rounded-lg transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Logo / Title */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
            <User className="w-6 h-6 text-primary" />
          </div>
          <h2 className="text-2xl font-bold text-foreground">
            {view === "login" && "Welcome Back"}
            {view === "signup" && "Create Account"}
            {view === "forgot" && "Reset Password"}
          </h2>
          <p className="text-sm text-muted-foreground mt-1">
            {view === "login" && "Sign in to your Bailout account"}
            {view === "signup" && "Join thousands of Nigerian MSMEs"}
            {view === "forgot" && "We'll send you a reset link"}
          </p>
        </div>

        {/* Form */}
        <div className="space-y-4">
          {view === "signup" && (
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Full Name</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Your full name"
                  className="pl-10"
                  onKeyDown={(e) => e.key === "Enter" && handleSignup()}
                />
              </div>
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-foreground mb-1">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@email.com"
                className="pl-10"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    if (view === "login") handleLogin();
                    else if (view === "signup") handleSignup();
                    else handleForgotPassword();
                  }
                }}
              />
            </div>
          </div>

          {view !== "forgot" && (
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder={view === "signup" ? "At least 6 characters" : "Your password"}
                  className="pl-10 pr-10"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      if (view === "login") handleLogin();
                      else handleSignup();
                    }
                  }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>
          )}

          {view === "login" && (
            <div className="text-right">
              <button
                onClick={() => switchView("forgot")}
                className="text-sm text-primary hover:underline"
              >
                Forgot password?
              </button>
            </div>
          )}

          {/* Message */}
          {message && (
            <div
              className={`p-3 rounded-lg text-sm ${
                message.type === "error"
                  ? "bg-destructive/10 text-destructive border border-destructive/20"
                  : "bg-primary/10 text-primary border border-primary/20"
              }`}
            >
              {message.text}
            </div>
          )}

          {/* Submit */}
          <Button
            className="w-full"
            onClick={() => {
              if (view === "login") handleLogin();
              else if (view === "signup") handleSignup();
              else handleForgotPassword();
            }}
            disabled={loading}
          >
            {loading && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
            {view === "login" && "Sign In"}
            {view === "signup" && "Create Account"}
            {view === "forgot" && "Send Reset Email"}
          </Button>
        </div>

        {/* Footer links */}
        <div className="mt-6 text-center text-sm text-muted-foreground">
          {view === "login" ? (
            <>
              Don't have an account?{" "}
              <button onClick={() => switchView("signup")} className="text-primary font-medium hover:underline">
                Sign up
              </button>
            </>
          ) : view === "signup" ? (
            <>
              Already have an account?{" "}
              <button onClick={() => switchView("login")} className="text-primary font-medium hover:underline">
                Sign in
              </button>
            </>
          ) : (
            <>
              Remember your password?{" "}
              <button onClick={() => switchView("login")} className="text-primary font-medium hover:underline">
                Sign in
              </button>
            </>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
};

export default AuthModal;
