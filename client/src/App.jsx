import { useEffect, useState } from "react";
import { getHealthStatus } from "./services/api";

function App() {
  const [serverStatus, setServerStatus] = useState("checking");
  const [databaseStatus, setDatabaseStatus] = useState("checking");

  useEffect(() => {
    const checkHealth = async () => {
      try {
        const data = await getHealthStatus();

        setServerStatus(data.success ? "online" : "offline");
        setDatabaseStatus(data.database || "unknown");
      } catch (error) {
        console.error("Health check failed:", error);
        setServerStatus("offline");
        setDatabaseStatus("unavailable");
      }
    };

    checkHealth();
  }, []);

  const serverOnline = serverStatus === "online";
  const databaseOnline = databaseStatus === "connected";

  return (
    <main className="min-h-screen bg-[#09090f] flex flex-col items-center justify-center px-6 text-center">
      <div className="mb-6 rounded-2xl border border-violet-500/30 bg-violet-500/10 px-5 py-3 text-violet-300">
        🎮 Welcome to the Arcade
      </div>

      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
        Shrey<span className="text-violet-500">Cade</span>
      </h1>

      <p className="mt-5 max-w-xl text-lg text-slate-400">
        Play. Compete. Connect.
      </p>

      <p className="mt-3 max-w-xl text-slate-500">
        Your next multiplayer adventure starts here.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <button className="rounded-xl bg-violet-600 px-7 py-3 font-semibold text-white transition hover:bg-violet-500">
          Explore Games
        </button>

        <button className="rounded-xl border border-slate-700 px-7 py-3 font-semibold text-white transition hover:bg-slate-800">
          Sign In
        </button>
      </div>

      <div className="mt-12 rounded-2xl border border-slate-800 bg-slate-900/60 px-8 py-5">
        <h2 className="mb-4 text-sm font-semibold text-slate-300">
          Platform Status
        </h2>

        <div className="flex flex-wrap justify-center gap-6">
          <div className="flex items-center gap-2">
            <span
              className={`h-2.5 w-2.5 rounded-full ${
                serverOnline ? "bg-green-500" : "bg-red-500"
              }`}
            />
            <span className="text-sm text-slate-400">
              API: {serverStatus}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span
              className={`h-2.5 w-2.5 rounded-full ${
                databaseOnline ? "bg-green-500" : "bg-red-500"
              }`}
            />
            <span className="text-sm text-slate-400">
              Database: {databaseStatus}
            </span>
          </div>
        </div>
      </div>

      <p className="mt-12 text-sm text-slate-600">
        ShreyCade • Platform Foundation v0.1
      </p>
    </main>
  );
}

export default App;