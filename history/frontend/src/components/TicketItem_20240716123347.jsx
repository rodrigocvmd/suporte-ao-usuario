import { Link } from "react-router-dom"



function TicketItem({ticket}) {
  return (
    <div className="ticket"> 
      <div>{new Date(ticket.createdAt).toLo}</div>
    </div>
  )
}

export default TicketItem
