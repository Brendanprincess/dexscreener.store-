import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import { motion } from "framer-motion";
import { Shield, Users, BarChart3, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  { num: "1", title: "Set token info", desc: "Fill out the form in under a minute" },
  { num: "2", title: "Pay", desc: "All major cryptocurrencies accepted" },
  { num: "3", title: "Wait for processing", desc: "Most orders processed within minutes" },
];

const features = [
  { icon: Users, title: "Stand out from the crowd", desc: "Your project's logo and socials displayed front and center, so traders can easily spot and interact with it!" },
  { icon: Shield, title: "Credibility", desc: "Show your project's commitment to transparency and trust. Inform potential token holders of the project's vision, team and roadmap." },
  { icon: Users, title: "Community Engagement", desc: "Boost social engagement and help bring token holders together to connect and collaborate for shared success." },
  { icon: BarChart3, title: "Accurate Market Cap", desc: "Set wallets holding locked supply and ensure your token's market cap is always displayed correctly." },
];

const TokenInfoPage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <nav className="border-b border-border/50 px-6 py-4">
        <div className="container mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="DEX Screener" className="h-8 w-8 rounded-lg" />
            <span className="font-semibold text-foreground">DEX Screener</span>
            <span className="text-muted-foreground text-sm">Marketplace</span>
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <div className="bg-hero-gradient">
        <div className="container mx-auto px-6 py-16 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <p className="text-muted-foreground text-sm mb-3">
              <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-primary">Enhanced Token Info</span>
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">Enhanced Token Info</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">
              Quickly update your DEX Screener token page with accurate and up-to-date info and socials
            </p>
            <Link to="/order">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8 py-6 rounded-xl shadow-glow">
                Order Now - from <span className="line-through opacity-60 mx-1">$299.00</span> $269.10 <span className="text-xs opacity-80">(-10%)</span>
              </Button>
            </Link>
            <div className="flex items-center justify-center gap-3 mt-4 text-muted-foreground text-sm">
              <span>Pay with crypto</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Description */}
      <div className="container mx-auto px-6 py-16 text-center">
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Update your token info with DEX Screener directly to{" "}
          <strong className="text-foreground">grow your community</strong> and{" "}
          <strong className="text-foreground">stand out from the crowd</strong>!
        </p>
      </div>

      {/* Features */}
      <div className="container mx-auto px-6 pb-16">
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 + 0.2 }}
              className="glass rounded-xl p-6"
            >
              <f.icon className="h-8 w-8 text-primary mb-3" />
              <h3 className="text-foreground font-semibold text-lg mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-sm">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* How it works */}
      <div className="container mx-auto px-6 pb-20">
        <h2 className="text-3xl font-bold text-foreground text-center mb-12">How does it work?</h2>
        <div className="flex flex-col md:flex-row items-start justify-center gap-6 max-w-3xl mx-auto">
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 + 0.3 }}
              className="flex-1 text-center"
            >
              <div className="h-12 w-12 rounded-full bg-primary/20 text-primary font-bold text-xl flex items-center justify-center mx-auto mb-3">
                {s.num}
              </div>
              <h4 className="text-foreground font-semibold mb-1">{s.title}</h4>
              <p className="text-muted-foreground text-sm">{s.desc}</p>
              {i < steps.length - 1 && <ArrowRight className="h-5 w-5 text-muted-foreground mx-auto mt-4 hidden md:block rotate-0" />}
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75 }}
            className="flex-1 text-center"
          >
            <CheckCircle2 className="h-12 w-12 text-primary mx-auto mb-3" />
            <h4 className="text-foreground font-semibold mb-1">Done!</h4>
            <p className="text-muted-foreground text-sm">Your token info is live!</p>
          </motion.div>
        </div>

        <div className="text-center mt-12">
          <Link to="/order">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8 py-6 rounded-xl shadow-glow">
              Order Now - from <span className="line-through opacity-60 mx-1">$299.00</span> $269.10 <span className="text-xs opacity-80">(-10%)</span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TokenInfoPage;
