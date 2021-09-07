import { create_UUID } from "./create-uuid";

describe("create-uuid", () => {
  it("should create a uuid", async () => {
    const uuid = create_UUID();
    expect(uuid).toMatch(
      /\b[0-9a-f]{8}\b-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-\b[0-9a-f]{12}\b/,
    );
  });
});
