export default function AgendaPage() {
  return (
    <main className="min-h-screen bg-zinc-50 p-6 dark:bg-zinc-950">
      <div className="mx-auto max-w-4xl">
        <a
          href="/"
          className="text-sm font-medium text-blue-600 hover:underline"
        >
          ← Voltar para o Dashboard
        </a>

        <h1 className="mt-6 text-3xl font-bold text-zinc-900 dark:text-white">
          📅 Agenda
        </h1>

        <p className="mt-2 text-zinc-600 dark:text-zinc-400">
          Aqui vamos organizar seus compromissos, provas e eventos.
        </p>

        <div className="mt-8 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <p className="text-zinc-600 dark:text-zinc-400">
            A agenda será construída aqui.
          </p>
        </div>
      </div>
    </main>
  );
}