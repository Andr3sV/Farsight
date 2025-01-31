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

export const EnjoyIssueTracking = () => {
  return (
    <Features color="194,97,254" colorDark="53,42,79">
      <Features.Main
        title={
          <>
            AI is only as good
            <br />
            as its data
          </>
        }
        text="Most AI-driven teams rely on outdated, fragmented, and incomplete data. We provide the missing piece of:"
      />
      <Features.Grid
        features={[
          {
            icon: ParentSubIcon,
            title: "Static, unreliable, and incomplete",
            text: "company data.",
          },
          {
            icon: AutomatedBacklogIcon,
            title: "No real-time",
            text: "insights on small businesses.",
          },
          {
            icon: WorkflowsIcon,
            title: "Blind spots",
            text: "in AI-powered predictions.",
          },
          {
            icon: CustomViewsIcon,
            title: "Lack of granular data",
            text: "on microenterprises and freelancers.",
          },
          {
            icon: DiscussionIcon,
            title: "Poor data quality",
            text: "limiting AI model performance.",
          },
          {
            icon: IssuesIcon,
            title: "Slow, inefficient data pipelines",
            text: "holding back innovation.",
          },
        ]}
      />

    </Features>
  );
};
