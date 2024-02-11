import { IUser } from "../libs/types/user.type";

interface userCardProps {
  user: IUser;
}

const UserCard: React.FC<userCardProps> = ({ user }) => {
  return (
    <div>
      <div className="it has image">image is here</div>
      <div className="other data">other adata is here</div>
    </div>
  );
};

export default UserCard;
