import { BackgroundLayer } from "@/components/core/background-layer/background-layer";
import { Navbar } from "@/components/core/navbar/navbar";

export default function Home() {
  return (
    <div className="bg-secondary relative isolate h-full min-h-screen transition-colors duration-500">
      <BackgroundLayer />
      <Navbar />
    </div>
  );
}
