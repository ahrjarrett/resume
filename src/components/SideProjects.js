import React from "react";
import Section from "components/Section";
import { siteProjectsData } from "data";

const SideProjects = () => (
  <div>
    <Section heading="Work History (current)" items={siteProjectsData} />
  </div>
);

export default SideProjects;
