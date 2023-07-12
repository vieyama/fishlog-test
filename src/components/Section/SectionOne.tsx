import React from "react";
import {
  Box,
  Container,
  Flex,
  Image,
  Text,
  VStack,
  useMediaQuery,
} from "@chakra-ui/react";

const SectionOne = () => {
  const [isLargerThan1000] = useMediaQuery("(min-width: 1000px)", {
    ssr: true,
    fallback: false, // return false on the server, and re-evaluate on the client side
  });

  return (
    <Box bg="rgb(227, 231, 237)" color="black">
      <Container maxW="77vw" w="77vw">
        <Flex
          direction={isLargerThan1000 ? "row" : "column"}
          alignItems="flex-start"
          p="70px 0px"
          columnGap={10}
        >
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
