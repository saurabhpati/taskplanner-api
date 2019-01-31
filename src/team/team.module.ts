import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TeamController } from './team.controller';
import { TeamService } from './team.service';

@Module({
    imports: [TypeOrmModule.forFeature()],
    controllers: [TeamController],
    providers: [TeamService]
})
export class TeamModule {}