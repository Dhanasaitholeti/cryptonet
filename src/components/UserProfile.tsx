import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../services/state/store";

const UserProfile = () => {
  const { userid } = useParams();
  const userData = useSelector(
    (state: RootState) =>
      state.userReducer.users &&
      state.userReducer.users.find((user) => user.login.uuid === userid)
  );

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <img
          src={userData?.picture.large}
          alt="User"
          className="w-32 h-32 rounded-full mx-auto mb-4"
        />
        <h1 className="text-3xl text-center mb-4">{`${userData?.name.title} ${userData?.name.first} ${userData?.name.last}`}</h1>
        <p className="text-center">{userData?.email}</p>
        <p className="text-center">{userData?.phone}</p>
        <p className="text-center">{userData?.cell}</p>
        <p className="text-center">
          {userData?.location.city}, {userData?.location.country}
        </p>
        <p className="text-center">{`Age: ${userData?.dob.age}`}</p>
      </div>
    </div>
  );
};

export default UserProfile;
