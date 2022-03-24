import React from 'react';
import { ThemeProvider, Container } from 'react-bootstrap';
import { Home } from './pages';
import { Header, Footer, Contact } from './components';

function App() {
  return (
    <ThemeProvider breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}>
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
