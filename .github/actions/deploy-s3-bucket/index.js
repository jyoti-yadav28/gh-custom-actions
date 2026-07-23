import * as core from '@actions/core';
import * as github from '@actions/github';
// const github = require('@actions/github')
// const exec = require('@actions/exec')

function run(){
    core.notice("hello from Custom JavaScript action")
}

run();