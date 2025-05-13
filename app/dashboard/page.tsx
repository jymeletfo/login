import { Card, CardContent, CardHeader } from "@/components/ui/card";
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
        <Card>
          <CardHeader>
            <h1 className="text-center">Dashboard</h1>
          </CardHeader>
          <CardContent>
            <p className="text-center text-slate-700">
              Welcome to the dashboard! {session.user?.name}
            </p>
          </CardContent>
        </Card>

        {/* <form
          action={async () => {
            "use server";
            await signOut();
          }}
        >
          <Button>Signout</Button>
        </form> */}
      </div>
    </>
  );
}
