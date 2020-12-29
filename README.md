# typescript_ex

typescript 개발 환경 설정

```bash
$ npm init -y
```

```bash
$ npm i typescript -d
```

```bash
$ mkdir src
```

```bash
$ tsc --init
```

```bash
$ npm i ts-node -d 
@types/node
```

```bash
$ npm i -S ramda
$ npm i -D @types/ramda
```

```bash
$ npm i -S chance
$ npm i -D @types/chance
```

### package.json
```json
"main": "dist/index.js",
"scripts": {
    "dev" : "ts-node src",
    "build": "tsc && node dist"
  },
```

### tsconfig.json
``` json
{
    "include": ["src/**/*.ts"],
    "exclude": [],

    "compilerOptions": {
        "target": "es5",
        "module": "commonjs",
        "outDir": "./dist",
        "strict": true,
        "rootDirs": ["src"],
        "esModuleInterop": true,
        "downlevelIteration": true,
        "skipLibCheck": true,
        "forceConsistentCasingInFileNames": true
    }
}
```

### build
``` bash
$ npm run build
```