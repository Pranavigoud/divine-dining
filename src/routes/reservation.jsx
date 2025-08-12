import { createFileRoute } from '@tanstack/react-router'
import Reservation from '../pages/Reservation'

export const Route = createFileRoute('/reservation')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>
    <Reservation/>
  </div>
}
