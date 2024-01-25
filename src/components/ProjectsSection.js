import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "Furniture market",
    description:
      "Explore, manage, and shop for furniture seamlessly with the React and Tailwind CSS website. Pages include Home, Admin, Cart, and Details for a smooth experience in presenting, adding, deleting, and selecting furniture.",
    getImageSrc: () => require("../images/photo1.jpg"),
  },
  {
    title: "Weather App",
    description:
      "Find out the weather from any place by using a simple JavaScript application with AJAX techniques. ",
    getImageSrc: () => require("../images/photo2.jpg"),
  },
  {
    title: "student gradebook App",
    description:
      "A student gradebook  that uses Dom manipulation for adding, deleting and ordering the students and the grades",
    getImageSrc: () => require("../images/photo3.jpg"),
  },
  {
    title: "Restaurant Website",
    description: "A restaurant website using React library coming soon...",
    getImageSrc: () => require("../images/photo4.jpg"),
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#d17147"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
