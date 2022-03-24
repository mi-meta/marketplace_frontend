import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider, Container } from 'react-bootstrap';
import { Explore, Home } from './pages';
import { Header, Footer, Contact } from './components';

function App() {
  return (
    <ThemeProvider breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}>
      <Container className="App dark" fluid>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
          </Routes>
        </BrowserRouter>
        <Contact />
        <Footer />
      </Container>
    </ThemeProvider>
  );
}

export default App;
