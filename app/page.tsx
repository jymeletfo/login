import { signIn, auth } from "@/auth";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await auth();

  if (session) redirect("/dashboard");

  return (
    <div className="container mx-auto min-h-dvh flex items-center justify-center">
      <form
        action={async () => {
          "use server";
          await signIn("google", { redirectTo: "/dashboard" });
        }}
      >
        <Button>Login with Google</Button>
      </form>
    </div>
  );
}
