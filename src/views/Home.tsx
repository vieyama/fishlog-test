import LayoutComponent from "@/components/layouts";
import { useGetBreed } from "@/hooks/useGetBreeds";
import { getCats } from "@/services/catsService";
import { Box, Button, Center, Image, Select, useToast } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const Home = () => {
  const toast = useToast();

  const { data } = useGetBreed();

  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);
  const [breedId, setBreedId] = useState("");

  const [dataCats, setDataCats] = useState<{ id: string; url: string }[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const getData = async () => {
    setIsLoading(true);
    await getCats({
      page: page,
      breed_ids: breedId,
      limit: 10,
    })
      .then((res) => {
        setDataCats((prev) => [...prev, ...res]);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
      });
  };

  const handleChangeBreed = (e: { target: { value: string } }) => {
    setBreedId(e.target.value);
    setPage(1);
    setDataCats([]);
  };

  useEffect(() => {
    breedId.length > 0 && getData();
  }, [breedId]);

  useEffect(() => {
    page > 1 && getData();
  }, [page]);

  const getMoreCats = async () => {
    setPage((prev) => prev + 1);
  };

  return (
    <LayoutComponent>
      <Center>
        <Select
          placeholder="Select Breed"
          w="200px"
          onChange={handleChangeBreed}
          mb={5}
        >
          {data.map((breed, key) => (
            <option key={key} value={breed?.id}>
              {breed?.name}
            </option>
          ))}
        </Select>
      </Center>
      {isLoading && (
        <Center mt={5}>
          <h3> Loading ...</h3>
        </Center>
      )}
      {dataCats.length > 0 && (
        <InfiniteScroll
          dataLength={dataCats.length}
          next={getMoreCats}
          hasMore={data.length >= 10 && page < 12}
          loader={
            <Center mt={5}>
              <h3> Loading ...</h3>
            </Center>
          }
        >
          <Box
            style={{
              columns: "4 280px",
              columnGap: "1rem",
            }}
          >
            {dataCats.map((data) => (
              <Box
                key={data.id}
                maxW="sm"
                borderWidth="1px"
                rounded="lg"
                shadow="lg"
                position="relative"
                margin="0 0 1rem"
              >
                <Image
                  src={data.url}
                  alt={`Picture of cat`}
                  rounded="lg"
                  width="100%"
                  objectFit="cover"
                />
              </Box>
            ))}
          </Box>
        </InfiniteScroll>
      )}
    </LayoutComponent>
  );
};

export default Home;
