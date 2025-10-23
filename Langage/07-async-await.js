import fs from 'node:fs/promises';

async function copy() {
  try {
    const content = await fs.readFile('.prettierrc', { encoding: 'utf-8' });
    await fs.writeFile('.prettierrc.copy', content);
    console.log('Copy Async Done');
  } catch (err) {
    console.log(err);
  }
}

copy();
