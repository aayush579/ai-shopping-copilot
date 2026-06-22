import { currentUser } from "@clerk/nextjs/server";
import { UserButton } from "@clerk/nextjs";

export default async function DashboardPage() {
  const user = await currentUser();

  return (
    <main className="flex-1 bg-zinc-50 dark:bg-zinc-950 p-6 md:p-12">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-zinc-200 dark:border-zinc-800 pb-6">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50">
              Welcome back, {user?.firstName || "Shopper"}!
            </h1>
            <p className="text-zinc-500 dark:text-zinc-400 mt-1">
              Here is what's happening with your AI shopping assistant today.
            </p>
          </div>
          <div className="flex items-center gap-3 bg-white dark:bg-zinc-900 p-2 rounded-xl shadow-sm border border-zinc-200 dark:border-zinc-800">
            <span className="text-sm font-medium px-2 text-zinc-700 dark:text-zinc-300">
              {user?.emailAddresses[0]?.emailAddress}
            </span>
            <UserButton />
          </div>
        </div>

        {/* Dynamic content cards / placeholders */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">Saved Searches</h3>
            <p className="text-3xl font-bold tracking-tight text-indigo-600 dark:text-indigo-400 mt-2">12</p>
            <p className="text-xs text-zinc-400 mt-1">3 updated in the last 24h</p>
          </div>
          <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">Deal Alerts</h3>
            <p className="text-3xl font-bold tracking-tight text-emerald-600 dark:text-emerald-400 mt-2">4</p>
            <p className="text-xs text-zinc-400 mt-1">Active price-drop tracking</p>
          </div>
          <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">Copilot Recommendations</h3>
            <p className="text-3xl font-bold tracking-tight text-purple-600 dark:text-purple-400 mt-2">8</p>
            <p className="text-xs text-zinc-400 mt-1">Curated products ready</p>
          </div>
        </div>

        {/* Placeholder for primary dashboard interactive component */}
        <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 dark:from-zinc-900 dark:to-black text-zinc-100 p-8 rounded-2xl border border-zinc-850 shadow-lg relative overflow-hidden">
          <div className="relative z-10 max-w-lg space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-indigo-400">
              Copilot Active
            </span>
            <h2 className="text-2xl font-bold tracking-tight">
              Start a new personalized shopping query
            </h2>
            <p className="text-zinc-400 text-sm">
              Describe what you are looking for, your budget, and preferences. Our AI Copilot will scour matches across the web.
            </p>
            <button className="bg-white text-zinc-950 font-semibold text-sm px-5 py-2.5 rounded-xl hover:bg-zinc-100 transition-colors shadow-sm">
              Ask Copilot
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
