import { client } from "./libs/client";

export default async function Home() {
  const data = await client.get({
    endpoint: "articles",
  });
  console.log(data);
  console.log(data.contents[1].title);
  return (
    <div>
      <div>Hello</div>
    </div>
  );
}
