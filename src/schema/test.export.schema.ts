export const testDataType = {
	typeOfDataBetLimits: {
		name: { type: String },
		minStake: { type: Number },
		maxStake: { type: Number },
		maxStakePerNumber: { type: Number },
	},

	typeOfOtherData: {
		languages: { type: Boolean, require: true },
	},

	address: {
		line1: { type: String, required: true },
		line2: { type: String },
		zipCode: { type: String },
		cityId: { type: Number },
		countryId: { type: Number },
	},

	language: {
		name: { type: String, require: true },
		code: { type: String, required: true },
	},

	options: {
		timestamps: true,
	},
};
