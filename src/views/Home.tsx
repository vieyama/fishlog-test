import LayoutComponent from "@/components/layouts";
import { CakesResponse, DataCake } from "@/interfaces/cakes";
import { CounterState, setCakeList } from "@/redux/cakeStore";
import { CakeState } from "@/redux/store";
import { addCake, deleteCake, getCake } from "@/services/cakeService";
import {
  Badge,
  Box,
  Button,
  Center,
  Circle,
  Flex,
  Icon,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  NumberInput,
  NumberInputField,
  Text,
  Textarea,
  Tooltip,
  useColorModeValue,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const { cakeList } = useSelector((state: CakeState) => state?.cake);
  const toast = useToast();
  const dispatch = useDispatch();

  const [needFetch, setNeedFetch] = useState(false);
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPage: 1,
  });

  useEffect(() => {
    if (cakeList) {
      setNeedFetch(cakeList.current_page === 0);
    }
  }, [cakeList, needFetch]);

  console.log(cakeList.items);

  const getCakeData = async () => {
    await getCake({ page: cakeList.current_page }).then((res) => {
      console.log(res);
      const save = {
        current_page:
          cakeList.current_page === 0
            ? res.current_page
            : cakeList.current_page + 1,
        total_page: res.total_page,
        items:
          cakeList.items.length === 0
            ? res.items
            : [...cakeList.items, ...res.items],
      };
      dispatch(setCakeList(save));
    });
  };

  useEffect(() => {
    cakeList.current_page === 0 && getCakeData();
  }, [cakeList.current_page]);

  const handleLoadMore = () => {
    if (cakeList.current_page <= cakeList.total_page) {
      getCakeData();
    }
  };

  const handleDelete = async (id: string) => {
    await deleteCake(Number(id)).then((res) => {
      const dataIndex = cakeList.items.findIndex((e) => e.id === id);
      const currentData = [...cakeList.items];
      currentData.splice(dataIndex, 1);
      dispatch(setCakeList({ ...cakeList, items: currentData }));
      toast({
        title: "Item deleted",
        status: "success",
        duration: 2000,
        isClosable: true,
        position: "top-right",
      });
    });
  };

  const handleSave = async () => {
    await addCake().then(() => {
      getCakeData();
      toast({
        title: "Item Added",
        status: "success",
        duration: 2000,
        isClosable: true,
        position: "top-right",
      });
    });
  };

  const { isOpen, onOpen, onClose } = useDisclosure();
  const cardBg = useColorModeValue("white", "gray.800");

  return (
    <LayoutComponent>
      <Center>
        <Button onClick={onOpen}>Add Cake</Button>
      </Center>
      <Flex
        wrap="wrap"
        p={50}
        w="full"
        columnGap={15}
        rowGap={15}
        alignItems="center"
        justifyContent="center"
      >
        {cakeList.items?.map((cake, key) => (
          <Box
            key={key}
            bg={cardBg}
            maxW="sm"
            borderWidth="1px"
            rounded="lg"
            shadow="lg"
            position="relative"
            width={300}
            height={350}
          >
            <Image
              src={cake.image}
              alt={`Picture of ${cake.title}`}
              roundedTop="lg"
              width="100%"
              height="200px"
              objectFit="cover"
            />

            <Box p="6">
              <Box display="flex" alignItems="baseline">
                <Badge
                  rounded="full"
                  px="2"
                  fontSize="0.8em"
                  colorScheme="red"
                  onClick={() => handleDelete(cake.id)}
                  cursor="pointer"
                >
                  Delete
                </Badge>
              </Box>
              <Flex
                mt="1"
                direction="column"
                justifyContent="space-between"
                alignContent="center"
              >
                <Tooltip label={cake.description}>
                  <Box
                    fontSize="1xl"
                    fontWeight="semibold"
                    as="h4"
                    lineHeight="tight"
                    isTruncated
                  >
                    {cake.title}
                  </Box>
                </Tooltip>
                <Tooltip label={cake.description}>
                  <Text isTruncated>{cake.description}</Text>
                </Tooltip>
              </Flex>

              <Flex justifyContent="space-between" alignContent="center">
                Rating : {cake.rating}
              </Flex>
            </Box>
          </Box>
        ))}
      </Flex>
      <Center mb={20}>
        <Button
          display={
            cakeList.current_page <= cakeList.total_page &&
            cakeList.items.length > 0
              ? "block"
              : "none"
          }
          onClick={handleLoadMore}
        >
          Load More
        </Button>
      </Center>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex direction="column" rowGap={5}>
              <Input placeholder="Title" />
              <Textarea placeholder="Description" />
              <NumberInput
                placeholder="Rating"
                defaultValue={15}
                precision={2}
                step={0.2}
              >
                <NumberInputField />
              </NumberInput>
              <Button onClick={handleSave}>Save</Button>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </LayoutComponent>
  );
};

export default Home;
