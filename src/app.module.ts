import { Module } from '@nestjs/common';
import { MissionsModule } from './missions/missions.module';
//import { MissionsModule } from './missions/missions.module';

@Module({
  imports: [MissionsModule, MissionsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
