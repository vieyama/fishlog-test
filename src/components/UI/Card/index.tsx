import React from "react";
import { Text, VStack } from "@chakra-ui/react";

import { ParentStyled } from "./styled";

interface ICardComponent {
  bg: string;
  title: string;
  subtitle: string;
}

const CardComponent: React.FC<ICardComponent> = ({ bg, title, subtitle }) => {
  return (
    <ParentStyled bg={bg}>
      <VStack alignItems="flex-start">
        <Text fontWeight="bold">{title}</Text>
        <Text fontSize="sm">{subtitle}</Text>
      </VStack>
    </ParentStyled>
  );
};

export default CardComponent;
