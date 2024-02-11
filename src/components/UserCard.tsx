import { IUser } from "../libs/types/user.type";

interface userCardProps {
  user: IUser;
}

const UserCard: React.FC<userCardProps> = ({ user }) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-md bg-slate-200 hover:bg-sky-600 m-4 p-2 flex group hover:cursor-pointer">
      <img
        className="w-1/3 rounded-full"
        src={user.picture.large}
        alt={user.name.first}
      />
      <div className="flex-1 px-6 py-4">
        <div className="font-bold text-xl mb-2 text-blue-800 group-hover:text-white">
          {user.name.first}
        </div>
        <p className="text-blue-700 text-base group-hover:text-white">
          {user.email}
        </p>
      </div>
    </div>
  );
};

export default UserCard;
