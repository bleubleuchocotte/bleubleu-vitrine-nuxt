import PrismicFactory from "../factory";
import type { KeywordAgencyDocument } from "~/prismicio-types";

class KeywordsModule extends PrismicFactory {
	async getAllKeywords() {
		const { data } = await useAsyncData("GetAllKeywords", () =>
			this.client.getAllByType<KeywordAgencyDocument>("keyword-agency"));

		const keywords = data.value?.map((el) => {
			let ratio = "";
			switch (el.data.direction) {
				case "ltr":
					ratio = `--ratio:${el.data.speed ?? 1}`;
					break;
				case "rtl":
					ratio = `--ratio:${(-1 * (el.data.speed ?? 1)).toString()}`;
					break;

				default:
					break;
			}

			const css = el.data.custom_css + ratio;
			return {
				text: el.data.keyword,
				css,
			};
		}) ?? [];

		return keywords;
	}
}

export default KeywordsModule;
