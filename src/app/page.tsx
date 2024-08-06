import TabAuth from "@/components/tabs-auth"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="max-w-96 w-full space-y-6">
        <div className="text-center">
          <h1 className="font-semibold text-2xl">Log in to your account</h1>
          <p className="mt-2">Welcome back! Please enter your details.</p>
        </div>

        <TabAuth/>
      </div>
    </main>
  );
}
