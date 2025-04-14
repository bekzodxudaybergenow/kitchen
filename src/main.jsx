import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './features/store.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login.jsx'
import Girgitton from './pages/Girgitton.jsx'
import OrderMenu from './pages/OrderMenu.jsx'
import '@ant-design/v5-patch-for-react-19';
import OrderList from './pages/OrderList.jsx'
import ChefOrderList from './pages/chefOrderList.jsx'


createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<App />}>
          <Route path='/oshpaz' element={<ChefOrderList />} />
          <Route path='/girgitton' element={<Girgitton />} />
          <Route path='/client/:id' element={<OrderMenu />} />
          <Route path='/order-list' element={<OrderList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
)
