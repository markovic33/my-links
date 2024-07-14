import prisma from "./db";
import { currentUser } from "@clerk/nextjs/server";

export const getUserData = async () => {
  const clerkUser = await currentUser();

  if (!clerkUser) {
    return null;
  }

  const user = await prisma.user.findUnique({
    where: { clerkId: clerkUser.id },
  });

  return user;
};
