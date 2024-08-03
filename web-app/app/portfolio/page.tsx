import Portfolio from './Portfolio';
import Hero from "@/app/HomePageComponents/Hero";
import ContactForm from "@/app/contact/ContactForm";

export default function PortfolioPage() {
    return (
        <section className="h-fit">
            <Hero/>
            <Portfolio/>
            <ContactForm/>
        </section>
    );
}
