import {NestFactory} from '@nestjs/core';
import {AppModule, ObserveInstrument} from './app.module.js';
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";
import {ValidationPipe} from "@nestjs/common";

async function bootstrap() {
    const app = await NestFactory.create(AppModule, {
        instrument: ObserveInstrument,
    });

    app.enableCors();

    app.useGlobalPipes(new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
        transformOptions: {enableImplicitConversion: true}
    }));

    //region swagger setup
    // Configure Swagger document options
    const config = new DocumentBuilder()
        .setTitle('nest js App')
        .setDescription('maktab course nest JS')
        .setVersion('1.0')
        .addTag('nestJS')
        .build()

    // Create and setup the document
    const documentFactory = () => SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, documentFactory);
    //endregion

    await app.listen(process.env.PORT ?? 3000);


}

await bootstrap();
