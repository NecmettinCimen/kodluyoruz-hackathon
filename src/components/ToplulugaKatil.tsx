import * as React from "react";

const ToplulugaKatil = () => (
	<div
		style={{
			height: 250,
		}}
	>
		<h1 className="header-text textAlignCenter">Topluluğa katıl</h1>
		<p className="textAlignCenter">
			Sen de Discord sunucumuza katılarak, etkinliklerden yarışmalardan haberdar
			olabilir ve yüzlerce kullanıcıyla süregeen etkinliklere katılma şansı
			yakalayabilirsin.{" "}
		</p>
		<div style={{display: 'grid', placeItems: 'center'}}>
			<a
				className="kodluyoruz-turuncu-button nav-link"
                target="_blank"
                style={{width:'max-content'}}
				href="https://discord.gg/fBGEkpGrB5"
			>
				Hemen Katıl
			</a>
		</div>
	</div>
);

export default ToplulugaKatil;
