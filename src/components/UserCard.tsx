import { useNavigate } from "react-router-dom";
import { IUser } from "../libs/types/user.type";

interface userCardProps {
  user: IUser;
}

const UserCard: React.FC<userCardProps> = ({ user }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate(`/${user.login.uuid}`);
      }}
      className="max-w-sm rounded-lg overflow-hidden shadow-md bg-slate-200 hover:bg-sky-600 m-4 p-2 flex group hover:cursor-pointer gap-0"
    >
      <img
        className="w-1/3 rounded-full"
        src={user.picture.large}
        alt={user.name.first}
      />
      <div className="flex-1 px-6 py-4">
        <div className="font-bold text-xl mb-2 text-blue-800 group-hover:text-white flex justify-start gap-1">
          <p>{user.name.title}</p>
          <p>{user.name.first}</p>
          <p>{user.name.last}</p>
        </div>
        <p className="text-blue-700 text-base group-hover:text-white font-semibold">
          {user.gender}
        </p>
        <p className="text-blue-700 text-base group-hover:text-white font-semibold">
          {user.phone}
        </p>
      </div>
    </div>
  );
};

export default UserCard;
