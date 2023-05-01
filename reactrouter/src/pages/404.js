import React from 'react';
import { Empty } from 'antd';

function Page404() {
  return (
    <center>
    <h1 className='my-4'>Page Not Found (404)</h1>
    <Empty description={false}/>
    </center>
  )
}

export default Page404