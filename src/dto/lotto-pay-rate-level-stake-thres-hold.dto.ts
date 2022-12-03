import { ApiProperty } from "@nestjs/swagger";
import { ArrayMaxSize, ArrayMinSize, IsNumber, IsPositive, Min } from "class-validator";

export default class LottoPayRateLevelStakeThreshold {
	@ApiProperty({
		type: Array,
		isArray: true,
		example: [1, 50],
	})
	@IsNumber({}, { each: true })
	@ArrayMinSize(2)
	@ArrayMaxSize(2)
	@Min(1, { each: true })
	stakeThreshold: [number, number];

	@ApiProperty({
		type: Number,
		example: 900,
	})
	@IsPositive()
	@IsNumber()
	value: number;
}
