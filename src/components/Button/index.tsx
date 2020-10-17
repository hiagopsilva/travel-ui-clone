import React from 'react';

import { Container, Text } from './styles';

interface Props {
  text: string;
  typeButton: Partial<boolean>;
}
const Button: React.FC<Props> = ({ text, typeButton }: Props) => {
  return (
    <Container typeButton={typeButton}>
      <Text>{text}</Text>
    </Container>
  );
};

export default Button;
