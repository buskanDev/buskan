import { items } from "../../utils/staticData/ourApproach";

export const OurApproach = () => {
  return (
    <section className="px-4 sm:px-6 md:px-12 lg:px-24 w-full backdrop-blur text-white py-4 mt-4 md:mt-12 min-h-[75vh]">
      <h1 className="text-3xl md:text-4xl lg:text-7xl text-center">
        Our Approach
      </h1>
      <p className="my-4">
        At BUSKAN, we follow a structured yet flexible approach to ensure every
        project is executed efficiently and effectively:
        <br />
        ✔ Understanding Your Vision: We start by deeply understanding your
        requirements, goals, and challenges to craft a solution tailored to your
        needs.
        <br />
        ✔ Innovative Strategy: Our team brainstorms creative and technical
        strategies to develop a roadmap for a successful implementation.
        <br />
        ✔ Agile Development: We use modern development methodologies to build,
        test, and refine your software iteratively, ensuring high-quality
        outcomes.
        <br />
        ✔ Seamless Deployment: We ensure smooth and hassle-free deployment,
        making sure your solution is ready to perform flawlessly.
        <br />✔ Ongoing Support: Our commitment doesn’t end with deployment. We
        provide continuous support and improvements to keep your digital assets
        running at their best.
      </p>
      <div className="flex flex-col md:flex-row gap-3 md:gap-20 items-center justify-center p-3 bg-black/50 rounded-md">
        {items.map((item, index) => (
          <div key={index} className="max-w-[200px] flex flex-col items-center h-full">
            <img src={item.image} alt={item.title} />
            <div className="">
              <span className="text-[1.1rem] md:text-2xl lg:text-3xl text-cyan-500">
                {item.title}
              </span>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
