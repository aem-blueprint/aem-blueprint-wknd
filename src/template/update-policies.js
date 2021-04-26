const { writeFileSync } = require('fs');
const { resolve } = require('path');
const child_process = require('child_process');

const path = resolve(process.cwd(), 'src', 'template', 'policies.json');

const mode = process.env.MODE;
let url = mode === 'dev' ? process.env.DEV_AEM_URL : process.env.PROD_AEM_URL;
const creds = mode === 'dev' ? process.env.DEV_CREDENTIALS : process.env.PROD_CREDENTIALS;
const site = mode === 'dev' ? process.env.DEV_AEM_SITE : process.env.PROD_AEM_SITE;
url = url.replace('://', `://${creds}@`);

const runCmd = (cmd) => {
  const resp = child_process.execSync(cmd);
  return resp.toString('UTF8');
}

let policyJSON = JSON.parse(runCmd(`curl ${url}/conf/${site}/settings/wcm/policies.infinity.json`));
// Production returns an array of urls with different depth
if (Array.isArray(policyJSON)) {
  console.log(`The policy object wasn't returned, but rather a list of files. Fetching again`);
  policyJSON = JSON.parse(runCmd(`curl ${url}/${policyJSON.shift()}`));
}

writeFileSync(path, JSON.stringify(policyJSON,null,2), { recursive: true });