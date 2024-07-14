import Ad from "@/components/Ad/Ad";
import LastUsers from "@/components/UserCard/LastUsers";

import UserCard from "@/components/UserCard/UserCard";
import prisma from "@/lib/db";

export default async function Home() {
  const users = await prisma.user.findMany();

  return (
    <div className="z-50 w-full flex  justify-center gap-x-8 overflow-y-auto">
      <div className="hidden lg:block lg:w-[20%]">
        <LastUsers />
      </div>
      <div className="lg:w-[40%] lg:border-l-2 lg:border-r-2 flex  flex-wrap justify-center">
        <div className="w-full flex flex-col items-center justify-center">
          {users.map((user) => (
            <UserCard
              key={user.id}
              username={user.username ?? ""}
              userProfileImage={user.userProfileImage ?? ""}
              userCoverImage={user.userCoverImage ?? ""}
              linkedin={user.linkedin ?? null}
              facebook={user.facebook ?? null}
              instagram={user.instagram ?? null}
              github={user.github ?? null}
            />
          ))}
        </div>
      </div>
      <div className="hidden lg:block  lg:w-[20%]">
        <Ad />
      </div>
    </div>
  );
}
