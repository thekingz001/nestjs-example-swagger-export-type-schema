import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { MongooseModule } from "@nestjs/mongoose";
import { Lotto, LottoSchema } from "./schema/lotto.schema";
import { ConfigModule } from "@nestjs/config";

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true,
			envFilePath: ".env",
		}),
		MongooseModule.forRoot(`${process.env.MONGO_URL}`),
		MongooseModule.forFeature([
			{
				name: Lotto.name,
				schema: LottoSchema,
			},
		]),
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
