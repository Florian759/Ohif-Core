import React from 'react';
// import { studies } from '@ohif/core';

function Load() {

  const onclick = async() =>{
  //   const {retrieveStudiesMetadata} = studies;

  //   const server = {
  //     "wadoRoot": "http://172.26.0.106/dcm4chee-arc/aets/DCM4CHEE/rs",
  //     "wadoUriRoot": "wadouri:http://172.26.0.106/dcm4chee-arc/aets/DCM4CHEE/wado",
  //     "name": "DCM4CHEE",
  //     "qidoRoot": "http://172.26.0.106/dcm4chee-arc/aets/DCM4CHEE/rs",
  //     "qidoSupportsIncludeField": true,
  //     "imageRendering": "wadors",
  //     "thumbnailRendering": "wadors",
  //     "supportsFuzzyMatching": true,
  //     "type": "dicomWeb"
  //   }

  //   const studyInstanceUid = ['1.2.826.0.1.3680043.2.541.1.0.20160927094747263008']

  //   console.log(await retrieveStudiesMetadata(server, studyInstanceUid ))

  }

  // useEffect(() => {
  //   aa()
  // }, []);

  return (
    <div onClick={onclick}>
      Load Study
    </div>
  )
}

export default Load;