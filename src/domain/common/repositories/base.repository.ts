export abstract class BaseRepository<T> {
  protected defaultFilter: any = { deleted_at: null };
  protected model: any;

  public withDeleted = (): this => {
    this.defaultFilter = {
      OR: [this.defaultFilter, { NOT: [{ deleted_at: null }] }],
    };
    return this;
  };

  public withoutDeleted = (): this => {
    this.defaultFilter = { deleted_at: null };
    return this;
  };

  public async getAll(): Promise<T[]> {
    return this.model.findMany({
      where: {
        ...this.defaultFilter,
      },
    });
  }

  public async getById(id: string): Promise<T | null> {
    return this.model.findFirst({
      where: { id, ...this.defaultFilter },
    });
  }

  public async create<D = any>(modelData: D): Promise<T> {
    return await this.model.create({
      data: {
        ...modelData,
      },
    });
  }

  public async update(id: string, modelData: any): Promise<T> {
    const updatedModel = await this.model.update({
      where: { id },
      data: {
        ...modelData,
      },
    });

    return updatedModel;
  }

  public async delete(contactId: string): Promise<void> {
    await this.model.update({
      where: { id: contactId },
      data: {
        deleted_at: new Date(),
      },
    });
  }
}
