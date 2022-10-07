// Just because your test passes, it doesn't mean it's always correct. It's always good to start off by making your test fail end try to make them more
const googleSearch = require("./script");
dbMock = ["dog.com", "cheesepuff.com", "disney.com", "dogpictures.com"];
describe("googleSearch", () => {
  it("is serching google", () => {
    expect(googleSearch("testtest", dbMock)).toEqual([]);
    expect(googleSearch("dog", dbMock)).toEqual(["dog.com", "dogpictures.com"]);
  });

  it("work with undefined and null input", () => {
    expect(googleSearch(undefined, dbMock)).toEqual([]);
    expect(googleSearch(null, dbMock)).toEqual([]);
  });

  it("does not return more that 3 matches", () => {
    expect(googleSearch(".com", dbMock).length).toEqual(3);
  });
});
