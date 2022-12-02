import { INestApplication } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { AppModule } from "./app.module";

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	setupSwagger(app);
	await app.listen(2222);
}
bootstrap();
function setupSwagger(app: INestApplication) {
	const openApiConfig = new DocumentBuilder().build();
	const swaggerDoc = SwaggerModule.createDocument(app, openApiConfig);
	SwaggerModule.setup("/", app, swaggerDoc);
}
