import MangoLogo from './imgs/Mango.png';

import { Navbar, Container, Button,Card, Form, Row, Col}from 'react-bootstrap';
import { createWeb3Modal, defaultConfig } from '@web3modal/ethers/react'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App"> 
    {/* Header*/}
      <Navbar bg="light" expand="lg" 
        >
        <Container> 
          <img
            src={MangoLogo}
            width="50"
            height="50"
          />
          <div className="ml-auto">
            <Button variant="primary">Connect Wallet</Button>
          </div>
        </Container>
      </Navbar>
       {/* Centered Box */}
       <div className="Body" expand="lg"
        style={{
          background: 'linear-gradient(150deg, orange, yellow, green)',  // Gradient background
        }}> 
       <Container className="d-flex justify-content-center align-items-center" style={{ height: '80vh' }}>
        <Card style={{ width: '24rem' }} className="p-4 shadow">
          <Card.Body>
            <Form>
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="0.0" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>To</Form.Label>
                <Form.Control type="text" placeholder="0.0" />
              </Form.Group>
              <Button variant="primary" className="w-100">Swap</Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
      </div>
    </div>
  );
}

export default App;