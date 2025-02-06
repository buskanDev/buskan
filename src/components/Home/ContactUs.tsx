import {ContactUsForm} from "./ContactUsForm.tsx";

export const ContactUs = ()=>{
    return (
        <section className="px-4 sm:px-6 md:px-12 lg:px-24 w-full backdrop-blur mt-4 md:mt-12 text-white py-4">
            <h1 className="text-3xl md:text-4xl lg:text-7xl text-center">Contact Us</h1>
            <ContactUsForm/>
        </section>
    )
}
