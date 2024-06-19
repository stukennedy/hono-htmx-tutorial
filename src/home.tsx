import { Context } from "hono";
import { getAllUsers } from "./model/users";
import User from "./components/User";

export const onRequestPost = async (c: Context) => {
  const users = await getAllUsers();
  return c.html(
    <>
      {users.map((user) => (
        <User user={user} />
      ))}
    </>,
  );
};

export const onRequestGet = (c: Context) => {
  return c.render(
    <div class="bg-slate-700 w-full h-screen flex justify-center pt-20">
      <div>
        <div class="text-3xl font-bold text-neutral-300 mb-8">Users</div>
        <div hx-post="/" hx-trigger="load" class="flex flex-col gap-2">
          <div class="animate-pulse h-14 w-96 bg-slate-500 rounded-lg"></div>
          <div class="animate-pulse h-14 w-96 bg-slate-500 rounded-lg"></div>
          <div class="animate-pulse h-14 w-96 bg-slate-500 rounded-lg"></div>
        </div>
      </div>
    </div>,
  );
};
