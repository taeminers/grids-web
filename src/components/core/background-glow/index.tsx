export const BackgroundGlow = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <div className="absolute top-0 -left-1/4 h-1/2 w-1/2 rounded-full bg-[var(--color-accent)] opacity-90 blur-3xl"></div>
    </div>
  );
};
