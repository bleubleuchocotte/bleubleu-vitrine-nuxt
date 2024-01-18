import PagesModule from "~/repository/modules/pages";

export default defineNuxtPlugin(() => {
	const { client } = usePrismic();

	// An object containing all repositories we need to expose
	const modules = {
		pages: new PagesModule(client),
	};

	return {
		provide: {
			api: modules,
		},
	};
});
