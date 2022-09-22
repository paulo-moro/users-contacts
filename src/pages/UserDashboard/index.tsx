import { useEffect } from "react";
import DashboardModal from "../../components/userdashboard/dashboardModal";
import { useAuth } from "../../providers/authtoken";
import { useContacts } from "../../providers/contacts";

function UserDashoardPage() {
  const { getAuth } = useAuth();
  const { getContacts } = useContacts();
  useEffect(() => {
    getAuth();
    getContacts();
  });
  return (
    <>
      <section></section>
      <section>
        <DashboardModal />
      </section>
    </>
  );
}

export default UserDashoardPage;
