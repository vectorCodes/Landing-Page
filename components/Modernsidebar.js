import React, { useState } from "react";
import { Box, Text, HStack, Stack, Spacer, Heading } from "@chakra-ui/react";
import { FiActivity, FiHome } from "react-icons/fi";
import { BiTask, BiHome, BiWrench } from "react-icons/bi";
import { AiOutlineInbox } from "react-icons/ai";
import { MdPayment } from "react-icons/md";
import { BsHouseDoorFill } from "react-icons/bs";
import { MdWorkOutline } from "react-icons/md";

const sideBarItems = [
  {
    title: "Home",
    icon: <FiHome />,
  },
  {
    title: "Activity",
    icon: <FiActivity />,
  },
  {
    title: "Tasks",
    icon: <BiTask />,
  },
];

const sideBarItems2 = [
  {
    title: "Overview",
    icon: <BiHome />,
  },
  {
    title: "Inbox",
    icon: <AiOutlineInbox />,
  },
  {
    title: "Payments",
    icon: <MdPayment />,
  },
  {
    title: "Properties",
    icon: <BsHouseDoorFill />,
  },
  {
    title: "Maintenance",
    icon: <MdWorkOutline />,
  },
  {
    title: "Rent",
    icon: <BiWrench />,
  },
];

function Modernsidebar() {
  const [active, setActive] = useState("Home");

  return (
    <Box w="270px" bg="#1A1B1F">
      <Box>
        <Stack py={12} px={6} pb={16}>
          {sideBarItems.map((side, idx) => {
            let isActive = side.title === active;
            return (
              <HStack
                key={idx}
                bg={isActive ? "green.500" : ""}
                textColor={isActive ? "white" : "gray.400"}
                rounded="lg"
                px={2}
                cursor="pointer"
                userSelect="none"
                transition="all 0.4s"
                transform={isActive ? "scale(1.06)" : ""}
                py={2}
                onClick={() => {
                  setActive(side.title);
                }}
              >
                <Text mr={4}>{side.icon}</Text>
                <Text>{side.title}</Text>
                <Spacer />
                <Box>
                  <Box h="9px" w="9px" bg="#2B5BE9" rounded="lg"></Box>
                </Box>
              </HStack>
            );
          })}
        </Stack>

        <Stack px={6}>
          {sideBarItems2.map((side, idx) => {
            const isActive = side.title === active;
            return (
              <HStack
                key={idx}
                spacing={6}
                bg={isActive ? "green.500" : ""}
                textColor={isActive ? "white" : "gray.400"}
                transition="all 0.5s"
                px={2}
                transform={isActive ? "scale(1.06)" : ""}
                rounded="lg"
                userSelect="none"
                cursor="pointer"
                onClick={() => {
                  setActive(side.title);
                }}
              >
                <Box my={4}>{side.icon}</Box>
                <Box fontWeight="semibold">
                  <Text>{side.title}</Text>
                </Box>
              </HStack>
            );
          })}
        </Stack>
      </Box>
    </Box>
  );
}

export default Modernsidebar;
