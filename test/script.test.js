const googleSearch = require("./script");

dbMock = [
  "dogwatch.com",
  "dog.com",
  "cats-dog.com",
  "catspuff.com",
  "disney.com",
  "dogpictures.com",
];
describe("googleSearch", () => {
  it("this is a silly test", () => {
    expect("hello").toBe("hello");
    //   console.log(googleSearch("dog", dbMock));
    googleSearch("testtest", dbMock);
  });

  it("is searching google", () => {
    expect(googleSearch("testtest", dbMock)).toEqual([]);
    expect(googleSearch("dog", dbMock)).toEqual([
      "dogwatch.com",
      "dog.com",
      "cats-dog.com",
    ]);
  });
  it("work with undefined and null", () => {
    expect(googleSearch(undefined, dbMock)).toEqual([]);
    expect(googleSearch(null, dbMock)).toEqual([]);
  });
  it("doesnot return more than 3 result", () => {
    expect(googleSearch(".com", dbMock).length).toEqual(3);
  });
});
