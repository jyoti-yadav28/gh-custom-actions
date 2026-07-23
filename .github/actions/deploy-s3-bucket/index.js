import * as core from '@actions/core';
import * as github from '@actions/github';
import * as exec from '@actions/exec';
// const github = require('@actions/github')
// const exec = require('@actions/exec')

function run(){
    // Get the input values
    const bucket = core.getInput('bucket' , {required: true});
    const bucketRegion = core.getInput('bucket-region' , {required: true});
    const distFolder = core.getInput('dist-folder' , {required: true});

    // upload the files
    const s3Uri = `s3://${bucket}` ;
    exec.exec(`aws sync ${distFolder} ${s3Uri} --region ${bucketRegion}`);

    core.notice("hello from Custom JavaScript action")
}

run();