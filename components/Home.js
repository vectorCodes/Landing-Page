import React from "react";
import { BiHeart, BiBell, BiCloset } from "react-icons/bi";
import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";
import {
  Box,
  Text,
  Heading,
  HStack,
  Spacer,
  Button,
  Center,
} from "@chakra-ui/react";
import Content from "./Content";
import Card from "./Card";
function Homes() {
  return (
    <Box p={2}>
      <Box
        h="500px"
        w="full"
        bgImage="https://images.unsplash.com/photo-1519046904884-53103b34b206"
        objectFit="cover"
        bgPosition="initial"
        position="relative"
      >
        <HStack p={4}>
          <Text fontSize="2xl" fontWeight="bold" textColor="white">
            Rototo
          </Text>
          <Spacer />
          <HStack spacing={6}>
            <Box textColor="white" fontSize="2xl" fontWeight="bold">
              <Button colorScheme="purple" rounded="lg">
                Become Host
              </Button>
            </Box>

            <Box fontSize="2xl" textColor="white">
              <BiHeart />
            </Box>
            <Box fontSize="2xl" textColor="white">
              <BiBell />
            </Box>
            <Box fontSize="2xl" textColor="white">
              <BiCloset />
            </Box>
          </HStack>
        </HStack>
        <Box mt={40}>
          <Center textColor="white">
            <Heading
              fontSize="5xl"
              fontWeight="bold"
              maxW="lg"
              textAlign="center"
            >
              Find The Best Place to Enjoy Your Time
            </Heading>
          </Center>
          <Center>
            <Text textColor="white" fontSize="2xl" fontWeight="semibold" mt={2}>
              Created By Vector
            </Text>
          </Center>
        </Box>
        <HStack>
          <Box
            textColor="gray.600"
            fontSize="2xl"
            mt={16}
            px={4}
            fontWeight="semibold"
          >
            <Text>Design by Vector</Text>
          </Box>
          <Center bottom="-50" position="absolute" w="full">
            <Box w="45%" h="110px" shadow="xl" bg="gray.100" rounded="xl">
              <HStack p={4} fontWeight="semibold" textColor="gray.500">
                <Text>Location</Text>
                <Spacer />
                <HStack spacing={4} pr={16} pl={12}>
                  <Box h="65px" w="1px" bg="gray.400"></Box>
                  <Text> Check in</Text>
                  <Box h="65px" w="1px" bg="gray.400"></Box>
                  <Text> check out</Text>
                  <Box h="65px" w="1px" bg="gray.400"></Box>
                  <Text>Guest</Text>
                  <Box pl={4}>
                    <Center
                      h="38px"
                      w="45px"
                      bg="purple.600"
                      rounded="md"
                      textColor="white"
                      fontSize="3xl"
                    >
                      <AiOutlineSearch />
                    </Center>
                  </Box>
                </HStack>
              </HStack>
            </Box>
          </Center>
        </HStack>
      </Box>
      <Box>
        <Content />
      </Box>
      <HStack>
        <Card />
        <Box>
          <Card />
        </Box>
        <Box>
          <Card />
        </Box>
      </HStack>
    </Box>
  );
}

export default Homes;
