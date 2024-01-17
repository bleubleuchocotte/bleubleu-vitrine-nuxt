import KeywordsModule from "~/repository/modules/keywords";

export default defineNuxtPlugin(() => {
	const { client } = usePrismic();

	// An object containing all repositories we need to expose
	const modules = {
		keywords: new KeywordsModule(client),
	};

	return {
		provide: {
			api: modules,
		},
	};
});
