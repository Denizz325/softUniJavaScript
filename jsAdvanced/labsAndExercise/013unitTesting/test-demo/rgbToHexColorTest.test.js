import { expect } from 'chai';
import { rgbToHexColor } from './rgb.js';

describe('RGB test', () => {
    describe('Happy path', () => {
        it('converts white', () => {
            expect(rgbToHexColor(255,255,255)).to.equal('#FFFFFF')
        });
        it('converts black', () => {
            expect(rgbToHexColor(0,0,0)).to.equal('#000000')
        });
        it('converts aqua blue', () => {
            expect(rgbToHexColor(0, 255, 255)).to.equal('#00FFFF')
        });
    });

    describe('Invalid params', () => {
        it('return undefind for missing param', () => {
            expect(rgbToHexColor(0)).to.be.undefined
        });

        it('return undefind for values out of range ', () => {
            expect(rgbToHexColor(-1,-1,-1)).to.be.undefined
        });

        it('return undefind for values out of range ', () => {
            expect(rgbToHexColor(256,256,256)).to.be.undefined
        });
        it('return undefind for invalid value ', () => {
            expect(rgbToHexColor('0','0','0')).to.be.undefined
        });
    })
}) 