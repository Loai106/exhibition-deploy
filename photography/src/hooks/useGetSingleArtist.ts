import { useQuery } from "react-query";
import { apiClient, Artist, END_POINTS, QUERY_KEY } from "../types";

const useGetSingleArtist = (id: string) => {
  return useQuery({
    queryKey: [QUERY_KEY.ARTIST],
    queryFn: async () => await apiClient.get<Artist>(`${END_POINTS.GET_ARTIST}/${id}`),
    onError: (error) => {
      console.log("Failed to fetch data", error);
      throw error;
    },
  });
};

export default useGetSingleArtist;
