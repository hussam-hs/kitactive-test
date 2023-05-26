import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../actions/authActions';
import { getFiles, deleteFile } from '../actions/fileActions';
import FilePreview from './FilePreview';

const UserProfile = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const files = useSelector((state) => state.files.files);

  useEffect(() => {
    dispatch(getFiles());
  }, [dispatch]);

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  const handleDeleteFile = (fileId) => {
    dispatch(deleteFile(fileId));
  };

  return (
    <div>
      <h2>Welcome, {user.name}!</h2>
      <button onClick={handleLogout}>Logout</button>
      <h3>Uploaded Files: {files.length}</h3>
      {files.map((file) => (
        <FilePreview key={file.id} file={file} onDelete={handleDeleteFile} />
      ))}
    </div>
  );
};

export default UserProfile;
