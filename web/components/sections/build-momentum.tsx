"use client";

import { Features } from "../features";
import {
  AutomatedBacklogIcon,
  CustomViewsIcon,
  DiscussionIcon,
  IssuesIcon,
  ParentSubIcon,
  WorkflowsIcon,
} from "../icons/features";

export const BuildMomentum = () => {
  return (
    <Features color="40,87,255" colorDark="48,58,117">
      <Features.Main
        title={
          <>
            Designed for speed,
            <br />
            precision & scale
          </>
        }
        imageSize="large"
        text="Data That Moves as Fast as Your AI."
      />
      <Features.Grid
        features={[
          {
            icon: ParentSubIcon,
            title: "Dynamic, event-driven updates.",
            text: "Track business shifts in real time.",
          },
          {
            icon: AutomatedBacklogIcon,
            title: "Precision-engineered for LLMs.",
            text: "The perfect fuel for next-gen AI.",
          },
          {
            icon: WorkflowsIcon,
            title: "Massive scale, instant access.",
            text: "Millions of businesses, billions of insights.",
          },
          {
            icon: CustomViewsIcon,
            title: "High-fidelity, structured data.",
            text: "Eliminate guesswork, power smarter AI.",
          },
          {
            icon: DiscussionIcon,
            title: "Deep intelligence on microenterprises.",
            text: "Unlock hidden market opportunities.",
          },
          {
            icon: IssuesIcon,
            title: "No noise. Just signal.",
            text: "Clean, actionable insights for AI-driven teams.",
          },
        ]}
      />
    </Features>
  );
};
