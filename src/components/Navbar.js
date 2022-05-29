import React from 'react'
import { Flex, Heading, IconButton, Spacer, Link, useColorMode } from "@chakra-ui/react";
import {FaSun, FaMoon, FaGithub, FaLinkedin} from 'react-icons/fa';

function Navbar() {

    const {colorMode, toggleColorMode} = useColorMode();
    const isDark = colorMode === "dark";

  return (
    <Flex w="100%">
        <Heading ml="8" size="md" fontWeight="semibold" color="cyan.400">
        <Link href='https://www.youtube.com/c/HelloCodepur' isExternal>
            Learned from Codepur tutorials :)
        </Link>
        </Heading>
        <Spacer/>
        <IconButton icon={<FaLinkedin/>} isRound onClick={() => window.open('https://linkedin.com/in/federicohlucca')}>
        </IconButton>
        <IconButton ml={2} icon={<FaGithub/>} isRound onClick={() => window.open('https://github.com/Edefuccal33')}>
        </IconButton>
        <IconButton ml={8} icon={isDark ? <FaSun/> : <FaMoon/>} isRound onClick={toggleColorMode}/>
    </Flex>
  );
}

export default Navbar


