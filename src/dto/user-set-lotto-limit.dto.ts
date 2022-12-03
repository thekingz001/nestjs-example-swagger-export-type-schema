import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsOptional, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import LottoPayRateLevel from "./lotto-pay-rate-level.dto";
import LottoBetLimit from "./lotto-bet-limit.dto";

export default class UserSetLottoLimitDto {
	@ApiPropertyOptional({
		type: String,
		example: "testggg001",
	})
	username: string;

	@ApiPropertyOptional({
		type: LottoBetLimit,
		isArray: true,
	})
	@IsOptional()
	@ValidateNested({ each: true })
	@Type(() => LottoBetLimit)
	betLimits: LottoBetLimit[];

	@ApiPropertyOptional({
		type: LottoPayRateLevel,
	})
	@IsOptional()
	@ValidateNested({ each: true })
	@Type(() => LottoPayRateLevel)
	payRateLevel: LottoPayRateLevel;
}
