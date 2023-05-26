import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { Button, Typography, ImageList, ImageListItem, ListSubheader,  } from '@mui/material';
import { logoutUser } from '../services/authService';
import { dropToken } from '../actions/authActions';
import { deleteFile, getFile, getFiles } from '../services/fileService';
import { uploadFiles } from '../services/fileService';

const UserProfilePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const maxFilesSize = 1 * 1024 * 1024;

  const [errorText, setErrorText] = useState(null);
  const [files, setFiles] = useState([]);
  const [filesToUpload, setFilesToUpload] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("token") !== null && fetchData()) {
      return;
    }
    navigate("/");
  }, [])

  const fetchData = async () => {
    const fetchedFiles = await getFiles();
    if (fetchedFiles === false)
      return false;
    setFiles(fetchedFiles);
    return true;
  };

  const handleDeleteFile = async (fileId) => {
    await deleteFile(fileId);
    await fetchData();
  };

  const handleUploadFile = async () => {
    if (files.length + filesToUpload > 20)
      return;
    if (filesToUpload.map(f => f.length).reduce((a, b) => a + b, 0) > maxFilesSize) {
      setErrorText("Размер файлов превышает лимит в 1МБ");
      return;
    }
    await uploadFiles(files);
    await fetchData();
  }

  const handleDownloadFile = async (fileId) => {
    const file = await getFile(fileId);
    //todo
  }

  const handleLogout = async () => {
    const isSuccess = await logoutUser();
    if (!isSuccess) {
      setErrorText("Непредвиденная ошибка, попробуйте еще раз");
      dispatch(dropToken);
      return;
    }
    navigate("/");
  };

  return (
    <div>
      <Typography variant="h2">
        User Profile
      </Typography>
      {errorText && <Typography>{errorText}</Typography>}
      <ImageList sx={{ width: 500, height: 450 }}>
        <ImageListItem key="Subheader" cols={2}>
          <ListSubheader component="div">Ваши файлы</ListSubheader>
        </ImageListItem>
        {
          //TODO
        }
        {/* {files.map((item) => (
          <ImageListItem key={item.id}>
            <img
              src={item.url}
              srcSet={item.url}
              alt={item.name}
              loading="lazy"
            />
            <ImageListItemBar
              title={item.title}
              subtitle={item.author}
              actionIcon={
                <></>
              }
            />
          </ImageListItem>
        ))} */}
      </ImageList>
      <Button type='file' onClick={handleUploadFile}>
        Upload
      </Button>
      <Button onClick={handleLogout}>
        Logout
      </Button>
    </div>
  );
};

export default UserProfilePage;
