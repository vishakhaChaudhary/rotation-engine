import { throws } from 'assert';
import { validMockRow, inValidMockRow,  } from './mockData/mockdata.js';
import baseHelper from "../app/utils.js";

describe('Creating the rotation engine', () => {
    it('should throw an error for no arguments', () => {
        throws(() => {
            baseHelper.rotationEngine()
        }, 'No arguments provided');
    });

    describe('should validate the array', () => {
        it ('should return the empty array for invalid array', (done) => {
            const { id, json } = inValidMockRow;
            const result = baseHelper.rotationEngine(id, json);
            expect(result.isValid).toEqual(false);
            expect(result.json.length).toEqual(0);
            done();
        });

        it ('should return the rotated and valid table with equal length', (done) => {
            const { id, json } = validMockRow;
            const result = baseHelper.rotationEngine(id, json);
            expect(result.isValid).toEqual(true);
            expect(result.json.length).toEqual(json.length);
            done();
        });
    })
});