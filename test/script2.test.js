const fetch = require("node-fetch");

const fake = require("./script2");

describe("json fake api", () => {
  it("calls fake api to get userId", (done) => {
    expect.assertions(1);
    fake.getManyPeople(fetch).then((data) => {
      expect(data.userId).toEqual(1);
      done();
    });
  });

  it("calls fake api to get title", () => {
    expect.assertions(1);
    return fake.getManyPeople(fetch).then((data) => {
      expect(data.title).toEqual("delectus aut autem");
    });
  });

  it("calls fake api to get title", () => {
    expect.assertions(1);
    return fake.getSinglePeoplePromise(fetch).then((data) => {
      expect(data.completed).toEqual(false);
    });
  });

  it("get single peoples  data", () => {
    const mockFetch = jest.fn().mockReturnValue(
      Promise.resolve({
        json: () =>
          Promise.resolve({
            id: 1,
            completed: false,
          }),
      })
    );
    expect.assertions(4);
    return fake.getSinglePeoplePromise(mockFetch).then((data) => {
      expect(mockFetch.mock.calls.length).toBe(1);
      expect(mockFetch).toBeCalledWith(
        "https://jsonplaceholder.typicode.com/todos/1"
      );
      expect(data.completed).toEqual(false);
      expect(data.id).toEqual(1);
    });
  });
});
