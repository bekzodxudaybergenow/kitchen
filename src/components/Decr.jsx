import { useDispatch } from "react-redux"
import { decrement } from "../features/slices/counterSlice";

function Decr() {
    const dispatch = useDispatch();

    return (
        <button className="w-[100px] bg-indigo-500" onClick={() => dispatch(decrement(2))}>-</button>
    )
}

export default Decr