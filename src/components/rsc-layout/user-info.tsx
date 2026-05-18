export const UserInfo = async () => {
  const name = "Adam";
  const avatar = "https://d193qjyckdxivp.cloudfront.net/avatar.jpg";
  return (
    <div className="flex items-center gap-3 rounded-xl bg-black/15 px-3 py-2 ring-1 ring-white/25 backdrop-blur-sm">
      <img
        src={avatar}
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
        <p className="truncate text-sm font-semibold text-white">{name}</p>
      </div>
    </div>
  );
};
