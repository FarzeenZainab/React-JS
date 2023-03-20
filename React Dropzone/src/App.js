import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import "./App.css";

const thumbsContainer = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  marginTop: 16,
};

const thumb = {
  display: "inline-flex",
  borderRadius: 2,
  border: "1px solid #eaeaea",
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: "border-box",
};

const thumbInner = {
  display: "flex",
  minWidth: 0,
  overflow: "hidden",
};

const img = {
  display: "block",
  width: "auto",
  height: "100%",
};

function App() {
  const [files, setFiles] = useState([]);

  const onDrop = (acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );

      const reader = new FileReader();

      reader.onabort = () => console.log("file reading was abborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = () => console.log("file loaded successfully");

      reader.readAsArrayBuffer(file);
      console.log(file, reader);
    });
  };

  const thumbs = files.map((file) => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img
          src={file.preview}
          style={img}
          // Revoke data uri after image is loaded
          onLoad={() => {
            URL.revokeObjectURL(file.preview);
          }}
        />
      </div>
    </div>
  ));

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div>
      <div
        onDrop={onDrop}
        {...getRootProps({
          className: "dropzone",
        })}
      >
        <input {...getInputProps()} />
        <h3>Drop your files here</h3>
      </div>
      <aside style={thumbsContainer}>{thumbs}</aside>
    </div>
  );
}

export default App;
