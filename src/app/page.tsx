import { caller } from "@/trpc/server";

const HomePage = async () => {
  const users = await caller.getUsers();

  return (
    <>{JSON.stringify(users)}</>
  );
}

export default HomePage;