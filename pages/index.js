import { sidebarData } from "../utilities/sidebarData";
import Homes from "../components/Home";
import {
  Box,
  HStack,
  Text,
  Input,
  Center,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Heading,
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
// let content = { 0: <Homes />, 1: <Text>Contact page</Text> };
import Modernsidebar from "../components/Modernsidebar";
export default function Home() {
  const drawer = useDisclosure();

  // const [active, setActive] = useState(0);

  return (
    // <Box>
    //   <SimpleGrid columns={12}>
    //     <GridItem colSpan={2} h="100vh" bg="gray.100">
    //       <Stack spacing={4}>
    //         {sidebarData.map((val, id) => {
    //           return (
    //             <Flex
    //               fontSize={id === active ? "2xl" : "1xl"}
    //               bg={id === active ? "red.200" : ""}
    //               transition="all 0.2s"
    //               alignItems="center"
    //               onClick={() => {
    //                 setActive(id);
    //               }}
    //             >
    //               <Box mr={2}>{val.icon}</Box>
    //               <Box>{val.title}</Box>
    //             </Flex>
    //           );
    //         })}
    //       </Stack>
    //     </GridItem>
    //     <GridItem colSpan={10}>{content[active]}</GridItem>
    //   </SimpleGrid>
    // </Box>
    <Box>
      <Box bg="#1A1B1F" h="80px" w="auto">
        <HStack justifyContent="space-between">
          <Box
            textColor="gray.400"
            fontSize="2xl"
            px={4}
            py={8}
            cursor="pointer"
          >
            <GiHamburgerMenu
              onClick={() => {
                drawer.onOpen();
              }}
            />
          </Box>
          <HStack
            spacing={10}
            textColor="gray.400"
            fontWeight="semibold"
            fontSize="1xl"
          >
            <Center
              rounded="lg"
              h="30px"
              w="55px"
              cursor="pointer"
              transition="all 1s"
              _hover={{
                transform: "scale(1.07)",
                bg: "black",
              }}
            >
              <Text>Home</Text>
            </Center>
            <Center
              rounded="lg"
              h="30px"
              w="70px"
              cursor="pointer"
              transition="all 1s"
              _hover={{
                transform: "scale(1.07)",
                bg: "black",
              }}
            >
              <Text>Contact</Text>
            </Center>
            <Center
              rounded="lg"
              h="30px"
              w="45px"
              cursor="pointer"
              transition="all 1s"
              _hover={{
                transform: "scale(1.07)",
                bg: "black",
              }}
            >
              <Text>Buy</Text>
            </Center>
            <Center
              rounded="lg"
              h="30px"
              w="55px"
              cursor="pointer"
              transition="all 1s"
              _hover={{
                transform: "scale(1.07)",
                bg: "black",
              }}
            >
              <Text>Log in</Text>
            </Center>
          </HStack>
          <Box bg="white" rounde="full" h="40px">
            <Input placeholder="Seacrh ..." />
          </Box>
        </HStack>
      </Box>
      <Box>
        <Homes />
      </Box>
      <Drawer
        isOpen={drawer.isOpen}
        placement="left"
        onClose={() => {
          drawer.onClose();
        }}
        closeOnEsc="true"
      >
        <DrawerOverlay />
        <DrawerContent bg="#1A1B1F">
          <DrawerBody>
            <Modernsidebar />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
