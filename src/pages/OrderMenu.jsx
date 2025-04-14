import { Link, useParams } from "react-router-dom"
import table from '../assets/table.png';
import { Button, Tabs } from "antd";
import Meals from "./Meals";


function OrderMenu() {
  const param = useParams();
  const items = [
    {
      key: '1',
      label: 'Taomlar',
      children: <Meals />,
    },
  ];
  
  return (
    <div className="container ">
      <div className="flex items-center justify-between mt-5 mb-5">
        <div className="flex items-center justify-center gap-4 border border-gray-300 rounded-2xl p-3 hover:bg-gray-100 duration-500">
          <img className="w-[100px] rounded-lg max-[445px]:hidden" src={table} alt="" />
          <h2 className="text-2xl">{param.id}-stol</h2>
        </div>
        <Link to='/order-list'>
          <Button className="main-font btn max-[445px]:!w-[150px]">Buyurtmalar</Button>
        </Link>
      </div>
      <Tabs items={items}/>
    </div>
  )
}

export default OrderMenu