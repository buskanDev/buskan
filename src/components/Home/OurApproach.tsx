import {items} from "../../utils/staticData/ourApproach"

export const OurApproach = () => {
    return (
        <section
            className="px-4 sm:px-6 md:px-12 lg:px-24 w-full backdrop-blur text-white py-4 mt-4 md:mt-12 min-h-[75vh]">
            <h1 className="text-3xl md:text-4xl lg:text-7xl text-center">Our Approach</h1>
            <p className="my-4">The shimmering hues of twilight painted the sky in a medley of colors, casting a golden
                glow
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
            <div className="flex flex-col md:flex-row gap-3 md:gap-20 items-center justify-center p-3 bg-black/50 rounded-md">
                {
                    items.map((item, index) => (
                        <div key={index} className="max-w-[200px]">
                            <img src={item.image} alt={item.title}/>
                            <span>{item.title}</span>
                            <p>{item.description}</p>
                        </div>
                    ))
                }
            </div>
        </section>
    );
};