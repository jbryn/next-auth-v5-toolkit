import { Poppins } from "next/font/google";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

export default function Home() {
  return (
    <main className="flex flex-col h-full items-center justify-center bg-sky-500">
      <div className={cn("space-y-6 text-center", font.className)}>
        <h1 className="text-6xl font-semibold text-white drop-shadow-md">
          🔐 Auth
        </h1>
        <p className="text-white text-lg">A simple auth service</p>
        <div>
          <Button variant="secondary" size="lg">
            Sign in
          </Button>
        </div>
      </div>
    </main>
  );
}
