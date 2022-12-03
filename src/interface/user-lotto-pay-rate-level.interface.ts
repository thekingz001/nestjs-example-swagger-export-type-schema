import UserLottoPayRateLevelStakeThresholdInterface from './user-lotto-pay-rate-levels-stake-threshold.interface'

export default interface UserLottoPayRateLevelInterface {
  THREE_DIGITS: UserLottoPayRateLevelStakeThresholdInterface[]
  THREE_DIGITS_TOD: UserLottoPayRateLevelStakeThresholdInterface[]
  THREE_DIGITS_FIRST: UserLottoPayRateLevelStakeThresholdInterface[]
  THREE_DIGITS_LAST: UserLottoPayRateLevelStakeThresholdInterface[]
  TWO_DIGITS_TOP: UserLottoPayRateLevelStakeThresholdInterface[]
  TWO_DIGITS_UNDER: UserLottoPayRateLevelStakeThresholdInterface[]
  RUN_DIGITS_TOP: UserLottoPayRateLevelStakeThresholdInterface[]
  RUN_DIGITS_UNDER: UserLottoPayRateLevelStakeThresholdInterface[]
}
