import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/plumbing')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/plumbing"!</div>
}
