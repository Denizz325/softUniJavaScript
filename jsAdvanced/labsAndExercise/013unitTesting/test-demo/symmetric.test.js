import { expect } from 'chai';
import { isSymmetric } from './symmetry.js';

describe('Symmetry', () => {
    it('return the symmetric arr', () => {
        expect(isSymmetric([1,2,2,1])).to.be.true
    })

    it('return false for non-symmetric', () => {
        expect(isSymmetric([1,2,3])).to.be.false
    })
    it('return false for non arr', () => {
        expect(isSymmetric(5)).to.be.false
    })
});