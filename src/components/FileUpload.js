import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { uploadFiles } from '../utils/api'; 

const FileUpload = ({ accessToken }) => {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const dispatch = useDispatch();

  const handleFileChange = (e) => {
    setSelectedFiles(Array.from(e.target.files));
  };

  const handleUpload = async () => {
    await dispatch(uploadFiles(accessToken, selectedFiles)); // Использование функции uploadFiles из utils/api.js
    setSelectedFiles([]);
  };

  return (
    <div>
      <input type="file" multiple onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default FileUpload;