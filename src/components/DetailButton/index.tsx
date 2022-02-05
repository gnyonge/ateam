import { Container, Button } from './styles';

interface ButtonProps {
  title: string;
  color: string;
}
const DetailButton = ({ title, color }: ButtonProps) => {
  return (
    <Container>
      <Button color={color}>{title}</Button>
    </Container>
  )
};

export default DetailButton;
