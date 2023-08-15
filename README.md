# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

***
# UI-Component-Template

## ☝️ What is a component-template?

The [`component-template`] delivers a *practical* and *structured* process of how to deal with your **components** in your **frontend**. 

### ⚠️ Alert:
* Until now this component-template is only compatible with the technologies **Svelte** and **Tailwind CSS**.


* It needs to follow the fix structure of the **Metholody Atomic Design**.

## 👍 Why use the component-template?
* Maximaze the reuse of your established components and write less code


* Shared language and process with components because of fixed rules of the categories for components


* Provides a modern and manageable frontend to show the visual side of your components


* Faster component tracking with the implemented search tool in the frontend


## 🔧 How to install the component-template?

Download the project **component-template** from the [`npm Registry`]. (link?)

```
$ npm install component-template
```


Beneath the *lib* folder make a folder **component-template** that contains further folders with the Atomic Design categories. This listed structure is shown below.

```
* lib
** component-template
*** atoms
*** molecules
*** organism
*** templates
*** pages
```

After that insert your build **components** into the *fitting* category of the Atomic Design Methodology.

Side Note:
- If u want to show dynamic content or no content then use **caption** that will fill the component with the Name of the component.

## 🔌 Which configurations for the component-template are needed?


* Open localhost:.../template/ for access to the Interface of the component-template.


## 📌 How to use the component-template?

1 Each component lies in its own svelte file

2 Choose suitable Naming of your components 

3 Reuse your components with import

4 Pass props or use *each iterations* for the usage of dynamic data with your components
 