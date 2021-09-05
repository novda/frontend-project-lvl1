#!/usr/bin/env node

import readlineSync from 'readline-sync';
// eslint-disable-next-line import/extensions
import welcome from '../src/cli.js';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
welcome(name);
