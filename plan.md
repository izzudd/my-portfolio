1. Modify `src/components/GridContainer.svelte`
   - Remove `import { run } from 'svelte/legacy';`.
   - Replace `run(() => { ... })` with `$effect(() => { ... })`.

2. Modify `src/components/HorizontalBorderContainer.svelte`
   - Remove `import { run } from 'svelte/legacy';`.
   - Replace `run(() => { ... })` with `$effect(() => { ... })`.

3. Modify `src/components/SplashScreen.svelte`
   - Remove `import { run } from 'svelte/legacy';`.
   - Replace `run(() => { ... })` with `$effect(() => { ... })`.

4. Run `yarn check && yarn lint` and pre-commit checks.
