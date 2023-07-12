import { Flex, Image, Link } from "@chakra-ui/react";
import React from "react";

const Header = () => {
  return (
    <Flex bg="gray" justifyContent="space-between" p="20px 40px" alignItems="center">
      <Image
        src="https://fishlog.co.id/_next/static/images/whitelogo-401cd74af6ede4a7c237b29591e9319f.png"
        alt="fishlog logo"
        w="150px"
      />
      <Flex columnGap={8}>
        <Link>Home</Link>
        <Link fontWeight="bold">About</Link>
        <Link>Product</Link>
        <Link>Fishlog Quality Center</Link>
        <Link>B2B Marketplace</Link>
      </Flex>
    </Flex>
  );
};

export default Header;
