import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { typeOfUserLottoLimit } from "./type/test.export.schema";
import UserLottoBetLimitInterface from "../interface/user-lotto-bet-limit.interface";
import UserLottoPayRateLevelInterface from "../interface/user-lotto-pay-rate-level.interface";

export type UserLottoLimitDocument = UserLottoLimit & Document;

@Schema({
	timestamps: true,
	versionKey: false,
	collection: "user-lotto-limit",
})
export class UserLottoLimit {
	@Prop({
		type: String,
		index: true,
	})
	username: string;

	@Prop({
		type: [typeOfUserLottoLimit.betLimits],
	})
	betLimits: UserLottoBetLimitInterface[];

	@Prop({
		type: {
			THREE_DIGITS: {
				type: [typeOfUserLottoLimit.payRateLevelStakeThreshold],
			},
			THREE_DIGITS_TOD: {
				type: [typeOfUserLottoLimit.payRateLevelStakeThreshold],
			},
			THREE_DIGITS_FIRST: {
				type: [typeOfUserLottoLimit.payRateLevelStakeThreshold],
			},
			THREE_DIGITS_LAST: {
				type: [typeOfUserLottoLimit.payRateLevelStakeThreshold],
			},
			TWO_DIGITS_TOP: {
				type: [typeOfUserLottoLimit.payRateLevelStakeThreshold],
			},
			TWO_DIGITS_UNDER: {
				type: [typeOfUserLottoLimit.payRateLevelStakeThreshold],
			},
			RUN_DIGITS_TOP: {
				type: [typeOfUserLottoLimit.payRateLevelStakeThreshold],
			},
			RUN_DIGITS_UNDER: {
				type: [typeOfUserLottoLimit.payRateLevelStakeThreshold],
			},
		},
	})
	payRateLevel: UserLottoPayRateLevelInterface;
}

export const UserLottoLimitSchema = SchemaFactory.createForClass(UserLottoLimit);
UserLottoLimitSchema.index({
	username: 1,
	createdAt: -1,
});
