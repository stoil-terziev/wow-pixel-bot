# WoW Pixel Bot

## Installation

```bash
yarn install
```

## Commit

For commits don't use

```bash
git commit -m "Message"
```

instead use

```bash
yarn commit
```

which enforces a standard format for the commit messages.

## Contributing

1. Create your own branch with the `main` branch as a source.
2. Open a pull request when you're ready to merge. The title follows the same naming standard as the commit messages, and enforces the following regex:

```regex
^(?:feat|fix|docs|refactor|test|build|ci|chore|revert): .*
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
