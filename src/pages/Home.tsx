import { useSession } from '../auth/useSession';
import LoginForm from '../components/LoginForm';
import Dashboard from './Dashboard';

export default function Home() {
  const { user, login } = useSession();
  return user ? <Dashboard /> : <LoginForm onLogin={login} />;
}
