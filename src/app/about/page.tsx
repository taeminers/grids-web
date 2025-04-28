"use client";
import { TodoContainer } from "@/components";
export const dynamic = "force-dynamic";

export default function AboutPage() {
  return (
    <div>
      <button onClick={() => console.log("hello")}>Hello</button>
      <TodoContainer />
      <div>Static and should be in rsc</div>
    </div>
  );
}
