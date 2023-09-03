import "./App.css";
import { UserProvider, useUser } from "./UserContext";
import { ThemeProvider, useTheme } from "./ThemeContext";
import Switch from "./Switch";


const Title = ({ children }) => {
  const { theme } = useTheme();
  return (
    <h2
      style={{color: theme === "light" ? "black" : "white"}}
    >
      {children}
    </h2>
  );
};


const Paragraph = ({ children }) => {
  const { theme } = useTheme();
  return (
    <p
      style={{color: theme === "light" ? "black" : "white"}}
    >
      {children}
    </p>
  );
};


//////////// Update content here ////////////
const Header = () => {
  return (
    <div>
      <header>
        <Title>THE TASTY 🍕 BLOG</Title>
        <Switch />
      </header>
    </div>
  );
};


const Page = () => {
  return (
    <div className="Page">
      <Title>When it comes to dough</Title>
      <Content />
    </div>
  );
};


const Content = () => {
  const { user } = useUser();
  return (
    <div className="content-container">
      <Paragraph>
        We are a pizza-loving family. And for years, I searched and searched and
        searched for the perfect pizza dough recipe. I tried dozens, or more.
        And while some were good, none of them were that recipe that would
        make me stop trying all of the others.
      </Paragraph>
      <Paragraph>Written by {user.name}</Paragraph>
      <Paragraph>(Email: {user.email})</Paragraph>
    </div>
  );
};


function App() {
  const { theme } = useTheme();
  return (
    <div
      className="App"
      style={{backgroundColor: theme === "light" ? "white" : "black"}}
    >      
      <Header />
      <Page />
    </div>
  )
}


function Root() {
  return (
    <ThemeProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </ThemeProvider>
  );
}

export default Root;