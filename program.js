#!/usr/bin/env node

import { spawnSync } from "child_process";
import glob from "glob";

const files = new Array();
for (const arg of process.argv.slice(2)) {
    files.push(...glob.sync(arg))
}

for (const file of files) {
    const result = spawnSync(process.argv0, [file], { stdio: "inherit" });
    if (result.status) process.exitCode = 1;
}
