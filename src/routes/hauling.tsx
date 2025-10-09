import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/hauling')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/hauling"!</div>
}
