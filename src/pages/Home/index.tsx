import React from 'react';
import Button from '../../components/Button';
import Welcome from '../../components/Welcome';

import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Button text="Register" typeButton={false} />
    </Container>
  );
};

export default Home;
