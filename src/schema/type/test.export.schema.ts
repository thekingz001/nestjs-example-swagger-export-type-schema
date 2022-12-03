export const typeOfUserLottoLimit = {
	payRateLevelStakeThreshold: {
		stakeThreshold: { type: [Number, Number] },
		value: { type: Number },
	},

	betLimits: {
		name: { type: String },
		minStake: { type: Number },
		maxStake: { type: Number },
		maxStakePerNumber: { type: Number },
	},
};
