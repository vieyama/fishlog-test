import React from "react";
import {
  Box,
  Button,
  Container,
  SimpleGrid,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";

import { primaryColor } from "@/constants/global";
import CardComponent from "../UI/Card";

const SectionTwo = () => {
  const [isLargerThan1555] = useMediaQuery("(min-width: 1555px)", {
    ssr: true,
    fallback: false, // return false on the server, and re-evaluate on the client side
  });

  const [isLargerThan750] = useMediaQuery("(min-width: 750px)", {
    ssr: true,
    fallback: false, // return false on the server, and re-evaluate on the client side
  });
  return (
    <Box bg="white" color="black" p="50px">
      <Container maxW="80vw" w="80vw">
        <SimpleGrid spacing={10} columns={isLargerThan1555 ? 2 : 1}>
          <Box>
            <Text fontSize="26px" fontWeight="700" lineHeight="1.35">
              Solutions for Supplier
            </Text>
            <Text mt={5} fontWeight="light">
              Anyone can join the FishLog ecosystem. Our technology is designed
              to be inclusive, allowing anyone in the fisheries sector to be
              part of our progress and advancement together.
            </Text>
            <Button bg={primaryColor} color="white" borderRadius={20} mt={5}>
              Become Supplier
            </Button>
          </Box>
          <Box
            display="flex"
            flexDirection={isLargerThan750 ? "row" : "column"}
            columnGap={10}
            rowGap={10}
            alignItems={"center"}
          >
            <CardComponent
              bg="https://fishlog.co.id/_next/static/images/product_section_one_grid_one-5de82e8adcf896a6f1fdb5d29136b58a.png"
              title="FishLog Quality Center"
              subtitle="Collaborating with aggregators, distributors, or exporters using the Joint Operation business model to develop business together, search for supply sources, expand markets and reach new buyers while maintaining quality."
            />
            <CardComponent
              bg="https://fishlog.co.id/_next/static/images/product_section_one_grid_one-5de82e8adcf896a6f1fdb5d29136b58a.png"
              title="FishLog Quality Center"
              subtitle="Collaborating with aggregators, distributors, or exporters using the Joint Operation business model to develop business together, search for supply sources, expand markets and reach new buyers while maintaining quality."
            />
          </Box>
        </SimpleGrid>

        <SimpleGrid mt={10} spacing={10} columns={isLargerThan1555 ? 2 : 1}>
          <Box
            display="flex"
            flexDirection={isLargerThan750 ? "row" : "column"}
            columnGap={10}
            rowGap={10}
            alignItems={"center"}
          >
            <CardComponent
              bg="https://fishlog.co.id/_next/static/images/product_section_one_grid_one-5de82e8adcf896a6f1fdb5d29136b58a.png"
              title="FishLog Quality Center"
              subtitle="Collaborating with aggregators, distributors, or exporters using the Joint Operation business model to develop business together, search for supply sources, expand markets and reach new buyers while maintaining quality."
            />
            <CardComponent
              bg="https://fishlog.co.id/_next/static/images/product_section_one_grid_one-5de82e8adcf896a6f1fdb5d29136b58a.png"
              title="FishLog Quality Center"
              subtitle="Collaborating with aggregators, distributors, or exporters using the Joint Operation business model to develop business together, search for supply sources, expand markets and reach new buyers while maintaining quality."
            />
          </Box>
          <Box>
            <Text fontSize="26px" fontWeight="700" lineHeight="1.35">
              Solutions for Buyer
            </Text>
            <Text mt={5} fontWeight="light">
              We are open to collaborating with anyone in the fisheries industry
              to distribute fish as a source of protein as widely as possible.
            </Text>
            <Button bg={primaryColor} color="white" borderRadius={20} mt={5}>
              Become Buyer
            </Button>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default SectionTwo;
