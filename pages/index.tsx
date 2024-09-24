import { useRef } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import Hero from "./components/Hero";
import PricingCards from "./components/PricingCards";

export default function Home() {
  const pricingCardsRef = useRef(null);
  const formRef = useRef(null);

  const scrollToSection = (sectionRef: React.RefObject<HTMLDivElement>) => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <div>
      <Header scrollToSection={scrollToSection} pricingCardsRef={pricingCardsRef} formRef={formRef} />
      <Hero scrollToSection={scrollToSection} formRef={formRef} />
      <div ref={pricingCardsRef}>
        <PricingCards />
      </div>
      <div ref={formRef}>
        <Form />
      </div>
    </div>
  );
}
