import "./admin-panel.scss";
import { useAuth } from "@/store/AuthProvider.jsx";
import { UserItem } from "../../components";

export const AdminPanel = () => {
  const { user } = useAuth();

  return (
    <div className="adminPanel">
      <UserItem user={user} />
    </div>
  );
};
