import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { MongooseModule } from "@nestjs/mongoose";
import { ConfigModule } from "@nestjs/config";
import { UserLottoLimit, UserLottoLimitSchema } from "./schema/lotto.schema";

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true,
			envFilePath: ".env",
		}),
		MongooseModule.forRoot(`${process.env.MONGO_URL}`),
		MongooseModule.forFeature([
			{
				name: UserLottoLimit.name,
				schema: UserLottoLimitSchema,
			},
		]),
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
