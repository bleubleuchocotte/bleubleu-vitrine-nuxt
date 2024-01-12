export function useUid() {
	const timestamp = new Date().getTime();
	const randomPart = Math.random().toString(36).substring(2, 8); // 6 random characters
	return `${timestamp}-${randomPart}`;
}

export function useRandomInt(min: number, max: number) {
	const _min = Math.ceil(min);
	const _max = Math.floor(max);
	return Math.floor(Math.random() * (_max - _min) + _min); // The maximum is exclusive and the minimum is inclusive
}
