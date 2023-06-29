import fs from "fs";
import path from "path";

fs.copyFile(path.join("hooks", "pre-commit"), path.join(".git", "hooks", "pre-commit"), (err) => {
  if (err) throw err;
  console.log("Hook setup completed");
});
