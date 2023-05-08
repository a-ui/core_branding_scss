# Antwerp Core Branding

This project contains Antwerp's digital styling and styling guidelines. It is the starting point to style your app or website for the city of Antwerp.

## Getting started

In its simplest form you can just include the following line in the `<head>` section of your app.

```
<link rel="stylesheet" href="https://cdn.antwerpen.be/core_branding_scss/6.3.0/main.min.css">
```

You can even import it directly in your (S)CSS:

```
@import url("https://cdn.antwerpen.be/core_branding_scss/6.3.0/main.min.css");
```

> We adopt semantic versioning. If you want to use another version of the Core Branding you can do so by adjusting the version in the URL address. See the changelog for all available versions.

You can also install everything with npm:

npm install @a-ui/core --save

## Development

### Prerequisites

In order to run this project and see all available components, you'll need to have [NodeJS](https://nodejs.org) and [Gulp](http://gulpjs.com) installed.

### Installing

Go to the root of this project and run the following command in your command line:

```
npm install
```

### Local development

Run the following command in your command line:

```
npm start
```

### Building

Run the following command in your command line:

```
npm run build
```

### Creating your own customized build

Since this styling kit is built upon CSS custom properties, you can simply override the defaults by specifying your own properties. No need to rebuild any code!

## Contributing

Contact us via [branding@stad.antwerpen.be](mailto:branding@stad.antwerpen.be).

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/a-ui/core_branding_scss/tags).

## Authors

* **Jeroen Collier** - *Art director, lead design*
* **Sander Geenen** - *Initial work, developer*
* **Jasper Van Proeyen** - *Initial work, lead developer*

See also the list of [contributors](https://github.com/a-ui/core_branding_scss/contributors) who participated in this project.

## License

This project is licensed under a modified version of the MIT license. See the [LICENSE.md](LICENSE.md) file for details.
