import { User } from "@model/db";

type Props = {
  user: User;
};

export default ({ user }: Props) => (
  <div class="h-14 w-96 bg-slate-500 rounded-lg py-1 px-6">
    <h1 class="text-xl font-bold">{user.name}</h1>
    <a href={`mailto : ${user.email}`} class="text-blue-800">
      {user.email}
    </a>
  </div>
);
