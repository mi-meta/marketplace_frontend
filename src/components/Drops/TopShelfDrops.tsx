import React from 'react';
import { Container, Stack } from 'react-bootstrap';
import { DropItem } from './DropItem';
import './drops.style.scss';

const TopShelfDrops = () => {
  return (
    <Container className="top-shelf-drops p-5">
      <h1 className="title">Top Shelf Drops</h1>
      <Stack direction="horizontal" gap={5} className="me-auto">
        <DropItem id={1} />
        <DropItem id={2} />
        <DropItem id={3} />
      </Stack>
    </Container>
  );
};

export { TopShelfDrops };
