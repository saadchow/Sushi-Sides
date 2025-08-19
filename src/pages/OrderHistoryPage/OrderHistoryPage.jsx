import { Link } from 'react-router-dom';
import Logo from '../../components/Logo/Logo';
import UserLogOut from '../../components/UserLogOut/UserLogOut';

export default function OrderHistoryPage({ user, setUser }) {
  return (
    <main style={{
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--surface)',
      borderRadius: 'var(--radius)',
      boxShadow: 'var(--shadow)',
      padding: '32px',
      gap: '24px'
    }}>
      <Logo />
      <h1 style={{ 
        color: 'var(--ink)', 
        fontSize: '3vmin',
        fontFamily: '"Noto Sans JP", "Inter", sans-serif',
        fontWeight: '600',
        margin: '16px 0'
      }}>
        Order History
      </h1>
      <p style={{ 
        color: 'var(--muted)', 
        fontSize: '2vmin',
        textAlign: 'center',
        maxWidth: '400px'
      }}>
        Your order history will appear here once you've placed your first order.
      </p>
      <Link 
        to="/orders/new" 
        className="button"
        style={{ 
          textDecoration: 'none',
          fontSize: '1.8vmin'
        }}
      >
        Back to Menu
      </Link>
      {user && <UserLogOut user={user} setUser={setUser} />}
    </main>
  );
}
