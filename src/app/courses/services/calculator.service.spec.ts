import { CalculatorService } from "./calculator.service";
import { LoggerService } from "./logger.service";

describe("CalculatorService", () => {
    it("should add two numbers", () =>  {
        //setupphase - prepapration the components or services that we can to test
        const calculator = new CalculatorService(new LoggerService());

        // execution phase - going to trigger the operation 
        const result = calculator.add(2, 2);

        // series of test assertions that are either going to fail or to be successful
        expect(result).toBe(4);
    });

    it("should substract two numbers", () =>  {
        const calculator = new CalculatorService(new LoggerService());

        const result = calculator.subtract(2, 2);

        expect(result).toBe(0, "unexpected subtraction result");
    });
})