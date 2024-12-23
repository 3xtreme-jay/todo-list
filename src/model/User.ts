export class User {
  id: number
  email: string
  name: string

  // Only visible for me
  token?: string

  createdAt: Date
  updatedAt: Date
  deletedAt: Date
}
