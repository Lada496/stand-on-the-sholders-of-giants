# Tests

## Types of Tests

### Unit Tests:

tests individual functions or classes. Cheepest and easiesnt to implement.Unit test should cover all small pure functions of an application.
One thing we need to know is that unit tests don't test contract. (contract: connection b/w things)
The important take away when it comes to unit tests is write code that is separated away nicely, clean functional components or functions which make it easier unit test because everything is small chunks.

### Integration Tests:

How different pieces of code work together. e.g.) Test a database works with express. Test how a function works another function.
All about cross communication b/w different units of code.
Takes much more cost than unit tests

### Automation Tests (UI Tests)

Test real like senario on a browser. Can be done by a human as well as codeAlso called End to End tests. This test is hardest to write.
(Many companies still hire people to test istead)

## Testing Libraries

| Testing Library: Kind of scaffold for tests | Assertion Library: Tool to allow you to test that the valuables contain the expected value | Test Runner: Something that allows us to run tests                                         | mocks, spies? and stubs               | code coverage                        |
| ------------------------------------------- | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------- | ------------------------------------ |
| [Jasmine](https://jasmine.github.io/)       | [Jasmine](https://jasmine.github.io/)                                                      | [Jasmine](https://jasmine.github.io/)                                                      | [Jasmine](https://jasmine.github.io/) | [istanbul](https://istanbul.js.org/) |
| [Jest](https://jestjs.io/)                  | [Jest](https://jestjs.io/)                                                                 | [Jest](https://jestjs.io/)                                                                 | [Jest](https://jestjs.io/)            | [Jest](https://jestjs.io/)           |
| [Mocha](https://mochajs.org/)               | [Chai](https://www.chaijs.com/): usually paired with mocha                                 | [Mocha](https://mochajs.org/)                                                              | [Sinin.js](https://sinonjs.org/)      | [istanbul](https://istanbul.js.org/) |
|                                             |                                                                                            | [Karma](https://karma-runner.github.io/latest/index.html)(allows us to run on the browser) |                                       |                                      |

**others** ava
