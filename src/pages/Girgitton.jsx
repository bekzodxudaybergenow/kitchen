import { Button } from "antd";
import Clients from "./Clients";
import { Link } from "react-router-dom";

function Girgitton() {
  return (
    <div className="container"> 
      <div className="flex items-center justify-between gap-x-2 mt-10 mb-10">
        <h2 className="text-[25px]">Girgitton</h2>
        <Link to='/order-list'>
          <Button className="btn max-[425px]:!text-[18px] max-[425px]:!w-[150px]">Buyurtmalar</Button>
        </Link>
      </div>
        <Clients />
    </div>
  )
}

export default Girgitton