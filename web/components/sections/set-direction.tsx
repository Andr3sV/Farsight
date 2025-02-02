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

export const SetDirection = () => {
  return (
    <Features color="0,225,244" colorDark="31,49,64">
      <Features.Main
        title={
          <>
            The competitive edge
            <br />
            of Farsight
          </>
        }
        imageSize="large"
        text="Why Companies Choose Us."
      />
      <Features.Grid
        features={[
          {
            icon: ParentSubIcon,
            title: "The best source for small businesses.",
            text: "Get exclusive insights.",
          },
          {
            icon: IssuesIcon,
            title: "Purpose-built for AI teams.",
            text: "No more scraping, no more noise.",
          },
          {
            icon: AutomatedBacklogIcon,
            title: "Go live in minutes.",
            text: "Instant insights, zero setup friction.",
          },
          {
            icon: WorkflowsIcon,
            title: "Stay ahead, always.",
            text: "Predict the future of business before it happens.",
          },
          {
            icon: CustomViewsIcon,
            title: "Optimized for scale and precision.",
            text: "Seamlessly integrates with your AI stack.",
          },
          {
            icon: DiscussionIcon,
            title: "From raw data to intelligence.",
            text: "Transform fragmented data into actionable predictions.",
          },
        ]}
      />
    </Features>
  );
};
