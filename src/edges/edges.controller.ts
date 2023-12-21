import { Controller, Get, Param } from '@nestjs/common';
import { GraphService } from '../graph/graph.service';

@Controller('edges')
export class EdgesController {
  constructor(private readonly graphService: GraphService) {}

  @Get('path/:action/:rule/:type/:statuses')
  findPath(
    @Param('action') action: 'SEND' | 'RETURN',
    @Param('rule') rule: 'ADMIN' | 'PARTNER' | 'USER' | 'COURIER',
    @Param('type') type: 'SINGLE' | 'BULK',
    @Param('statuses') statuses: string,
  ): number[] {
    const statusArray = statuses.split(',').map(Number);
    return this.graphService.findPath(action, rule, type, statusArray);
  }
}