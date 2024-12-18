import axios from "axios";

export const daleteTareas = async (url) => {
  try {
    const response = await axios.delete(url, {
        params: {
            "675b609a8d68a32d8277d73c"
          }
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};