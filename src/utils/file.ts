import fs from "fs";

export const deleteFile = async (filename: string) => {
  try {
    // verifica d o aquivo existe ou nao
    await fs.promises.stat(filename);
  } catch {
    return;
  }
  // remove o arquivo
  await fs.promises.unlink(filename);
};
