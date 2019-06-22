export {};

declare global {
  type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
}