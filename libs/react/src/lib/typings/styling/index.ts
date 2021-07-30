export type ResponsiveStyleValue<T> =
  | T
  | Array<T | null>
  | { [key: string]: T | null };
