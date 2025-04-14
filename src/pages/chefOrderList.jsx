import { useDispatch, useSelector } from "react-redux"
import table from '../assets/table.png';
import { useState } from "react";
import { Button, Empty } from "antd";
import { deleteOrder } from "../features/slices/orderSlice";

function ChefOrderList() {
    const selector = useSelector((state) => state.orderSlice.value)
    const dispatch = useDispatch();
    const [order, setOrder] = useState([]);
    const [orderId, setOrderId] = useState(0);

    const getOrder = (id) => {
        const finded_order = selector.find((item) => (item.client == id))

        setOrder(finded_order.orders)
        setOrderId(id);
    }   

    const deleteHandle = () => {
        dispatch(deleteOrder({id: orderId}));
        setOrder([]);
    }
  return (
        <div className="container">
        <div className="grid grid-cols-3 gap-x-10 mt-2 p-10 max-[768px]:flex flex-col max-[560px]:p-[2px]">
            <h2 className="text-[28px] col-span-3 mb-6">Oshpaz</h2>
            <div className="col-span-1">
                <ul className="flex flex-col gap-4 max-[768px]:mb-10 max-[768px]:flex-row max-[768px]:overflow-x-scroll">
                    {
                        selector.map((item) => (
                            <li className="flex items-center justify-center gap-6 max-w-[300px] border border-gray-300 rounded-2xl p-5 cursor-pointer hover:bg-gray-100 duration-500 max-[768px]:flex max-[768px]:flex-col max-[768px]:gap-2 max-[768px]:min-w-[250px]" key={item.client} onClick={() => {getOrder(item.client)}}>
                                <img className="w-[120px] shadow-[0_0_10px_2px_rgba(0,0,0,0.2)] rounded-lg" src={table} alt="Client table image" />
                                <h2 className="text-[30px] max-[768px]:text-[20px]">{item.client}-stol</h2>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className="col-span-2 bg-gray-300 p-10 rounded-2xl">
                {
                    order.length > 0 ? 
                    <div className="flex flex-col gap-y-6 max-[560px]:justify-center">
                        {
                            order.map((item, i) => (
                                <div className="flex gap-x-4 max-[560px]:flex-col max-[560px]:text-center max-[560px]:items-center" key={i}>
                                    <img className="w-[200px] h-[200px] object-contain bg-white rounded-2xl shadow-2xl" src={item.image} alt={item.name} />
                                    <div className="p-6 text-[18px]">
                                        <h2> <strong>Nomi:</strong> {item.name}</h2>
                                        <span><strong>Soni:</strong> {item.count}</span><br />
                                    </div>
                                </div>
                            ))
                        }
                    </div> 
                    : <Empty />
                }
            </div>                
                <Button className="col-3 mt-10 btn !w-[100%] max-[768px]:mb-5" onClick={() => deleteHandle()}>Yakunlash</Button>
        </div>
    </div>
  )
}

export default ChefOrderList

