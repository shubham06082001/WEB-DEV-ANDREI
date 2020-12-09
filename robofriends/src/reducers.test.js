import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
} from "./constants";

import * as reducers from "./reducers";

describe("searchRobots", () => {
  const initialStateSearch = {
    searchField: "",
  };
  it("should return the initial state", () => {
    expect(reducers.searchRobots(undefined, {})).toEqual({ searchField: "" });
  });
  it("should handle the CHANGE_SEARCHFIELD", () => {
    expect(
      reducers.searchRobots("", {
        type: CHANGE_SEARCH_FIELD,
        payload: "abc",
      })
    ).toEqual({ searchField: "abc" });
  });
});

describe("requestRobots", () => {
  const initialStateRobots = { isPending: false, robots: [], error: "" };

  it("should return the initial state", () => {
    expect(reducers.requestRobots(undefined, {})).toEqual(initialStateRobots);
  });

  it("should handle the REQUEST_ROBOTS_PENDING action", () => {
    expect(
      reducers.requestRobots(initialStateRobots, {
        type: REQUEST_ROBOTS_PENDING,
      })
    ).toEqual({
      robots: [],
      isPending: true,
      "error": "",
    });
  });

  it("should handle the REQUEST_ROBOTS_SUCCESS action", () => {
    expect(
      reducers.requestRobots(initialStateRobots, {
        type: REQUEST_ROBOTS_SUCCESS,
        payload: [
          {
            id: 1,
            name: "John Snow",
            username: "John Major",
            email: "john@gmail.com",
          },
        ],
      })
    ).toEqual({
      robots: [
        {
          id: 1,
          name: "John Snow",
          username: "John Major",
          email: "john@gmail.com",
        },
      ],
      isPending: false,
      "error": "",
    });
  });

  it("should handle the REQUEST_ROBOTS_FAILED action", () => {
    expect(
      reducers.requestRobots(initialStateRobots, {
        type: REQUEST_ROBOTS_FAILED,
        payload: "NOOOO!!!!!",
      })
    ).toEqual({
      error: "NOOOO!!!!!",
      isPending: false,
      robots: [],
    });
  });
});
