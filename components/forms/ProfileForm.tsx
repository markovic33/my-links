"use client";

import React, { useState, useEffect } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Image from "next/image";
import {
  updateFirstName,
  updateLastName,
  updateUserProfileImage,
  updateUserCoverImage,
  updateGithub,
  updateLinkedin,
  updateFacebook,
  updateInstagram,
  updateUsername,
} from "@/lib/actions";
import { Linkedin, Github, Facebook, Instagram } from "lucide-react";

interface ProfileCardProps {
  userCoverImage?: string;
  userProfileImage?: string;
  firstName?: string;
  lastName?: string;
  email: string;
  clerkId: string;
  github?: string;
  linkedin?: string;
  facebook?: string;
  instagram?: string;
  username?: string;
}

const ProfileCard = ({
  userCoverImage = "",
  userProfileImage = "",
  firstName,
  lastName,
  email,
  clerkId,
  github = "",
  linkedin = "",
  facebook = "",
  instagram = "",
  username = "",
}: ProfileCardProps) => {
  const [coverImage, setCoverImage] = useState(userCoverImage);
  const [profileImage, setProfileImage] = useState(userProfileImage);
  const [first, setFirst] = useState(firstName);
  const [last, setLast] = useState(lastName);
  const [githubUrl, setGithubUrl] = useState(github);
  const [linkedinUrl, setLinkedinUrl] = useState(linkedin);
  const [facebookUrl, setFacebookUrl] = useState(facebook);
  const [instagramUrl, setInstagramUrl] = useState(instagram);
  const [userUsername, setUserUsername] = useState(username);

  useEffect(() => {
    setCoverImage(userCoverImage);
    setProfileImage(userProfileImage);
    setFirst(firstName);
    setLast(lastName);
    setGithubUrl(github);
    setLinkedinUrl(linkedin);
    setFacebookUrl(facebook);
    setInstagramUrl(instagram);
    setUserUsername(username);
  }, [
    userCoverImage,
    userProfileImage,
    firstName,
    lastName,
    github,
    linkedin,
    facebook,
    instagram,
    username,
  ]);

  const handleUpdateFirstName = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    formData.append("userId", clerkId);
    await updateFirstName(formData);
  };

  const handleUpdateLastName = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    formData.append("userId", clerkId);
    await updateLastName(formData);
  };

  const handleUpdateUsername = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    formData.append("userId", clerkId);
    await updateUsername(formData);
  };

  const handleUpdateProfileImage = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (e.target.files?.[0]) {
      const formData = new FormData();
      formData.append("userProfileImage", e.target.files[0]);
      formData.append("userId", clerkId);
      await updateUserProfileImage(formData);
      const newProfileImage = URL.createObjectURL(e.target.files[0]);
      setProfileImage(newProfileImage);
    }
  };

  const handleUpdateCoverImage = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (e.target.files?.[0]) {
      const formData = new FormData();
      formData.append("userCoverImage", e.target.files[0]);
      formData.append("userId", clerkId);
      await updateUserCoverImage(formData);
      const newCoverImage = URL.createObjectURL(e.target.files[0]);
      setCoverImage(newCoverImage);
    }
  };

  const handleUpdateSocial = async (
    e: React.FormEvent<HTMLFormElement>,
    updateFunction: (formData: FormData) => Promise<any>,
    setUrl: React.Dispatch<React.SetStateAction<string>>
  ) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    formData.append("userId", clerkId);
    await updateFunction(formData);
    const url = formData.get("url") as string;
    setUrl(url);
  };

  return (
    <div className="h-full rounded-md w-full px-4 py-6 sm:px-10 flex flex-col border mt-10 shadow-xl z-10 mb-24">
      <h1 className="self-center mt-2 mb-6 text-medium text-2xl">
        Update,{" "}
        <span className="text-cyan-500 font-medium text-2xl  ">
          @{userUsername}
        </span>
      </h1>
      <Popover>
        <PopoverTrigger className="">
          <Image
            src={coverImage.startsWith("http") ? coverImage : `/${coverImage}`}
            alt="userCoverImage"
            width={600}
            height={100}
            className="object-cover h-40 rounded-xl"
          />
        </PopoverTrigger>
        <PopoverContent>
          <input
            type="file"
            name="userCoverImage"
            onChange={handleUpdateCoverImage}
          />
        </PopoverContent>
      </Popover>

      <Popover>
        <PopoverTrigger className="relative flex items-center justify-center">
          <Image
            src={
              profileImage.startsWith("http")
                ? profileImage
                : `/${profileImage}`
            }
            alt="userProfileImage"
            width={50}
            height={50}
            className="rounded-full h-12 object-center absolute top-[-18px]"
          />
        </PopoverTrigger>
        <PopoverContent>
          <input
            type="file"
            name="userProfileImage"
            onChange={handleUpdateProfileImage}
          />
        </PopoverContent>
      </Popover>

      <div className="flex items-center">
        <form
          onSubmit={handleUpdateFirstName}
          className="flex w-full gap-1 items-center justify-center"
        >
          <input
            name="firstName"
            value={first}
            onChange={(e) => setFirst(e.target.value)}
            className="w-full border-b px-2 py-2 mt-10 mb-2 rounded-md"
          />
          <button
            className="mb-2 rounded-md p-1 py-2 bg-gray-200  self-end hover:bg-cyan-500"
            type="submit"
          >
            Change
          </button>
        </form>
      </div>

      <div className="flex items-center">
        <form
          onSubmit={handleUpdateLastName}
          className="flex w-full gap-1 items-center justify-center"
        >
          <input
            name="lastName"
            value={last}
            onChange={(e) => setLast(e.target.value)}
            className="w-full border-b px-2 py-2 mb-2 rounded-md"
          />
          <button
            className="mb-2 rounded-md p-1 py-2 bg-gray-200  self-end hover:bg-cyan-500"
            type="submit"
          >
            Change
          </button>
        </form>
      </div>

      <div className="flex items-center">
        <form
          onSubmit={handleUpdateUsername}
          className="flex w-full gap-1 items-center justify-center"
        >
          <input
            name="username"
            value={userUsername}
            onChange={(e) => setUserUsername(e.target.value)}
            className="w-full border-b px-2 py-2 mb-2 rounded-md"
          />
          <button
            className="mb-2 rounded-md p-1 py-2 bg-gray-200  self-end hover:bg-cyan-500"
            type="submit"
          >
            Change
          </button>
        </form>
      </div>

      <input
        name="email"
        value={email}
        className="w-full border-b px-2 py-2 mb-2"
        disabled
      />

      <div className="w-full flex items-center justify-center gap-3">
        <Popover>
          <PopoverTrigger className="">
            <Github className="w-14 h-12 bg-black fill-white rounded-md py-1 px-2" />
          </PopoverTrigger>
          <PopoverContent className="w-full">
            <form
              onSubmit={(e) =>
                handleUpdateSocial(e, updateGithub, setGithubUrl)
              }
              className="flex items-center justify-center gap-x-1"
            >
              <input
                type="url"
                name="url"
                value={githubUrl}
                onChange={(e) => setGithubUrl(e.target.value)}
                className="w-full border-b px-2 py-2 mb-2"
              />
              <button
                className="mb-2 rounded-md p-1 py-2 bg-gray-200  self-end hover:bg-cyan-500"
                type="submit"
              >
                Change
              </button>
            </form>
          </PopoverContent>
        </Popover>

        <Popover>
          <PopoverTrigger className="">
            <Linkedin className="w-14 h-12 py-1 px-2 bg-blue-700 p-1 rounded-md  fill-white" />
          </PopoverTrigger>
          <PopoverContent className="w-full">
            <form
              onSubmit={(e) =>
                handleUpdateSocial(e, updateLinkedin, setLinkedinUrl)
              }
              className="flex items-center justify-center gap-x-1"
            >
              <input
                type="url"
                name="url"
                value={linkedinUrl}
                onChange={(e) => setLinkedinUrl(e.target.value)}
                className="w-full border-b px-2 py-2 mb-2"
              />
              <button
                className="mb-2 rounded-md p-1 py-2 bg-gray-200  self-end hover:bg-cyan-500"
                type="submit"
              >
                Change
              </button>
            </form>
          </PopoverContent>
        </Popover>

        <Popover>
          <PopoverTrigger className="">
            <Facebook className="w-14 h-12 py-1 px-2 bg-blue-500 p-1 rounded-md  fill-white" />
          </PopoverTrigger>
          <PopoverContent className="w-full">
            <form
              onSubmit={(e) =>
                handleUpdateSocial(e, updateFacebook, setFacebookUrl)
              }
              className="flex items-center justify-center gap-x-1"
            >
              <input
                type="url"
                name="url"
                value={facebookUrl}
                onChange={(e) => setFacebookUrl(e.target.value)}
                className="w-full border-b px-2 py-2 mb-2"
              />
              <button
                className="mb-2 rounded-md p-1 py-2 bg-gray-200  self-end hover:bg-cyan-500"
                type="submit"
              >
                Change
              </button>
            </form>
          </PopoverContent>
        </Popover>

        <Popover>
          <PopoverTrigger className="">
            <Instagram className="w-14 h-12 py-1 px-2 bg-rose-500 p-1 rounded-md  fill-white" />
          </PopoverTrigger>
          <PopoverContent className="w-full">
            <form
              onSubmit={(e) =>
                handleUpdateSocial(e, updateInstagram, setInstagramUrl)
              }
              className="flex items-center justify-center gap-x-1"
            >
              <input
                type="url"
                name="url"
                value={instagramUrl}
                onChange={(e) => setInstagramUrl(e.target.value)}
                className="w-full border-b px-2 py-2 mb-2"
              />
              <button
                className="mb-2 rounded-md p-1 py-2 bg-gray-200  self-end hover:bg-cyan-500"
                type="submit"
              >
                Change
              </button>
            </form>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};

export default ProfileCard;
