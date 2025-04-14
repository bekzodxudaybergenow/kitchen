import { clients } from "../constants/Data"
import table from '../assets/table.png';
import { Link } from "react-router-dom";

function Clients() {
  return (
    <div className="flex flex-wrap justify-around">
      {
        clients.map((client) => {
          return (
            <div className="flex items-center justify-center gap-6  rounded-2xl p-5 cursor-pointer hover:bg-gray-100 duration-500" key={client.id}>
              <Link to={`/client/${client.id}`}>
                <img className="w-[200px] shadow-[0_0_10px_2px_rgba(0,0,0,0.2)] rounded-lg mb-2 max-[518px]:w-[300px]" src={table} alt="" />
                <h4 className="text-2xl text-center">{client.id}-stol</h4>
              </Link>
            </div>
          )
        })
      }
    </div>
  )
}

export default Clients