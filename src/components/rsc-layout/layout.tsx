import type { ReactNode } from "react";

const AVATAR_URL = "https://d193qjyckdxivp.cloudfront.net/avatar.jpg";

type RscLayoutProps = {
  children: ReactNode;
};

export function RscLayout({ children }: RscLayoutProps) {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <header className="border-b border-emerald-950/40 bg-linear-to-br from-emerald-600 via-teal-600 to-emerald-700 px-6 py-4 shadow-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-6">
          <div>
            <h1 className="text-lg font-bold tracking-tight text-white drop-shadow-sm sm:text-xl">
              Fitness Tracker
            </h1>
          </div>

          <div className="flex items-center gap-3 rounded-xl bg-black/15 px-3 py-2 ring-1 ring-white/25 backdrop-blur-sm">
            <img
              src={AVATAR_URL}
              alt=""
              width={32}
              height={32}
              className="size-8 shrink-0 rounded-full object-cover shadow-sm ring-2 ring-white/40"
              loading="eager"
            />
            <div className="min-w-0 text-right">
              <p className="truncate text-xs font-semibold uppercase tracking-wide text-emerald-100/80">
                Signed in
              </p>
              <p className="truncate text-sm font-semibold text-white">Adam</p>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-5xl px-6 py-8">{children}</main>
    </div>
  );
}
