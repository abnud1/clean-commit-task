import { configureStore, Store } from "@reduxjs/toolkit";
import reducer, { EstatesState } from "./estate";

let store: Store<EstatesState> | undefined;
function makeStore(initialState: EstatesState) {
  return configureStore({
    reducer,
    preloadedState: initialState,
  });
}
export default function initStore(
  initialState: EstatesState
): Store<EstatesState> {
  let createdStore = store ?? makeStore(initialState);

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (initialState && store) {
    createdStore = makeStore({
      ...store.getState(),
      ...initialState,
    });
    // Reset the current store
    store = undefined;
  }

  // For SSG and SSR always create a new store
  if (typeof window === "undefined") return createdStore;
  // Create the store once in the client
  if (!store) store = createdStore;

  return createdStore;
}
