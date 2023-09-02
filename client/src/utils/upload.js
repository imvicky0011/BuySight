import axios from "axios";

const upload = async (file) => {
  try {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "BuySight");

    const res = await axios.post(
      "https://api.cloudinary.com/v1_1/imvicky0011/image/upload",
      data
    );

    const { url } = res.data;
    return url;
  } catch (err) {
    console.log(err);
  }
};

export default upload;
