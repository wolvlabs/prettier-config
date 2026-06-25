# @wolvlabs/prettier-config

Shared Prettier config. Requires Prettier 3+.

```bash
pnpm add -D prettier @wolvlabs/prettier-config
```

Non-Tailwind project - in `package.json`:

```json
{ "prettier": "@wolvlabs/prettier-config" }
```

Tailwind v4 project - `prettier.config.js`:

```js
import tailwind from "@wolvlabs/prettier-config/tailwind";
export default tailwind("./src/style.css");
```
