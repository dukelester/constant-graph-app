
export type ActionType = 'SEND' | 'RETURN';
export type RuleType = 'ADMIN' | 'PARTNER' | 'USER' | 'COURIER';
export type EdgeType = 'SINGLE' | 'BULK';

export interface Edge {
action: ActionType;
rule: RuleType;
type: EdgeType;
fromStatus: number;
toStatus: number;
}