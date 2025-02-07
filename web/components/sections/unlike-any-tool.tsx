import { Button, Highlight } from "../button";
import { CommandMenu } from "../command-menu";
import { Container } from "../container";
import { AiDriven } from "../illustrations/ai-driven";
import { LogoLightIllustration } from "../illustrations/logo-light";
import { NoComplexity } from "../illustrations/no-compplexity";
import { Smarter } from "../illustrations/smarter";
import { ZapIllustration } from "../illustrations/zap";
import { KeyboardShortcuts } from "../keyboard-shortcuts";

export const UnlikeAnyTool = () => (
  <div className="text-white">
    <Container>
      <div className="text-center">
        <h2 className="mb-4 text-4xl md:mb-7 md:text-7xl">
        The richest, real-time dataset 
          <br className="hidden md:inline-block" /> on small businesses
        </h2>
        <p className="mx-auto mb-12 max-w-[68rem] text-lg text-primary-text md:mb-7 md:text-xl">
        We provide a real-time, structured API built to power the next wave of AI-driven insights.
        </p>
      </div>
    </Container>
    <div className="h-[48rem] overflow-hidden md:h-auto md:overflow-auto">
      <div className="flex snap-x snap-mandatory gap-6 overflow-x-auto px-8 pb-12 md:flex-wrap md:overflow-hidden">
        <div className="relative flex min-h-[48rem] w-full shrink-0 snap-center flex-col items-center justify-end overflow-hidden rounded-[4.8rem] border border-transparent-white bg-glass-gradient p-8 text-center md:max-w-[calc(66.66%-12px)] md:basis-[calc(66.66%-12px)] md:p-14">
          <AiDriven />
          <p className="mb-4 text-3xl">Built for AI-driven companies</p>
          <p className="text-md text-primary-text">
          Engineered for speed, precision, and seamless scalability in AI-driven innovation.
          </p>
        </div>
        <div className="relative flex min-h-[48rem] w-full shrink-0 snap-center flex-col items-center justify-end overflow-hidden rounded-[4.8rem] border border-transparent-white bg-glass-gradient p-8 text-center md:basis-[calc(33.33%-12px)] md:pb-14">
          <div className="mask-linear-faded absolute top-[-9.2rem]">
            <ZapIllustration />
          </div>
          <p className="mb-4 text-3xl">Every insight stays fresh</p>
          <p className="text-md text-primary-text">
          Real-time, high-frequency data updates.
          </p>
        </div>
        <div className="group relative flex min-h-[48rem] w-full shrink-0 snap-center flex-col items-center justify-end overflow-hidden rounded-[4.8rem] border border-transparent-white bg-glass-gradient p-8 text-center md:basis-[calc(33.33%-12px)] md:pb-14">
          <div className="pointer-events-none absolute top-[2rem] w-[130%]">
           {/* <LogoLightIllustration />*/}
           <Smarter />
          </div>
          <p className="mb-4 text-3xl">Smarter decisions at scales</p>
          <p className="text-md text-primary-text">
            From discovery to prediction in seconds.
          </p>
        </div>
        <div className="relative flex min-h-[48rem] w-full shrink-0 snap-center flex-col items-center justify-start overflow-hidden rounded-[4.8rem] border border-transparent-white bg-glass-gradient p-8 text-center md:max-w-[calc(66.66%-12px)] md:basis-[calc(66.66%-12px)] md:p-14">
         {/* <CommandMenu />*/}
         <NoComplexity />
          <div className="transition-opacity md:[.opened+&]:opacity-0">
            <p className="mb-4 text-3xl">No complexity, just results</p>
            <p className="text-md text-primary-text">
              Plug & play API for seamless integration.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);
