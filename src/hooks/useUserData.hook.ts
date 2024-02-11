import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchURL, numberOfItems } from "../configs/urls";
import { updateUserData } from "../services/state/slices/user.slice";
import { IUser } from "../libs/types/user.type";

interface IFetchResponse {
  data: {
    results: IUser[];
  };
}

const useUserData = (page: number = 1) => {
  const dispatcher = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = (await axios.get(
          `${fetchURL}?page=${page}&results=${numberOfItems}`
        )) as IFetchResponse;

        dispatcher(
          updateUserData({ users: response.data.results, error: false })
        );
      } catch (error) {
        dispatcher(updateUserData({ users: undefined, error: true }));
      }
    };
    fetchData();
  }, [page, dispatcher]);
};

export default useUserData;
