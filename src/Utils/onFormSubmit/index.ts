import { LoginAPI } from "../networkManger/api";
import { loginPayloadAPI } from "../networkManger/payloadType";
import { toast } from "react-toastify";

export { submitLoginFunction };
async function submitLoginFunction(values: loginPayloadAPI) {
  try {
    toast.success("inLogin");
    const res = await LoginAPI(values);
    if (res?.data && res?.status === 200) {
      localStorage?.setItem("token", res?.data?.access_token);
      return true;
    }
    return false;
  } catch (error) {
    console.log(" API Call come execption ... ", error);
    return false;
  }
}
