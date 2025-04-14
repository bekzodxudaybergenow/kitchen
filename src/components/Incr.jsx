import { useDispatch } from "react-redux"
import { increment } from "../features/slices/counterSlice";

function Incr() {
  const dispatch = useDispatch();

  return (
    <div>
        <button className="w-[100px] bg-indigo-500" onClick={() => dispatch(increment(2))}>+</button>
    </div>
  )
}

export default Incr