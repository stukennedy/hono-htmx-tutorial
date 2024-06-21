import { Hono } from "hono";
import { RootLayout } from "./layout";
import * as home from "./home";
import * as add_user from "./add_user";

const app = new Hono();

app.use("*", RootLayout);

app.post("/", home.onRequestPost);
app.get("/", home.onRequestGet);

app.post("/add_user", add_user.onRequestPost);
app.get("/add_user", add_user.onRequestGet);

export default app;
