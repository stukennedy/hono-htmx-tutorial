import AddUserModal from "@components/AddUserModal";
import UserCard from "@components/UserCard";
import { addUser } from "@model/users";
import { Context } from "hono";

export const onRequestPost = async (c: Context) => {
  const data = await c.req.formData();
  const name = String(data.get("name"));
  const email = String(data.get("email"));
  const user = await addUser(name, email);
  return c.html(
    <>
      <UserCard user={user} />
      <div id="modal" hx-swap-oob="true"></div>
    </>,
  );
};

export const onRequestGet = (c: Context) => c.html(<AddUserModal />);
