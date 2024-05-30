import { useAuthStore } from '../business/store';

export function Login() {
  const authStatus = useAuthStore((state) => state.status);
  const user = useAuthStore((state) => state.user);
  const token = useAuthStore((state) => state.token);
  const login = useAuthStore((state) => state.login);
  const logout = useAuthStore((state) => state.logout);

  if (authStatus === 'idle') {
    return (
      <>
        <button onClick={() => login('dg@rpg.com', '123')}>Login</button>
      </>
    );
  }
  if (authStatus === 'logout') {
    return <p>User Logout</p>;
  }
  return (
    <>
      <h2>Login</h2>
      {authStatus === 'isAuthenticated' && (
        <>
          <p>Login successfull:</p>
          <span>user: </span>
          {JSON.stringify(user, null, 2)}
          <span>token: </span>
          {JSON.stringify(token, null, 2)}
          <button onClick={logout}>Logout</button>
        </>
      )}
    </>
  );
}
