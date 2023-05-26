import React, { useEffect, useState } from 'react';
import FileIcon from './FileIcon';
import { deleteFile } from '../services/fileService';
import api from '../utils/api'; // Add this line

const FilePreview = ({ file, onDelete, token }) => {
  const [fileData, setFileData] = useState(null);

  useEffect(() => {
    const fetchFileData = async () => {
      try {
        const response = await api.get(`/api/media/${file.id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setFileData(response.data);
      } catch (error) {
        console.error('Failed to fetch file:', error);
      }
    };

    fetchFileData();
  }, [file.id, token]);

  const handleDelete = async () => {
    try {
      await deleteFile(file.id, token);
      onDelete(file.id);
    } catch (error) {
      console.error('Failed to delete file:', error);
    }
  };

  return (
    <div>
      <FileIcon mimeType={file.mimeType} />
      <span>{fileData ? fileData.name : 'Loading...'}</span>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default FilePreview;

