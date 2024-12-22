import { useQuery } from "react-query";
import { apiClient, END_POINTS, Painting, QUERY_KEY } from "../types";

const useGetSinglePainting = (id: string) => {
  return useQuery({
    queryKey: [QUERY_KEY.PAINTING],
    queryFn: async () =>
      await apiClient.get<Painting>(`${END_POINTS.GET_PAINTING}/${id}`),
    onError: (error) => {
      console.log("Failed to fetch data", error);
      throw error;
    },
  });
};

export default useGetSinglePainting;
