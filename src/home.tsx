import { Context } from "hono";
import { getAllUsers } from "./model/users";
import UserCard from "./components/UserCard";

export const onRequestPost = async (c: Context) => {
  const users = await getAllUsers();
  return c.html(
    <>
      {users.map((user) => (
        <UserCard user={user} />
      ))}
    </>,
  );
};

export const onRequestGet = (c: Context) => {
  return c.render(
    <div class="bg-slate-700 w-full h-screen flex justify-center pt-20">
      <div>
        <div class="flex justify-between mb-8">
          <div class="text-3xl font-bold text-neutral-300">Users</div>
          <button
            hx-get="/add_user"
            hx-target="#modal"
            class="h-12 w-32 bg-slate-800 rounded text-white hover:opacity-80"
          >
            Add User
          </button>
        </div>
        <div
          id="users-list"
          hx-post="/"
          hx-trigger="load"
          class="flex flex-col gap-2"
        >
          <div class="animate-pulse h-14 w-96 bg-slate-500 rounded-lg"></div>
          <div class="animate-pulse h-14 w-96 bg-slate-500 rounded-lg"></div>
          <div class="animate-pulse h-14 w-96 bg-slate-500 rounded-lg"></div>
        </div>
      </div>
    </div>,
  );
};
