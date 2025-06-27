import { useState } from "react";

export default function ArticleForm() {
  const [newId, setNewId] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [msg, setMsg] = useState("")

  const onSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    //	ブラウザ標準のクラス。フォームの値を簡単に取得できる
    const formData = new FormData(form);

    // fetch 関数の オプション（設定） を指定する 第二引数
    //fetch('/api/article', …) の第一引数 /api/article は「URLのパス」
    fetch('/api/article', { method: form.method, body: formData }).then((res) => {
      if(!res.ok) {
        return 'エラーが発生しました。'
      }
      return res.json().then(data => {
        return `${data.id}:${data.title}の登録が完了しました。`
      })
    }).then((msg) => {
      setMsg(msg)
    });

  }
  return (
    <form method="POST" onSubmit={onSubmit}>
      <div>
        <label>
          {" "}
          Id:
          <input type="number" name="id" value={newId} onChange={(e) => setNewId(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          {" "}
          Title:
          <input name="title" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} />
        </label>
      </div>
      <button type="submit">送信</button>
      <div style={{ color: 'red' }}>{msg}</div>
    </form>
  );
}
