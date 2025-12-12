import { requireAuth } from "@/lib/auth-utils";
import { caller } from "@/trpc/server";
import LogoutBtn from "./logout-btn";

const HomePage = async () => {
  await requireAuth();

  const user = await caller.getUser();

  return (
    <section className="max-w-lg m-auto flex flex-col gap-y-6">
      <h1 className="text-lg font-bold">Protected Page</h1>

      {JSON.stringify(user, null, 2)}

      <LogoutBtn />
    </section>
  );
};

export default HomePage;
