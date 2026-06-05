import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Ticker } from "@/components/Ticker";
import { TwoDoors } from "@/components/TwoDoors";
import { Shop } from "@/components/Shop";
import { Finishes } from "@/components/Finishes";
import { Colorways } from "@/components/Colorways";
import { Drops } from "@/components/Drops";
import { Visualizer } from "@/components/Visualizer";
import { Bench } from "@/components/Bench";
import { Start } from "@/components/Start";
import { Footer } from "@/components/Footer";
import { BuildProvider } from "@/components/BuildProvider";

export default function Home() {
  return (
    <BuildProvider>
      <Nav />
      <main>
        <Hero />
        <Ticker />
        <TwoDoors />
        <Shop />
        <Finishes />
        <Colorways />
        <Drops />
        <Visualizer />
        <Bench />
        <Start />
      </main>
      <Footer />
    </BuildProvider>
  );
}
