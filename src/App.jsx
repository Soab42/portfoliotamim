import "./App.css";
import Page from "./components/Page";
import {useState} from 'react';

function App() {
  const[dark,setDark] = useState(false);
  return (
    <section className={dark ? 'dark' : ''}>
      <Page dark={dark} handleDark={() => setDark(dark => !dark)} />
    </section>
  );
}

export default App;
