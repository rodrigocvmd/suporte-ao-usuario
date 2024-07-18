import { Link } from "react-router-dom"



function TicketItem({ticket}) {
  return (
    <div className="ticket"> 
      <div>{new Date(ticket.create)}</div>
    </div>
  )
}

export default TicketItem
