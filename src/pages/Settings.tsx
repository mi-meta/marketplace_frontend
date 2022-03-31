import { Container, Row, Col, Nav, Image, FormControl, Button, Stack } from 'react-bootstrap';
import '../styles/settings.scss';

const Settings = () => {
  return (
    <Container className="settings" fluid>
      <Row>
        <Col lg={3}>
          <h1 className="underline">Settings</h1>
          <Nav defaultActiveKey="/home" className="flex-column">
            <Nav.Link href="/home" className="active">
              Profile Settings
            </Nav.Link>
            <Nav.Link eventKey="link-1">Communications</Nav.Link>
            <Nav.Link eventKey="link-2">Security</Nav.Link>
            <Nav.Link eventKey="disabled">Support</Nav.Link>
          </Nav>
        </Col>
        <Col lg={9} className="settings-body">
          <h1>Profile Settings</h1>
          <Row>
            <Stack direction="horizontal" gap={5} className="settings-body-profile">
              <div>
                <h2>Profile Image</h2>
                <Image
                  src="/images/profile.png"
                  className="settings-body-profile-image"
                  width={200}
                  height={200}
                  roundedCircle
                />
              </div>
              <div>
                <h2>Profile Banner</h2>
                <Image
                  src="/images/profile-banner.png"
                  className="settings-body-profile-banner"
                  height={200}
                  rounded
                />
              </div>
            </Stack>
            <div className="mb-2">
              <h2>Link NFT</h2>
              <Stack direction="horizontal" gap={2}>
                <FormControl />
                <Button size="lg">Connect</Button>
              </Stack>
            </div>
            <div className="mb-2">
              <h2>Username</h2>
              <FormControl />
            </div>
            <div className="mb-2">
              <h2>Personal Bio</h2>
              <FormControl as="textarea" />
            </div>
            <div className="mb-2">
              <h2>Email</h2>
              <FormControl />
            </div>
            <div className="mb-2">
              <h2>Linked Wallets</h2>
              <Stack direction="horizontal" gap={2}>
                <FormControl />
                <Button size="lg">Copy</Button>
              </Stack>
              <Stack direction="horizontal" gap={2}>
                <FormControl />
                <Button size="lg">Copy</Button>
              </Stack>
              <Stack direction="horizontal" gap={2}>
                <FormControl />
                <Button size="lg">Copy</Button>
              </Stack>
            </div>
            <div className="mb-2">
              <h2>Social Connections</h2>
              <FormControl />
              <FormControl />
            </div>
            <div className="mb-2">
              <Button size="lg">Save</Button>
              <Button size="lg" className="mx-3" variant="light">
                Cancel
              </Button>
            </div>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export { Settings };
