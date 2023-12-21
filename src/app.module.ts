import { Module } from '@nestjs/common';
import { EdgesModule } from './edges'; 
import { NodesModule } from './nodes'; 
import { GraphService } from './graph/graph.service';

@Module({
  imports: [NodesModule, EdgesModule],
  controllers: [],
  providers: [GraphService],
})
export class AppModule {}