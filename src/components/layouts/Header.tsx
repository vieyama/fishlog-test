import React from "react";
import {
  Box,
  Container,
  Flex,
  IconButton,
  Image,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { menuList } from "@/constants/menuList";
import { HamburgerIcon } from "@chakra-ui/icons";

const Header = () => {
  const [isLargerThan810] = useMediaQuery("(min-width: 810px)", {
    ssr: true,
    fallback: false, // return false on the server, and re-evaluate on the client side
  });

  const [isLargerThan680] = useMediaQuery("(min-width: 680px)", {
    ssr: true,
    fallback: false, // return false on the server, and re-evaluate on the client side
  });

  return (
    <Box
      height="45vh"
      background="linear-gradient(rgb(0 0 0 / 75%), rgb(195 55 100 / 0%)), url(https://fishlog.co.id/_next/static/images/about_hero-f16800403deafd3947b704efc2ffd4ca.jpg);"
      bgRepeat="no-repeat"
      bgPosition="center"
      bgSize="cover"
    >
      <Flex justifyContent="space-between" p="20px 40px" alignItems="center">
        <Image
          src="https://fishlog.co.id/_next/static/images/whitelogo-401cd74af6ede4a7c237b29591e9319f.png"
          alt="fishlog logo"
          w="150px"
        />
        <Flex columnGap={8} display={isLargerThan810 ? "flex" : "none"}>
          {menuList.map((menu, key) => (
            <Link key={key} fontWeight={menu.isActive ? "bold" : "normal"}>
              {menu.name}
            </Link>
          ))}
        </Flex>
        <Menu>
          <MenuButton
            display={isLargerThan810 ? "none" : "block"}
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon />}
            variant="outline"
          />
          <MenuList>
            {menuList.map((menu, key) => (
              <MenuItem key={key}>{menu.name}</MenuItem>
            ))}
          </MenuList>
        </Menu>
      </Flex>
      <Container maxW="90vw" w="90vw">
        <Flex
          height="30vh"
          alignItems="center"
          w={isLargerThan680 ? "50vw" : "100%"}
        >
          <Text fontWeight="extrabold" fontSize="4xl" lineHeight={10}>
            Solution for a better seafood industry.
          </Text>
        </Flex>
      </Container>
    </Box>
  );
};

export default Header;
