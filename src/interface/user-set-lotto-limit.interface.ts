import UserLottoBetLimitInterface from './user-lotto-bet-limit.interface'
import UserLottoPayRateLevelInterface from './user-lotto-pay-rate-level.interface'

export default interface UserSetLottoLimitInterface {
  username: string
  betLimits: UserLottoBetLimitInterface[]
  payRateLevel: UserLottoPayRateLevelInterface
}
