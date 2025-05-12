import { CalculatorService } from "./calculator.service";

describe("CalculatorService", () => {

    let calculator: CalculatorService,
        loggerSpy: any;

    //implement a jasmin spy
    beforeEach(() => {
        console.log("Calling beforeEach");
        loggerSpy = jasmine.createSpyObj('LoggerService', ["log"]);
        calculator = new CalculatorService(loggerSpy);
    })

    it("should add two numbers", () => {
        console.log("Add test");

        //setup phase - prepapration the components or services that we can to test
        // const calculator = new CalculatorService(logger);

        // execution phase - going to trigger the operation 
        const result = calculator.add(2, 2);

        // series of test assertions that are either going to fail or to be successful
        expect(result).toBe(4);
        expect(loggerSpy.log).toHaveBeenCalledTimes(1);
    });

    it("should substract two numbers", () => {
        console.log("Substract test");

        const result = calculator.subtract(2, 2);

        expect(result).toBe(0, "unexpected subtraction result");
        expect(loggerSpy.log).toHaveBeenCalledTimes(1);
    });
})