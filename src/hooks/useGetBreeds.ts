import { getBreeds } from "@/services/catsService";
import { useEffect, useState } from "react";

export const useGetBreed = () => {
  const [data, setData] = useState<{ id: string; name: string }[]>([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const getData = async () => {
    setIsLoading(true);
    await getBreeds()
      .then((res) => {
        setData(res);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const refetch = () => getData();

  return { data, isLoading, refetch, error };
};
