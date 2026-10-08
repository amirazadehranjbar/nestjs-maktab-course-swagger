import {Module} from '@nestjs/common';
import {createObserveModule} from '@nestjs/observe';
import {AppController} from './app.controller.js';
import {AppService} from './app.service.js';
import {BlogModule} from './blog/blog.module.js';
import {ConfigModule, ConfigService} from "@nestjs/config";
import {MongooseModule} from "@nestjs/mongoose";
import { BlogCategoriesModule } from './blog/blog-categories.module.js';


export const {ObserveModule, ObserveInstrument} = createObserveModule();

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true, // Makes the module available globally across your app
        }),
        MongooseModule.forRootAsync({
            imports: [ConfigModule],
            useFactory: async (configService: ConfigService) => ({
                uri: configService.get<string>('MONGODB_URI'),
            }),
            inject: [ConfigService],
        }),
        ObserveModule.forRoot({
            appKey: 'YOUR_APP_KEY',
            appSecret: 'YOUR_APP_SECRET',
            serviceId: 'maktab-course-swagger',
        }),
        BlogModule,
        BlogCategoriesModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
