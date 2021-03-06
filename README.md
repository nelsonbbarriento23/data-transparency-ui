# Data Transparency User Interface (UI) Component Library

Install our library using npm:

```shell
    npm i fedspendingtransparency/data-transparency-ui#v_._._
```

Import our components like this:

```javascript
    import { Table } from 'data-transparency-ui';
```

To see our exported components, [see our type definition file.](https://github.com/fedspendingtransparency/data-transparency-ui/blob/master/index.d.ts).

The purpose of this project is to give visibility into the patterns built into the 
[Broker](https://broker.usaspending.gov/) and [USASpending](https://usaspending.gov/) UI and their corresponding techincal implementations.
These implementations, referred to as UI Components, exist outside of the USASpending
and Broker codebase.

With this visibility & independence, the following benefits arise:

- UI/UX & Development Teams can identify a one-to-one relationship between designs and their implementations in code.
- USASpending & Broker can reuse the same code.
- Integration with these components within USASpending and Broker will result in the ability to redesign or improve these components
in a single place and then see those changes propagated throughout the website immediately.

[Here is a current status report on USASpending and Broker Integration](https://github.com/fedspendingtransparency/data-act-documentation/blob/data-transparency-ui/frontend_apps/component-library-integration-status.md).

## UI/UX & Development Collaboration Process

The below info-graphic displays how the UI/UX and Development Teams will iteratively work together to identify new components for this library.

<img src={infoGraphic} alt="Data Transparency USASpending.gov logo" />

## Component Library Contribution

We use [storybook](https://github.com/storybookjs/storybook) to demonstrate our library of components and their technical implementations.
This open-source project has nearly 1K contributors and is constantly improving.

### Creating a New Story for a Component

We use the [Component Story Format](https://storybook.js.org/docs/formats/component-story-format/) to demonstrate our components. Once
Storybook supports `mdx` format for stories, we will migrate to that to achieve greater customization over our stories.

Currently, we are using the following Storybook features to display our current implementation:

- [Knobs](https://github.com/storybookjs/storybook/tree/master/addons/knobs)
- [Accessibility](https://github.com/storybookjs/storybook/tree/master/addons/a11y)
- [Mobile Responsiveness](https://github.com/storybookjs/storybook/tree/master/addons/viewport)
- [Actions](https://github.com/storybookjs/storybook/tree/master/addons/actions)
- [Docs](https://github.com/storybookjs/storybook/tree/master/addons/docs)

### Technical Directions for Adding New Components

When adding a new component to this library, please follow the below guide:
- Build storybook artifacts and Component's CSS by running `npm run build`
    - Storybook build artifacts are compiled in `docs/` and deployed using GitHub Pages once merged to the master branch
    - Component CSS is compiled to `dist/`
- Export the new component in `index.js`
- Consult the storybook documentation
