import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { testDataType } from "./test.export.schema";

export type LottoDocument = Lotto & Document;
console.log(testDataType.typeOfDataBetLimits);
@Schema({
	collection: "lotto",
	timestamps: true,
	versionKey: false,
})
export class Lotto {
	@Prop({
		type: String,
		index: true,
		require: true,
	})
	category: string;

	@Prop({
		type: String,
		index: true,
		unique: true,
	})
	slug: string;

	@Prop({
		type: String,
	})
	name: string;

	@Prop({
		type: String,
		enum: ["active", "disabled"],
	})
	status: string;

	@Prop({
		type: [testDataType.typeOfDataBetLimits],
	})
	betLimits: any[];

	createdAt?: Date;
	updatedAt?: Date;
}

export const LottoSchema = SchemaFactory.createForClass(Lotto);
LottoSchema.index({
	createdAt: -1,
});
