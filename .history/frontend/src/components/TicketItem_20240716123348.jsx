import { Link } from "react-router-dom"



function TicketItem({ticket}) {
  return (
    <div className="ticket"> 
      <div>{new Date(ticket.createdAt).toLocaleDateString}</div>
    </div>
  )
}

export default TicketItem
