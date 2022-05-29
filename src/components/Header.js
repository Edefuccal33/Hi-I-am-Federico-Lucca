import React from 'react'
import { VStack, useColorMode, useMediaQuery, Flex, Box, Text, Button, Image } from '@chakra-ui/react';

function Header() {

  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

  return (
    <VStack>
        <Flex direction={isNotSmallerScreen ? "row" : "column"}
            spacing="200px" p={isNotSmallerScreen ? "32" : "0"}
            alignSelf="flex-start">
            <Box mt={isNotSmallerScreen ? "0" : 16} align='flex-start'>
                <Text fontSize="5xl" fontWeight="semibold">Hi, I am</Text>
                <Text fontSize="7xl" fontWeight="bold" bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" bgClip='text' >Federico Lucca</Text>
                <Text color={isDark ? "gray.200" : "gray.500"}>Jr. Full Stack Developer - [ Java Springboot & React ]</Text>
                <Button mt={8} colorScheme="blue" onClick={() =>
                    window.open('https://linkedin.com/in/federicohlucca')
                }>Hire Me</Button>

            </Box>
            <Image ml={4} alignSelf="center" mt={isNotSmallerScreen ? "1" : "12"}
                mb={isNotSmallerScreen ? "0" : "12"} borderRadius='full'
                backgroundColor="transparent" boxShadow="lg"
                boxSize="300px" src='https://avatars.githubusercontent.com/u/92401758?v=4' />
        </Flex>
    </VStack>
  )
}

export default Header
