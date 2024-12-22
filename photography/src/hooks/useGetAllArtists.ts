import { useQuery } from "react-query";
import { apiClient, Artist, END_POINTS, QUERY_KEY } from "../types";

const useGetAllArtists = () => {
  return useQuery({
    queryKey: [QUERY_KEY.ALL_ARTISTS],
    queryFn: async () => await apiClient.get<Artist>(END_POINTS.GET_ALL_ARTISTS),
    onError: (error) => {
      console.log("Failed to fetch data", error);
      throw error;
    },
  });
};

export default useGetAllArtists;
