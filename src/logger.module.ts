import { DynamicModule, Module } from '@nestjs/common';
import { ClsModule } from 'nestjs-cls';
import { LoggerService } from './logger.service';

@Module({
  imports: [],
})
export class LoggerModule {
  static register(): DynamicModule {
    return {
      module: LoggerModule,
      imports: [
        ClsModule.forRoot({
          global: true,
          middleware: { mount: true },
        }),
      ],
      providers: [LoggerService],
      exports: [LoggerService],
    };
  }
}
