import prisma from "@/lib/db";
import { auth, currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function GET() {
  const { userId } = auth();

  if (!userId) {
    return new NextResponse("Please Sign Up", { status: 401 });
  }

  const user = await currentUser();

  if (!user) {
    return new NextResponse("User not exist", { status: 401 });
  }

  let dbUser = await prisma.user.findUnique({
    where: { clerkId: user.id },
  });

  if (!dbUser) {
    dbUser = await prisma.user.create({
      data: {
        clerkId: user.id,
        name: user.firstName ?? "",
        lastName: user.lastName ?? "",
        email: user.emailAddresses[0].emailAddress ?? "",
      },
    });
  }

  return new NextResponse(null, {
    status: 302,
    headers: {
      location: `/profile/${user.id}`,
    },
  });
}
