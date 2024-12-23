import { useQuery } from "react-query";
import { apiClient, Painting, END_POINTS, QUERY_KEY } from "../types";

const useGetAllPainting = () => {
  return useQuery({
    queryKey: [QUERY_KEY.ALL_PAINTINGS],
    queryFn: () => apiClient.get<Painting[]>(END_POINTS.GET_ALL_PAINTINGS),
    onError: (error) => {
      console.log("Failed to fetch data", error);
      throw error;
    },
  });
};

export default useGetAllPainting;
