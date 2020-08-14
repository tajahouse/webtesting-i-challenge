const enhancer = require('./enhancer.js');
const { exportAllDeclaration } = require('babel-types');
const { executionAsyncId } = require('async_hooks');
const { italic } = require('chalk');
const { success, repair, fail, get } = require('../enhancing/enhancer')
// test away!
test(" Testing my test 😃 ", () =>{
    expect(1+1).toBe(2)
})  
