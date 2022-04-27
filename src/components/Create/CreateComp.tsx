import {useState} from 'react'
import {
  Row,
  Col,
  InputGroup,
  Card,
  Stack,
  Image,
  FormControl,
  Button,
  Form,
  Modal
} from 'react-bootstrap';
import { DropdownComp } from '../';
import BootstrapSwitchButton from 'bootstrap-switch-button-react';

const CreateComp = () => {
  const [listMarket, setListMarket] = useState(true);
  const [selectedFile, setSelectedFile] = useState("");
  const [modal, setModal] = useState(false)
  const [itemData, setItemData] = useState([{type:'Boswell', name:'Ears'}, {type:'Rollo', name:'Sword'}, {type:'Rollo', name:'Shield'}])
  const [bufferItemData, setBufferItemData] = useState([{type:'Boswell', name:'Ears'}, {type:'Rollo', name:'Sword'}, {type:'Rollo', name:'Shield'}])

  const handleChange = () => {
    console.log('handle');
  };

  const handleCloseModal = () => {
    setModal(false);
  }

  const editHandler = (e:any, i:number, type:string) => {
    let itemData = bufferItemData;
    if (type === "type") {
      itemData[i].type = e.target.value;
    } else {
      itemData[i].name = e.target.value;
    }
    setBufferItemData([...itemData]);
  }

  const saveHandler = () => {
    setBufferItemData([...itemData]);
    setModal(false);
  }

  const cancelHandler = () => {
    setItemData([...bufferItemData]);
    setModal(false);
  }

  const onFileChange = (e:any) => {
    e.preventDefault();
    let file = e.target.files[0];
    let fileReader = new FileReader();

    fileReader.onloadend = () => {
        console.log(fileReader.result)
        if (fileReader.result !== null) {
          setSelectedFile(fileReader.result.toString())
        }
        
    };
    console.log(fileReader.result)
    fileReader.readAsDataURL(file)
  };
  return (
    <Row className="create-nft justify-content-center mt-5">
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
                  onChange={handleChange}
                />
              </InputGroup>
            </div>
            <div className="creat-nft-trait">
              <h2>Upload file</h2>
              <Stack direction="horizontal">
                <Card>
                  <Card.Img src={selectedFile !== ""?selectedFile:`/images/base.png`} style={{width:'100%'}} />
                </Card>
                <div className="text-center">
                  <p>PNG, GIF, WEBP, MP4, MP3 Max upload size 100mb.</p>
                  <Form.Control type="file" className="create-file-select" onChange={onFileChange}/>
                  {/* <input type="file" id="upload-file" placeholder="Upload a Picture"  /> */}
                  {/* <label htmlFor="upload-file">Upload a Picture</label> */}
                  {/* <Button className="mi-button">Choose file</Button> */}
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
          <Col lg={6} className="p-3 create-nft-trait">
            <h2>Preview</h2>
            <Image src={`/images/base.png`} fluid style={{ borderRadius: '20px' }} />
            <Stack direction="horizontal" className="mt-4">
              <h2>List on marketplace</h2>
              <BootstrapSwitchButton onlabel=" " offlabel=" " checked={listMarket} onChange={(checked: boolean)=> checked?setListMarket(true):setListMarket(false)} />
            </Stack>
            {listMarket && <div className="create-nft-trait">
              <Stack direction="horizontal" className="create-nft-price-type" gap={3}>
                <div className="text-center">
                  <p>Fixed price</p>
                  <Image src={`/icons/tag.png`} width={76} height={76} />
                  <Form.Check className="custom-radio" type="radio" />
                </div>
                <div className="text-center">
                  <p>Accept bids</p>
                  <Image src={`/icons/lBKGwu_2_.png`} width={76} height={76} className="p-2" />
                  <Form.Check className="custom-radio" type="radio" />
                </div>
                <div className="text-center">
                  <p>Timed auction</p>
                  <Image src={`/icons/Watch.png`} width={76} height={76} />
                  <Form.Check className="custom-radio" type="radio" />
                </div>
                <div></div>
                <div></div>
              </Stack>
            </div>}
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
          {listMarket && <Col lg={6}>
            <div className="create-nft-trait">
              <h2>Price</h2>
              <p>Enter the price for one item</p>
              <Stack direction="horizontal" gap={3}>
                <FormControl />
                <DropdownComp items={['a', 'b']} />
              </Stack>
              <p className="mt-3">
                Service fee <span className="text-light">2.5%</span>
              </p>
              <p>
                You will receive <span className="text-light">4.875 MATIC</span> ($8)
              </p>
            </div>
          </Col>}
          <Col>
            <div className="create-nft-trait">
              <h2>Description</h2>
              <p>
                The description will be included on the item’s detail page under the image.
                supported.
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
                <div className="bg-dark create-nft-edit-item" onClick={() => setModal(true)}>+</div>
                {itemData.map((item, i) => <div key={i}>
                  <p>{item.type}</p>
                  <p>
                    <span className="text-info">{item.name}</span>
                  </p>
                </div>)}
              </Stack>
              <Modal
                show={modal}
                onHide={handleCloseModal}
                backdrop="static"
                keyboard={false}
                centered
              >
                <Modal.Header>
                  <div></div>
                  <Modal.Title>Add properties</Modal.Title>
                  <div className="create-nft-modal-close">X</div>
                </Modal.Header>
                <Modal.Body>
                  <div className="create-nft-modal-item-row mb-4" style={{borderBottom:'1px solid gray'}}>
                    <div className="create-nft-modal-item-prefix" ></div>
                    <div className="create-nft-modal-item-content">
                      <span>Type</span>
                    </div>
                    <div  className="create-nft-modal-item-content">
                      <span>Name</span>
                    </div>
                  </div>
                  {bufferItemData.map((item, i) => {
                    return <div key={i} className="create-nft-modal-item-row">
                        <div className="create-nft-modal-item-prefix" >X</div>
                        <div className="create-nft-modal-item-content">
                          <div>
                            <Form.Control type="text" className="create-nft-modal-input" value={item.type} onChange={(e)=>editHandler(e, i, "type")}/>
                          </div>
                        </div>
                        <div  className="create-nft-modal-item-content">
                          <div>
                            <Form.Control type="text" className="create-nft-modal-input" value={item.name}  onChange={(e)=>editHandler(e, i, "name")}/>
                          </div>
                        </div>
                      </div>
                  })}
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="primary" className="create-nft-modal-btn-save" onClick = {()=>saveHandler()}>Save</Button>
                  <Button variant="secondary" className="create-nft-modal-btn-close" onClick={()=>cancelHandler()}>
                    Cancel
                  </Button>
                </Modal.Footer>
              </Modal>
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
                <BootstrapSwitchButton onlabel=" " offlabel=" " checked={true}  />
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
                <BootstrapSwitchButton onlabel=" " offlabel=" " checked={true} />
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
  );
};

export { CreateComp };
