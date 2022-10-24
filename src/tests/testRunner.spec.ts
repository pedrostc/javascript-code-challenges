import 'mocha';
import { expect, assert } from 'chai';

import { FormatTestCaseName } from "./utils";
import { steps } from "./steps";

const rewire = require("rewire");
const solutionFilePath = "../myCode";


steps.forEach((step, stepIndex) => {
    const stepNbr = stepIndex + 1;

    describe(`Step ${stepNbr} - ${step.Title}`, () => {
        step.TestCases.forEach((testCase, testCaseIndex) => {
            const testCaseNbr = testCaseIndex + 1;
            const testCaseTitle = FormatTestCaseName(stepNbr, testCaseNbr, testCase, step.TargetFunctionName);

            let targetCode = rewire(solutionFilePath);
            let targetFunction: Function;
            try {
                targetFunction = targetCode.__get__(step.TargetFunctionName);
            } catch (err) {

            }

            if ("Error" in testCase) {
                it(testCaseTitle, (done) => {
                    // using the try/catch approach to assert on errors so we can give more feedback to the dev
                    let result;
                    try {
                        result = targetFunction(testCase.Input);
                    } catch(error) {
                        expect(error.message).to.equal(testCase.Error, "The error was thrown but its message does not match the expected result.");
                        done();
                    }
                    
                    expect.fail(`An error was expected to be thrown, but instead the code returned the value: ${result}`);
                }); 
            } else {
                it(testCaseTitle, () => {
                    assert.isOk(targetFunction, `could not find a function with the name '${step.TargetFunctionName}'`);
                    assert.isFunction(targetFunction);
                    let args = Array.isArray(testCase.Input) ? [...testCase.Input] : [testCase.Input];

                    let result = targetFunction(...args);
                    expect(result).to.eql(testCase.Expected);
                });
            }
        });
    });
});
