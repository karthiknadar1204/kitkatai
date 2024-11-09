import { ShootingStars } from "@/components/ShootingStars";
import { StarsBackground } from "@/components/StarsBackground";
import { Button } from "@/components/ui/button";
import { auth } from "@clerk/nextjs";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function Home() {
  const { userId } = auth();

  if (userId) redirect("/notes");

  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white flex items-center overflow-hidden">
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="flex flex-col items-center justify-center space-y-6 sm:space-y-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            StickyNotesAI
          </h1>
          
          <p className="text-lg sm:text-xl text-center text-gray-300 max-w-2xl px-4">
            Transform your note-taking experience with the power of artificial intelligence
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-8 sm:mt-12 md:mt-16 w-full">
            <div className="bg-gray-900/50 p-4 sm:p-6 rounded-lg border border-gray-800 hover:border-white hover:bg-gray-800/50 hover:scale-105 transform transition-all duration-200">
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Smart Organization</h3>
              <p className="text-sm sm:text-base text-gray-400">Leverage OpenAI's powerful algorithms to automatically organize and categorize your notes intelligently.</p>
            </div>

            <div className="bg-gray-900/50 p-4 sm:p-6 rounded-lg border border-gray-800 hover:border-white hover:bg-gray-800/50 hover:scale-105 transform transition-all duration-200">
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Secure Authentication</h3>
              <p className="text-sm sm:text-base text-gray-400">Your notes are protected with Clerk's enterprise-grade authentication and user management system.</p>
            </div>

            <div className="bg-gray-900/50 p-4 sm:p-6 rounded-lg border border-gray-800 hover:border-white hover:bg-gray-800/50 hover:scale-105 transform transition-all duration-200">
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Vector Search</h3>
              <p className="text-sm sm:text-base text-gray-400">Find related notes instantly with Pinecone's vector database powering semantic search capabilities.</p>
            </div>
          </div>

          <div className="mt-8 sm:mt-12 space-y-3 sm:space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-center">Built with Modern Tech Stack</h2>
            <p className="text-sm sm:text-base text-center text-gray-400">
              Next.js • OpenAI • Pinecone • Clerk • ShadcnUI • TailwindCSS • Aceternity UI
            </p>
          </div>

          <Button 
            size="lg" 
            className="mt-8 sm:mt-12 bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-base sm:text-lg px-6 sm:px-8 font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
            asChild
          >
            <Link href="/notes">Get Started</Link>
          </Button>
          <div className="absolute inset-0 pointer-events-none">
            <ShootingStars />
            <StarsBackground />
          </div>
        </div>
      </div>
    </main>
  );
}
