import fetch from "node-fetch";
import uploadImage from "../lib/uploadImage.js";

let handler = async (m, { conn, usedPrefix, command }) => {
	switch (command) {
		case "arcane":
		case "toarcane":
			{
				conn.arcane = conn.arcane ? conn.arcane : {};
				if (m.sender in conn.arcane)
					return m.reply(
						"*please wait, there is still a process that has not been completed*"
					);
				let q = m.quoted ? m.quoted : m;
				let mime = (q.msg || q).mimetype || q.mediaType || "";
				if (!mime)
					throw `*where ur image?*`;
				if (!/image\/(jpe?g|png)/.test(mime))
					throw `*sorry your ${mime} not supported.*`;
				else conn.arcane[m.sender] = true;
				m.reply("Proses Kak...");
				let upld = await q.download?.(),
					img = await uploadImage(upld);
				try {
					let res = await fetch(
						global.API("rose", "/image/arcane", { url: img }, "Rk-UZMDERPX5G8A_Trial")
					);
					if (res.status == false) throw "Request false";
					let buffer = await res.arrayBuffer();
					conn.sendFile(m.chat, buffer, "", "*Here ur image.*", m);
				} catch {
					m.reply(
						"Proses gagal :(*sorry your image is not detected face.*"
					);
				} finally {
					if (conn.arcane[m.sender]) delete conn.arcane[m.sender];
				}
			}
			break;
		case "art":
		case "toart":
			{
				conn.art = conn.art ? conn.art : {};
				if (m.sender in conn.art)
					return m.reply(
						"*please wait, there is still a process that has not been completed*"
					);
				let q = m.quoted ? m.quoted : m;
				let mime = (q.msg || q).mimetype || q.mediaType || "";
				if (!mime)
					throw `*where ur image?*`;
				if (!/image\/(jpe?g|png)/.test(mime))
					throw `*sorry your ${mime} not supported.*`;
				else conn.art[m.sender] = true;
				m.reply("Proses Kak...");
				let upld = await q.download?.(),
					img = await uploadImage(upld);
				try {
					let res = await fetch(
						global.API("rose", "/image/art", { url: img }, "Rk-UZMDERPX5G8A_Trial")
					);
					if (res.status == false) throw "Request false";
					let buffer = await res.arrayBuffer();
					conn.sendFile(m.chat, buffer, "", "*Here ur image.*", m);
				} catch {
					m.reply(
						"Proses gagal :(*sorry your image is not detected face.*"
					);
				} finally {
					if (conn.art[m.sender]) delete conn.art[m.sender];
				}
			}
			break;
		case "comics":
		case "tocomics":
			{
				conn.comics = conn.comics ? conn.comics : {};
				if (m.sender in conn.comics)
					return m.reply(
						"*please wait, there is still a process that has not been completed*"
					);
				let q = m.quoted ? m.quoted : m;
				let mime = (q.msg || q).mimetype || q.mediaType || "";
				if (!mime)
					throw `*where ur image?*`;
				if (!/image\/(jpe?g|png)/.test(mime))
					throw `*sorry your ${mime} not supported.*`;
				else conn.comics[m.sender] = true;
				m.reply("Proses Kak...");
				let upld = await q.download?.(),
					img = await uploadImage(upld);
				try {
					let res = await fetch(
						global.API("rose", "/image/comics", { url: img }, "Rk-UZMDERPX5G8A_Trial")
					);
					if (res.status == false) throw "Request false";
					let buffer = await res.arrayBuffer();
					conn.sendFile(m.chat, buffer, "", "*Here ur image.*", m);
				} catch {
					m.reply(
						"Proses gagal :(*sorry your image is not detected face.*"
					);
				} finally {
					if (conn.comics[m.sender]) delete conn.comics[m.sender];
				}
			}
			break;
		case "disney":
		case "todisney":
			{
				conn.disney = conn.disney ? conn.disney : {};
				if (m.sender in conn.disney)
					return m.reply(
						"*please wait, there is still a process that has not been completed*"
					);
				let q = m.quoted ? m.quoted : m;
				let mime = (q.msg || q).mimetype || q.mediaType || "";
				if (!mime)
					throw `*where ur image?*`;
				if (!/image\/(jpe?g|png)/.test(mime))
					throw `*sorry your ${mime} not supported.*`;
				else conn.disney[m.sender] = true;
				m.reply("Proses Kak...");
				let upld = await q.download?.(),
					img = await uploadImage(upld);
				try {
					let res = await fetch(
						global.API("rose", "/image/disney", { url: img }, "Rk-UZMDERPX5G8A_Trial")
					);
					if (res.status == false) throw "Request false";
					let buffer = await res.arrayBuffer();
					conn.sendFile(m.chat, buffer, "", "*Here ur image.*", m);
				} catch {
					m.reply(
						"Proses gagal :(*sorry your image is not detected face.*"
					);
				} finally {
					if (conn.disney[m.sender]) delete conn.disney[m.sender];
				}
			}
			break;
		case "jojo":
		case "tojojo":
			{
				conn.jojo = conn.jojo ? conn.jojo : {};
				if (m.sender in conn.jojo)
					return m.reply(
						"*please wait, there is still a process that has not been completed*"
					);
				let q = m.quoted ? m.quoted : m;
				let mime = (q.msg || q).mimetype || q.mediaType || "";
				if (!mime)
					throw `*where ur image?*`;
				if (!/image\/(jpe?g|png)/.test(mime))
					throw `*sorry your ${mime} not supported.*`;
				else conn.jojo[m.sender] = true;
				m.reply("Proses Kak...");
				let upld = await q.download?.(),
					img = await uploadImage(upld);
				try {
					let res = await fetch(
						global.API("rose", "/image/jojo", { url: img }, "Rk-UZMDERPX5G8A_Trial")
					);
					if (res.status == false) throw "Request false";
					let buffer = await res.arrayBuffer();
					conn.sendFile(m.chat, buffer, "", "*Here ur image.*", m);
				} catch {
					m.reply("*sorry your image is not detected face.*");
				} finally {
					if (conn.jojo[m.sender]) delete conn.jojo[m.sender];
				}
			}
			break;
		case "yasuo":
		case "toyasuo":
			{
				conn.yasuo = conn.yasuo ? conn.yasuo : {};
				if (m.sender in conn.yasuo)
					return m.reply(
						"*please wait, there is still a process that has not been completed*"
					);
				let q = m.quoted ? m.quoted : m;
				let mime = (q.msg || q).mimetype || q.mediaType || "";
				if (!mime)
					throw `*where ur image?*`;
				if (!/image\/(jpe?g|png)/.test(mime))
					throw `*sorry your ${mime} not supported.*`;
				else conn.yasuo[m.sender] = true;
				m.reply("Proses Kak...");
				let upld = await q.download?.(),
					img = await uploadImage(upld);
				try {
					let res = await fetch(
						global.API("rose", "/image/yasuo", { url: img }, "Rk-UZMDERPX5G8A_Trial")
					);
					if (res.status == false) throw "Request false";
					let buffer = await res.arrayBuffer();
					conn.sendFile(m.chat, buffer, "", "*Here ur image.*", m);
				} catch {
					m.reply("*sorry your image is not detected face.*");
				} finally {
					if (conn.yasuo[m.sender]) delete conn.yasuo[m.sender];
				}
			}
			break;
		case "renaissance":
			{
				conn.renaissance = conn.renaissance ? conn.renaissance : {};
				if (m.sender in conn.renaissance)
					return m.reply(
						"*please wait, there is still a process that has not been completed*"
					);
				let q = m.quoted ? m.quoted : m;
				let mime = (q.msg || q).mimetype || q.mediaType || "";
				if (!mime)
					throw `*where ur image?*`;
				if (!/image\/(jpe?g|png)/.test(mime))
					throw `*sorry your ${mime} not supported.*`;
				else conn.renaissance[m.sender] = true;
				conn.sendMessage(m.chat, {
		react: {
			text: '♻',
			key: m.key,
		}
	});
				let upld = await q.download?.(),
					img = await uploadImage(upld);
				try {
					let res = await fetch(
						global.API("rose", "/image/art", { url: img }, "Rk-UZMDERPX5G8A_Trial")
					);
					if (res.status == false) throw "*Request false*";
					let buffer = await res.arrayBuffer();
					conn.sendFile(m.chat, buffer, "", "*Here ur image.*", m);
				} catch {
					m.reply("*sorry your image is not detected face.*");
				} finally {
					if (conn.renaissance[m.sender]) delete conn.renaissance[m.sender];
				}
			}
			break;
	}
};

handler.help = [
	"arcane",
	"art",
	"comics",
	"disney",
	"jojo",
	"renaissance",
	"yasuo",
];
handler.command = [
	"arcane",
	"art",
	"comics",
	"disney",
	"jojo",
	"renaissance",
	"yasuo",
];
handler.tags = ["ai"];

handler.register = true
handler.premium = false
handler.limit = true

export default handler;
