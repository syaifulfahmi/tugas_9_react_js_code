import React from 'react';
import {Popover, OverlayTrigger, Button} from 'react-bootstrap';

const popover = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">Informasi Website</Popover.Title>
      <Popover.Content>
        Website ini dibuat untuk memudahkan dalam pencarian informasi terkini tentang berita olahraga
      </Popover.Content>
    </Popover>
  );
  
  const PageOverlays = () => (
      <>
    <OverlayTrigger trigger="click" placement="right" overlay={popover}>
      <Button variant="primary" type="button">Informasi</Button>
    </OverlayTrigger>
    
    </>
  );

export default PageOverlays;