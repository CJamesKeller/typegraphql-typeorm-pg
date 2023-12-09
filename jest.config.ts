import { JestConfigWithTsJest } from "ts-jest";
import tsconfig from "./tsconfig.json";

export default {
    preset: "ts-jest",
    verbose: false,
    rootDir: "./",
    roots: ["<rootDir>/src", "<rootDir>/tests"],
    testEnvironment: "node",
    collectCoverage: false,
    collectCoverageFrom: [
        "<rootDir>/src/**/*.ts",
        "!<rootDir>/src/migration/*"
    ],
    transform: {
        "^.+\\.tsx?$": ["ts-jest", { tsconfig: "./tsconfig.json" }],
    },
    testMatch: ["**/*.test.ts"],
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    coverageDirectory: "<rootDir>/coverage",
} satisfies JestConfigWithTsJest;
