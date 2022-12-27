# PROJECT : ELD

#### Project Status:

This project is currently in development.

## Technology Stack
![react](https://img.shields.io/badge/-react-gray?style=for-the-badge&logo=react&logoColor=white&labelColor=306998)
![typescript](https://img.shields.io/badge/-typescript-306998?style=for-the-badge&logo=typescript&logoColor=white&labelColor=30)
![redux](https://img.shields.io/badge/-redux-gray?style=for-the-badge&logo=redux&logoColor=white&labelColor=purple)
![mantine](https://img.shields.io/badge/-mantine-306998?style=for-the-badge&logo=mantine&logoColor=white&labelColor=306998)
![axios](https://img.shields.io/badge/-axios-gray?style=for-the-badge&logo=axios&logoColor=white&labelColor=purple)
![storybook](https://img.shields.io/badge/-storybook-gray?style=for-the-badge&logo=storybook&logoColor=white&labelColor=violet)
![react-query](https://img.shields.io/badge/-react%20query-gray?style=for-the-badge&logo=react-query&logoColor=white&labelColor=306998)
![emotion](https://img.shields.io/badge/-emotion%emotion-purple?style=for-the-badge&logo=styled-components&logoColor=white&labelColor=purple)
![git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
## Additional technologies for codestyling

- Airbnb React Style Guides
- Husky pre-commit
- Prettier 
- StyleLint

### Language: Typescript 4.7.+

### Library : React 18.2.+, React Dom 18.2.+, React Router Dom 6+,  Redux 4.2.+, React Query 3.3.+
### `yarn prepare`

This is the #1 thing to do as it will prepare git hooks after you run yarn install

## Conventions
- 1.Naming is kebab-cased
- 2.React components should end in .tsx
- 3.Prefer arrow functions for components 
- 4.Components names are PascalCase.


#### You should install these plugins in your IDE.

- 1.Eslint
- 2.Prettier
- 3.Stylelint

## Installation and Setup Instructions

Clone down this repository. You will need `node` and `npm` installed globally on your machine.  `node version 16.14.*`

Installation:

`yarn install`  

To Start Server:

`yarn start`  

To Visit App:

`localhost:3000` 


# Architecture

```
.
└── app
    └── .husky
    └── .storybook
    └── public
    └── src
        ├──  api
        ├──  assets
        ├──  components
        ├──  configs
        ├──  hooks
        ├──  layouts
        ├──  redux
        ├──  services
        ├──  types
        ├──  utils
        ├──  views
        ├──  app.tsx
        ├──  global.d.ts
        ├──  index.tsx
    ├── .eslintignore
    ├── .eslintrc.json
    ├── .gitignore
    ├── .prettierignore
    ├── .prettierrc.js
    ├── .stylelintrc.json
    ├──  tsconfig.json
```

## Naming

  - **Component Naming**: 

    ```jsx
    // bad
    import mainCard from './main-card';

    // good
    import MainCard from './main-card';

    // bad
    const MainCardItem = <MainCard />;

    // good
    const mainCardItem = <MainCard />;
    ```

    ```jsx
    // bad
    import Header from './header/header';

    // bad
    import Header from './header/header';

    // good
    import Header from './header';
    ```

  - **Props Naming**: Avoid using DOM component prop names for different purposes.
    ```jsx
    // bad
    <MyComponent style="apple" />

    // bad
    <MyComponent className="apple" />

    // good
    <MyComponent variant="apple" />
    ```


## Alignment

   - **Example**:

      ```jsx
      // bad
      <Foo superLongParam="bar"
          anotherSuperLongParam="baz" />

      // good
      <Foo
        superLongParam="bar"
        anotherSuperLongParam="baz"
      />

      // if props fit in one line then keep it on the same line
      <Foo bar="bar" />

      // children get indented normally
      <Foo
        superLongParam="bar"
        anotherSuperLongParam="baz"
      >
        <Quux />
      </Foo>

      // bad
      {showButton &&
        <Button />
      }

      // bad
      {
        showButton &&
          <Button />
      }

      // good
      {showButton && (
        <Button />
      )}

      // good
      {showButton && <Button />}

      // good
      {someReallyLongConditional
        && anotherLongConditional
        && (
          <Foo
            superLongParam="bar"
            anotherSuperLongParam="baz"
          />
        )
      }

      // good
      {someConditional ? (
        <Foo />
      ) : (
        <Foo
          superLongParam="bar"
          anotherSuperLongParam="baz"
        />
      )}
      ```

## Quotes

   - **Example**:
   
      ```jsx
      // bad
      <Foo bar='bar' />

      // good
      <Foo bar="bar" />

      // bad
      <Foo style={{ left: "20px" }} />

      // good
      <Foo style={{ left: '20px' }} />
      ```


## Reflection
Here will be reflections on the problems encountered in the projects and their further solution.
