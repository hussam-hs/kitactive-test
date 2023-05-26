import api from '../utils/api';

export const deleteFile = async (fileId) => {
  try {
    await api.delete(`/api/media/${fileId}`);
    return true;
  } catch (error) {
    return false;
  }
};

export const getFiles = async () => {
  try {
    const response = await api.get('/media');
    return response.data.files;
  } catch (error) {
    return false;
  }
};

export const getFile = async (fileId) => {
  try {
    const response = await api.get(`/media/${fileId}`);
    return response.data;
  } catch (error) {
    return false;
  }
};

export const uploadFiles = async (files) => {
  try {
    const formData = new FormData();
    files.forEach((file) => {
      formData.append('files', file);
    });
    await api.post('/media/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      }
    });
    return true;
  } catch (error) {
    return false;
  }
};