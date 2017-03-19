#!/usr/bin/env node
'use strict';
const meow = require('meow');
const open = require('open');
const https = require('https');
const gitShas = require('git-shas');
const exec = require('child_process').execSync;
const githubLink = require('github-url-from-git');

const cli = meow(`
  diffs <n. of tabs>

  Exple: $ diffs 7          (opens  7 tabs)
         $ diffs            (opens 10 tabs)
`, {
  alias: {
    'v': 'version',
    'h': 'help'
  }
});

// take the first arg as n. of tabs or default to 10
let numberOfTabs = Number(cli.input[0]) || 10;

let repoPath = exec('git config --get remote.origin.url');
repoPath = githubLink( repoPath.toString().trim() );

const shas = gitShas().slice(0, numberOfTabs);

// test connection first link or abort other
https.get(repoPath, res => {
  if (res.headers.status === '200 OK') {
    shas.forEach( commit => {
      open(`${ repoPath }/commit/${ commit }`);
    });

    console.log(`Happy diffing!!!`);
  }
});
