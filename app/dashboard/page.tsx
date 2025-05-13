import { Button } from "@/components/ui/button";
import { signOut, auth } from "@/auth";
import { redirect } from "next/navigation";
import Navbar from "@/custom/navbar";

export default async function Dashboard() {
  const session = await auth();

  if (!session) {
    redirect("/");
  }

  return (
    <>
      <Navbar />
      <div className="container mx-auto mt-20">
        <h1>Dashboard</h1>
        <p>Welcome to the dashboard! {session.user?.name}</p>
        <form
          action={async () => {
            "use server";
            await signOut();
          }}
        >
          <Button>Signout</Button>
        </form>
      </div>
    </>
  );
}
