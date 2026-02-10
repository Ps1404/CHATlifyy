const AuthImagePattern = ({ title, subtitle }) => {
  return (
    <div className="hidden lg:flex items-center justify-center bg-base-200 p-12">
      <div className="max-w-md text-center space-y-8">
        {/* Force min height + bigger gap for visibility */}
        <div className="grid grid-cols-3 gap-6 mb-10 min-h-[220px] w-full">
          {[...Array(9)].map((_, i) => (
            <div
              key={i}
              className="aspect-square rounded-2xl bg-primary/30 animate-pulse"
            />
          ))}
        </div>
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-base-content/60">{subtitle}</p>
      </div>
    </div>
  );
};

export default AuthImagePattern;