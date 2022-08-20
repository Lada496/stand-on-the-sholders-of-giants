import { AnyAction } from "redux";
//how we can extend our action creator so that they will be able to performe type checking for us where they recieve an additional action through a .match method we are going to attach on to them and what it will do is it check the action that it recieves against the actions that is meant to create
// in order to do that we need to leverage something called type predicate
// Action type guard/ pradicate https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates: a function that varify whether a apecific argument it receives is going to be a nallow(more specific) type or not

// AC = action creator: is it not necessarily to be AC?
// leverage both intersections type and ReturnType
type Matchable<AC extends () => AnyAction> = AC & {
  type: ReturnType<AC>["type"];
  match(action: AnyAction): action is ReturnType<AC>;
};

// type overloading
export function withMatcher<AC extends () => AnyAction & { type: string }>(
  actionCreator: AC
): Matchable<AC>;
export function withMatcher<
  AC extends (...args: any[]) => AnyAction & { type: string }
>(actionCreator: AC): Matchable<AC>;

// implimentation of function in Javascript
export function withMatcher(actionCreator: Function) {
  const type = actionCreator().type;
  return Object.assign(actionCreator, {
    type,
    match(action: AnyAction) {
      return action.type === type;
    },
  });
}

export type ActionWithPayload<T, P> = {
  type: T;
  payload: P;
};

export type Action<T> = {
  type: T;
};

export function createAction<T extends string, P>(
  type: T,
  payload: P
): ActionWithPayload<T, P>;

export function createAction<T extends string>(
  type: T,
  payload: void
): Action<T>;

export function createAction<T extends string, P>(type: T, payload: P) {
  return { type, payload };
}
