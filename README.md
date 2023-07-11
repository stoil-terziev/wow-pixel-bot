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
2. Use a prefix based on the purpose of the branch followed by kebab-case explanation, example - `feature/add-cache-invalidation-to-X-endpoint` or `bugfix/fix-bot-cards-not-updating`. Currently the branch names are not enforced and that naming is just a suggestion so branches can be easily found and understood just by looking at the name, but at some point such rule to enforce the naming will be put in place.
3. Either squash all commits into one or use squash and merge before merging your pull request to keep a clean git history.
4. Open a pull request when you're ready to merge. The title follows the same naming standard as the commit messages, and enforces the following regex:

```regex
^(?:feat|fix|docs|refactor|test|build|ci|chore|revert): .*
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
