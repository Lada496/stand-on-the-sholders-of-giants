export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      REACT_APP_RECIPE_API: string;
      REACT_APP_BOOKMARK_API: string;
      REACT_APP_TIMEOUT_SEC: number;
      REACT_APP_RES_PER_PAGE: number;
      REACT_APP_KEY: string;
      REACT_APP_MODAL_CLOSE_SEC: number;
    }
  }
}
