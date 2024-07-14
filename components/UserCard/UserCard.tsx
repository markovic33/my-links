import { Facebook, Github, Instagram, LinkedinIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface UserCardProps {
  username?: string;
  userProfileImage?: string;
  userCoverImage?: string;
  linkedin?: string | null;
  facebook?: string | null;
  github?: string | null;
  instagram?: string | null;
}

const UserCard = ({
  facebook,
  linkedin,
  userCoverImage,
  userProfileImage,
  username,
  github,
  instagram,
}: UserCardProps) => {
  const getImageSrc = (path: string) => {
    return path?.startsWith("/") ? path : `/${path}`;
  };

  return (
    <div className="flex mt-5 flex-col items-center justify-center border rounded-md py-5 px-4 shadow-xl">
      <div className="mt-4 relative w-full">
        <h1 className="self-start px-1">
          @
          <span className="text-md font-semibold text-cyan-500">
            {" "}
            {username}
          </span>
        </h1>
        <Image
          src={getImageSrc(userCoverImage || "/cover.jpg")}
          alt="cover"
          width={300}
          height={150}
          className="object-cover rounded-md w-80 h-32"
        />
        <div className="absolute left-0 right-0 -top-5 flex justify-center">
          <Image
            src={getImageSrc(
              userProfileImage || `https://avatar.vercel.sh/${username}`
            )}
            alt="user"
            width={50}
            height={50}
            className="w-14 h-14 rounded-full object-cover z-10"
          />
        </div>
      </div>
      <p className="text-xs text-gray-300 mt-3">find me</p>
      <div className="mt-3 flex justify-center items-center py-3 gap-x-5 rounded-md w-full bg-gray-100">
        {linkedin && linkedin.trim() !== "" && (
          <Link href={linkedin} className="">
            <LinkedinIcon className="hover:text-cyan-500" />
          </Link>
        )}
        {facebook && facebook.trim() !== "" && (
          <Link href={facebook} className="">
            <Facebook className="hover:text-cyan-500" />
          </Link>
        )}

        {instagram && (
          <Link href={instagram} className="">
            <Instagram className="hover:text-cyan-500" />
          </Link>
        )}
        {github && (
          <Link href={github} className="">
            <Github className="hover:text-cyan-500" />
          </Link>
        )}
        {!facebook && !instagram && !github && !linkedin && (
          <div className="">No links provided</div>
        )}
      </div>
    </div>
  );
};

export default UserCard;
