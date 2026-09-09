import {describe, it, expect, vi} from 'vitest';
import {calculator} from "./calculator";


describe("Vitest Calculator", () =>{

    it("should add two numbers", () => {

        const result = calculator.add(3,3);
        expect(result).toBe(6);

    })
    
///MOCK

    it("shows how mocking works", () =>{
        const spy =vi.spyOn(calculator, "add").mockReturnValue(5);
        const result = calculator.add(2,3);

        expect(result).toBe(5);
        expect(spy).toHaveBeenCalledOnce();
        expect(spy).toHaveBeenCalledWith(2,3);
    })

    ///PURE MOCK

    it("shows how pure mock works", () => {
        const addMock=vi.fn().mockReturnValue(10);
        const result=addMock(5,5);

        expect(result).toBe(10);
        expect(addMock).toHaveBeenCalledOnce();
        expect(addMock).toHaveBeenCalledWith(5,5);
    })

});