import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsArray, IsOptional, IsString } from "class-validator";
import UpdateLottoBetLimit from "./update-lotto-bet-limit.dto";

class UpdateLottoPayRateBetLimitDto {
	@ApiProperty({
		type: String,
		example: "th-gov",
	})
	@IsString()
	category: string;

	@ApiProperty({
		type: UpdateLottoBetLimit,
		isArray: true,
	})
	@IsArray()
	betLimits: UpdateLottoBetLimit[];

	@ApiPropertyOptional({
		type: String,
		example: "2020-12-31T23:59:59+07:00",
	})
	@IsOptional()
	startDate: string;
}

export default UpdateLottoPayRateBetLimitDto;
