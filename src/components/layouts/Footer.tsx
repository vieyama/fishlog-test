import { primaryColor } from "@/constants/global";
import {
  Box,
  Button,
  Divider,
  Flex,
  HStack,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Box pos="fixed" bottom={0} bg={primaryColor} p="70px" w="100%">
      <SimpleGrid columns={2} spacing={10}>
        <Box>
          <Text fontSize="2.125rem" lineHeight={10} fontWeight="extrabold">
            Join us and be a part of building the fisheries ecosystem in
            Indonesia!
          </Text>
        </Box>
        <Box display="flex" justifyContent="flex-end" alignItems="flex-start">
          <HStack columnGap="55px">
            <Button
              bg="white"
              color={primaryColor}
              borderRadius={30}
              fontSize={13}
              w="120px"
            >
              Buyer
            </Button>
            <Button
              bg="white"
              color={primaryColor}
              borderRadius={30}
              fontSize={13}
              w="120px"
            >
              Supplier
            </Button>
          </HStack>
        </Box>
        <Box>
          <Text fontWeight="extrabold" mb={2}>
            PT. Rantai Pasok Teknologi
          </Text>
          <Text fontWeight="light">
            Aviso Office, Epicentrum Walk, Lt 3 A306-307, Setiabudi, Jakarta
            Selatan Telp. 0251 8579380
          </Text>
        </Box>
        <Box>
          <SimpleGrid columns={3} spacing={10}>
            <Box>
              <Text fontWeight="extrabold" mb={2}>
                Partnership
              </Text>
              <VStack alignItems="flex-start" mt={5} rowGap={3}>
                <Button variant="link" fontSize="15">
                  Buyer
                </Button>
                <Button variant="link" fontSize="15">
                  Supplier
                </Button>
              </VStack>
            </Box>
            <Box>
              <Text fontWeight="extrabold" mb={2}>
                Company
              </Text>
              <VStack alignItems="flex-start" mt={5} rowGap={3}>
                <Button variant="link" fontSize="15">
                  About
                </Button>
                <Button variant="link" fontSize="15">
                  Privacy Policy
                </Button>
                <Button variant="link" fontSize="15">
                  Blog
                </Button>
                <Button variant="link" fontSize="15">
                  Career
                </Button>
              </VStack>
            </Box>
            <Box>
              <Image
                src="https://fishlog.co.id/_next/static/images/delivery-7ddb65d2cc7713d7f5f74f827f735c3f.png"
                alt="fishlog"
              />
            </Box>
          </SimpleGrid>
        </Box>
      </SimpleGrid>
      <Divider mt={10} mb={2} borderBottom="1px solid white" opacity={1} />
      <Flex justifyContent="space-between">
        <Text fontSize="13px">© 2023 FishLog. All rights reserved</Text>
        <VStack alignItems="flex-start">
          <Text fontWeight="bold">Find us on</Text>
          <HStack>
            <Button size="sm" bg="white" p="0px" borderRadius={20}>
              <Image
                w="20px"
                src="/assets/icons8-instagram-50.png"
                alt="fishlog instagram"
              />
            </Button>
            <Button size="sm" bg="white" p="0px" borderRadius={20}>
              <Image
                w="20px"
                src="/assets/icons8-facebook-50.png"
                alt="fishlog facebook"
              />
            </Button>
            <Button size="sm" bg="white" p="0px" borderRadius={20}>
              <Image
                w="20px"
                src="/assets/icons8-youtube-50.png"
                alt="fishlog youtube"
              />
            </Button>
            <Button size="sm" bg="white" p="0px" borderRadius={20}>
              <Image
                w="20px"
                src="/assets/icons8-linkedin-50.png"
                alt="fishlog linkedin"
              />
            </Button>
          </HStack>
        </VStack>
      </Flex>
    </Box>
  );
};

export default Footer;
