import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { QRCodeSVG } from "qrcode.react";
import { Copy, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import logo from "@/assets/logo.png";

const chains = [
  {
    id: "eth",
    name: "Ethereum",
    symbol: "ETH",
    icon: "⟠",
    address: "0x89033a781DCbf67446B895712050087c1FEE4ba4",
    color: "from-[hsl(220,80%,55%)] to-[hsl(260,80%,60%)]",
  },
  {
    id: "sol",
    name: "Solana",
    symbol: "SOL",
    icon: "◎",
    address: "2sgKv5zUEUakQbW1YSyyjCEVh4up6qiLPiqGHFZjjopn",
    color: "from-[hsl(280,80%,55%)] to-[hsl(170,80%,50%)]",
  },
  {
    id: "bnb",
    name: "BNB Chain",
    symbol: "BNB",
    icon: "◆",
    address: "0xDd3e57aC4a34633E83496631e0f5489f72A954b9",
    color: "from-[hsl(40,90%,50%)] to-[hsl(30,90%,45%)]",
  },
];

const PaymentPage = () => {
  const [selectedChain, setSelectedChain] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();
  const location = useLocation();
  const price = (location.state as any)?.price || 269.10;

  const selected = chains.find((c) => c.id === selectedChain);

  const copyAddress = () => {
    if (!selected) return;
    navigator.clipboard.writeText(selected.address);
    setCopied(true);
    toast({ title: "Address copied!", description: "Wallet address copied to clipboard." });
    setTimeout(() => setCopied(false), 2000);
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

      <div className="container mx-auto px-6 py-16 max-w-2xl text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Complete Payment</h1>
          <p className="text-muted-foreground mb-2">Select a blockchain to pay with</p>
          <p className="text-2xl font-bold text-primary mb-10">${price}.00 USD</p>
        </motion.div>

        {/* Chain selection */}
        <div className="grid grid-cols-3 gap-4 mb-10">
          {chains.map((chain) => (
            <motion.button
              key={chain.id}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setSelectedChain(chain.id)}
              className={`glass rounded-xl p-5 text-center transition-all cursor-pointer ${
                selectedChain === chain.id
                  ? "ring-2 ring-primary shadow-glow"
                  : "hover:border-muted-foreground/30"
              }`}
            >
              <div className={`text-3xl mb-2 bg-gradient-to-br ${chain.color} bg-clip-text text-transparent font-bold`}>
                {chain.icon}
              </div>
              <p className="text-foreground font-semibold text-sm">{chain.name}</p>
              <p className="text-muted-foreground text-xs">{chain.symbol}</p>
            </motion.button>
          ))}
        </div>

        {/* QR Code & Address */}
        <AnimatePresence mode="wait">
          {selected && (
            <motion.div
              key={selected.id}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="glass rounded-2xl p-8 max-w-md mx-auto"
            >
              <p className="text-muted-foreground text-sm mb-4">
                Send exactly <span className="text-primary font-semibold">${price}.00</span> worth of{" "}
                <span className="text-foreground font-semibold">{selected.symbol}</span> to:
              </p>

              <div className="bg-foreground rounded-xl p-4 inline-block mb-6">
                <QRCodeSVG
                  value={selected.address}
                  size={180}
                  bgColor="hsl(210, 20%, 92%)"
                  fgColor="hsl(220, 20%, 7%)"
                  level="H"
                />
              </div>

              <div className="bg-secondary rounded-lg p-3 flex items-center gap-2 mb-4">
                <code className="text-xs text-foreground flex-1 break-all text-left">
                  {selected.address}
                </code>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={copyAddress}
                  className="shrink-0 text-primary hover:text-primary/80 hover:bg-primary/10"
                >
                  {copied ? <CheckCircle2 className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                </Button>
              </div>

              <p className="text-muted-foreground text-xs">
                After sending payment, please allow up to <span className="text-foreground font-semibold">10 minutes</span> for confirmation and payment verification.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {!selected && (
          <p className="text-muted-foreground text-sm animate-pulse-glow">
            ↑ Select a chain above to see payment details
          </p>
        )}

        <div className="mt-12 glass rounded-xl p-6 max-w-md mx-auto space-y-3">
          <p className="text-muted-foreground text-sm">
            💬 Need help? <a href="https://t.me/DexMarketPlaceSupport" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">Contact Support on Telegram</a>
          </p>
          <p className="text-muted-foreground text-sm">
            🤖 Prefer to pay via Telegram? <a href="https://t.me/DEXScreener_MarketplaceBot" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">Use our Telegram Bot</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
