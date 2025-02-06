export const ContactUsForm = ()=>{
    return (
        <form className="max-w-[500px] p-3 flex flex-col gap-3">
            <input type="text" placeholder="Name" className="p-2 bg-cyan-500/20 border-2 border-cyan-500 focus:border-cyan-600 duration-150 outline-none rounded-md" />
            <input type="email" placeholder="Email" className="p-2 bg-cyan-500/20 border-2 border-cyan-500 focus:border-cyan-600 duration-150 outline-none rounded-md"/>
            <input type="text" placeholder="Contact Number" className="p-2 bg-cyan-500/20 border-2 border-cyan-500 focus:border-cyan-600 duration-150 outline-none rounded-md"/>
            <textarea placeholder="Write your message here..." className="h-[100px] resize-none p-2 bg-cyan-500/20 border-2 border-cyan-500 focus:border-cyan-600 duration-150 outline-none rounded-md" />
            <button type="submit" className="p-2 bg-cyan-600 hover:bg-cyan-500 duration-150" onClick={(e)=>e.preventDefault()}>Send</button>
        </form>
    )
}