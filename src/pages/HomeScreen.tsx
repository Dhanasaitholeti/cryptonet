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
    <>
      {error ? (
        <Error />
      ) : users ? (
        <div className="grid grid-cols-4 mx-auto justify-center items-center px-16 py-4">
          {users.map((user: IUser) => (
            <UserCard user={user} key={user.login.uuid} />
          ))}
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default HomeScreen;
