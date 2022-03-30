import Button from 'Components/Button';
import logo from 'logo.svg';
import 'App.css';
import ReactHookForm from '../Components/ReactHookForm';

function Landing() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
        <Button primary>Styled Component Button</Button>
        <ReactHookForm></ReactHookForm>
      </header>
    </div>
  );
}

export default Landing;
