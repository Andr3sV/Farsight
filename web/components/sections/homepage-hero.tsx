import { Button, Highlight } from "../button";
import { Hero, HeroTitle, HeroSubtitle } from "../hero";
import { HeroImage } from "../hero-image";
import { ChevronIcon } from "../icons/chevron";

export const HomepageHero = () => (
  <Hero>
    {/*  <Button
      className="translate-y-[-1rem] animate-fade-in opacity-0"
      href="/"
      variant="secondary"
      size="small"
    >
  <span>Linear 2022 Release – Built for scale</span>{" "} 
  <Highlight>→</Highlight>
    </Button>*/}
    <HeroTitle className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
      AI data layer
      <br className="hidden md:block" /> of small businesses
    </HeroTitle>
    <HeroSubtitle className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
      Farsight unlocks real-time, structured insights on millions of small business and freelancers
      <br className="hidden md:block" /> Supercharge AI models, enhance decision-making, and fuel next-gen intelligence.
    </HeroSubtitle>
    <Button
      className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]"
      href="/"
      variant="primary"
      size="large"
    >
      <span>Talk to an Expert </span>
      <Highlight>
        <ChevronIcon />
      </Highlight>
    </Button>
    <HeroImage />
  </Hero>
);
