import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { UserLottoLimit, UserLottoLimitDocument } from "./schema/lotto.schema";

@Injectable()
export class AppService {
	@InjectModel(UserLottoLimit.name) private readonly lottoModel: Model<UserLottoLimitDocument>;
	public async postHello(username: string, betLimits: Record<string, any>[], payRateLevel: any) {
		return this.lottoModel.create({ username, betLimits, payRateLevel });
	}

	public async getHello(): Promise<any> {
		return this.lottoModel.find();
	}
}
