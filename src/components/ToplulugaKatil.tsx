import * as React from "react";

const ToplulugaKatil = () => (
	<div
		style={{
			height: 250,
			margin:50
		}}
	>
		<h1 className="header-text textAlignCenter">Topluluğa Katıl</h1>
		<p className="textAlignCenter">
			Sen de Discord sunucumuza katılarak, etkinliklerden yarışmalardan haberdar
			olabilir ve yüzlerce kullanıcıyla süregelen etkinliklere katılma şansı
			yakalayabilirsin.{" "}
		</p>
		<div style={{display: 'grid', placeItems: 'center'}}>
			<a
				className="kodluyoruz-turuncu-button nav-link"
                target="_blank"
                style={{width:'max-content'}}
				href="https://discord.gg/fBGEkpGrB5"
			>
				<img src="https://seeklogo.com/images/D/discord-logo-134E148657-seeklogo.com.png" style={{width:50}} /> Hemen Katıl
			</a>
		</div>
	</div>
);

export default ToplulugaKatil;
