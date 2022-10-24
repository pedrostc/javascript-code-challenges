import { IChallengeStep } from "./utils";

export const steps: IChallengeStep[] = [
    {
        Title: "Create a function called 'myFunction' that receives no arguments and returns the string 'Hi'.",
        TargetFunctionName: "myFunction",
        TestCases: [{ Input: "N/A", Expected: "Hi" }]
    }, {
        Title: "Create a function called 'greet' that receives a 'name' argument and returns the string 'Hello {name}!', where {name} is the function argument.",
        TargetFunctionName: "greet",
        TestCases: [
            { Input: "World", Expected: "Hello World!" },
            { Input: "Code", Expected: "Hello Code!" },
            { Input: "Code!", Expected: "Hello Code!!" }
        ]
    }, {
        Title: "Create a function called 'sum' that receives 2 numbers as arguments and returns their sum, also another number.",
        TargetFunctionName: "sum",
        TestCases: [
            { Input: [1, 1], Expected: 2 },
            { Input: [3, 4], Expected: 7 },
            { Input: [10, 100], Expected: 110 },
            { Input: [32, 10], Expected: 42 }
        ]
    }, {
        Title: "Create a function called 'subtract' that receives 2 numbers as arguments and subtracts the second from the first and returns the result, also another number.",
        TargetFunctionName: "subtract",
        TestCases: [
            { Input: [1, 1], Expected: 0 },
            { Input: [3, 4], Expected: -1 },
            { Input: [1000, 10], Expected: 990 },
            { Input: [52, 10], Expected: 42 },
            { Input: [10, 52], Expected: -42 }
        ]
    }, {
        Title: "Create a function called 'sortNumbersAsc' that receives an array of numbers as argument and return them sorted in ASCENDING order.",
        TargetFunctionName: "sortNumbersAsc",
        TestCases: [
            { Input: [[1, 0]], Expected: [0, 1] },
            { Input: [[3, 3, 3]], Expected: [3, 3, 3] },
            { Input: [[1, 0, 6, -10, -3]], Expected: [-10, -3, 0, 1, 6] },
            { Input: [[-10, -2, 0, 2, 10]], Expected: [-10, -2, 0, 2, 10] },
        ]
    }, {
        Title: "Create a function called 'sortNumbersDesc' that receives an array of numbers as argument and return them sorted in DESCENDING order.",
        TargetFunctionName: "sortNumbersDesc",
        TestCases: [
            { Input: [[0, 1]], Expected: [1, 0] },
            { Input: [[3, 3, 3]], Expected: [3, 3, 3] },
            { Input: [[1, 0, 6, -10, -3]], Expected: [6, 1, 0, -3, -10] },
            { Input: [[-10, -2, 0, 2, 10]], Expected: [10, 2, 0, -2, -10] },
            { Input: [[30, 3, 0, -3, -30]], Expected: [30, 3, 0, -3, -30] },
        ]
    },
];
