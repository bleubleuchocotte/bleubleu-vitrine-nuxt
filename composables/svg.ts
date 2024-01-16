export function useDataUriFromSvg(svg: string) {
	// these may not all be needed - used to be for uri-encoded svg in old browsers
	let encoded = svg.replace(/\s+/g, " ");
	encoded = replaceAll(encoded, "%", "%25");
	encoded = replaceAll(encoded, "> <", "><"); // normalise spaces elements
	encoded = replaceAll(encoded, "; }", ";}"); // normalise spaces css
	encoded = replaceAll(encoded, "<", "%3c");
	encoded = replaceAll(encoded, ">", "%3e");
	encoded = replaceAll(encoded, "\"", "'"); // normalise quotes ... possible issues with quotes in <text>
	encoded = replaceAll(encoded, "#", "%23"); // needed for ie and firefox
	encoded = replaceAll(encoded, "{", "%7b");
	encoded = replaceAll(encoded, "}", "%7d");
	encoded = replaceAll(encoded, "|", "%7c");
	encoded = replaceAll(encoded, "^", "%5e");
	encoded = replaceAll(encoded, "`", "%60");
	encoded = replaceAll(encoded, "@", "%40");
	const dataUri = `data:image/svg+xml;charset=UTF-8,${encoded.trim()}`;

	return dataUri;
}

export function useSvgFavicon(color: string) {
	const svg
	= `<svg width="30" height="30" viewBox="0 0 29.18 28.63" fill="none" xmlns="http://www.w3.org/2000/svg">
			<style>
				path {
					fill: ${color};
				}
			</style>
			<path d="M26.98,28.63H2.2c-1.21,0-2.2-.99-2.2-2.2V2.2C0,.99,.99,0,2.2,0H26.98c1.21,0,2.2,.99,2.2,2.2V26.43c0,1.21-.99,2.2-2.2,2.2ZM2.2,1.65c-.3,0-.55,.25-.55,.55V26.43c0,.3,.25,.55,.55,.55H26.98c.3,0,.55-.25,.55-.55V2.2c0-.3-.25-.55-.55-.55H2.2Z"/>
			<path d="M21.34,22.94H7.3v-2.75h1.65v1.1h12.39v1.65Zm-5.23-5.23h-3.58v-1.65h1.93v-6.88h1.65v8.53Zm6.06-6.23h-1.65V5.69h1.65v5.78Zm-13.49,0h-1.65V5.69h1.65v5.78Z"/>
	</svg>`;
	return svg;
}

function escapeRegExp(str: string) {
	return str.replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1");
}

function replaceAll(str: string, find: string, replace: string) {
	return str.replace(new RegExp(escapeRegExp(find), "g"), replace);
}
