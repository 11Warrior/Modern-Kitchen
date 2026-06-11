
import AdminDashboard from '@/components/Admin/AdminDashboard';
import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

const Dashboard = async () => {
  const user = await currentUser();
  // console.log(user);
  const adminUserEmail = process.env.ADMIN_EMAIL;

  const isAdmin = user?.emailAddresses?.[0].emailAddress === adminUserEmail;
  // console.log(isAdmin)

 if (!isAdmin || !user) {
    redirect("/");
  }

  return (
    <section>
      <AdminDashboard />
    </section>
  )
}

export default Dashboard