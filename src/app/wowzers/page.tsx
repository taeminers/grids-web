import { cookies } from "next/headers";

import { TodoContainer } from "@/components";
export default async function WowzersPage() {
  const cookieStore = await cookies();
  const theme = cookieStore.get("theme");
  console.log(theme);
  return (
    <div>
      <TodoContainer />
    </div>
  );
}
