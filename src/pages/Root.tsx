import { useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { ThemeContext } from '../providers';
import {
  Explore,
  Home,
  Collection,
  Activity,
  Auctions,
  Create,
  Detail,
  Learn,
  Drops,
  Profile,
  Settings,
} from '../pages';
import {
  Header,
  Footer,
  Contact,
  ProfileSetting,
  CommunicationSetting,
  SecuritySetting,
} from '../components';

function Root() {
  const { theme } = useContext(ThemeContext);
  return (
    <Container className={`App ${theme}`} fluid>
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
          <Route path="/discover/:type" element={<Explore />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />}>
            <Route path="" element={<ProfileSetting />} />
            <Route path="profile" element={<ProfileSetting />} />
            <Route path="communication" element={<CommunicationSetting />} />
            <Route path="security" element={<SecuritySetting />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Contact />
      <Footer />
    </Container>
  );
}

export { Root };
