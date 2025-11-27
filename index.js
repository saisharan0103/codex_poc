// index.js
import fs from "fs";
import path from "path";
import { Codex } from "@openai/codex-sdk";

async function run() {
  const sourcePath = "./sample/calculator.js";
  const code = fs.readFileSync(sourcePath, "utf8");

  const prompt = `
// 


// Task: generate unit tests for the discount calculator
`;

  const codex = new Codex();
  const thread = codex.startThread();
  console.log("Codex: running request...");
  const result = await thread.run(prompt);

  const extractTestCode = (text) => {
    if (!text) return "";
    const match = text.match(/```(?:js|javascript)?\s*([\s\S]*?)```/);
    if (match) return match[1].trim();
    return text.trim();
  };

  const testCode = extractTestCode(result.finalResponse);
  const testsDir = "./tests";
  if (!fs.existsSync(testsDir)) {
    fs.mkdirSync(testsDir, { recursive: true });
  }
  const testFile = `${path.basename(sourcePath, path.extname(sourcePath))}.test.js`;
  const testPath = path.join(testsDir, testFile);
  fs.writeFileSync(testPath, testCode, "utf8");

  console.log("Codex: completed.");
  console.log(`Tests written to: ${testPath}`);
}

run().catch(err => console.error(err));
