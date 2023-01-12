
import "./styles.css";


import FooterSection from "./FooterSection";
import HeroSection from "./HeroSection";
import ServicesSection from "./ServiceSection";

export default function App() {
  return (
    <div className="App">
      <section>
        <HeroSection />
      </section>
      <section>
        <ServicesSection />
      </section>
      <section id="foo">
        <FooterSection />
      </section>
    </div>
  );
}


