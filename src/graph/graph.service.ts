import { Injectable, NotFoundException } from '@nestjs/common';
import { Node } from '../nodes/node.model';
import { Edge } from 'src/edges/edge.model';


@Injectable()
export class GraphService {
  private nodes: Node[] = [];
  private edges: Edge[] = [];

  addNode(node: Node): void {
    this.nodes.push(node);
  }

  addEdge(edge: Edge): void {
    this.edges.push(edge);
  }

  getTransitionResult(action: 'SEND' | 'RETURN', rule: 'ADMIN' | 'PARTNER' | 'USER' | 'COURIER', type: 'SINGLE' | 'BULK', currentStatus: number): number {
    const edge = this.edges.find(e => e.action === action && e.rule === rule && e.type === type && e.fromStatus === currentStatus);

    if (edge) {
      return edge.toStatus;
    } else {
      throw new NotFoundException('Transition not found.');
    }
  }

  findPath(action: 'SEND' | 'RETURN', rule: 'ADMIN' | 'PARTNER' | 'USER' | 'COURIER', type: 'SINGLE' | 'BULK', statuses: number[]): number[] {
    const path: number[] = [];

    for (const status of statuses) {
      const nextStatus = this.getTransitionResult(action, rule, type, status);
      path.push(nextStatus);
    }

    return path;
  }
}