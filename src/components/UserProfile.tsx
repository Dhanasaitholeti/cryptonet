import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../services/state/store";
import UserPersonalDetails from "./UsrePersonalDetails";

const UserProfile = () => {
  const { userid } = useParams();
  const userData = useSelector(
    (state: RootState) =>
      state.userReducer.users &&
      state.userReducer.users.find((user) => user.login.uuid === userid)
  );

  if (!userData) {
    return (
      <div className="min-h-screen flex  justify-center items-start py-4">
        <h1 className="text-2xl text-white">User Not Exist</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex  justify-center items-start py-4">
      <UserPersonalDetails userData={userData} />
    </div>
  );
};

export default UserProfile;
