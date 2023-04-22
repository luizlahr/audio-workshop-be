export abstract class Hasher {
  abstract hash(text: string): string;
  abstract check(hash: string, text: string): boolean;
}
