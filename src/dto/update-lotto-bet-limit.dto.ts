import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

class UpdateLottoBetLimit {
	@ApiProperty({
		type: String,
		example: "TWO_DIGITS_TOP",
	})
	@IsString()
	name: string;

	@ApiProperty({
		type: Number,
		example: 1,
	})
	@IsString()
	minStake: number;

	@ApiProperty({
		type: Number,
		example: 2000,
	})
	@IsString()
	maxStake: number;

	@ApiProperty({
		type: Number,
		example: 2000,
	})
	@IsString()
	maxStakePerNumber: number;
}

export default UpdateLottoBetLimit;
