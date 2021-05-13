import { Container } from './styles';

interface ProfileProps {
  name: string;
}

export function Profile({ name }: ProfileProps) {
  return (
    <Container>
      <p>Hi, <span>{ name }</span> 👋</p>
    </Container>
  )
}
