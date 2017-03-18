#!/usr/bin/env node
'use strict';

const meow = require('meow');
const open = require('open');
const gitShas = require('git-shas');

const cli = meow(`
  To open the most recent diffs on your browser
  diffs <n. of tabs> <owner/repoName>

  Exple: $ diffs 10 tj/co
`, {
  alias: {
    'v': 'version',
    'h': 'help'
  }
});

let input = cli.input;

let numberOfTabs = Number(input[0]);
let repoPath = input[1];

if ( numberOfTabs < 0 || !repoPath || repoPath.length < 2 ) {
  throw new Error(`
    You probably forgot to include the number of tabs first.
    Then the 'owner'/'reponame'
    example: $ diffs 10 segmentio/nightmare
    `);
}

let shas = gitShas().slice(0, numberOfTabs);

shas.forEach( commit => {
  open(`https://github.com/${ repoPath }/commit/${ commit }`);
});

console.log(`Happy reviews and keep on learning champion!`);
