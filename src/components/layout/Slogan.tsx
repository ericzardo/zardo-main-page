import SectionTransition from "../ui/SectionTransition";

const Slogan = () => {
  return (
    <section className="relative py-12 md:py-16 flex items-center bg-brand-navy text-brand-lavender rounded-t-[20px] md:rounded-t-[40px] lg:rounded-t-[60px]" id="pre-footer">
      <div className="absolute top-0 left-0 w-full bg-brand-offwhite"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <SectionTransition direction="up">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Innovative Digital Solutions
            </h2>
            <div className="w-full px-1 md:px-16 lg:px-20">
              <p className="text-lg md:text-xl text-white/70">
                Combining creativity and cutting-edge technology to craft unique experiences that transform your business.
              </p>
            </div>

          </div>
        </SectionTransition>
      </div>
    
    </section>
  );
};

export default Slogan;