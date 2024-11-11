export const testEnvironment = 'node';
export const testMatch = ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)', '**/__tests__/**/*.ts?(x)', '**/?(*.)+(spec|test).ts?(x)'];
export const transform = {
  '^.+\\.ts?$': 'ts-jest',
};
export const moduleNameMapper = {
  '@/(.*)': '<rootDir>/src/$1',
};
