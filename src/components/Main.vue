<template>
<body>
  <p class="title">作ったモノ</p>
  <div class="card" id="cardlayout-wrap"><!-- カードレイアウトをラッピング -->
    <section class="card-list">
        <a class="card-link" href="#">
            <figure class="card-figure"><img src="../images/Jellyfish.jpg"></figure>
            <h2 class="card-title">カードレイアウト1</h2>
            <p class="card-text-tax">Flexboxとcale()を使ってかんたんにレスポンシブ対応カードレイアウトをつくる手順のご紹介</p>
        </a>
    </section>
    <section class="card-list">
        <a class="card-link" href="#">
            <figure class="card-figure"><img src="../images/Penguins.jpg"></figure>
            <h2 class="card-title">カードレイアウト2</h2>
            <p class="card-text-tax">Flexboxとcale()を使ってかんたんにレスポンシブ対応カードレイアウトをつくる手順のご紹介</p>
        </a>
    </section>
    <section class="card-list">
        <a class="card-link" href="#">
            <figure class="card-figure"><img src="../images/photo_2.jpg"></figure>
            <h2 class="card-title">カードレイアウト3</h2>
            <p class="card-text-tax">Flexboxとcale()を使ってかんたんにレスポンシブ対応カードレイアウトをつくる手順のご紹介</p>
        </a>
    </section>
</div><!-- カードレイアウトをラッピング -->
</body>
</template>

<style>
#cardlayout-wrap {
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-ms-flex-pack: justify;
	margin: 2rem auto;
	max-width: 960px;
	width: 100%;
	-ms-flex-wrap: wrap;
	flex-wrap: wrap;
	-webkit-box-pack: justify;
	justify-content: space-between;
}

/* リンクテキストの下線を非表示 */
a.card-link {
	text-decoration: none;
}

/* カードレイアウト内の画像を幅いっぱいに表示 */
#cardlayout-wrap img {
	display: block;
	max-width: 100%;
	height: auto;
}

.card-figure {
	margin: 0;
	padding: 0;
}

/* カードレイアウトのタイトル部分 */
.card-title {
	margin: 0.6em 0 0;
	color: #333;
	text-align: center;
	font-size: 1.8em;
}

/* カードレイアウトの説明文部分 */
.card-text-tax {
	margin: 0;
	padding: 1em;
	color: #818181;
}

/* カードレイアウトを1カラムで配置 */
.card-list {
	margin: 0.5em auto;
	padding: 0;
	width: 70%;
	background: #f0f0f0;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08);
}

/* 画面幅768px以上の場合カードレイアウトを2カラムで配置 */
@media all and (min-width: 768px) {
	.card-list {
			width: calc(90% / 2); /* 96%幅を2で割るという指定 */
	}
	
/* 最後の行が3列より少ない場合左寄せにレイアウトさせる */
	#cardlayout-wrap::after{
			content: "";
			display: block;
			width: calc(90% / 2);
	}
}
body{
	text-align: center;
	background-color: rgb(242, 247, 244);
}
.title{
	font-size: 100px;
}
.card{
	background-color: rgb(242, 247, 244);
}
</style>