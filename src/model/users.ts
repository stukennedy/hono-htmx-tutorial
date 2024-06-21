import { db, User } from "./db";

export const getAllUsers = async () => {
  const users = await new Promise((resolve, reject) => {
    db.all("SELECT * FROM users", [], (err, rows: User[]) => {
      if (err) reject(err);
      resolve(rows);
    });
  });
  return users;
};

export const addUser = async (name: string, email: string): Promise<User> =>
  new Promise((resolve, reject) => {
    db.get(
      "INSERT INTO users (name, email) VALUES (?, ?) RETURNING *",
      [name, email],
      (err, row: User) => {
        if (err) {
          reject(err);
        } else {
          console.log(row);
          resolve(row);
        }
      },
    );
  });
