import { useSelector } from "react-redux";
import useUserData from "../hooks/useUserData.hook";
import { RootState } from "../services/state/store";
import { IUser } from "../libs/types/user.type";
import UserCard from "../components/UserCard";
import Error from "../components/shared/Error";
import Loading from "../components/shared/Loading";
import Pagination from "../components/Pagination";
import { useLocation } from "react-router-dom";

const HomeScreen = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const pageQueryParam = queryParams.get("page");
  const currentPage = pageQueryParam ? parseInt(pageQueryParam, 10) : 1;

  useUserData(currentPage);
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

      {users && (
        <Pagination
          currentPage={currentPage} // Replace with the actual current page
          totalPages={30} // Replace with the actual total pages
        />
      )}
    </>
  );
};

export default HomeScreen;
