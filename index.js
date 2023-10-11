const semver = require('semver');
const express = require('express');
const app = express();
const escapeHtml = require('escape-html');

function checkUserName(userName){
  return userName === 'SEB' || userName === 'SNYK';
}

function formatUserName(userName){
  return userName.toUpperCase();
}

function printResponse(userName, res){
  let formatted = formatUserName(userName);
  if(checkUserName(formatted)){
    res.send('The user is a valid user.');
  }else{
    res.send(`User ${formatted} is an invalid user.`);
  }
}

app.get('/users/checkname', function (req, res) {
  const userName = req.query.name;
  printResponse(userName, res);
});

function makeRegex(tag){
  return `<${tag}>([^<]*)</${tag}>`;
}

app.get('/html/extract', function (req, res) {
  const tag = req.query.tag;
  const code = req.query.code;
  const regex = makeRegex(tag);
  const re = new RegExp(regex);
  const result = code.match(re)[1];
  const escapedResult = escapeHtml(result);
  const escapedCode = escapeHtml(code);
  const escapedTag = escapeHtml(tag);
  res.send(`The contents of tag "${escapedTag}" within code "${escapedCode}" is "${escapedResult}".`);
});

app.get('/product/checkversion', function (req, res) {
  const version = req.query.version;
  const result = escapeHtml(semver.validRange(version));
  res.send(`Result of version check: ${result}.`);
});

app.listen(8081, function () {
  console.log('Application running on port 8081!');
});
