# Codex POC

A tiny script that sends a source file to the Codex SDK and saves generated Jest tests.

## Setup
- Install deps: `npm install`
- Add your OpenAI key to `.env` as `OPENAI_API_KEY=...`

## Run
```bash
node index.js "Write Jest tests for the add function"
```
- The script reads `./sample/calculator.js` and writes tests to `./tests/calculator.test.js`.
- Output is minimal: it logs start, completion, and the path of the written test file.

## Notes
- Update the prompt argument to change what you ask Codex to generate.
- If you want to silence the Node ESM warning, add `"type": "module"` to `package.json`.
