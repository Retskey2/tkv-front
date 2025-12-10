import axiosInstance from "axios";

import config from "@/shared/config";

const axios = axiosInstance.create({
  baseURL: `${config.NEXT_PUBLIC_API_PATH}/api`,
  withCredentials: true,
});

export default axios;
