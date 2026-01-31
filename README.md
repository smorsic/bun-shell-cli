# bun-shell-cli

Run a [Bun Shell](https://bun.com/docs/runtime/shell) script inline via a CLI.

The Bun Shell is a bash-like shell that works cross-platform.

## Usage

Simply call the CLI with the shell command string you want to run.

```bash
bunx bun-shell-cli "echo 'Hello, world!'"
```

You can also install it via `bun add --dev bun-shell-cli` and then call `bun-shell-cli` in your package.json `"scripts"`.

## More

Check out related project [`bun-workspaces`](https://github.com/bun-workspaces/bun-workspaces), a Bun monorepo management tool that can run package.json scripts and inline Bun Shell scripts across workspaces.
