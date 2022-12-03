import { Body, Controller, Post } from "@nestjs/common";
import { ApiBody, ApiTags } from "@nestjs/swagger";
import { AppService } from "./app.service";
import UserSetLottoLimitDto from "./dto/user-set-lotto-limit.dto";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { LineClient } = require("messaging-api-line");

@Controller("/api")
@ApiTags("greet")
export class AppController {
	constructor(private readonly appService: AppService) {}
	@ApiBody({
		type: UserSetLottoLimitDto,
	})
	@Post()
	public postHello(
		@Body()
		body: UserSetLottoLimitDto,
	) {
		// get accessToken and channelSecret from LINE developers website
		// const client = new LineClient({
		// 	accessToken:
		// 		"PRPKhwgqPexPpPQNUEsDv8KOqWWFOpJjwMC6p/iKEI8Yb/O9ZY8HC7KyZnfIKCrFcCaTs2jemZjJu0s5pN7eWIVYZtsBS1L4jfDMjSEYebEphWoQCJxyAnjWJOVyvYDFXFfAC+WRhSgViHIJLu00ggdB04t89/1O/w1cDnyilFU=",
		// 	channelSecret: "048607ab775daee3c37da0559c16045a",
		// });
		// client.issueLinkToken("@177hrlan").then((result) => {
		// 	console.log(result);
		// {
		//   linkToken: 'NMZTNuVrPTqlr2IF8Bnymkb7rXfYv5EY',
		// }
		// });
		// client.replyText(client.accessToken, "testtttt").catch((error) => {
		// 	console.log(error); // formatted error message
		// 	console.log(error.stack); // error stack trace
		// 	console.log(error.config); // axios request config
		// 	console.log(error.request); // HTTP request
		// 	console.log(error.response); // HTTP response
		// });
		// return client;
		// return this.appService.postHello(body.category);
		const { username, betLimits, payRateLevel } = body;
		return this.appService.postHello(username, betLimits, payRateLevel);
	}
}
