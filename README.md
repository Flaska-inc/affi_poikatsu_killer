# Killersite: ポイントサイトでお得にポイ活！

## 概要

**Killersite** は、ポイ活初心者から上級者まで幅広いユーザーが利用できるアフィリエイトリンクと記事をまとめたホームページです。このサイトでは、ポイントサイトに関するおすすめ案件やお得な情報、SNSアカウントの情報を提供します。

---

## 主な特徴

- **案件一覧**: 高還元率のポイントサイト案件をわかりやすく紹介。
- **キャッチーな記事**: ポイ活の始め方やポイント活用術など、読者を引き込む記事でアフィリエイトリンクへ誘導。
- **SNS連携**: 最新情報をSNSで共有できる仕組みを導入。
- **モダンなUI**: ReactとTypeScriptを用いて構築された美しいデザイン。

---

## デモ
以下のリンクからサイトのデモを確認できます。  
👉 **[Killersite デモ](#)** https://poikatsu.netlify.app/

---

## 設定と起動方法
    ```bash
    git clone https://github.com/Flaska-inc/affi_poikatsu_killer.git
    cd killersite
    npm install
    npm start
    ```
    デフォルトでは http://localhost:3000 が開きます。

---

##　主なコンポーネントの説明
- **ProjectBox.tsx**:データベース(projectdatabase.tsx)から情報を取得し、各案件の個別表示を担当する。
- **ProjectList.tsx**:フィルタリング可能な案件一覧を表示。タグで絞り込みも可能。

---

## 開発環境　
- **フレームワーク**:React
- **言語**:TypeScript
- **パッケージマネージャー**:npm
- **スタイル**:CSS

---

## 今後の展望
・デザインの向上（デザインのフレームワークを活用）
・SNS運用