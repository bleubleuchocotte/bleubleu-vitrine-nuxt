import Lenis from "@studio-freight/lenis";
import { defineStore } from "pinia";

export const useLenisStore = defineStore("useLenisStore", () => {
	const lenis = ref<Lenis | null>(null);

	const scroll = ref(0);

	function initLenis() {
		lenis.value = new Lenis();

		function raf(time: number) {
			lenis.value?.raf(time);
			requestAnimationFrame(raf);
		}

		lenis.value.on("scroll", (e: any) => {
			scroll.value = e.scroll;
		});

		requestAnimationFrame(raf);
	}

	function lenisStart() {
		lenis.value?.start();
	}
	function lenisStop() {
		lenis.value?.stop();
	}

	return { lenis, scroll, initLenis, lenisStart, lenisStop };
});
