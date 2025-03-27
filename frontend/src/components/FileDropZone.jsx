// File: src/components/FileDropZone.jsx
import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

const FileDropZone = () => {
  const onDrop = useCallback((acceptedFiles) => {
    // image = acceptedFiles[0].path;
    console.log("Dropped files:", acceptedFiles[0].path);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div  
      {...getRootProps()}
      style={{
        border: "2px dashed #cccccc",
        borderRadius: "8px",
        padding: "20px",
        textAlign: "center",
        cursor: "pointer",
      }}
    >
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the files here...</p>
      ) : (
        <p>Drag 'n' drop some files here, or click to select files</p>
      )}
    </div>
  );
};

export default FileDropZone;
