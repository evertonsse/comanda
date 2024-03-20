// eslint-disable-next-line no-unused-vars
import React  from 'react'
import { Form, Input, Button, Flex, Layout, Divider, Typography  } from 'antd'

const Login = () => {
  
  return (
    <Layout
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography style={{ fontSize: '50px', paddingRight: '30px' }}>
        Comanda Online
      </Typography>

      <Divider type='vertical' style={{height: '300px'}}></Divider>
      <Form        
        variant='outlined'
        initialValues={{ remember: true }}
        layout="vertical"
        onFinish={console.log("lixo")}
        style={{
          maxWidth: '600px',
          minWidth: '400px',
          borderRadius: '10px',
          padding: '45px',
          
        }}
      >
        <h1>Login</h1>
        
        
        <Form.Item name="mail"  label="E-mail"  rules={[{ required: true, message: 'Insira seu e-mail' }]}>
          <Input />
        </Form.Item>

        <Form.Item name="password" label = "Senha" rules={[{ required: true, message: 'Insira sua senha' }]}>
          <Input.Password />
        </Form.Item>

        <Flex justify="space-between">
          <Button type="link" style={{ width: '100px' }}>
            Criar Conta
          </Button>

          <Button
            type="primary"
            htmlType="submit"
            style={{ width: '100px' }}
            
          >
            Entrar
          </Button>
        </Flex>
      </Form>
    </Layout>
  )
}

export default Login