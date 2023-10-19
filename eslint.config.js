// eslint.config.js
import antfu from "@antfu/eslint-config";

export default antfu({
	stylistic: {
		quotes: "double", // On force les double quotes
		indent: "tab", // On force l'indentation à être des tabs
	},
	rules: { "style/semi": ["error", "always"] }, // On force les semi-colons à la fin des lignes dans les fichiers js/ts
});
