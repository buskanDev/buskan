import HeroImage from "../../assets/Images/HeroSectionImg.png";

export const HeroSection = () => {
  return (
    <section className="px-4 sm:px-6 md:px-12 lg:px-24 w-full backdrop-blur text-white py-4">
      <div className="flex flex-col md:flex-row justify-center items-center h-full gap-10 md:gap-20">
        <div className="flex flex-col gap-3">
          <h1 className="text-5xl md:text-6xl lg:text-9xl">Buskan</h1>
          <p className="text-cyan-300">
            BUSKAN is a client-focused, service-based startup that is driven by
            the desire to solve complex problems through technology. We are a
            team of skilled developers, designers, and strategists who are
            passionate about building innovative digital solutions. While we are
            at the beginning of our journey, our ambition is to grow into a
            leading software development firm known for quality, creativity, and
            reliability.
          </p>
        </div>
        <img src={HeroImage} alt="image" className="w-[400px]" />
      </div>
    </section>
  );
};
