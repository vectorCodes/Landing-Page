import { Box, HStack, VStack, Text, Center } from "@chakra-ui/react";
import React from "react";

function Content() {
  return (
    <Box>
      <Box h="2px" w="full" bg="gray.400" mt={28}></Box>
      <Box px={72} mt={32} position="relative">
        <HStack spacing={6}>
          <Box
            h="580px"
            w="480px"
            rounded="35"
            bgImage="https://images.unsplash.com/photo-1619364744729-f0d1fa79bc79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bmF0dXJlJTIwYmFja2dyb3VuZHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            objectFit="cover"
            objectPosition="right bottom"
          >
            <Center
              textColor="white"
              fontSize="8xl"
              position="absolute"
              bottom="30"
              px={24}
              fontWeight="bold"
            >
              <Text>Nature</Text>
            </Center>
          </Box>

          <VStack>
            <Box
              h="280px"
              w="480px"
              rounded="35"
              bgImage="https://images.pexels.com/photos/924633/pexels-photo-924633.jpeg"
            >
              <Center
                textColor="orange.400"
                fontSize="8xl"
                position="absolute"
                bottom="350"
                px={36}
                fontWeight="bold"
              >
                <Text>Sky</Text>
              </Center>
            </Box>
            <Box
              h="280px"
              w="480px"
              rounded="35"
              bgImage="https://images.pexels.com/photos/1269968/pexels-photo-1269968.jpeg"
            >
              <Center
                textColor="black"
                fontSize="8xl"
                position="absolute"
                bottom="50"
                px={36}
                fontWeight="bold"
              >
                <Text>Wall</Text>
              </Center>
            </Box>
          </VStack>
        </HStack>
      </Box>
    </Box>
  );
}

export default Content;
