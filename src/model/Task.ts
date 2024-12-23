export class Task {
  id: number
  title: string
  description: string
  status: TaskStatus
  createdAt: Date
  updatedAt: Date
  deletedAt: Date
}

export enum TaskStatus {
  OPEN = 'OPEN',
  IN_PROGRESS = 'IN_PROGRESS',
  CLOSED = 'CLOSED',
}
