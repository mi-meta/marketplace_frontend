import { Row, Image, Stack, Button, FormControl } from 'react-bootstrap';

const ProfileSetting = () => {
  return (
    <>
      <h1>Profile Setting</h1>
      <Row className="settings-body-profile">
        <Stack direction="horizontal" gap={5} className="settings-body-profile-preview">
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
    </>
  );
};

export { ProfileSetting };
