"use server";
import prisma from "./db";
import { writeFileSync } from "fs";
import { revalidatePath } from "next/cache";
import { join } from "path";

export async function updateFirstName(formData: FormData) {
  const firstName = formData.get("firstName") as string;
  const clerkId = formData.get("userId") as string;

  if (!clerkId) {
    throw new Error("clerkId must not be null.");
  }

  const data = await prisma.user.update({
    where: { clerkId },
    data: {
      name: firstName,
    },
  });
  revalidatePath("");
  return data;
}


export async function updateUsername(formData: FormData) {
  const username = formData.get("username") as string;
  const clerkId = formData.get("userId") as string;

  if (!clerkId) {
    throw new Error("clerkId must not be null.");
  }

  const data = await prisma.user.update({
    where: { clerkId },
    data: {
      username: username,
    },
  });
  revalidatePath("");
  return data;
}


export async function updateLastName(formData: FormData) {
  const lastName = formData.get("lastName") as string;
  const clerkId = formData.get("userId") as string;

  if (!clerkId) {
    throw new Error("clerkId must not be null.");
  }

  const data = await prisma.user.update({
    where: { clerkId },
    data: {
      lastName,
    },
  });
  revalidatePath("");

  return data;
}

export async function updateUserProfileImage(formData: FormData) {
  const userProfileImage = formData.get("userProfileImage") as File;
  const clerkId = formData.get("userId") as string;

  if (!clerkId) {
    throw new Error("clerkId must not be null.");
  }

  const fileName = `uploads/${userProfileImage.name}`;
  const filePath = join(process.cwd(), "public", fileName);

  writeFileSync(filePath, Buffer.from(await userProfileImage.arrayBuffer()));

  const data = await prisma.user.update({
    where: { clerkId },
    data: {
      userProfileImage: fileName,
    },
  });
  revalidatePath("");
  return data;
}

export async function updateUserCoverImage(formData: FormData) {
  const userCoverImage = formData.get("userCoverImage") as File;
  const clerkId = formData.get("userId") as string;

  if (!clerkId) {
    throw new Error("clerkId must not be null.");
  }

  const fileName = `uploads/${userCoverImage.name}`;
  const filePath = join(process.cwd(), "public", fileName);

  writeFileSync(filePath, Buffer.from(await userCoverImage.arrayBuffer()));

  const data = await prisma.user.update({
    where: { clerkId },
    data: {
      userCoverImage: fileName,
    },
  });
  revalidatePath("");
  return data;
}

export async function updateGithub(formData: FormData) {
  const github = formData.get("url") as string;
  const clerkId = formData.get("userId") as string;

  if (!clerkId) {
    throw new Error("clerkId must not be null.");
  }

  const data = await prisma.user.update({
    where: { clerkId },
    data: {
      github,
    },
  });

  return data;
}

export async function updateLinkedin(formData: FormData) {
  const linkedin = formData.get("url") as string;
  const clerkId = formData.get("userId") as string;

  if (!clerkId) {
    throw new Error("clerkId must not be null.");
  }

  const data = await prisma.user.update({
    where: { clerkId },
    data: {
      linkedin,
    },
  });

  return data;
}

export async function updateFacebook(formData: FormData) {
  const facebook = formData.get("url") as string;
  const clerkId = formData.get("userId") as string;

  if (!clerkId) {
    throw new Error("clerkId must not be null.");
  }

  const data = await prisma.user.update({
    where: { clerkId },
    data: {
      facebook,
    },
  });

  return data;
}

export async function updateInstagram(formData: FormData) {
  const instagram = formData.get("url") as string;
  const clerkId = formData.get("userId") as string;

  if (!clerkId) {
    throw new Error("clerkId must not be null.");
  }

  const data = await prisma.user.update({
    where: { clerkId },
    data: {
      instagram,
    },
  });

  return data;
}
