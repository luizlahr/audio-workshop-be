type RepositoryIncludeLeveN = { include: RepositoryIncludeLeve1 };
type RepositoryIncludeLeve1 = Record<string, boolean | RepositoryIncludeLeveN>;

export abstract class BaseRepository<T> {
  protected defaultFilter: any = { deleted_at: null };
  protected model: any;
  public include: RepositoryIncludeLeve1;

  public setInclude(relations: Record<string, boolean>): void {
    this.include = relations;
  }

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
      include: this.include,
    });
  }

  public async getById<P = string>(id: P): Promise<T | null> {
    return this.model.findFirst({
      where: { id, ...this.defaultFilter },
      include: this.include,
    });
  }

  public async create<D = any>(modelData: D): Promise<T> {
    return await this.model.create({
      data: {
        ...modelData,
      },
      include: this.include,
    });
  }

  public async update(id: string, modelData: any): Promise<T> {
    const updatedModel = await this.model.update({
      where: { id },
      data: {
        ...modelData,
      },
      include: this.include,
    });

    return updatedModel;
  }

  public async delete(contactId: string): Promise<void> {
    await this.model.update({
      where: { id: contactId },
      data: {
        deleted_at: new Date(),
      },
      include: this.include,
    });
  }
}
