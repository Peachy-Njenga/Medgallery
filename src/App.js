import React, { useState } from "react";
import Header from "./components/header";
import Uploadform from "./components/uploadform";
import ImageGrid from "./components/image-grid";
import PictureModal from "./components/pictureModal";


function App() {
  const[selectedPatient, setSelectedPatient] = useState(null)

  return (
    <div className=" ">
    < Header />
    <Uploadform />
    <ImageGrid setSelectedPatient={setSelectedPatient}/>
    { selectedPatient && <PictureModal selectedPatient={selectedPatient} setSelectedPatient={setSelectedPatient} />}
    </div>
  );
}

export default App;
