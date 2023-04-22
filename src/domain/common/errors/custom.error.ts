export class CustomError extends Error {
  private code: string;

  constructor(message: string, code: string) {
    super(message);
    this.code = code;
  }

  public getCode(): string {
    return this.code;
  }
}
