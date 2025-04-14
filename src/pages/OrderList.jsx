import { useDispatch, useSelector } from "react-redux"
import table from '../assets/table.png';
import { useState } from "react";
import { Button, Empty } from "antd";
import { deleteOrder } from "../features/slices/orderSlice";
import { Link } from "react-router-dom";

function OrderList() {
    const selector = useSelector((state) => state.orderSlice.value)
    const dispatch = useDispatch();
    const [order, setOrder] = useState([]);
    const [orderId, setOrderId] = useState(0);
    const [orderSum, setOrderSum] = useState(0);

    const getOrder = (id) => {
        const finded_order = selector.find((item) => (item.client == id))
        const orderSum = finded_order.orders.reduce((sum, item) => {
            return sum + (item.price * item.count);
        }, 0)

        setOrder(finded_order.orders)
        setOrderSum(orderSum);
        setOrderId(id);
    }   

    const deleteHandle = () => {
        dispatch(deleteOrder({id: orderId}));
        setOrder([]);
        setOrderSum(0);
    }
 
    return (
        <div className="container">
            <div className="grid grid-cols-3 gap-x-10 mt-2 p-10 max-[768px]:flex flex-col max-[560px]:p-[2px]">
                    <Link className="text-[28px] mb-6 max-[768px]:absolute max-[370px]:text-[20px] max-[370px]:mt-[8px]" to={'/girgitton'}>Girgitton</Link>
                    <p className="col-span-2 text-right text-[20px] mb-6 max-[768px]:mb-16 max-[768px]:pt-2 max-[370px]:text-[14px] max-[370px]:pt-4"><strong>Umumiy summa: {orderSum}</strong></p>
                <div className="col-span-1">
                    <ul className="flex flex-col gap-4  max-[768px]:mb-10 max-[768px]:flex-row max-[768px]:overflow-x-scroll">
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
                                            <span><strong>Narxi:</strong> {item.price}</span>
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

export default OrderList