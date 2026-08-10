const menuItems = [
  { icon: "🏠", label: "Início", href: "/" },
  { icon: "📅", label: "Agenda", href: "/agenda" },
  { icon: "✅", label: "Tarefas", href: "/tarefas" },
  { icon: "📚", label: "Estudos", href: "/estudos" },
  { icon: "📝", label: "Notas", href: "/anotacoes" },
];

export default function MobileNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-zinc-200 bg-white/95 backdrop-blur md:hidden dark:border-zinc-800 dark:bg-zinc-950/95">
      <div className="grid grid-cols-5">
        {menuItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="flex flex-col items-center gap-1 px-2 py-3 text-xs text-zinc-600 dark:text-zinc-400"
          >
            <span className="text-lg">{item.icon}</span>
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}