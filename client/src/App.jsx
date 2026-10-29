function App() {
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

      <p className="mt-12 text-sm text-slate-600">
        ShreyCade • Platform Foundation v0.1
      </p>
    </main>
  );
}

export default App;