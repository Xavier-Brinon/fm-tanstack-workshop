import { getDb } from "@/data/db";
import { users as usersTable } from "@/drizzle/schema";
import type { FC } from "react";
import type { UserInfo as UserInfoType } from "./types";

type UserInfoProps = {
  UserContent: FC<{ user: UserInfoType }>;
};

export const UserInfo = async ({ UserContent }: UserInfoProps) => {
  const db = await getDb();
  const [user] = await db.select().from(usersTable).limit(1);

  await new Promise(resolve => setTimeout(resolve, 2000));

  return <UserContent user={user} />;
};
