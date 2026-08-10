import DashboardCard from "@/components/DashboardCard";
import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <div className="flex min-h-screen">
        <Sidebar />

        <main className="flex-1 pb-24 md:pb-0">
          <div className="mx-auto max-w-7xl px-6 py-10 lg:px-10">
            <header className="mb-10">
              <p className="text-sm font-medium text-blue-600">
                MINHA CENTRAL
              </p>

              <h1 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-white">
                Bom dia! 👋
              </h1>

              <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                Aqui está o resumo da sua central de organização.
              </p>
            </header>

            <section className="mb-10">
              <h2 className="mb-4 text-xl font-semibold text-zinc-900 dark:text-white">
                Acesso rápido
              </h2>

              <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
                <DashboardCard
                  icon="📅"
                  title="Agenda"
                  description="Organize seus compromissos, provas e eventos."
                  href="/agenda"
                />

                <DashboardCard
                  icon="✅"
                  title="Tarefas"
                  description="Controle suas tarefas, prazos e prioridades."
                  href="/tarefas"
                />

                <DashboardCard
                  icon="📚"
                  title="Estudos"
                  description="Organize disciplinas, conteúdos e revisões."
                  href="/estudos"
                />

                <DashboardCard
                  icon="📝"
                  title="Anotações"
                  description="Guarde ideias, resumos, listas e informações."
                  href="/anotacoes"
                />
              </div>
            </section>

            <section className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
                <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">
                  📅 Próximos compromissos
                </h2>

                <p className="mt-3 text-sm text-zinc-500">
                  Ainda não existem compromissos cadastrados.
                </p>
              </div>

              <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
                <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">
                  ✅ Tarefas prioritárias
                </h2>

                <p className="mt-3 text-sm text-zinc-500">
                  Ainda não existem tarefas cadastradas.
                </p>
              </div>
            </section>
          </div>
        </main>
      </div>

      <MobileNav />
    </div>
  );
}