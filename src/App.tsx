import React from 'react';
import logo from './logo.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Home } from './pages';
import { Header, Footer, Landing, Collection, Contact, Card } from './components';
import { ThemeProvider, Container } from 'react-bootstrap';

function App() {
  return (
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
    >
      <Container className="App">
        <Header />
        <Home />
        <Contact />
        <Footer />
      </Container>
    </ThemeProvider>
  );
}

export default App;
