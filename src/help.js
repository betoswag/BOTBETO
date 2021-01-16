const help = (prefix) => {
	return `> *Sticker Commands* <
command : *${prefix}sticker* or *${prefix}stiker*
desc : converter imagem / gif / vídeo em adesivo
usage : responder imagem / gif / vídeo ou enviar imagem / gif / vídeo com legenda\n
command : *${prefix}sticker nobg* or *${prefix}stiker nobg*
desc : converter imagem em adesivo removendo o fundo
usage : reply image, or send image with caption\n
command : *${prefix}toimg*
desc : converter adesivo em imagem
usage : reply sticker\n
command : *${prefix}tsticker* or *${prefix}tstiker*
desc : converter texto em adesivo
usage : *${prefix}tsticker text in here*\n`
}

exports.help = help


