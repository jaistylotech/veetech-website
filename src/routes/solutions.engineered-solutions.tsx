import { Outlet, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/solutions/engineered-solutions')({
  component: () => <Outlet />,
})
