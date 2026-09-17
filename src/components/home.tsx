"use client";

import { Navigation } from "@/components/layout/navigation";
import { Profile } from "@/components/layout/profile";

interface HomeProps {
  iconStyles: string;
}

export function Home({ iconStyles }: HomeProps) {
  return (
    <div className="relative flex flex-1 flex-col w-full text-[#121212] dark:text-[#f0f0f0] overflow-hidden">
      <style>{iconStyles}</style>

      <Navigation />

      <main className="relative z-10 flex-1 px-4 sm:px-6 md:px-8 w-full md:w-4/5 lg:w-3/4 xl:w-2/3 mx-auto flex flex-col">
        <Profile />
      </main>
    </div>
  );
}
