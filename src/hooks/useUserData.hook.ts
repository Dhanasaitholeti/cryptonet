import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchURL, numberOfItems } from "../configs/urls";
import { updateUserData } from "../services/state/slices/user.slice";

const useUserData = (page: number = 1) => {
  const dispatcher = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${fetchURL}?page=${page}&results=${numberOfItems}`
        );
      } catch (error) {
        dispatcher(updateUserData({ users: undefined, error: true }));
      }
    };
  });
};

export default useUserData;
