import { useDispatch, useSelector } from 'react-redux'
import { meals } from "../constants/Data";
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { setOrder } from '../features/slices/orderSlice';
import { Button } from 'antd';





function Meals() {
  const orderList = useSelector((state) => (state.orderSlice.value))
  const dispatch = useDispatch()
  const params = useParams()

  const [mealsList, setMealList] = useState(
    meals.map((item) =>({
      ...item, count: 0
    }))
  )
  
  const incr = (i) => {
    setMealList((prevMeals) => (
      prevMeals.map((item, idx) => {
        return i == idx ? {...item, count: item.count + 1} : item
      })  
    ))
  }

  const decr = (i) => {
    setMealList((prevMeals) => (
      prevMeals.map((item, idx) => {
        return i == idx ? {...item, count: item.count - 1} : item
      })  
    ))
  }

  const setCart = () => { 
    const filtered = mealsList.filter((item) => (item.count > 0))
    dispatch(setOrder({
        client: params.id,
        orders: filtered
      }
    )) 
  }


  return (
    <ul className="flex flex-wrap justify-between my-10 gap-y-4 max-[445px]:!justify-center">
        {
            mealsList.map((meal, i) => {
                return (
                  <li className="flex flex-col items-center shadow-lg rounded-md py-2 px-2 pb-6" key={i}>
                    <img className="w-[240px] h-[240px] object-contain object-center p-10" src={meal.image} alt={meal.name} />
                    <h2 className="font-bold text-[22px] mb-4">{meal.name}</h2>
                    <div className='flex items-center gap-x-4'>
                      <button className='flex p-2 shadow-[0_0_4px_2px_rgba(0,0,0,0.1)] cursor-pointer rounded' onClick={() => {incr(i)}}>
                        <PlusOutlined style={{fontSize: '16px', strokeWidth: "90", stroke: "bold",}} />
                      </button>
                      <span className='font-bold text-[22px]'>{meal.count}</span>
                      <button className='flex p-2 shadow-[0_0_4px_2px_rgba(0,0,0,0.1)] cursor-pointer rounded' onClick={() => {decr(i)}}>
                        <MinusOutlined style={{fontSize: '16px', strokeWidth: "90", stroke: "bold",}} />
                      </button>
                    </div>
                  </li>
                )
            })
          }
          <Button className='btn mt-8 !w-[300px]' onClick={() => {setCart()}}>Savatcha</Button>
    </ul>
  )
}
  export default Meals