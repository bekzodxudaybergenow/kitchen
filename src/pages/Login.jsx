
import { Button, Form, Input } from 'antd';
import { employees } from '../constants/Data';
import { useNavigate } from 'react-router-dom';



function Login() {
  const navigate = useNavigate()
  const setAuth = () => {
    sessionStorage.setItem('isAuth', true);
  }

  let getValues = ({username, userPassword}) => {
    const findEmployee = employees.find(({employeeName, password}) => (employeeName == username && password == userPassword))
  
    if(!findEmployee) {
      alert('Xodim topilmadi!')
    }
    if (findEmployee.role == 'oshpaz') {
      navigate('/oshpaz');
      setAuth();
    }
    else if (findEmployee.role == 'girgitton') {
      navigate('/girgitton');
      setAuth();
    }
    
  }
  
  return (
    <div className='flex justify-center items-center h-screen'>
        <Form layout='vertical' className='max-w-[500px] w-[100%] !px-[60px] !py-[80px] shadow-2xl rounded max-[425px]:!px-[20px]'
        aria-placeholder='ad' onFinish={(value) => {getValues(value)}}>

        <Form.Item className='main-font custom-label custom-input' label="Username" name="username"  rules={[{required: true, message: 'Please input your username!',}]}><Input placeholder="Foydalanuvchi ismi..." /></Form.Item>

        <Form.Item className='main-font custom-label custom-input'  label="Password" name="userPassword" rules={[{required: true,message: 'Please input your password!',}]}
        ><Input.Password placeholder="Foydalanuvchi paroli..." /></Form.Item>

        <Form.Item label={null}>
          <Button className='btn-log max-[425px]:!w-[100%] max-[425px]:mt-[20px]' type="primary" htmlType="submit">Submit</Button>
        </Form.Item>
    </Form>
    </div>
  )
}

export default Login