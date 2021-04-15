import logo from './logo.svg';
import './App.css';

import { studies } from '@ohif/core';

function App() {
  const server = {
    "wadoRoot": "http://172.26.0.106/dcm4chee-arc/aets/DCM4CHEE/rs",
    "wadoUriRoot": "wadouri:http://172.26.0.106/dcm4chee-arc/aets/DCM4CHEE/wado",
    "name": "DCM4CHEE",
    "qidoRoot": "http://172.26.0.106/dcm4chee-arc/aets/DCM4CHEE/rs",
    "qidoSupportsIncludeField": true,
    "imageRendering": "wadors",
    "thumbnailRendering": "wadors",
    "supportsFuzzyMatching": true,
    "type": "dicomWeb"
  }

  const studyInstanceUid = '1.2.826.0.1.3680043.2.541.1.0.20160927094747263008'

  const studyMetadata = await studies.retrieveStudyMetadata(
    server,
    studyInstanceUid
  );

  console.log(studyMetadata)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
