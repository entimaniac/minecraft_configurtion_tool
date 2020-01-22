# Welcome!
This project contains tools for managing minecraft server properties.

## Local Development
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## Manual Firebase Deployment
 To deploy this app to firebase:

 #### `npm run build`
 #### `npm install -g firebase-tools`
 #### `firebase login`
 #### `firebase init`
 #### `firebase deploy`
 
## Automated Deployment
An automated version bump, build, and deploy will occur on merges into Master github action scripts.

### Version Increas
For controlling version bumps, here is an excerpt from [the source ](https://github.com/marketplace/actions/automated-version-bump).

> * Based on the commit messages, increment the version from the lastest release.
If the string "BREAKING CHANGE" is found anywhere in any of the commit messages or descriptions the major version will be incremented.
If a commit message begins with the string "feat" then the minor version will be increased. This works for most common commit metadata for feature additions: "feat: new API" and "feature: new API".
All other changes will increment the patch version.
> * Push the bumped npm version in package.json back into the repo.
> * Push a tag for the new version back into the repo.