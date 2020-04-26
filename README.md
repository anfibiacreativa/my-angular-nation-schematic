This schematics can be executed to replicate a folder strcuture across many repos!


Steps to install, after cloning the repo (with npm)

1. Move to the schematics package root folder and install the package
```bash
cd my-angular-nation-schematic && npm install
```

2. Build the package with 
```bash
npm run build
```

3. Link this project to your node version, so you don't have to install it as part of the project it will be executed on, running 
`npm link`

You're set! Now you can exectute it from an Angular project, by linking it to this schematics project and generating the aliased schematics, like this

```bash
cd [path-to-your-project] &&
npm link my-angular-nation-schematic &&
ng generate my-angular-nation-schematic:my-angular-nation-schematic --name=my-angular-nation-schematic --path=/src/app 
```
