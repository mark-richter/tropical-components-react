# Tropical Components React

<p align="center">
<a href="" alt="Backers on Open Collective">
        <img src="https://nodei.co/npm/tropical-components-react.png" /></a>
</p>

<span align="center">
    <h4>Develop:
    &nbsp;
    <a href="" alt="Backers on Open Collective">
        <img src="https://img.shields.io/travis/ssbcode/tropical-components-react/develop.svg?style=for-the-badge" /></a>
        &nbsp;
        &nbsp;
        &nbsp;
    Master:
    &nbsp;
    <a href="#sponsors" alt="Sponsors on Open Collective">
        <img src="https://img.shields.io/travis/ssbcode/tropical-components-react/master.svg?style=for-the-badge" /></a>
        </h4>
</span>

### Lets get tropical!

This repository provides a collection of SSB Components implemented using React.

#### Demos & Live Docs

<a href="https://tropical-components.netlify.com/" rel="some text">![Foo](https://raw.githubusercontent.com/github/explore/b828e2f992ba7aaeee664136cf4afd002112d79a/topics/storybook/storybook.png)</a>

** Components are subject to change so please consult the storybook documentation for usage **

## Installation

#### Tropical Components (Required)

We include all the library files you will need for styling inside one package called `tropical-components`. We do this so that you can still get consistent styled components whether you are using react or not. Included for right now are `bootstrap 3` and `tropical (ssb styles for bs3)`.

```bash
npm install tropical-components
    or
yarn add tropical-components
```

#### Tropical Components React

This is the library of custom react components built on top of `tropical-components`. Components will be added periodically to fit the needs of apps that we are in the process of building. This will be a long process but the end goal is to have react components that cover every component in `bs3` and `tropical-components`.

```bash
npm install tropical-components-react
    or
yarn add tropical-components-react
```

### Important Notice

For the time being, a complete list of "Complete" components will be kept on the bottom of this page. This should not stop you from using `tropical-components` for future apps since you will still get the benefit of consistent styles going forward. For example, we do not currently have a button react component, but importing `tropical.scss` from `tropical-components` will allow you to write

```html
    <button class="btn">Enter</button>
```

and still get the same styles as if you were to `import { Button}` from our component library

## Usage

#### Tropical Components

After successfully installing the `tropical-components` npm package, in your global scss file, add:

```scss
@import "~tropical-components/src/bootstrap/bootstrap.css";
// If you want to utilize material icons
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");
@import "~tropical-components/src/ssb/tropical.scss";
```

#### Tropical Components React

After successfully installing the `tropical-components-react` npm package, in one of your component files, add:

```js
import { ComponentName } from "tropical-components-react";
```

## Live Components

-   Forms
    -   DynamicForm
    -   Radio
    -   Select
    -   TextInput
    -   TextArea
    -   CreatableSingleSelect
-   Cards
    -   Card
    -   CardImage
-   Button
    -   Button
