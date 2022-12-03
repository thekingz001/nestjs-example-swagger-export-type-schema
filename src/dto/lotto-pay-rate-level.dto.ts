import { ApiProperty } from '@nestjs/swagger'
import { IsArray, ValidateNested } from 'class-validator'
import { Type } from 'class-transformer'
import LottoPayRateLevelStakeThreshold from './lotto-pay-rate-level-stake-thres-hold.dto'

export default class LottoPayRateLevel {
  @ApiProperty({
    type: LottoPayRateLevelStakeThreshold,
    isArray: true,
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => LottoPayRateLevelStakeThreshold)
  THREE_DIGITS: LottoPayRateLevelStakeThreshold[]

  @ApiProperty({
    type: LottoPayRateLevelStakeThreshold,
    isArray: true,
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => LottoPayRateLevelStakeThreshold)
  THREE_DIGITS_TOD: LottoPayRateLevelStakeThreshold[]

  @ApiProperty({
    type: LottoPayRateLevelStakeThreshold,
    isArray: true,
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => LottoPayRateLevelStakeThreshold)
  THREE_DIGITS_FIRST: LottoPayRateLevelStakeThreshold[]

  @ApiProperty({
    type: LottoPayRateLevelStakeThreshold,
    isArray: true,
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => LottoPayRateLevelStakeThreshold)
  THREE_DIGITS_LAST: LottoPayRateLevelStakeThreshold[]

  @ApiProperty({
    type: LottoPayRateLevelStakeThreshold,
    isArray: true,
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => LottoPayRateLevelStakeThreshold)
  TWO_DIGITS_TOP: LottoPayRateLevelStakeThreshold[]

  @ApiProperty({
    type: LottoPayRateLevelStakeThreshold,
    isArray: true,
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => LottoPayRateLevelStakeThreshold)
  TWO_DIGITS_UNDER: LottoPayRateLevelStakeThreshold[]

  @ApiProperty({
    type: LottoPayRateLevelStakeThreshold,
    isArray: true,
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => LottoPayRateLevelStakeThreshold)
  RUN_DIGITS_TOP: LottoPayRateLevelStakeThreshold[]

  @ApiProperty({
    type: LottoPayRateLevelStakeThreshold,
    isArray: true,
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => LottoPayRateLevelStakeThreshold)
  RUN_DIGITS_UNDER: LottoPayRateLevelStakeThreshold[]
}
