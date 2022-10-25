import { json } from "node:stream/consumers";

export function FormatTestCaseName(stepNbr: number, testCaseNbr: number, testCase: TestCase, targetFunctionName: string): string {
    return `Test Case ${stepNbr}.${testCaseNbr} - function: "${targetFunctionName}"; ${formatTestCaseInput(testCase)}; ${formatTestCaseExpectedText(testCase)}`;
}

function escapeNewLines(text: string): string {
    return text.replace(/\n/gi, '\\n');
}

function formatTestCaseInput(testCase: TestCase): string {
    let formatedInput = Array.isArray(testCase.Input)
        ? testCase.Input.map(i => JSON.stringify(i)).join(",")
        : JSON.stringify(testCase.Input);

    return `input: ${formatedInput}`;
}

function formatTestCaseExpectedText(testCase: TestCase): string {
    // duplicating the conditional here to make the transpiler happy.
    // it will fail to transpile and run the tests if we perform the conditional in a separate variable or function.
    const whatsExpected = "Error" in testCase ? "error" : "value";
    const expectedResult = "Error" in testCase ? testCase.Error : JSON.stringify(testCase.Expected);

    return `expected ${whatsExpected}: ${expectedResult}`;
}

export interface IChallengeStep {
    Title: string;
    TestCases: TestCase[];
    TargetFunctionName: string;
}

export type TestCase = IErrorTestCase | IValueTestCase;

interface IBaseTestCase {
    Input: any;
}

export interface IErrorTestCase extends IBaseTestCase {
    Error: string;
}

export interface IValueTestCase extends IBaseTestCase {
    Expected: number | string | Array<any>;
}