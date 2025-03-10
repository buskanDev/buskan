import logo from "../../assets/Logo/LogoFilled.jpg";

const AboutComponent = () => {
  return (
    <main className="px-4 sm:px-6 md:px-12 lg:px-24 py-4 text-white min-h-[75vh]">
      <h1 className="text-3xl md:text-4xl lg:text-5xl mt-7">About Us</h1>
      <div className="flex flex-col lg:flex-row my-4">
        <img
          src={logo}
          alt="Logo"
          className="h-96 w-96 object-cover m-auto rounded-md"
        />
        <div className="flex flex-col justify-center md:ml-4 backdrop-blur p-4">
          <h2 className="text-lg md:text-xl lg:text-2xl">Who we are</h2>
          <p className="mt-4 text-lg md:text-xl lg:text-2xl">
            BUSKAN is a client-focused, service-based startup that is driven by
            the desire to solve complex problems through technology. We are a
            team of skilled developers, designers, and strategists who are
            passionate about building innovative digital solutions. While we are
            at the beginning of our journey, our ambition is to grow into a
            leading software development firm known for quality, creativity, and
            reliability.
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
          We understand that every client has unique requirements, and our goal
          is to provide customized solutions that align perfectly with their
          needs. Whether you are a startup, a growing business, or an
          enterprise, we have the expertise and dedication to turn your vision
          into reality. Our team is committed to delivering exceptional results
          that exceed your expectations and help you achieve your business
          goals.
        </p>
        <p className="mt-4 text-lg md:text-xl lg:text-2xl">
          <span className="text-cyan-700 font-bold">Welcome to BUSKAN</span>,
          where innovation meets technology to create cutting-edge digital
          solutions. We are a dynamic and passionate team dedicated to providing
          top-notch software development services tailored to meet our clients'
          unique demands. Whether it's website development, mobile app
          development, UI/UX design, or custom software solutions, we bring
          ideas to life with creativity, efficiency, and precision. At BUSKAN,
          we believe in empowering businesses with technology. In this
          fast-paced digital era, having a robust online presence and seamless
          software solutions is essential for success. Our mission is to bridge
          the gap between visionary ideas and functional, high-quality digital
          products. We are committed to delivering innovative, user-friendly,
          and scalable solutions that drive growth, enhance productivity, and
          elevate your brand.
        </p>
        <h1 className="text-4xl my-4">Our Services</h1>
        <p className="mt-4 text-lg md:text-xl lg:text-2xl">
          At BUSKAN, we offer a wide range of software development services to
          cater to different business needs. Our primary services include:
          <h1 className="text-2xl my-3">Website Development</h1>A website is the
          digital face of any business, and we specialize in creating
          responsive, fast, and aesthetically pleasing websites that provide an
          exceptional user experience. From static business websites to complex
          e-commerce platforms, we develop customized web solutions that reflect
          your brand identity.
          <h1 className="text-2xl my-3">Mobile App Development</h1>
          With the rise of mobile users, having a well-designed and functional
          app is essential for businesses. We develop cross-platform and native
          mobile applications that offer seamless performance, engaging UI/UX,
          and robust security. Our apps are designed to provide high
          performance, scalability, and user satisfaction.
          <h1 className="text-2xl my-3">UI/UX Design</h1>A good user experience
          is at the heart of every successful software product. Our UI/UX design
          team ensures that your website or application is not only visually
          appealing but also easy to navigate and user-friendly. We create
          intuitive interfaces that enhance user engagement and boost
          conversions.
          <h1 className="text-2xl my-3">Custom Software Solutions</h1>
          Every business has unique challenges that require tailor-made software
          solutions. At BUSKAN, we develop custom software applications that
          align with your business objectives. Whether it's CRM software,
          automation tools, or enterprise solutions, we build software that
          improves efficiency and productivity.
        </p>
        <h1 className="text-4xl my-4">Why Choose BUSKAN?</h1>
        <p className="mt-4 text-lg md:text-xl lg:text-2xl">
          We understand that choosing the right software development partner is
          crucial for business success. Here is what sets us apart:
          <br />
          ✔ Client-Centric Approach: We prioritize client satisfaction and work
          closely with businesses to deliver solutions that meet their
          expectations.
          <br />
          ✔ Innovative Solutions: We stay ahead of the curve by integrating the
          latest technologies and best practices in software development.
          <br />
          ✔ Affordable Pricing: High-quality services at competitive prices,
          making technology accessible for startups and businesses of all sizes.
          <br />
          ✔ Scalability and Flexibility: Our solutions are designed to grow with
          your business, ensuring long-term success.
          <br />✔ Dedicated Support: We provide post-launch support and
          maintenance to ensure your software runs smoothly without any issues.
        </p>
        <h1 className="text-4xl my-4">Our Vision</h1>
        <p className="mt-4 text-lg md:text-xl lg:text-2xl">
          Our vision is to redefine software development services by offering
          reliable, innovative, and scalable solutions. We aim to become a
          leading technology partner for businesses worldwide, helping them
          achieve digital success.
          <br />
          Though we are a new startup, we have a big vision. We believe that
          with passion, dedication, and a relentless pursuit of excellence, we
          can make a significant impact in the tech industry.
        </p>
        <h1 className="text-4xl my-4">Join Us on This Journey</h1>
        <p className="mt-4 text-lg md:text-xl lg:text-2xl">
          At BUSKAN, we are not just developing software; we are building
          digital experiences that drive success. Whether you need a website, an
          app, or a custom software solution, we are here to help you every step
          of the way. Let's collaborate, innovate, and grow together.
          <br />
          Ready to transform your ideas into reality? Get in touch with us today
          and let us build something amazing together!
        </p>
      </div>
    </main>
  );
};

export default AboutComponent;
