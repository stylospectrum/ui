/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const sapIconsRaw = require('./SAP-icons.json');
const fs = require('fs');
const path = require('path');

const dir = path.join(process.cwd(), 'src/icon/data');

const getTemplate = (iconName, pathData) => {
  return `import {registerIcon} from '../util';
registerIcon("${iconName}", { pathData: "${pathData}" })
export default "${iconName}"`;
};

Object.keys(sapIconsRaw.data).forEach((iconName) => {
  fs.writeFileSync(
    dir + '/' + iconName + '.ts',
    getTemplate(iconName.toLowerCase(), sapIconsRaw.data[iconName].path)
  );
});
