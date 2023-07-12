import {
  Box,
  Container,
  Flex,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const SectionOne = () => {
  return (
    <Box bg="rgb(227, 231, 237)" color="black">
      <Container maxW="77vw" w="77vw">
        <Flex alignItems="flex-start" p="70px 0px" columnGap={10}>
          <Image
            src="/assets/rounded.svg"
            alt="fishlog earth"
            w="100%"
            objectFit="cover"
          />
          <VStack>
            <Text
              fontSize="30px"
              fontWeight="700"
              lineHeight="1.3"
              m="20px 0px"
            >
              FishLog Believes that Technology is the great resources to
              tackling Food Loss Problem
            </Text>
            <Text>
              FishLog, along with our ecosystem partners, measures our success
              by the success of our ecosystem partners, including fishermen,
              fish farmers, cold storage processors, logistics services, and SME
              buyers. Additionally, we are committed to reducing food loss
              issues.
            </Text>
          </VStack>
        </Flex>
      </Container>
    </Box>
  );
};

export default SectionOne;
