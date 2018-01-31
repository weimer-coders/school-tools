# School Tools

## Installation

Clone the git repository from GitHub (or use the GitHub app).

```bash
$ git clone git@github.com:weimer-coders/school-tools.git
```

Enter the project and install its dependencies.
```bash
$ cd school-tools
$ npm install
```

## Developing

In order to start developing on the project activate the `webpack-dev-server`.
```bash
$ npm run dev
```

This will start a server on `http://localhost:8080/` and open your default browser.

After editing any files, save and refresh the page to see the changes.

## Deployment

When you're ready to deploy the code, run the build script
```bash
$ npm run build
```

This will create a directory called `dist` with all your built files which you upload to a server.
