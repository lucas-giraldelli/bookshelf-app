import { Container } from './styles';

interface DashboardProps {
  name: string;
}

export function Dashboard({ name }: DashboardProps) {
  return (
    <Container>
      <p>Hi, <span>{ name }</span> 👋</p>
    </Container>
  )
}