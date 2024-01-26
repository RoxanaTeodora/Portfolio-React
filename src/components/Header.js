import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  // faMedium,
  // faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
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
  // {
  //   icon: faMedium,
  //   url: "https://medium.com",
  // },
  // {
  //   icon: faStackOverflow,
  //   url: "https://stackoverflow.com",
  // },
];

const Header = () => {
  const headerRef = useRef(null);
  // Se folosește hook-ul useRef pentru a crea o referință către elementul de antet (<Header>).
  //Ref-urile sunt adesea utilizate pentru a obține acces la elemente DOM într-un mod funcțional
  const prevScrollY = useRef("");
  //ține evidența valorii anterioare a derulării paginii,SUS-JOS
  //JOS HIDE THE HEADER
  //SUS SHOW THE HEADER
  const handleClick = (anchor) => () => {
    // Each a tag should have as children the name of the section: "Contact Me" and "Projects".
    //When clicking on the link, the url should show the corresponding section.
    //For example, when clicking on the "Contact Me" link, the url path should be /#contact-me. Also, the click should scroll to the corresponding section with a smooth animation. The code for that has been provided for you via the handleClick function. You need to hook that function with the a tag onClick event. Bear in mind the Projects section has an id called projects-section
    // and the Contact Me section has an id called contactme-section.

    const id = `${anchor}-section`;
    //linkurile au un id sub forma ${anchor}-section
    const element = document.getElementById(id);
    if (element) {
      //Dacă elementul cu id mentionat a fost găsit, se utilizează metoda scrollIntoView
      //va incepe un scroll smooth din partea superioară a elementului block-start
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  useEffect(() => {
    //funcția handleScroll este apelată de fiecare dată când utilizatorul derulează pagina
    const handleScroll = () => {
      //Se obține poziția actuală a derulării orizontale în cadrul paginii

      const currentScrollY = window.scrollY;

      //Se compară poziția actuală de derulare cu poziția anterioară pentru a determina direcția de derulare
      if (currentScrollY > prevScrollY.current) {
        // Dacă utilizatorul se deplasează în jos, se ascunde antetul (translateY(-400px))
        headerRef.current.style.transform = "translateY(-400px)";
      } else {
        // headerRef.current.style.transform = "translateY(0)
        headerRef.current.style.transform = "translateY(0)";
      }

      // Update the previous scroll position
      prevScrollY.current = currentScrollY;
    };

    // Add scroll event listener
    //Acesta va apela funcția handleScroll de fiecare dată când utilizatorul derulează pagina.
    window.addEventListener("scroll", handleScroll);

    // Cleanup: remove event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box
      ref={headerRef}
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
          //px si py este spatiarea meniului
          px={16}
          py={5}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <a href="mailto: hello@example.com">
              <FontAwesomeIcon
                icon={faEnvelope}
                size="2x"
                style={{ paddingRight: "30px" }}
              />
            </a>
            <a href="https://github.com">
              <FontAwesomeIcon
                icon={faGithub}
                size="2x"
                style={{ paddingRight: "30px" }}
              />
            </a>
            <a href="https://www.linkedin.com">
              <FontAwesomeIcon
                icon={faLinkedin}
                size="2x"
                style={{ paddingRight: "30px" }}
              />
            </a>
            {/* <a href="https://medium.com">
              <FontAwesomeIcon
                icon={faMedium}
                size="2x"
                style={{ paddingRight: "30px" }}
              />
            </a>
            <a href="https://stackoverflow.com">
              <FontAwesomeIcon
                icon={faStackOverflow}
                size="2x"
                style={{ paddingRight: "30px" }}
              />
            </a> */}
          </nav>
          <nav>
            <HStack spacing={8}>
              {/* Add links to Projects and Contact me section */}
              <a href=" /#projects" onClick={handleClick("projects")}>
                Projects
              </a>
              <a href=" /#contact-me" onClick={handleClick("contactme")}>
                Contact Me
              </a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
