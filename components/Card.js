import React from "react";
import { Box, Heading, HStack, Text, Spacer, Image } from "@chakra-ui/react";
function Card() {
  return (
    <Box>
      <Box h="2px" w="full" bg="gray.400" mt={28}></Box>
      <Box
        p={24}
        transition="all 0.8s "
        _hover={{
          transform: "scale(1.02) ",
          cursor: "pointer",
        }}
      >
        <Image
          src="https://images.unsplash.com/photo-1525092029632-cb75fe5dd776?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YWRpZGFzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
          alt="adidas"
          roundedTop="15"
        />

        <Box maxW="350px" bg="gray.300" roundedBottom="15" p={8} shadow="xl">
          <HStack>
            <Text textColor="black" fontSize="2xl" fontWeight="bold">
              Adidas Originals
            </Text>
            <Spacer />
            <Text color="green" fontSize="2xl" fontWeight="semibold">
              $39
            </Text>
          </HStack>
          <Box textColor="gray.500" mt={2}>
            <Text> Men&apos;s running shirt</Text>
          </Box>
          <Box textColor="black" fontWeight="bold" fontSize="2xl" mt={6}>
            <Text>SIZES</Text>
          </Box>
          <HStack textColor="gray.500" mt={2}>
            <Text>XS</Text>
            <Text>S</Text>
            <Text>M</Text>
            <Text>L</Text>
            <Text>Xl</Text>
            <Text>XXL</Text>
          </HStack>
          <Box textColor="black" fontSize="2xl" font fontWeight="bold" mt={4}>
            <Text>COLORS</Text>
          </Box>
          <HStack mt={6} spacing={4}>
            <Box h="18px" w="18px" bg="red.600" rounded="lg"></Box>
            <Box h="18px" w="18px" bg="green.600" rounded="lg"></Box>
            <Box h="18px" w="18px" bg="yellow.600" rounded="lg"></Box>
            <Box h="18px" w="18px" bg="orange.600" rounded="lg"></Box>
          </HStack>
        </Box>
      </Box>
    </Box>
  );
}

export default Card;
