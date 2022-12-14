export class Content {
  private readonly content: string;

  constructor(content: string) {
    this.content = content;
  }

  public get value(): string {
    return this.content;
  }

  private validateContentLength(content: string): boolean {
    const isContentLengthValid = this.validateContentLength(content);
    if (!isContentLengthValid) {
      throw new Error('Content length error.');
    }
    return content.length > 5 && content.length <= 240;
  }
}
