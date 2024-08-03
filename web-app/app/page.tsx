import Hero from "./LayoutComponents/Hero/Hero"
import Portfolio from "./HomePageComponents/Portfolio"
import CaseStudy from "./HomePageComponents/CaseStudy"
import CustomerReviews from "@/app/HomePageComponents/CustomerReviews/CustomerReviews";
import ValueProposition from "@/app/HomePageComponents/ValueProposition";
import Offer from "@/app/HomePageComponents/Offer";
import Introduction from "@/app/HomePageComponents/Introduction";
import NotConvinced from "@/app/HomePageComponents/NotConvinced";
import CustomerStories from "@/app/HomePageComponents/CustomerStories";

export default function Home() {
  return (
    <section className="h-fit">
      <Hero/>
      <Portfolio/>
      <CaseStudy/>
        <CustomerReviews/>
        <ValueProposition/>
        <Offer/>
        <Introduction/>
        <NotConvinced/>
        <CustomerStories/>
    </section>
  );
}
