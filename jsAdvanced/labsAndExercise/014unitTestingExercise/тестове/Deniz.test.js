import { expect } from 'chai';
import { sum, sub } from './sum.js';

describe('Demo test', () => {
    it('works with 5 and 3', () => {
        expect(sum(5, 3)).to.equal(11);
    });

    it('works with 5 and 3', () => {
        expect(sub(5, 3)).to.equal(-1);
    });
});