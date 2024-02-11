import { useSelector } from "react-redux";
import useUserData from "../hooks/useUserData.hook";
import { RootState } from "../services/state/store";
import { IUser } from "../libs/types/user.type";
import UserCard from "../components/UserCard";
import Error from "../components/shared/Error";
import Loading from "../components/shared/Loading";

const HomeScreen = () => {
  useUserData();
  const { users, error } = useSelector((state: RootState) => state.userReducer);

  return (
    <div>
      {error ? (
        <Error />
      ) : users ? (
        users.map((user: IUser) => <UserCard user={user} key={user.id.value} />)
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default HomeScreen;
