export const BackgroundLayer = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <div
        className="absolute inset-0 opacity-70 dark:hidden"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
    </div>
  );
};
