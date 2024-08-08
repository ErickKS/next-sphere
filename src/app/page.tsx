import Image from "next/image"

import { TabAuth } from "@/components/tabs-auth"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-black">
      <div className="max-w-96 w-full space-y-6">
        <Image src={"/logo-64.png"} width={64} height={64} alt="logo" className="mx-auto"/>

        <div className="text-center">
          <h1 className="font-semibold text-3xl bg-gradient-to-r from-zinc-100 via-zinc-300 to-zinc-300 inline-block text-transparent bg-clip-text">Welcome to Sphere</h1>
          <p className="mt-2">Please enter your details.</p>
        </div>

        <TabAuth/>
      </div>
    </main>
  );
}
