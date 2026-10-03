import type { Config } from 'jest';

const config: Config = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    transform: {
        '^.+\\.ts': 'ts-jest',
    },

    verbose: true,
    roots: [
        'helpers',
    ],
};

export default config;
