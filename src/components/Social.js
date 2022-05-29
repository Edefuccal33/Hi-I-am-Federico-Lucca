import React from 'react'
import { Icon, Spacer, Stack, Text, VStack} from "@chakra-ui/react";
import { DiMysql, DiJava } from 'react-icons/di'
import { SiSpring, SiThymeleaf, SiHtml5, SiCss3, SiReact, SiJavascript, SiGit } from "react-icons/si";
import { BsBootstrapFill } from "react-icons/bs";

function Social() {
  return (
    <VStack >
        <Text fontWeight="bold" fontSize="2xl" pb={5}>Technologies</Text>
        <Stack spacing="14" direction="row" pb={7} >
          <Spacer/>
            <Icon as={DiJava} boxSize="50" />
            <Icon as={SiSpring} boxSize="50" />
            <Icon as={SiReact} boxSize="50" />
            <Icon as={DiMysql} boxSize="50" />
            <Icon as={SiThymeleaf} boxSize="50" />
          <Spacer/>
        </Stack>
        <Stack spacing="14" direction="row" >
            <Icon as={SiHtml5} boxSize="50" />
            <Icon as={SiCss3} boxSize="50" />
            <Icon as={SiJavascript} boxSize="50" />
            <Icon as={SiGit} boxSize="50" />
            <Icon as={BsBootstrapFill} boxSize="50" />
        </Stack>
    </VStack>
  )
}

export default Social
