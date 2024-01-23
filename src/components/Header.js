// import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
// import { Box, HStack, flexbox } from "@chakra-ui/react";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Header = () => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <a href="mailto: hello@example.com">
              {/* Add social media links based on the `socials` data */}
              <FontAwesomeIcon
                icon={faEnvelope}
                size="2x"
                style={{ paddingRight: "15px" }}
              />
            </a>
            <a href="https://github.com">
              <FontAwesomeIcon
                icon={faGithub}
                size="2x"
                style={{ paddingRight: "15px" }}
              />
            </a>
            <a href="https://www.linkedin.com">
              <FontAwesomeIcon
                icon={faLinkedin}
                size="2x"
                style={{ paddingRight: "15px" }}
              />
            </a>
            <a href="https://medium.com">
              <FontAwesomeIcon
                icon={faMedium}
                size="2x"
                style={{ paddingRight: "15px" }}
              />
            </a>
            <a href="https://stackoverflow.com">
              <FontAwesomeIcon
                icon={faStackOverflow}
                size="2x"
                style={{ paddingRight: "15px" }}
              />
            </a>
          </nav>
          <nav>
            <HStack spacing={8}>
              {/* Add links to Projects and Contact me section */}
              <a href=" /#contact-me" onClick={handleClick("contactme")}>
                Contact Me
              </a>
              <a href=" /#projects" onClick={handleClick("projects")}>
                Projects
              </a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
