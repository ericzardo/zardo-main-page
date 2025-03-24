const LoadingSection = () => {
  return (
    <div className="w-full h-[50vh] flex items-center justify-center">
      <div className="animate-pulse flex flex-col items-center gap-4">
        <div className="h-8 w-48 bg-brand-lavender/20 rounded-full"></div>
        <div className="h-4 w-32 bg-brand-lavender/20 rounded-full"></div>
        <div className="h-4 w-24 bg-brand-lavender/20 rounded-full"></div>
      </div>
    </div>
  );
};

export default LoadingSection; 