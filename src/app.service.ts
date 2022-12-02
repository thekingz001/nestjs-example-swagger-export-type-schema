import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Lotto, LottoDocument } from "./schema/lotto.schema";
import { Model } from "mongoose";

@Injectable()
export class AppService {
	@InjectModel(Lotto.name) private readonly lottoModel: Model<LottoDocument>;
	public async postHello(greeting: string) {
		const imageFile = "https://images.freeimages.com/images/large-previews/389/mitze-1380778.jpg";

		return imageFile;
		// return `${greeting}`;
	}

	public async getHello(): Promise<any> {
		return this.lottoModel.find();
	}
}
