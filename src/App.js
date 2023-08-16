import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './pages/Login'
import Layout from './pages/Layout'
import { Button, Space } from 'antd';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Button type="primary">Primary Button</Button>
        <Routes>
        {/*创建路由patch和组件对应关系*/}
          <Route path='/' element={<Layout></Layout>}></Route>
          <Route path='/login' element={<Login></Login>}>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
