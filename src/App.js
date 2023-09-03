import "./App.css";
import { UserProvider, useUser } from "./UserContext";


const LoggedInUser = () => {
  const {user} = useUser();
  return (
    <p>
      Hello <span className="Username">{user.name}</span>
    </p>
  )
}

const Header = () => {
  return (
      <header>
        <h2>Little Lemon 🍕</h2>
        <LoggedInUser />
      </header>
  );
};

const Page = () => {
  const {user} = useUser();
  return (
    <div>
      <h2>When it comes to dough</h2>
      <p> Lorem lorem lorem </p>
      <p> Written by {user.name} </p>
    </div>
  );
};


function App() {
  return (
    <div className="App">
      <Header />
      <Page />
    </div>
  )

}

function Root() {
  return (
    <UserProvider>
        <App />
    </UserProvider>
  );
}

export default Root;