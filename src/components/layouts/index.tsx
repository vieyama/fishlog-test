import React, { useLayoutEffect } from "react";
import { Box, Container, Heading, Stack, useColorMode } from "@chakra-ui/react";
import Head from "next/head";

interface ILayoutComponent {
  children: React.ReactNode;
}

const LayoutComponent: React.FC<ILayoutComponent> = ({ children }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  useLayoutEffect(() => {
    colorMode === "dark" && toggleColorMode();
  }, []);
  return (
    <>
      <Head>
        <title>Cats List</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box p={4} mt={10}>
        <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
          <Heading fontSize={"3xl"}>Cats List</Heading>
        </Stack>

        <Container maxW="8xl" mt={5}>
          {children}
        </Container>
      </Box>
    </>
  );
};

export default LayoutComponent;
