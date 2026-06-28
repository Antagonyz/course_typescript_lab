/* 
	Реализуйте оба абстрактных метода в классе MemoryStorage
*/

abstract class DataStorage {
  abstract save(data: string): void;
  abstract load(): string;
}

export class MemoryStorage extends DataStorage {
  private data: string = "";

  override save(data: string): void {
    this.data = data;
  }

  override load(): string {
    return this.data;
  }
}
