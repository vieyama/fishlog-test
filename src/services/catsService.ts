import { apiKey, baseUrl } from "@/constants/global";

const getBreeds = async () => {
  const response = await fetch(`${baseUrl}/breeds`);
  const breeds = await response.json();

  return breeds;
};

const getCats = async (params: {
  breed_ids: string;
  limit: number;
  page: number;
}) => {
  const { breed_ids, limit, page } = params;

  const response = await fetch(
    `${baseUrl}/images/search?limit=${limit}&page=${page}&breed_ids=${breed_ids}`,
    {
      headers: {
        "x-api-key": apiKey as string,
      },
    }
  );
  const cats = await response.json();

  return cats;
};

export { getBreeds, getCats };
