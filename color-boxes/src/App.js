import './App.css';
import Helmet from 'react-helmet';
import 'bootstrap/dist/css/bootstrap.min.css';
import ColorBox from './ColorBox';


function App() {
  return (
    <div className="App">
      <Helmet>
      <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          <meta name="image" property="og:image" content="https://image.prntscr.com/image/C9t5t52OSkK_7Hxx1SaYQw.png" />
          <meta name="url" property="og:url" content="https://image.prntscr.com/image/C9t5t52OSkK_7Hxx1SaYQw.png" />
          <meta name="description" property="og:description" content="Color Boxes | Random Color Generator" />
          <meta name="author" content="Michael Cooper" />
          <meta name="publish_date" property="og:publish_date" content="2021-06-16T00:00:00-0600"></meta>
          <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,100&display=swap" rel="stylesheet" /> 
          <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
                integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
                crossorigin="anonymous"
          />
          {/* <script src="https://kit.fontawesome.com/8cc1b75eb3.js" crossorigin="anonymous"></script> */}
          <title>Color Boxes</title>
      </Helmet>
      <ColorBox />
    </div>
  );
}

export default App;
