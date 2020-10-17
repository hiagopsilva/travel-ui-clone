import styled from 'styled-components';
import { getTheme } from '../../utils/helpers';

// const textColor = getTheme('Title');
// const backgroundColor = getTheme('title');

interface Props {
  typeButton: Partial<boolean>;
}

export const Container = styled.button.attrs((props: Props) => ({
  typeButton: props.typeButton,
}))`
  background: ${props => (props.typeButton ? '#fb8f1d' : '#FFFF')};
  color: ${props => (props.typeButton ? '#FFFF' : '#fb8f1d')};
  border: ${props => (props.typeButton ? 'none' : '1px solid #fb8f1d')};
  width: 133px;
  height: 44px;
  border-radius: 8px;

  justify-content: center;
  align-items: center;
`;

export const Text = styled.h4`
  font-weight: 600;
  font-size: 15px;
`;
