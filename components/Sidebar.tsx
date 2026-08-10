const menuItems = [
  { icon: "🏠", label: "Dashboard", href: "/" },
  { icon: "📅", label: "Agenda", href: "/agenda" },
  { icon: "✅", label: "Tarefas", href: "/tarefas" },
  { icon: "📚", label: "Estudos", href: "/estudos" },
  { icon: "📝", label: "Anotações", href: "/anotacoes" },
  { icon: "🔔", label: "Lembretes", href: "/lembretes" },
];

export default function Sidebar() {
  return (
    <aside className="hidden min-h-screen w-64 flex-col border-r border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950 md:flex">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-zinc-900 dark:text-white">
          Minha Central
        </h1>

        <p className="mt-1 text-sm text-zinc-500">
          Organização pessoal
        </p>
      </div>

      <nav className="flex flex-col gap-2">
        {menuItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-zinc-700 transition hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-900"
          >
            <span className="text-lg">{item.icon}</span>
            {item.label}
          </a>
        ))}
      </nav>

      <div className="mt-auto">
        <a
          href="/configuracoes"
          className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-900"
        >
          <span>⚙️</span>
          Configurações
        </a>
      </div>
    </aside>
  );
}