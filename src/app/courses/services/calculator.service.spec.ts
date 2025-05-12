import { CalculatorService } from "./calculator.service";
import { LoggerService } from "./logger.service";

describe("CalculatorService", () => {
    it("should add two numbers", () =>  {
        //help to implement a jasmin spy
        const logger = jasmine.createSpyObj('LoggerService', ["log"]);

        //setupphase - prepapration the components or services that we can to test
        const calculator = new CalculatorService(logger);

        // execution phase - going to trigger the operation 
        const result = calculator.add(2, 2);

        // series of test assertions that are either going to fail or to be successful
        expect(result).toBe(4);
        expect(logger.log).toHaveBeenCalledTimes(1)
    });

    it("should substract two numbers", () =>  {
        const calculator = new CalculatorService(new LoggerService());

        const result = calculator.subtract(2, 2);

        expect(result).toBe(0, "unexpected subtraction result");
    });
})