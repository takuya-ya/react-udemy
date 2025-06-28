/* POINT テストコードを書く際の注意点
Arrage:(テストデータ、条件、環境の設定).
Act:(ロジックの実行、関数の実行).
Assertion:(実行結果と期待する結果の比較).
*/

import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "./Counter";

test('カウントアップ押下で現在のカウントが+1されるか', () => {
  render(<Counter originCount={0} />);
  const btn = screen.getByRole('button', { name:'カウントアップ'});

  const spanElBeforeUpdate = screen.getByText('現在のカウント:0')
  expect(spanElBeforeUpdate).toBeInTheDocument();

  fireEvent.click(btn);

  const spanEl = screen.getByText('現在のカウント:1')
  expect(spanEl).toBeInTheDocument();


});
