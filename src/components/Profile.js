import React from 'react'
import { Box, Flex, Text, Icon, useMediaQuery } from "@chakra-ui/react";
import { IoLibraryOutline, IoSchoolSharp } from "react-icons/io5";
import { MdWeb } from "react-icons/md";

function Profile() {

    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

  return (
    <Flex direction={isNotSmallerScreen ? "row" : "column"} w="100%"
        maxWidth={{ base: "100vh", md: "130vh", lg: "130vh", xl: "130vh" }} alignSelf="center">
        <Box alignSelf="center" px="15" py="16">
            <Text fontWeight="bold" fontSize="2xl" textAlign="left">Projects Portfolio</Text>
            <Flex direction={isNotSmallerScreen ? "row" : "column"} mt={8} >
                <Flex rounded="xl" direction="column" mt={4} bg="blue.400" h="30vh" w="30vh" justify="flex-end" onClick={() =>
                        window.open('https://github.com/Edefuccal33/Booky')}>
                    <Icon color="white" p="4" as={IoLibraryOutline} w="24" h="24"/>
                    <Text color="white" p="4" fontSize="xl" fontWeight="semibold">
                        Booky (MVC)
                    </Text>
                </Flex>
                <Flex rounded="xl" direction="column" mt={4} ml={isNotSmallerScreen ? 4 : 0}
                    bg="gray.100" h="30vh" w="30vh" justify="flex-end" _hover={{ bg: "teal.400", }} onClick={() =>
                        window.open('https://github.com/Edefuccal33/School.git')}>
                    <Icon color="black" p="4" as={IoSchoolSharp} w="24" h="24" />
                    <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
                    School APIRest
                    </Text>
                </Flex>
                <Flex rounded="xl" direction="column" mt={4} ml={isNotSmallerScreen ? 4 : 0}
                    bg="gray.100" h="30vh" w="30vh" justify="flex-end"
                    _hover={{ bg: "green.400", }}
                >
                    <Icon as={MdWeb} p="4" w="24" h="24" color="black" />
                    <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
                        This page
                    </Text>
                </Flex>
            </Flex>
        </Box>
    </Flex>
  )
}

export default Profile
