type DashboardCardProps = {
  icon: string;
  title: string;
  description: string;
  href: string;
};

export default function DashboardCard({
  icon,
  title,
  description,
  href,
}: DashboardCardProps) {
  return (
    <a
      href={href}
      className="group rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900"
    >
      <div className="mb-4 text-3xl">{icon}</div>

      <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">
        {title}
      </h2>

      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        {description}
      </p>

      <div className="mt-5 text-sm font-medium text-blue-600 group-hover:underline">
        Acessar →
      </div>
    </a>
  );
}