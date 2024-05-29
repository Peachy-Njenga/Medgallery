import React from "react";
import useFireStore from "../hooks/useFireStore";

const ImageGrid = ({setSelectedPhoto}) => {
  const { docs } = useFireStore("images");

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {docs && docs.map((doc) => (
          <div className="" key={doc.id}
            onClick={() => setSelectedPhoto(doc.url)}
          >
              <img src={doc.url} alt="Patient image" className="h-auto max-w-full rounded-lg"/>
          </div>
        ))}
    </div>
  );
};

export default ImageGrid;
