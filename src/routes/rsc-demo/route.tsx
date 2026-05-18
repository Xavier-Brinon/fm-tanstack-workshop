import { asc } from "drizzle-orm";

import { createFileRoute, Outlet } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";

import { getDb } from "@/data/db";
import { users as usersTable } from "@/drizzle/schema";
import { RscLayout } from "@/components/rsc-layout/layout";
import type { FC, PropsWithChildren } from "react";

import {
  createCompositeComponent,
  CompositeComponent,
} from "@tanstack/react-start/rsc";
import type { UserInfoType } from "@/components/rsc-layout/types";
import { SidePanel } from "@/components/rsc-layout/side-panel";

const getLayout = createServerFn({
  method: "GET",
}).handler(async () => {
  return createCompositeComponent(
    (props: PropsWithChildren<{ UserContent: FC<{ user: UserInfoType }> }>) => (
      <RscLayout UserContent={props.UserContent}>{props.children}</RscLayout>
    ),
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
  loader: async () => {
    const layout = await getLayout();

    return { layout };
  },
  pendingComponent: () => <div>Loading...</div>,
  pendingMs: 0,
  gcTime: 1000 * 60 * 5,
  staleTime: 1000 * 60 * 5,
});

function RouteComponent() {
  const { layout } = Route.useLoaderData();
  return (
    <CompositeComponent src={layout} UserContent={SidePanel}>
      <div className="mx-auto w-full max-w-xl rounded-xl border border-slate-200 p-6 shadow-sm">
        <Outlet />
      </div>
    </CompositeComponent>
  );
}
