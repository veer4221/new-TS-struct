import { MdExitToApp, MdShoppingCart } from "react-icons/md";
import { SiAuth0 } from "react-icons/si";
import { BsFillBagCheckFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
export { FieldTypes, sidebarObject };
const FieldTypes = {
  TEXT: "text",
  NUMBER: "number",
  TEXTAREA: "textarea",
  FILE: "file",
  EMAIL: "email",
  PASSWORD: "password",
  PSWD: "password",
  SELECT: "select",
  RADIO: "radio",
  DATE: "date",
  TIME: "time",
  CHECKBOX: "checkbox",
};

const sidebarObject = [
  {
    path: `/en/userList`,
    name: "User",

    slug: "user",
  },
  {
    path: `/en/product`,
    name: "Products",

    slug: "products",
  },
  {
    path: `/en/cart`,
    name: "Cart",

    slug: "cart",
  },
  {
    path: `/en/PermissionList`,
    name: "Permissions",
    slug: "Permissions",
  },
  {
    path: `/`,
    name: "Log Out",

    slug: "logout",
  },
];
