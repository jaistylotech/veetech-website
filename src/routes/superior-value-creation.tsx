import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/superior-value-creation")({
  component: () => <Outlet />,
});
