import PrismicFactory from "../factory";
import type { PageHomeDocument } from "~/prismicio-types";

class PagesModule extends PrismicFactory {
	async getHomePage() {
		const { data } = await useAsyncData("GetHomePage", () => this.client.getSingle<PageHomeDocument>("page_home", {
			graphQuery: `{
				page_home {
					...page_homeFields
					section_projects {
						project {
							...projectFields
						}
					}
				}
			}`,
		}));

		return data.value;
	}
}

export default PagesModule;
