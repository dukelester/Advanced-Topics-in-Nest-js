import { Module } from '@nestjs/common';
import { DynamicModule } from '@nestjs/common';
import { ConfigsService } from './configs.service';
import { ConfigsController } from './configs.controller';


@Module({
  providers: [],
  controllers: [ConfigsController]
})
export class ConfigModule {
    static register (folder:{}): DynamicModule{
        return {
            module:ConfigModule,
            providers:[ConfigsService],
            controllers:[],
            exports:[ConfigsService]
        }

    }
}
export class ConfigsModule {}
