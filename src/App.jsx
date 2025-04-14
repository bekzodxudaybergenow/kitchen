import { Navigate, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footerr from "./components/Footerr";


function App() {
  const getAuth = sessionStorage.getItem('isAuth');

  if (getAuth) {
    return (
      <div className="">
        <Navbar />
        <Outlet />
        <Footerr />
      </div>
    )
  }
  else {
    return (
      <Navigate to={'/login'} />
    )
  } 
}

export default App














// import { useDispatch, useSelector } from "react-redux"
// import Incr from "./components/Incr"
// import Decr from "./components/Decr";
// import { reset } from "./features/slices/counterSlice";
// import { addUser } from "./features/slices/userSlice";



// const dispatch = useDispatch();
// const count = useSelector((state) => (state.counterSlice.count));
// const users = useSelector((state) => (state.userSlice.userList));

// console.log(users);

// const getInputVal = (e) => {
//   e.preventDefault();

//   let userName = e.target.username.value;
//   dispatch(addUser(userName));
//   e.target.username.value = '';
// }








{/* <h1 className="text-3xl font-bold">
  Hello world! <br />
  <span>{count}</span>
  <div className="flex gap-x-2">
    <Incr />
    <Decr />
    <button className="w-[100px] bg-indigo-500" onClick={() => dispatch(reset())}>Reset</button>
  </div>

  <hr />
  <form onSubmit={(e) => {getInputVal(e)}}>
    <input className="border rounded-md" name="username" type="text" placeholder="userName"/>
    <button type="submit" className=" bg-indigo-500 p-1 text-white">Submit</button>
  </form>

</h1>
  <h2>
    {
      users.map((user) => {
        return (
          <p key={user}>{user}</p>
        )
      })
    }
  </h2> */}