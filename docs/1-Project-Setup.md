<!-- Creating react TS app -->

npm create vite@latest [App-name] --template react-ts
cd my-project
npm install

<!-------------------------------------------------------------------------------- -->
<!-- Running project -->

npm run dev

<!-------------------------------------------------------------------------------- -->
<!-- Ts config update for absolute paths [imports]  tsconfig.app.json-->

1- configure typescript
inside compilerOptions object
add the following

<!-- "paths": {
      "@/*": ["./src/*"]
    } -->

2- configure vite

inside defineConfig
add the following

 <!-- resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  }, -->

<!-------------------------------------------------------------------------------- -->
<!-- ESLint & Prettier Setup -->

npm install -D eslint prettier eslint-config-prettier eslint-plugin-prettier @typescript-eslint/eslint-plugin @typescript-eslint/parser

<!-- .prettierrc -->

on the top level of the project create file called .prettierrc
[text](.prettierrc)

<!-- eslint.config.js -->

on the top level of the project after running the command should display a file called eslint.config.js
[text](../eslint.config.js)

<!-------------------------------------------------------------------------------- -->
<!-- VSC prefernces settings  -->

[text](../.vscode)

for format on save , add the following in [text](../.vscode/settings.json)
{
"editor.codeActionsOnSave": {
"source.fixAll": "explicit",
"source.organizeImports": "explicit",
"source.sortMembers": "explicit"
},
"editor.formatOnSave": true,
"editor.defaultFormatter": "esbenp.prettier-vscode"
}
