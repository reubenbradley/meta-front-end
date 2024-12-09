import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
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
  const [lastScrollY, setLastScrollY] = useState(0); // Keep track of the last scroll position
  const boxRef = useRef(null);

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

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        // Scrolling down
        // console.log('Scrolling down!');
        boxRef.current.style.transform = "translateY(-200px)";
        // boxRef.current.style.backgroundColor = "red";
        setLastScrollY(currentScrollY);
      }
      else if (currentScrollY < lastScrollY) {
        // Scrolling up
        // console.log('Scrolling up!');
        boxRef.current.style.transform = "translateY(0)";
        boxRef.current.style.backgroundColor = "#18181b";
        setLastScrollY(currentScrollY);
      }

    };

    // This needs to reference the normal JavaScript window object
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

    // Ensure the effect runs every time the lastScrollY changes
  }, [lastScrollY]);

  // Alternative way to create the social media links, not used for this demo
  const navItems = socials.map(social => {
    return (
      <a href={social.url} key={social.url} target="_blank">&nbsp;
        <FontAwesomeIcon icon={social.icon} size="2x" />
      </a>
    );
  })

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
      ref={boxRef}
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
          spacing={12}
        >
          <nav>
            {/* Add social media links based on the `socials` data */}
            <HStack spacing={4}>
              {socials.map(({ icon, url }) => (
                  <a
                      key={url}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer">
                    <FontAwesomeIcon icon={icon} size="2x" key={url} />
                  </a>
              ))}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={12}>
              {/* Add links to Projects and Contact me section */}
              <a href="/#projects" onClick={handleClick("projects")}>Projects</a>
              <a href="/#contactme" onClick={handleClick("contactme")}>Contact Me</a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
