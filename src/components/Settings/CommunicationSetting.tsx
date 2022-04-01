import { Row, Stack } from 'react-bootstrap';
import BootstrapSwitchButton from 'bootstrap-switch-button-react';

const CommunicationSetting = () => {
  return (
    <>
      <h1>Profile Setting</h1>
      <Row>
        <Stack direction="horizontal" gap={2}>
          <h2>Receive email notifications</h2>
          <BootstrapSwitchButton checked={true} onChange={() => console.log('change')} size="xs" />
        </Stack>
        <p>
          Turn on email notifications if you want to receive regular updates, marketing emails, and
          account notifications.
        </p>
      </Row>
    </>
  );
};

export { CommunicationSetting };
