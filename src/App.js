import React, { useState } from "react";
import Header from "./components/header";
import Uploadform from "./components/uploadform";
import ImageGrid from "./components/image-grid";
import PictureModal from "./components/pictureModal";


function App() {
  const[selectedPhoto, setSelectedPhoto] = useState(null)

  return (
    <div className="px-10 ">
    < Header />
    <Uploadform />
    <ImageGrid setSelectedPhoto={setSelectedPhoto}/>
    { selectedPhoto && <PictureModal selectedPhoto={selectedPhoto} setSelectedPhoto={setSelectedPhoto} />}
    </div>
  );
}

export default App;
