// API Routes
// https://nextjs.org/docs/app/api-reference/file-conventions/route
import { ENDPOINT } from "@/constants";

export async function GET() {
  const data = await fetch(ENDPOINT).then((res) => res.json());
  return Response.json(data);
}

export async function POST(request) {
  const formDate = await request.formData();
  const id = formDate.get("id");
  const title = formDate.get("title");
  for (const pair of formDate.entries()) {
  console.log(pair[0], pair[1]);
}


  if(id === '' || title === '') {
      console.log("フォーム未入力です:", id, title); // ← 追加
    return Response.json({ msg: '入力フィールドが空です。'}, { status: 500});
  }

  try {
    const res = await fetch(ENDPOINT, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ id, title })
    });

    const data = await res.json();
    return Response.json(data);
  } catch(e) {
    return Response.json ({ msg: '登録に失敗しました。'}, { status: 500})
  }
}
