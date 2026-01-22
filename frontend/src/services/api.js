import axios from "axios";

export const uploadChat = (file) => {
  const formData = new FormData();
  formData.append("file", file);

  return axios.post("http://localhost:5000/api/chat/upload", formData);
};
