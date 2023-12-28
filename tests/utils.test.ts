import { describe, expect, it } from "vitest";

describe("utils.ts", async () => {
	describe("useUID", async () => {
		it("return a string", () => {
			const uid = useUid();
			expect(typeof uid).toBe("string");
		});
	});
});
