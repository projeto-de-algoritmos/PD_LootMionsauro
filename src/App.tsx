import { RouterProvider } from 'react-router-dom';
import Router from './Routes';
import './App.css';
import GlobalStyle from './styles/GlobalStyles';


function App() {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <RouterProvider router={Router} />
    </>
  );
}

export default App;
