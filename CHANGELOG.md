# Changelog


## Unreleased


## [6.2.1] - 2023-02-10

### Changed
- Tweaked the design of the alert
- Tweaked the accordion design
- Optimized the accessibility of the pagination

### Fixed
- Fixed disappearing borders of fixed sortable table columns
- Fixed an icon overlay issue in scrollable tables
- Fixed the accordion not working properly
- Fixed a design issue where the pagination's back button would not overlap correctly


## [6.2.0] - 2023-01-16

### Added
- Added new Instagram color
- Added new TikTok icon with accompanying color

### Changed
- Tweaked the design of the definition list
- Changed the Instagram button design
- Tweaked the design of the datepicker

### Fixed
- Fixed an issue where icon buttons weren't vertically aligned correctly
- Fixed an issue where table cells were sometimes 1px too high
- Fixed the indeterminate styling of radio buttons


## [6.1.1] - 2022-12-09

### Fixed
- Fixed an issue where the left icon of small and large buttons wasn't positioned correctly


## [6.1.0] - 2022-10-10

### Added
- Added custom properties for headings
- Added .o-article list margin custom property

### Changed
- Changed all heading sizes
- Changed font families for h4, h5 and h6
- Changed .u-container margin
- Removed .has-base-font as it isn't relevant anymore
- Changed the step indicator syntax as it was read incorrectly by screenreaders

### Fixed
- Fixed the aria-expanded documentation for accordions



## [6.0.0] - 2022-09-01

### General

#### Added
- Added CSS properties for color palette, grayscale colors, spacers, components, etc. to allow customization and theming

#### Changed
- [BREAKING] Updated and renamed color palette SASS variables
- [BREAKING] Removed SASS variables of warm gray colors
- [BREAKING] Updated and renamed SASS variables of grayscale colors
- [BREAKING] Moved various SASS variables from global variables stylesheet to corresponding component stylesheets
- [BREAKING] Replaced all component-related SASS variables to CSS properties.

### Tooling

#### Changed
- Replaced sass-lint by stylelint

### Helpers

#### Changed
- [BREAKING] Changed various CSS classes:
  - Changed `.u-margin-*-xx` to `.u-margin-*-3xl`
  - Changed `.u-margin-*-lg` to `.u-margin-*-xl`
  - Changed `.u-margin-*-md` to `.u-margin-*-l`
  - Changed `.u-margin-*-sm` to `.u-margin-*-s`

### Components

#### Alert

##### Added
- Added inline variant

##### Changed
- Implemented new design changes
- [BREAKING] Replaced SASS variables with CSS properties

#### Avatar

##### Added
- Added round variant for every avatar

##### Changed
- Implemented new design changes
- [BREAKING] Replaced SASS variables with CSS properties
- [BREAKING] Changed various CSS classes:
  - Changed `.a-avatar--small` to `.a-avatar--s`
  - Changed `.a-avatar--medium` to `.a-avatar--l`
  - Changed `.a-avatar--large` to `.a-avatar--xl`

#### Accordion

##### Added
- Added round variant for every avatar

##### Changed
- Implemented new design changes
- [BREAKING] Replaced SASS variables with CSS properties
- [BREAKING] Changed various CSS classes:
  - Removed `.has-margins`
- [BREAKING] `.is-open` class to open/close accordion is replaced by `aria-expanded` attribute

#### Badge

##### Added
- Added outlined and transparent variant

##### Changed
- Implemented new design changes
- [BREAKING] Replaced SASS variables with CSS properties
- [BREAKING] Removed `.a-badge--success`, a-badge--warning` and `a-badge--danger`

#### Button

##### Added
- Added button with avatar

##### Changed
- [BREAKING] Removed official button
- [BREAKING] Changed various CSS classes:
  - Removed `.a-button--transparent`
  - Removed `.a-button--tiny`
  - Removed `.a-button-transparent`
  - Changed `.a-button-outline` to `.a-button.a-button--outlined`
  - Changed `.a-button-negative` to `.a-button.a-button--text`
  - Changed `.a-button--default` to `.a-button--neutral`
  - Changed `.a-button--small` to `.a-button--s`
  - Changed `.a-button--large` to `.a-button--l`

#### Card

##### Changed
- [BREAKING] Removed contact molecule from card header

#### Contact

##### Changed
- [BREAKING] Removed molecule

#### Datepicker

##### Changed
- Implemented new design changes
- [BREAKING] Replaced SASS variables with CSS properties
- [BREAKING] Changed various CSS classes

#### Flyout

##### Added
- Added classes to position flyout above button/input field

##### Changed
- [BREAKING] Replaced SASS variables with CSS properties
- [BREAKING] Changed various CSS classes:
  - Removed `.m-flyout--lg`
  - Removed `.m-flyout--md`
  - Removed `.m-flyout.opens-above`
  - Changed `.m-flyout--sm` to `.m-flyout--s`
  - Replaced `.m-flyout--right` to `.m-flyout--bottom-right`

#### Gallery

##### Changed
- [BREAKING] Removed molecule

#### Header

##### Changed
- [BREAKING] `.o-header__button` requires additional classes: `a-button--text a-button--neutral`

#### Input

##### Added
- Extended input field with character counter

##### Changed
- Implemented new design changes
- [BREAKING] Replaced SASS variables with CSS properties
- [BREAKING] Changed various CSS classes:
  - Changed `.a-input--small` to `.a-input--s`
  - Changed `.a-input--large` to `.a-input--l`
  - Changed `.has-addon` to `.has-addon-left` and `.has-addon-right`
- [BREAKING] Changed the way of adding a description, success and error message to an input field
- [BREAKING] Removed warning messages

#### Label

##### Changed
- Implemented new design changes
- [BREAKING] Replaced SASS variables with CSS properties
- [BREAKING] Changed various CSS classes:
  - Removed `.a-label--secondary`

#### List

##### Added
- Added flushed list variant with no top and bottom border
- Added checkbox list
- Added avatar list

##### Changed
- Implemented new design changes
- [BREAKING] Replaced SASS variables with CSS properties
- [BREAKING] Changed various CSS classes:
  - Changed `.a-list--reset` to `.u-list-reset`
  - Changed `.a-list--unstyled` to `.u-list-unstyled`
  - Removed `.a-list--primary`
  - Removed `.a-list--flattened`
  - Removed `.has-icon-left` and `.has-icon-right`
- [BREAKING] Provide list styles through class selectors instead of element selectors

#### Modal

##### Changed
- [BREAKING] Replaced SASS variables by CSS properties
- [BREAKING] Changed `.m-modal--large` to `.m-modal--l`

#### Navigation

##### Added
- Added horizontal scrollable variant of tab navigation

##### Changed
- Implemented new design changes
- [BREAKING] Replaced SASS variables by CSS properties
- [BREAKING] Changed various CSS classes:
  - Removed `.m-nav-list--left`
  - Removed `.m-nav-tabs--left`
  - Removed `.m-nav-tabs--right`
- [BREAKING] `<ul>` element must be wrapped with an `<nav>` element

#### Pagination

##### Changed
- Set outlined variant as default
- [BREAKING] Changed various CSS classes:
  - Removed `.m-pagination--outline`
  - Removed `.m-pagination--large`
  - Changed `.m-pagination--small` to `.m-pagination--s`

#### Progress

##### Added
- Added small and large variant
- Added progress variant with steps

##### Changed
- Implemented new design changes
- [BREAKING] Replaced SASS variables with CSS properties
- [BREAKING] Removed progress variant with tooltip
- [BREAKING] Changed from molecule to atom

#### Range slider

##### Changed
- [BREAKING] Removed range slider variant with tooltip
- [BREAKING] Changed from molecule to atom

#### Selectable list

##### Changed
- [BREAKING] Selectable list styling got removed

#### Spinner

##### Added
- Extended spinner with loading message

##### Changed
- [BREAKING] Changed various CSS classes:
  - Changed `.a-spinner--small` to `.a-spinner--s`
  - Changed `.a-spinner--large` to `.a-spinner--l`

#### Step indicator

##### Added
- Added step indicator with clickable steps

##### Changed
- Implemented new design changes
- [BREAKING] Replaced SASS variables with CSS properties
- [BREAKING] An incompleted step should have `.is-incompleted` as classname

#### Switch

##### Added
- Added variant with I/O labels

##### Changed
- Implemented new design changes
- [BREAKING] Replaced SASS variables by CSS properties
- [BREAKING] Changed various CSS classes.

##### Changed
- Implemented new design changes
- [BREAKING] Replaced SASS variables with CSS properties

#### Table

##### Added
- Added helper classes to set fixed columns and drop shadows
- Added `.is-condensed` to decrease padding in table cell

##### Changed
- Implemented new design changes
- [BREAKING] Replaced SASS variables with CSS properties
- [BREAKING] Changed various CSS classes:
  - Changed `.a-table--small` to `.a-table--s`
  - Changed `.a-table__wrapper-responsive` to `.a-table-scrollable-wrapper`
  - Changed `.has-no-padding` to `.is-collapsed`

#### Tag

##### Changed
- Implemented new design changes
- [BREAKING] Replaced SASS variables by CSS properties
- [BREAKING] Changed various CSS classes.

#### Tag list

##### Changed
- [BREAKING] `m-tag` should be wrapper in `o-tag-list__item`.

#### Timepicker

##### Changed
- [BREAKING] Timepicker styling got removed

#### Toggle

##### Changed
- [BREAKING] Changed various CSS classes:
  - Changed `.a-toggle--tiny` to `.a-toggle--xs`
  - Changed `.a-toggle--small` to `.a-toggle--s`
  - Changed `.a-toggle--large` to `.a-toggle--l`

#### Toggle

##### Added
- Added inverted variant

##### Changed
- Implemented new design changes
- [BREAKING] Replaced SASS variables with CSS properties
- [BREAKING] Changed various CSS classes:
  - Removed `.a-tooltip--primary`
  - Removed `.a-tooltip--secondary`

#### Upload

##### Changed
- Updated visual appearance when focused
- [BREAKING] Replaced SASS variables by CSS properties
- [BREAKING] Remove progress bar


## [5.0.2] - 2022-02-04

### Changed
- Improved scrolling in a code block

### Fixed
- Fixed a wrong icon path in the documentation


## [5.0.1] - 2021-06-14
### Fixed
- Fixed an issue where the leaflet component would collapse


## [5.0.0] - 2021-05-31
### Added
- [BREAKING] Replaced the FontAwesome icons with an all new Streamline icon set
- Added `$spacer-sm` related classes
- Added `$switch-label` variable
- Added `$box-shadow-top` and `$box-shadow-top` variables
- Added styling for readonly inputs
- Added warm grays
- Updated some variable names

### Changed
- [BREAKING] Updated many colors in the color palette
- [BREAKING] Updated avatar to work with the new icon library
- [BREAKING] Updated copyright to work with the new icon library
- [BREAKING] Updated slideshow to work with the new icon library
- [BREAKING] Updated the syntax of the toggle component to be more accessible
- [BREAKING] Updated the syntax of the switch component to be more accessible
- [BREAKING] Moved navigation menu import to organisms
- [BREAKING] Fixed the way fallback fonts behave
- Aligned the look of disabled components
- Optimized fonts to be more future-proof
- Changed syntax of slideshow

### Fixed
- Fixed a header component accessibility issue
- Fixed the appearance of the small select in Firefox

### Removed
- [BREAKING] Removed cookie consent component
- [BREAKING] Removed all Google+ related things


## [4.3.1] - 2021-01-07

### Fixed
- Fixed extra accessibility issues for progress component
- Fixed extra accessibility issues for copyright component
- Fixed extra accessibility issues for slideshow component
- Fixed extra accessibility issues for flyout component
- Fixed extra accessibility issues for datepicker component


## [4.3.0] - 2020-12-17

### Added
- Updated components and documentation with many accessibility improvements

### Changed
- Improved overal accessibility

### Fixed
- Replaced the small caps font with the right one
- Removed obsolete `@use` rules that caused problems when importing in external libraries
- Fixed avatar images not loading in styleguide


## [4.2.2] - 2020-09-22

### Fixed
- Fixed a margin issue when an article organism would contain multiple nested levels


## [4.2.1] - 2020-09-16

### Fixed
- Fixed not all files being available in npm


## [4.2.0] - 2020-09-16 - BORKED
### Added
- Added an article organism that automatically styles basic html text elements

### Fixed
- Fixed an issue with the outline of a flyout
- Fixed an issue where the default settings of the menu organism could not be overwritten


## [4.1.1] - 2020-03-02
### Fixed
- Fixed an issue where checkboxes and radio buttons could move out of bounds


## [4.1.0] - 2020-02-21
### Added
- Added a new navigation component


## [4.0.0] - 2019-09-21
### Added
- Added a new type of button that can only be used in the header
- Added the `$header-btn-bg` and `$header-btn-color` variables
- Added the `$legend-color` and `$legend-size` variables
- Added the `$switch-disabled-border` and `$switch-disabled-bg` variables
- Added the `$switch-disabled-label` variable
- Added the `$upload-disabled-color`, `$upload-disabled-bg` and `$upload-disabled-border` variables
- Added miscellaneous button variables
- Added ARIA-labels to empty buttons and anchors

### Changed
- [BREAKING] Updated the core branding to meet the WCAG 2.1 AA guidelines
- [BREAKING] Changed the appearance and behaviour of the A logo
- [BREAKING] Changed the behaviour of the `.u-wrapper` class
- [BREAKING] Changed the behaviour of the header
- [BREAKING] Replaced the function of the `$switch-disabled` variable (The previous one is moved to `$switch-disabled-label`)
- [BREAKING] Updated the syntax of the avatar component
- [BREAKING] Updated the syntax of icon and social buttons
- [BREAKING] Updated the syntax of lists with icons
- [BREAKING] Updated the syntax of the table component
- [BREAKING] Updated the syntax of the tag components with buttons in it
- [BREAKING] Updated the syntax of the toggle component
- [BREAKING] Updated the syntax of the alerts
- [BREAKING] Updated the syntax of the button list component
- [BREAKING] Updated the syntax of the datepicker component
- [BREAKING] Updated the syntax of the pagination component
- [BREAKING] Updated the syntax of the upload component
- [BREAKING] Updated the syntax of the header component
- [BREAKING] Updated the syntax of the tag list component
- [BREAKING] Added some letterspacing to the label component
- [BREAKING] Updated the syntax for all icons: `<span>` instead of the incorrect `<i>`
- changed the behaviour of the a element
- Made `$grey-dark` slightly darker
- Made the background of the kbd element darker
- Updated the appearance of the legend element
- Updated the appearance of both enabled and disabled form elements
- Made the background of avatars darker
- Updated the appearance of the badge component
- Updated the appearance of most button components
- Made the border of the different input states darker
- Updated the appearance of the label component
- Updated the appearance of the switch component
- Updated the appearance of the datepicker component
- Updated the appearance of the navigation components
- Updated the appearance of the upload component
- Updated the documentation for the collapsible list component
- Updated the appearance of the tag component

### Removed
- [BREAKING] Removed the `$font-size-ti` and `$font-size-xs` variables
- [BREAKING] Removed the `$font-size-ti` and `$font-size-xs` variables
- [BREAKING] Removed the ability to make the header fixed
- [BREAKING] Removed the negative success, warning and danger buttons
- Removed font-smoothing as it had unexpected results in different browsers


## [3.2.2] - 2019-06-03
### Changed
- Updated Facebook color


## [3.2.1] - 2019-05-10
### Fixed
- Fixed cookie consent not hiding when consented


## [3.2.0] - 2019-04-08
### Added
- Added vertical button group

### Fixed
- Fixed a small layout issue in (horizontal) button groups


## [3.1.0] - 2019-02-07
### Added
- Added support for multiple lines of text in buttons


## [3.0.3] - 2018-11-06
### Fixed
- Optimized the layout of the search filter component a bit more


## [3.0.2] - 2018-10-25
### Fixed
- Fixed an issue where the upload zone would break out of its boundaries
- Optimized the layout of the search filter component


## [3.0.1] - 2018-10-08
### Fixed
- Added the AUI-kit source files to the build folder


## [3.0.0] - 2018-10-08
### Changed
- [BREAKING] Added AUI-kit as part of the core branding


## [2.3.0] - 2018-08-16
### Changed
- Changed the behaviour of focused elements
- Changed the overall focus color
- Changed the input placeholder to be WCAG 2.0 compatible

### Fixed
- Fixed checkboxes and radio buttons not being focusable


## [2.2.0] - 2018-07-23
### Changed
- Changed the appearance of the disabled button

### Added
- Added breakpoints for XL screens
- Added a disabled state for the upload molecule
- Added a getting started guide in the documentation
- Added an easy TOC in the documentation

## [2.1.1] - 2018-04-26
### Fixed
- Fixed an issue where the `:not` selector wasn't rendered correctly


## [2.1.0] - 2018-04-26
### Fixed
- Added a missing part of the Antwerp font EULA

### Added
- Added small and large size variants for pagination


## [2.0.4] - 2018-04-17
### Fixed
- Fixed an issue where tags would display incorrectly in smaller containers
- Fixed an issue in Firefox where the responsive table wrapper would break out the flexbox setup

### Added
- Added full width buttons to the docs


## [2.0.3] - 2018-03-30
### Added
- Added option to also use buttons in navigation tabs instead of only anchors


## [2.0.2] - 2018-03-16
### Fixed
- Fixed an issue where alignment classes weren't working in table headings and table cells


## [2.0.1] - 2018-01-22
### Fixed
- Fixed next link in pagination is now clickable
- Fixed pagination cursor is now also a pointer in Chrome and Firefox


## [2.0.0] - 2018-01-17
### Added
- Added disabled state to pagination, list and tab navigation

### Changed
- [BREAKING] Changed the markup for pagination
- [BREAKING] Changed the markup for avatars
- [BREAKING] Changed the markup for list and tab navigation


## [1.3.1] - 2017-12-06
### Fixed
- Fixed a typo which prevented the 'Antwerpen' font from loading


## [1.3.0] - 2017-12-04
### Added
- Added a collapsible list
- Added table cell padding options
- Added a hover option for table rows
- Added an option to use the base font for a heading
- Added small and large size variants for input fields
- Added updated versions of the Antwerpen web fonts

### Changed
- Made `.a-input` less specific for easier overriding
- Made input fields more configurable

### Fixed
- Fixed nested flyouts from opening all when the highest in order is opened
- Fixed the repsonsive 'max' variables
- Fixed a placeholder rendering issue
- Fixed an issue where the `.u-container` would collapse


## [1.2.1] - 2017-11-28
### Fixed
- Fixed the color of placeholders that was lighter in Firefox


## [1.2.0] - 2017-11-13
### Added
- Added the possibility to import custom Antwerp fonts only
- Added local options for the custom Antwerp fonts
- Added an option for the flyout's dropshadow placement
- Added option to use buttons in navigation lists instead of anchors
- Added an inline version of the select component

### Fixed
- Fixed default border radius issue on buttons in Google Chrome (62)
- Fixed a datepicker layout issue
- Fixed an issue where the 'uncompressed' version of the core branding was also compressed


## [1.1.0] - 2017-10-11
### Added
- Added a small and large variant of the spinner
- Added a changelog

### Changed
- Improved the accessibility of the input placeholder
- Made the spinner spin a bit faster
- Changed the way NPM handles the package


## [1.0.0] - 2017-06-19
- Initial release.


[6.2.1]: https://github.com/a-ui/core_branding_scss/tree/v6.2.1
[6.2.0]: https://github.com/a-ui/core_branding_scss/tree/v6.2.0
[6.1.1]: https://github.com/a-ui/core_branding_scss/tree/v6.1.1
[6.1.0]: https://github.com/a-ui/core_branding_scss/tree/v6.1.0
[6.0.0]: https://github.com/a-ui/core_branding_scss/tree/v6.0.0
[5.0.2]: https://github.com/a-ui/core_branding_scss/tree/v5.0.2
[5.0.1]: https://github.com/a-ui/core_branding_scss/tree/v5.0.1
[5.0.0]: https://github.com/a-ui/core_branding_scss/tree/v5.0.0
[4.3.1]: https://github.com/a-ui/core_branding_scss/tree/v4.3.1
[4.3.0]: https://github.com/a-ui/core_branding_scss/tree/v4.3.0
[4.2.2]: https://github.com/a-ui/core_branding_scss/tree/v4.2.2
[4.2.1]: https://github.com/a-ui/core_branding_scss/tree/v4.2.1
[4.2.0]: https://github.com/a-ui/core_branding_scss/tree/v4.2.0
[4.1.1]: https://github.com/a-ui/core_branding_scss/tree/v4.1.1
[4.1.0]: https://github.com/a-ui/core_branding_scss/tree/v4.1.0
[4.0.0]: https://github.com/a-ui/core_branding_scss/tree/v4.0.0
[3.2.2]: https://github.com/a-ui/core_branding_scss/tree/v3.2.2
[3.2.1]: https://github.com/a-ui/core_branding_scss/tree/v3.2.1
[3.2.0]: https://github.com/a-ui/core_branding_scss/tree/v3.2.0
[3.1.0]: https://github.com/a-ui/core_branding_scss/tree/v3.1.0
[3.0.3]: https://github.com/a-ui/core_branding_scss/tree/v3.0.3
[3.0.2]: https://github.com/a-ui/core_branding_scss/tree/v3.0.2
[3.0.1]: https://github.com/a-ui/core_branding_scss/tree/v3.0.1
[3.0.0]: https://github.com/a-ui/core_branding_scss/tree/v3.0.0
[2.3.0]: https://github.com/a-ui/core_branding_scss/tree/v2.3.0
[2.2.0]: https://github.com/a-ui/core_branding_scss/tree/v2.2.0
[2.1.1]: https://github.com/a-ui/core_branding_scss/tree/v2.1.1
[2.1.0]: https://github.com/a-ui/core_branding_scss/tree/v2.1.0
[2.0.4]: https://github.com/a-ui/core_branding_scss/tree/v2.0.4
[2.0.3]: https://github.com/a-ui/core_branding_scss/tree/v2.0.3
[2.0.2]: https://github.com/a-ui/core_branding_scss/tree/v2.0.2
[2.0.1]: https://github.com/a-ui/core_branding_scss/tree/v2.0.1
[2.0.0]: https://github.com/a-ui/core_branding_scss/tree/v2.0.0
[1.3.1]: https://github.com/a-ui/core_branding_scss/tree/v1.3.1
[1.3.0]: https://github.com/a-ui/core_branding_scss/tree/v1.3.0
[1.2.1]: https://github.com/a-ui/core_branding_scss/tree/v1.2.1
[1.2.0]: https://github.com/a-ui/core_branding_scss/tree/v1.2.0
[1.1.0]: https://github.com/a-ui/core_branding_scss/tree/v1.1.0
[1.0.0]: https://github.com/a-ui/core_branding_scss/tree/v1.0.0
