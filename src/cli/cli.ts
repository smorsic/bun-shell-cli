import { runScript } from "bun-run-scripts";

export const runCli = async (argv: string[]) => {
  if (!argv[0]) {
    // eslint-disable-next-line no-console
    console.error("No command provided");
    process.exit(1);
  }

  if (argv.length > 1) {
    // eslint-disable-next-line no-console
    console.error(
      "Too many arguments provided. Expected one shell command string.",
    );
    process.exit(1);
  }

  const { output, exit } = runScript({
    command: argv[0],
    shell: "bun",
  });

  for await (const outputChunk of output) {
    process.stdout.write(outputChunk.decode());
  }

  const exitDetails = await exit;

  process.exit(exitDetails.exitCode);
};
