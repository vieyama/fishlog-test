import { baseUrl } from "@/constants/global";
import { DataCake } from "@/interfaces/cakes";

type ParamsType = { page: number };
const getCake = async (params: ParamsType): Promise<DataCake> => {
  const response = await fetch(`${baseUrl}/cakes?page=${params.page}`);
  const cake = await response.json();
  return cake.data;
};

const deleteCake = async (id: number) => {
  const response = await fetch(`${baseUrl}/cakes/${id}`, {
    method: "DELETE",
  });
  return response;
};

const addCake = async () => {
  const response = await fetch(`${baseUrl}/cakes`, {
    method: "POST",
  });
  return response;
};

export { getCake, deleteCake, addCake };
