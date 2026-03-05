import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import logo from "@/assets/logo.png";

const OrderFormPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    tokenName: "",
    tokenSymbol: "",
    chain: "",
    contractAddress: "",
    website: "",
    twitter: "",
    telegram: "",
    discord: "",
    description: "",
    email: "",
  });

  const update = (key: string, value: string) => setForm((p) => ({ ...p, [key]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Pass order info to payment page
    navigate("/payment", { state: { order: form, price: 269.10 } });
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-border/50 px-6 py-4">
        <div className="container mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="DEX Screener" className="h-8 w-8 rounded-lg" />
            <span className="font-semibold text-foreground">DEX Screener</span>
            <span className="text-muted-foreground text-sm">Marketplace</span>
          </Link>
        </div>
      </nav>

      <div className="bg-hero-gradient">
        <div className="container mx-auto px-6 py-12 text-center">
          <p className="text-muted-foreground text-sm mb-3">
            <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/" className="hover:text-foreground transition-colors">Enhanced Token Info</Link>
            <span className="mx-2">/</span>
            <span className="text-primary">Order</span>
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground">Enhanced Token Info</h1>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12 max-w-2xl">
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          onSubmit={handleSubmit}
          className="glass rounded-2xl p-8 space-y-6"
        >
          <h2 className="text-xl font-semibold text-foreground mb-2">Token Information</h2>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="text-muted-foreground">Token Name *</Label>
              <Input required value={form.tokenName} onChange={(e) => update("tokenName", e.target.value)} placeholder="e.g. My Token" className="bg-secondary border-border" />
            </div>
            <div className="space-y-2">
              <Label className="text-muted-foreground">Token Symbol *</Label>
              <Input required value={form.tokenSymbol} onChange={(e) => update("tokenSymbol", e.target.value)} placeholder="e.g. MTK" className="bg-secondary border-border" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="text-muted-foreground">Chain *</Label>
              <Input required value={form.chain} onChange={(e) => update("chain", e.target.value)} placeholder="e.g. Ethereum, Solana, BSC" className="bg-secondary border-border" />
            </div>
            <div className="space-y-2">
              <Label className="text-muted-foreground">Contract Address *</Label>
              <Input required value={form.contractAddress} onChange={(e) => update("contractAddress", e.target.value)} placeholder="0x..." className="bg-secondary border-border" />
            </div>
          </div>

          <div className="border-t border-border pt-6">
            <h2 className="text-xl font-semibold text-foreground mb-4">Socials & Links</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-muted-foreground">Website</Label>
                <Input value={form.website} onChange={(e) => update("website", e.target.value)} placeholder="https://yourproject.com" className="bg-secondary border-border" />
              </div>
              <div className="space-y-2">
                <Label className="text-muted-foreground">Twitter / X</Label>
                <Input value={form.twitter} onChange={(e) => update("twitter", e.target.value)} placeholder="https://x.com/yourproject" className="bg-secondary border-border" />
              </div>
              <div className="space-y-2">
                <Label className="text-muted-foreground">Telegram</Label>
                <Input value={form.telegram} onChange={(e) => update("telegram", e.target.value)} placeholder="https://t.me/yourproject" className="bg-secondary border-border" />
              </div>
              <div className="space-y-2">
                <Label className="text-muted-foreground">Discord</Label>
                <Input value={form.discord} onChange={(e) => update("discord", e.target.value)} placeholder="https://discord.gg/yourproject" className="bg-secondary border-border" />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label className="text-muted-foreground">Description</Label>
            <Textarea value={form.description} onChange={(e) => update("description", e.target.value)} placeholder="Tell us about your project..." rows={4} className="bg-secondary border-border" />
          </div>

          <div className="border-t border-border pt-6">
            <div className="space-y-2">
              <Label className="text-muted-foreground">Contact Email *</Label>
              <Input required type="email" value={form.email} onChange={(e) => update("email", e.target.value)} placeholder="your@email.com" className="bg-secondary border-border" />
            </div>
          </div>

          <div className="flex items-center justify-between pt-4">
            <div>
              <p className="text-muted-foreground text-sm">Total</p>
              <p className="text-2xl font-bold text-foreground">$269.10 <span className="text-sm text-muted-foreground line-through">$299.00</span> <span className="text-xs text-primary font-semibold">10% OFF</span></p>
            </div>
            <Button type="submit" size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 rounded-xl shadow-glow">
              Order Now
            </Button>
          </div>
        </motion.form>
      </div>
    </div>
  );
};

export default OrderFormPage;
