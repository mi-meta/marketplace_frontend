import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Home } from './pages';
import { Header, Footer, Contact } from './components';
import { ThemeProvider, Container } from 'react-bootstrap';

function App() {
  return (
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
    >
      <Container className="App" fluid>
        <Header />
        <Home />
        <Contact />
        <Footer />
      </Container>
    </ThemeProvider>
  );
}

export default App;
