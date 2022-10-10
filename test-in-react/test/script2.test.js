const fetch = require("node-fetch");
const swapi = require("./script2");

it("calls swapi to get people", (done) => {
  // good convention to always put assertions when you test async operation
  expect.assertions(1);
  swapi.getPeople(fetch).then((data) => {
    expect(data.count).toEqual(82);
    done(); // says don't pass the test until async operation has done
  });
});

it("calls swapi to get people with a promise", () => {
  expect.assertions(2);
  // the other way to deal with async operation
  return swapi.getPeoplePromise(fetch).then((data) => {
    expect(data.count).toEqual(82);
    expect(data.results.length).toBeGreaterThan(5);
  });
});
