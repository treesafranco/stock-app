import type { Config } from '@jest/types';

export default async (): Promise<Config.InitialOptions> => ({
  verbose: true,
  roots: ['<rootDir>'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  restoreMocks: true,
  moduleNameMapper: {
    '@src/(.*)': '<rootDir>/src/$1',
    '^.+\\.(scss|css)$': '<rootDir>/config/SCSSStub.js',
  },
});
