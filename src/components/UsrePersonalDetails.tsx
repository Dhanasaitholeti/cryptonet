import { IUser } from "../libs/types/user.type";

interface UserDetailsProps {
  userData: IUser;
}
const UserPersonalDetails: React.FC<UserDetailsProps> = ({ userData }) => {
  return (
    <div className="bg-sky-500 p-8 rounded-lg shadow-md max-w-7xl w-full text-white">
      <img
        src={userData?.picture.large}
        alt="User"
        className="w-64 h-64 rounded-full mx-auto mb-4"
      />
      <h1 className="text-3xl font-bold text-center mb-4">{`${userData?.name.title} ${userData?.name.first} ${userData?.name.last}`}</h1>
      <p className="text-center text-xl font-semibold">{userData?.email}</p>
      <p className="text-center text-xl font-semibold">{userData?.phone}</p>
      <p className="text-center text-xl font-semibold">
        {userData?.location.city}, {userData?.location.country}
      </p>
      <p className="text-center text-xl font-semibold">{`Age: ${userData?.dob.age}`}</p>
    </div>
  );
};

export default UserPersonalDetails;
