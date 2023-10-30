import { defineStore } from "pinia";

export const useWebsite = defineStore("useWebsiteStore", () => {
	const thisIsAState = ref(0);

	const thisIsAGetter = computed(() => thisIsAState.value += 1);

	function thisIsAnActions() {
		thisIsAState.value = 100;
	}

	return { thisIsAState, thisIsAGetter, thisIsAnActions };
});

/**
 * Utilisation :
 * `import { storeToRefs } from 'pinia'`
 *
 * `const websiteStore = useWebsiteStore(); // Auto-imported`
 * `const { thisIsAState, thisIsAGetter} = storeToRefs(websiteStore);`
 * `const { thisIsAnActions } = websiteStore;`
 *
 * @see https://pinia.vuejs.org/core-concepts/#Destructuring-from-a-Store
 */
