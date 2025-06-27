import { ENDPOINT } from "@/constants";
import Article from "../../../components/article";

export async function generateMetadata({ params }) {
  const article = await fetch(`${ENDPOINT}/${params.id}`).then((res) =>
    res.json()
  );
  return {
    title: article.title,
    description: article.text,
  };
}

// ビルド時に取得する全パスのパラメータ（例：{ id: '1' }）を生成してNext.jsに通知する
// Next.js はこのリストを元に静的ページ（/xxx/[id]）を事前に生成する
export async function generateStaticParams() {
  const data = await fetch(ENDPOINT).then((res) => res.json());
  return data.map((record) => ({ id: record.id }));
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
