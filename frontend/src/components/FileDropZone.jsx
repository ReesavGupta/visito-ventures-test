import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'

const FileDropZone = ({ onChange , color}) => {
  const onDrop = useCallback(
    (acceptedFiles) => {
      if (acceptedFiles.length > 0) {
        const file = acceptedFiles[0]
        console.log('Dropped file:', file)
        onChange(file) // file back pass garnu parsa
      }
    },
    [onChange]
  )

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: 'image/*', // Only accept images
    multiple: false, // accept 1 file only hai ta
  })

  return (
    <div
      {...getRootProps()}
      style={{
        border: '2px dashed #cccccc',
        borderRadius: '8px',
        padding: '10px',
        textAlign: 'center',
        cursor: 'pointer',
        backgroundColor: isDragActive ? '#f0f0f0' : '#ffffff',
        color:color,
        height:'5vh',
        textJustify:'auto'
      }}
    >
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the file here...</p>
      ) : (
        <p>Select Image</p>
      )}
    </div>
  )
}

export default FileDropZone
