import ProfileCard from "@/components/forms/ProfileForm";
import prisma from "@/lib/db";

export default async function ProfilePage({
  params,
}: {
  params: { id: string };
}) {
  const user = await prisma.user.findUnique({
    where: { clerkId: params.id },
    select: {
      clerkId: true,
      email: true,
      name: true,
      lastName: true,
      userProfileImage: true,
      userCoverImage: true,
      facebook: true,
      instagram: true,
      github: true,
      linkedin: true,
      username: true,
    },
  });

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div className=" px-4 lg:w-1/3 flex items-center justify-center mx-auto ">
      <ProfileCard
        userCoverImage={user.userCoverImage ?? ""}
        userProfileImage={user.userProfileImage ?? ""}
        firstName={user.name ?? ""}
        lastName={user.lastName ?? ""}
        email={user.email}
        clerkId={user.clerkId}
        username={user.username ?? ""}
        facebook={user.facebook ?? ""}
        instagram={user.instagram ?? ""}
        linkedin={user.linkedin ?? ""}
        github={user.github ?? ""}
      />
    </div>
  );
}
