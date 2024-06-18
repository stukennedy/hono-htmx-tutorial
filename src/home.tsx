import { Context } from "hono";

export const onRequestPost = async (c: Context) => {
  await new Promise((r) => setTimeout(r, 20));
  return c.html(
    <span class="text-4xl font-bold text-white">Hello, World!</span>,
  );
};

export const onRequestGet = (c: Context) => {
  return c.render(
    <div
      hx-post="/"
      hx-trigger="load"
      class="bg-slate-700 w-full h-screen flex justify-center items-center"
    >
      <span class="text-3xl font-bold text-neutral-300">Loading...</span>
    </div>,
  );
};
