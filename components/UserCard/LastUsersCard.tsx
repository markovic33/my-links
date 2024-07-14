import React from "react";
import { formatDistanceToNow } from "date-fns";

interface LastUserProps {
  username?: string;
  firstName?: string;
  email?: string;
  createdAt: Date;
}

const LastUsersCard = ({
  email,
  firstName,
  username,
  createdAt,
}: LastUserProps) => {
  const timeAgo = formatDistanceToNow(new Date(createdAt), { addSuffix: true });
  return (
    <div className="w-full flex flex-col   py-2 px-4 ">
      <div className="w-full flex items-center justify-between">
        {username ? (
          <h1 className="">@{username}</h1>
        ) : firstName ? (
          <h1 className="">@{firstName}</h1>
        ) : (
          <h1 className="">@{email}</h1>
        )}
        <p className="text-white/60 text-xs">{timeAgo}</p>
      </div>
    </div>
  );
};

export default LastUsersCard;
