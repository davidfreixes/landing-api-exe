import Form from "./components/Form";
import Header from "./components/Header";
import Hero from "./components/Hero";
import PricingCards from "./components/PricingCards";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <PricingCards />
      <Form />
    </div>
  );
}
