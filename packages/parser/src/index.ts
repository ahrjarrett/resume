import { parse } from "orga";

export const parsed = parse(`
* TODO remember the milk :shopping:
* DONE finish praying
  ** TODO nested todo item
     - Nested list item
     - Nested list item
`);

console.group("parsed");
console.log("\n\n\n");
console.log("parsed", parsed);
console.log("\n\n\n");
console.groupEnd();

export const parser = (): void => {
  return void 0;
};
