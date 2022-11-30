import './App.css';
import { RouterProvider } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import router from './Route/Route';

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
