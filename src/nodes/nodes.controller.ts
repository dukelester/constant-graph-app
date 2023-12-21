import { Controller, Get, Param } from '@nestjs/common';
import { GraphService } from '../graph/graph.service';

@Controller('nodes')
export class NodesController {
  constructor(private readonly graphService: GraphService) {}

  @Get(':action/:rule/:type/:currentStatus')
  getTransitionResult(
    @Param('action') action: 'SEND' | 'RETURN',
    @Param('rule') rule: 'ADMIN' | 'PARTNER' | 'USER' | 'COURIER',
    @Param('type') type: 'SINGLE' | 'BULK',
    @Param('currentStatus') currentStatus: number,
  ): number {
    return this.graphService.getTransitionResult(action, rule, type, currentStatus);
  }
}