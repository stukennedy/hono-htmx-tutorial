import { Hono } from "hono";
import { RootLayout } from "./layout";
import * as home from "./home";

const app = new Hono();

app.use("*", RootLayout);

app.post("/", home.onRequestPost);
app.get("/", home.onRequestGet);

export default app;
