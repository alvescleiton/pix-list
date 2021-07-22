/// <reference types="next" />
/// <reference types="next/types/global" />
/// <reference types="next-images" />

declare global {
  namespace NodeJS {
    interface Global {
      mongo: any;
    }
  }
}

export { }
