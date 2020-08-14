const enhancer = require('./enhancer.js');
const { exportAllDeclaration } = require('babel-types');
const { executionAsyncId } = require('async_hooks');
const { italic } = require('chalk');
const { success, repair, fail, get } = require('../enhancing/enhancer');
const { check } = require('yargs');
// const { describe } = require('yargs');
// test away!
test(" Testing my test 😃 ", () =>{
    expect(1+1).toBe(2)
})  

const item = {
    tool: 'wand',
    durability: '60',
    enhancement: '20'
}

describe('repair 🔨 ', ()=>{
        it('should restore durability to 100', () =>{
            expect(repair(item).durability).toBe(100)
        })
})
describe('success ✔ ', ()=>{
    it('should allow enhancements', () =>{
    })
})
describe('fail ❌ ', ()=>{
    it('should failed enhancements', () =>{
   })
})

describe('get 🤝  ', ()=>{
    it('get something in stretch', () =>{
    })
})

