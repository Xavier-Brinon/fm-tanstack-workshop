import { asc } from "drizzle-orm";

import { createFileRoute, Outlet } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";

import { getDb } from "@/data/db";
import { users as usersTable } from "@/drizzle/schema";
import { getExercisesServerFn } from "@/server-functions/exercises";
import { RscLayout } from "@/components/rsc-layout/layout";
import type { FC, PropsWithChildren } from "react";

import {
  createCompositeComponent,
  CompositeComponent,
} from "@tanstack/react-start/rsc";

const getLayout = createServerFn({
  method: "GET",
}).handler(async () => {
  return createCompositeComponent(
    (
      props: PropsWithChildren<{
        HeaderContent: FC<{ name: string; avatar: string }>;
        Foo: any;
      }>,
    ) => <RscLayout>{props.children}</RscLayout>,
  );
});

export const getUserServerFn = createServerFn({ method: "GET" }).handler(
  async () => {
    const db = await getDb();
    const [user] = await db
      .select()
      .from(usersTable)
      .orderBy(asc(usersTable.id))
      .limit(1);
    return user ?? null;
  },
);

export const Route = createFileRoute("/rsc-demo")({
  component: RouteComponent,
  loader: async () => {},
  pendingComponent: () => <div>Loading...</div>,
  pendingMs: 0,
  gcTime: 1000 * 60 * 5,
  staleTime: 1000 * 60 * 5,
});

function RouteComponent() {
  return (
    <RscLayout>
      <div className="mx-auto w-full max-w-xl rounded-xl border border-slate-200 p-6 shadow-sm">
        <Outlet />
      </div>
    </RscLayout>
  );
}
