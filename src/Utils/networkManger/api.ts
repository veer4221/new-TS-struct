import axios from "./axios";
import { loginPayloadAPI } from "./payloadType";

export const LoginAPI = (payload: loginPayloadAPI) => axios.post(`/login`, payload);
