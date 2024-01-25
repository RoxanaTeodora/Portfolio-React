import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I Roxana!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#d17147"
  >
    <VStack spacing={4} textAlign="center">
      <Avatar
        size="xxl"
        src="https://media.licdn.com/dms/image/C5603AQFxaz3zPnauEw/profile-displayphoto-shrink_400_400/0/1647022191064?e=1711584000&v=beta&t=wtHLy2jXhOUqHjZCgQeMEmBWpo3WIMOLNwsg7uce4RQ"
        alt="Rox's Avatar"
      ></Avatar>
      <Heading size="sml" color="white" spacing={2}>
        {greeting}
      </Heading>
      <Heading size="2xl" color="white">
        {bio1}
      </Heading>
      <Heading size="2xl" color="white">
        {bio2}
      </Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
