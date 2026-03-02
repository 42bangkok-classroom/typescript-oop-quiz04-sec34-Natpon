import { Injectable } from '@nestjs/common';
import { CreateMissionDto } from './dto/create-mission.dto';
import { UpdateMissionDto } from './dto/update-mission.dto';
import { IMission } from './mission.interface';

@Injectable()
export class MissionsService {
  private readonly missions = [
    { id: 1, codename: 'OPERATION_STORM', status: 'ACTIVE' },
    { id: 2, codename: 'SILENT_SNAKE', status: 'COMPLETED' },
    { id: 3, codename: 'RED_DAWN', status: 'FAILED' },
    { id: 4, codename: 'BLACKOUT', status: 'ACTIVE' },
    { id: 5, codename: 'ECHO_FALLS', status: 'COMPLETED' },
    { id: 6, codename: 'GHOST_RIDER', status: 'COMPLETED' }
  ];
  create(createMissionDto: CreateMissionDto) {
    return 'This action adds a new mission';
  }

  getSummary() {
    
  }
  findOne(id: number) {
    return `This action returns a #${id} mission`;
  }

  update(id: number, updateMissionDto: UpdateMissionDto) {
    return `This action updates a #${id} mission`;
  }

  remove(id: number) {
    return `This action removes a #${id} mission`;
  }
  findAll(){
    const a:IMission[] = [
    {
      "id": "1",
      "codename": "WINTER_SUN",
      "status": "COMPLETED",
      "targetName": "Dr. Viktor",
      "riskLevel": "MEDIUM",
      "startDate": "2024-01-01",
      "endDate": "2024-01-10"
    },
    {
      "id": "2",
      "codename": "NIGHT_SHADOW",
      "status": "ACTIVE",
      "targetName": "Unknown Syndicate Base",
      "riskLevel": "HIGH",
      "startDate": "2024-02-15",
      "endDate": null
    }
  ]
  return a;

  }
}
