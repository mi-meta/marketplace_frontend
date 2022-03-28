import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider, Container } from 'react-bootstrap';
import {
  Explore,
  Home,
  Collections,
  Activity,
  Auctions,
  Create,
  Detail,
  Learn,
  Drops,
} from './pages';
import { Header, Footer, Contact } from './components';

function App() {
  return (
    <ThemeProvider breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}>
      <Container className="App dark" fluid>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/activity" element={<Activity />} />
            <Route path="/auctions" element={<Auctions />} />
            <Route path="/create" element={<Create />} />
            <Route path="/detail" element={<Detail />} />
            <Route path="/drops" element={<Drops />} />
            <Route path="/learn" element={<Learn />} />
            <Route path="/home" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/collections" element={<Collections />} />
          </Routes>
        </BrowserRouter>
        <Contact />
        <Footer />
      </Container>
    </ThemeProvider>
  );
}

export default App;
