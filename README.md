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

### package.json
```json
"main": "dist/index.js",
"scripts": {
    "dev" : "ts-node src",
    "build": "tsc && node dist"
  },
```

```bash
$ tsc --init
```

```bash
$ npm i ts-node -d 
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
        "skipLibCheck": true,
        "forceConsistentCasingInFileNames": true
    }
}
```

### build
``` bash
$ npm run build
```