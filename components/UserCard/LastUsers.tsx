import prisma from "@/lib/db";
import React from "react";
import LastUsersCard from "./LastUsersCard";

export default async function LastUsers() {
  const users = await prisma.user.findMany({
    orderBy: { createdAt: "desc" },
    select: {
      email: true,
      username: true,
      name: true,
      clerkId: true,
      createdAt: true,
    },
    take: 5,
  });

  return (
    <div className="mt-10">
      <h1 className="font-medium">Last created users</h1>
      <div className="rounded-md bg-slate-50/40 shadow-xl">
        {users.map((user) => (
          <div key={user.clerkId} className="">
            <LastUsersCard
              email={user.email}
              username={user.username ?? ""}
              firstName={user.name ?? ""}
              createdAt={user.createdAt}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
