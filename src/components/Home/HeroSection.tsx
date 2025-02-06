import HeroImage from "../../assets/Images/HeroSectionImg.png"

export const HeroSection = () => {
    return (
        <section className="px-4 sm:px-6 md:px-12 lg:px-24 w-full backdrop-blur text-white py-4">
            <div className="flex flex-col md:flex-row justify-center items-center h-full gap-10 md:gap-20">
                <div className="flex flex-col gap-3">
                    <h1 className="text-5xl md:text-6xl lg:text-9xl">Buskan</h1>
                    <p className="text-cyan-300">
                        The shimmering hues of twilight painted the sky in a medley of colors, casting a golden glow
                        across
                        the tranquil lake. Ripples danced upon the water’s surface as a gentle breeze whispered secrets
                        through the towering pines. Somewhere in the distance, the soft trill of a bird echoed, weaving
                        a
                        melody that seemed to harmonize with the quiet murmur of nature. Amid this serene backdrop, a
                        lone
                        figure stood on the edge of the dock, lost in thought, contemplating the mysteries of existence
                        and
                        the beauty of simplicity.
                    </p>
                </div>
                <img src={HeroImage} alt="image" className="w-[400px]"/>
            </div>
        </section>
    )
}
