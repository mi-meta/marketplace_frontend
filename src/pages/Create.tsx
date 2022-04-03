import '../styles/create.scss';
import {
  Container,
  Row,
  Col,
  Image,
  Card,
  InputGroup,
  FormControl,
  Stack,
  Button,
} from 'react-bootstrap';
import { DropdownComp } from '../components';

function Create() {
  return (
    <Container className="create">
      <Row className="justify-content-center mt-5">
        <Col lg={9}>
          <h1>Choose Blockchain</h1>
          <p>
            Select the blockchain that suits your needs best. You will be required to sign in to
            create your NFT.
          </p>
          <Row className="create-network">
            <Col lg={4} md={6} sm={12}>
              <Card>
                <Card.Body className="m-auto text-center mb-5">
                  <h1>Ethereum</h1>
                  <Image src={`/icons/ethereum-67-107.png`} className="mt-4" />
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <Card>
                <Card.Body className="m-auto text-center mb-5">
                  <h1>Polygon</h1>
                  <Image src={`/icons/polygon-88-88.png`} className="mt-4" />
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <Card>
                <Card.Body className="m-auto text-center mb-5">
                  <h1>Solana</h1>
                  <Image src={`/icons/solana-79-79.png`} className="mt-4" />
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="justify-content-center mt-5">
        <Col lg={9}>
          <h1>Choose Type</h1>
          <p>
            Choose “Single” for one of a kind or “Multiple” if you want to sell one collectible
            multiple times
          </p>
          <Row className="create-type">
            <Col lg={4} md={6} sm={12}>
              <Card>
                <Card.Body className="m-auto text-center mb-5">
                  <h1>Single</h1>
                  <Image src={`/icons/erc721-logo.png`} className="mt-4" />
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <Card>
                <Card.Body className="m-auto text-center mb-5">
                  <h1>Editions</h1>
                  <Image src={`/icons/erc1155-logo.png`} className="mt-4" />
                  {/* <Image src={`/icons/erc1155-logo.png`} className="mt-4" />
                  <Image src={`/icons/erc1155-logo.png`} className="mt-4" /> */}
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="create-nft justify-content-center" style={{ display: 'none' }}>
        <Col lg={9}>
          <Row>
            <Col lg={6}>
              <h1>Create NFT on Ethereum</h1>
              <div className="create-nft-trait">
                <h2>Choose wallet</h2>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                  <FormControl
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>
              </div>
              <div className="creat-nft-trait">
                <h2>Upload file</h2>
                <Stack direction="horizontal">
                  <Card>
                    <Card.Img src={``} />
                  </Card>
                  <div>
                    <p>PNG, GIF, WEBP, MP4, MP3 Max upload size 100mb.</p>
                    <Button>Choose file</Button>
                  </div>
                </Stack>
              </div>
              <div className="creat-nft-trait">
                <p>This is the collection where your item will appear</p>
                <DropdownComp items={['a', 'b']} />
              </div>
              <div className="creat-nft-trait"></div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export { Create };
