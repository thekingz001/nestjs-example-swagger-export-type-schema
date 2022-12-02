module.exports = {
	parser: "@typescript-eslint/parser",
	parserOptions: {
		project: "tsconfig.json",
		sourceType: "module",
	},
	plugins: ["@typescript-eslint/eslint-plugin"],
	extends: [
		"plugin:@typescript-eslint/recommended",
		/* "plugin:jest/recommended", */
	],
	root: true,
	env: {
		node: true,
		jest: true,
	},
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: 12,
	},
	ignorePatterns: [".eslintrc.js"],
	rules: {
		"@typescript-eslint/interface-name-prefix": "off",
		"@typescript-eslint/explicit-function-return-type": "off",
		"@typescript-eslint/explicit-module-boundary-types": "off",
		"@typescript-eslint/no-explicit-any": "off",

		"no-unused-vars": ["off"],
		"brace-style": ["warn", "1tbs"],
		// Always require a ; at the end of an instruction
		semi: [1, "always"],
		// use Tabs for indentation
		"@typescript-eslint/indent": ["warn", "tab"],
		"space-before-function-paren": ["warn", "never"],
		"keyword-spacing": ["off"],
		quotes: ["warn", "double"],
	},

	// all functions/methods should have JSDOC apart from Controller-Files
	// These files should have Swagger-Doc
	/*
	overrides: [
		{
			files: ["!**.controller.ts"],
			rules: {
				"jsdoc/require-description": "warn",
				"jsdoc/require-jsdoc": [
					"error",
					{
						require: {
							ArrowFunctionExpression: true,
							FunctionDeclaration: true,
							MethodDefinition: true,
							ClassDeclaration: true,
							ArrowFunctionExpression: true,
							FunctionExpression: true,
						},
					},
				],
			},
		},
	],
	*/
};
