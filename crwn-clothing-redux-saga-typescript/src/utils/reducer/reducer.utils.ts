import { AnyAction } from 'redux'
// Action type guard/ pradicate https://www.typescriptlang.org/docs/handbook/advanced-types.html

// AC = action creator
type Matchable<AC extends ()=>AnyAction> = AC & {
  type: ReturnType<AC>['type'];
  match(action: AnyAction): action is ReturnType<AC>
}

export function withMatcher<AC extends ()=> AnyAction & { type: string}>(actionCreator: AC): Matchable<AC>
export function withMatcher<AC >

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
