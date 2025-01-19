export class BaseEntity {
  id: string;
  deleted: boolean;
  createdAt: Date;
  updatedAt: Date;

  setId(id: string) {
    this.id = id;
    return this;
  }

  setCreatedAt(createdAt: Date) {
    this.createdAt = createdAt;
    return this;
  }

  setUpdatedAt(updatedAt: Date) {
    this.updatedAt = updatedAt;
    return this;
  }

  setDeleted(deleted: boolean) {
    this.deleted = deleted;
    return this;
  }
}
