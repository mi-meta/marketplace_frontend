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
  Form,
} from 'react-bootstrap';
import BootstrapSwitchButton from 'bootstrap-switch-button-react';
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
      <Row className="create-nft justify-content-center">
        <Col lg={9}>
          <h1>Create NFT on Ethereum</h1>
          <Row>
            <Col lg={6}>
              <div className="create-nft-trait">
                <h2>Choose wallet</h2>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">
                    <Image src={`/icons/eth.png`} />
                  </InputGroup.Text>
                  <FormControl
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    value={`0x12f491fany9ll5rw2...cddc107116083ec49e5217`}
                  />
                </InputGroup>
              </div>
              <div className="creat-nft-trait">
                <h2>Upload file</h2>
                <Stack direction="horizontal">
                  <Card>
                    <Card.Img src={`/images/base.png`} />
                  </Card>
                  <div className="text-center">
                    <p>PNG, GIF, WEBP, MP4, MP3 Max upload size 100mb.</p>
                    <Button className="mi-button">Choose file</Button>
                  </div>
                </Stack>
              </div>
              <div className="creat-nft-trait">
                <p>This is the collection where your item will appear</p>
                <DropdownComp
                  items={[
                    <p key={0}>Choose Collection</p>,
                    <p key={1}>mi-metaverse single (default)</p>,
                    <Stack direction="horizontal" key={2}>
                      <Image src="" />
                      <p>Create new collection</p>
                    </Stack>,
                    <Stack direction="horizontal" key={3}>
                      <Image src="" />
                      <p>Create new collection</p>
                    </Stack>,
                    <Stack direction="horizontal" key={4}>
                      <Image src="" />
                      <p>Create new collection</p>
                    </Stack>,
                  ]}
                />
              </div>
              <div className="creat-nft-trait"></div>
            </Col>
            <Col lg={6} className="p-3">
              <h2>Preview</h2>
              <Image src={`/images/base.png`} fluid style={{ borderRadius: '20px' }} />
              <Stack direction="horizontal" className="mt-4">
                <h2>List on marketplace</h2>
                <BootstrapSwitchButton checked={true} />
              </Stack>
              <div className="create-nft-trait">
                <p>List your new NFT on the marketplace</p>
                <Stack direction="horizontal" className="create-nft-price-type" gap={3}>
                  <div className="text-center">
                    <p>Fixed price</p>
                    <Image src={`/icons/tag.png`} width={76} height={76} />
                    <Form.Check type="radio" />
                  </div>
                  <div className="text-center">
                    <p>Accept bids</p>
                    <Image src={`/icons/lBKGwu_2_.png`} width={76} height={76} className="p-2" />
                    <Form.Check type="radio" />
                  </div>
                  <div className="text-center">
                    <p>Timed auction</p>
                    <Image src={`/icons/Watch.png`} width={76} height={76} />
                    <Form.Check type="radio" />
                  </div>
                  <div></div>
                  <div></div>
                </Stack>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={6}>
              <Stack direction="horizontal" gap={4}>
                <div className="create-nft-erc-1155-logo" />
                <Stack>
                  <h2 className="pt-3">mi-metaverse multiple</h2>
                  <p>ERC-1155</p>
                </Stack>
              </Stack>
            </Col>
            <Col lg={6}>
              <div className="create-nft-trait">
                <h2>Price</h2>
                <p>Enter the price for one item</p>
                <Stack direction="horizontal" gap={3}>
                  <FormControl />
                  <DropdownComp items={['a', 'b']} />
                </Stack>
                <p>
                  Service fee <span className="text-light">2.5%</span>
                </p>
                <p>
                  You will receive <span className="text-light">4.875 MATIC</span> ($8)
                </p>
              </div>
            </Col>
            <Col>
              <div className="create-nft-trait">
                <h2>Description</h2>
                <p>
                  The description will be included on the item’s detail page under the image.
                  Markdown syntax is supported.
                </p>
                <Form.Control
                  as="textarea"
                  placeholder="Enter a detailed description of your item"
                  rows={5}
                ></Form.Control>
                <h2>
                  <span className="text-info">Markdown</span> syntax is supported.
                </h2>
              </div>
              <div className="create-nft-trait">
                <h2>Properties</h2>
                <p>Add properties to your item</p>
                <Stack direction="horizontal" className="create-nft-add-item" gap={3}>
                  <div className="bg-dark">+</div>
                  <div>
                    <p>Bosswell</p>
                    <p>
                      <span className="text-info">Ears</span>
                    </p>
                  </div>
                  <div>
                    <p>Rollo</p>
                    <p>
                      <span className="text-info">Sword</span>
                    </p>
                  </div>
                  <div>
                    <p>Rollo</p>
                    <p>
                      <span className="text-info">Shield</span>
                    </p>
                  </div>
                </Stack>
              </div>
              <div className="create-nft-trait">
                <Row>
                  <Col lg={6} className="mt-3">
                    <h2>Category</h2>
                    <p>This is the category where your item will appear</p>
                    <DropdownComp items={['Choose category', 'b']} />
                  </Col>
                  <Col lg={6} className="mt-3">
                    <h2>Royalties</h2>
                    <p>Suggested royalties: 0%, 10%, 20%, 30%. Max 50%</p>
                    <FormControl />
                  </Col>
                  <Col lg={6} className="mt-3">
                    <h2>Rarity</h2>
                    <p>The rarity of your item</p>
                    <DropdownComp items={['Choose rarity', 'b']} />
                  </Col>
                  <Col lg={6} className="mt-3">
                    <h2>Number of Editions</h2>
                    <p>Amount of tokens</p>
                    <DropdownComp items={['a', 'b']} />
                  </Col>
                </Row>
              </div>
              <div className="create-nft-trait">
                <Stack direction="horizontal" gap={3}>
                  <h2>Unlockable content</h2>
                  <BootstrapSwitchButton checked={true} />
                </Stack>
                <FormControl
                  as="textarea"
                  rows={5}
                  placeholder="Example: “when you buy this NFT, you can get free coffee for life”"
                />
                <h2 className="mt-3">
                  <span className="text-info">Markdown</span> syntax is supported.
                </h2>
              </div>
              <div className="create-nft-trait">
                <Stack direction="horizontal" gap={3}>
                  <h2>Explicit content</h2>
                  <BootstrapSwitchButton checked={true} />
                </Stack>
              </div>
              <div className="create-nft-trait text-center mb-5">
                <Button className="mi-button-primary mx-3" variant="primary">
                  Mint it!
                </Button>
                <Button className="mi-button-light bg-gray mx-3" variant="light">
                  Cancel!
                </Button>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export { Create };
