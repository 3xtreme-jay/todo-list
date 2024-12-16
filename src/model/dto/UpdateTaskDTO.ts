import { TaskStatus } from 'model/Task'

export class UpdateTaskDTO {
  title: string
  description: string
  status: TaskStatus
  token: string
}
