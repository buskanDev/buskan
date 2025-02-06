import {items} from "../../utils/staticData/ourClients.ts";

export const OurClients = ()=>{
    return (
        <section className="px-4 sm:px-6 md:px-12 lg:px-24 w-full backdrop-blur text-white py-4 mt-4 md:mt-12 min-h-[75vh]">
            <h1 className="text-3xl md:text-4xl lg:text-7xl text-center">Our Clients</h1>
            <p className="my-4">See what our clients say...</p>
            <div className="flex flex-col md:flex-row flex-wrap gap-3 md:gap-20 items-center justify-center p-5 bg-black/50 rounded-md">
                {
                    items.map((item,index)=>(
                        <div key={index} className="max-w-[300px] flex flex-col gap-3">
                            <img src={item.logo} alt={item.name}/>
                            <div>{item.name}</div>
                            <p>{item.description}</p>
                        </div>
                    ))
                }
            </div>

        </section>
    )
}
