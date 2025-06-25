import { ENDPOINT } from "@/constants";
import Article from "../../../components/article";

export async function generateStaticParams() {
  const data = await fetch(ENDPOINT).then(res => res.json());
  // console.log(data);
  // () は オブジェクトリテラルであることを示す記号です（return の省略ではない）
  return data.map(record => ({ id: record.id }));
}

export default async function Detail({ params }) {
  const article = await fetch(`${ENDPOINT}/${params.id}`).then((res) =>
    res.json()
  );
  return (
    <>
      <Article data={article} />
    </>
  );
}
