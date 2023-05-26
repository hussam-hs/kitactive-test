import React from 'react';

const FileIcon = ({ mimeType }) => {
  let icon = '';

  if (mimeType.startsWith('image/')) {
    icon = <img src={mimeType} alt="Preview" />;
  } else {
    // Add more file type icons as needed
    icon = <i className="fas fa-file"></i>;
  }

  return <div>{icon}</div>;
};

export default FileIcon;
