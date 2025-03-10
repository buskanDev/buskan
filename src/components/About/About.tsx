import logo from "../../assets/Logo/LogoFilled.jpg";

const AboutComponent = () => {
  return (
    <main className="px-4 sm:px-6 md:px-12 lg:px-24 py-4 text-white min-h-[75vh]">
      <h1 className="text-3xl md:text-4xl lg:text-5xl mt-7">About Us</h1>
      <div className="flex flex-col lg:flex-row my-4">
        <img
          src={logo}
          alt="Logo"
          className="h-96 object-cover m-auto rounded-md"
        />
        <div className="flex flex-col justify-center md:ml-4">
          <h2 className="text-lg md:text-xl lg:text-2xl">Who we are</h2>
          <p className="mt-4 text-lg md:text-xl lg:text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
            purus vitae, ultricies felis. Integer nec odio. Praesent libero. Sed
            cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum
            imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus
            sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget
            nulla. Class aptent taciti sociosqu ad litora torquent per conubia
            nostra, per inceptos himenaeos.
          </p>
        </div>
      </div>
      <div
        className="mt-4
          backdrop-filter backdrop-blur bg-opacity-30
          bg-gray-800 p-4 rounded-lg shadow-lg  
        "
      >
        <p className="mt-4 text-lg md:text-xl lg:text-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus
          vitae, ultricies felis. Integer nec odio. Praesent libero. Sed cursus
          ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum
          imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed
          augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.
          Class aptent taciti sociosqu ad litora torquent per conubia nostra,
          per inceptos himenaeos.
        </p>
        <p className="mt-4 text-lg md:text-xl lg:text-2xl">
          Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh
          elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec
          tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu
          eget nulla. Class aptent taciti sociosqu ad litora torquent per
          conubia nostra, per inceptos himenaeos.
        </p>
        <p className="mt-4 text-lg md:text-xl lg:text-2xl">
          Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad
          litora torquent per conubia nostra, per inceptos himenaeos. Fusce nec
          tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu
          eget nulla. Class aptent taciti sociosqu ad litora torquent per
          conubia nostra, per inceptos himenaeos.
        </p>
        <p className="mt-4 text-lg md:text-xl lg:text-2xl">
          Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum
          lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora
          torquent per conubia nostra, per inceptos himenaeos.
        </p>
        <p className="mt-4 text-lg md:text-xl lg:text-2xl">
          Class aptent taciti sociosqu ad litora torquent per conubia nostra,
          per inceptos himenaeos. Fusce nec tellus sed augue semper porta.
          Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti
          sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos.
        </p>
        <p className="mt-4 text-lg md:text-xl lg:text-2xl">
          Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti
          sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos.
        </p>
      </div>
    </main>
  );
};

export default AboutComponent;
