import { ApiProperty } from '@nestjs/swagger'
import { IsEnum, IsNumber, IsPositive, IsString } from 'class-validator'

enum BetLimitsNames {
  TWO_DIGITS_TOP = 'TWO_DIGITS_TOP',
  TWO_DIGITS_UNDER = 'TWO_DIGITS_UNDER',
  THREE_DIGITS = 'THREE_DIGITS',
  THREE_DIGITS_TOD = 'THREE_DIGITS_TOD',
  THREE_DIGITS_FIRST = 'THREE_DIGITS_FIRST',
  THREE_DIGITS_LAST = 'THREE_DIGITS_LAST',
  RUN_DIGITS_TOP = 'RUN_DIGITS_TOP',
  RUN_DIGITS_UNDER = 'RUN_DIGITS_UNDER',
}

export default class LottoBetLimit {
  @ApiProperty({
    type: String,
    example: 'TWO_DIGITS_TOP',
    enum: [BetLimitsNames],
  })
  @IsString()
  @IsEnum(BetLimitsNames)
  name: string

  @ApiProperty({
    type: Number,
    example: 1,
  })
  @IsPositive()
  @IsNumber()
  minStake: number

  @ApiProperty({
    type: Number,
    example: 2000,
  })
  @IsPositive()
  @IsNumber()
  maxStake: number

  @ApiProperty({
    type: Number,
    example: 2000,
  })
  @IsPositive()
  @IsNumber()
  maxStakePerNumber: number
}
