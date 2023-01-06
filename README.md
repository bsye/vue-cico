A responsive date range picker for Vue.js that displays the number of nights selected and allow several useful options like custom check-in/check-out rules, localisation support and more.

![demo gif](https://gitlab.production.smartbox.com/npm/vue-cico/-/raw/main/demo.gif?inline=false)

## Installation

#### NPM

```bash
npm install git+ssh://git@gitlab.production.smartbox.com:npm/vue-cico.git
```

#### CSS

There are two styles already set up, which you can select by adding the class to the component:

Search Page: `.cico__style-search`
Landing Page: `.cico__style-landing`

The style is only related to the appearance of the inputs.

To make it work with different colors you need to override the default css variables found in the .css__root class
```css
import 'vue-cico/dist/vueCico.css'

div.cico__root {
    --primary-color: #{$primary-color} //my color variable;
}
```

#### Javascript

```javascript
import Cico from 'vue-cico'

export default {
  components: {
    Cico,
  },
}
```

```html
<Cico />
```


## Props/Options

| Name | Type | Default | Description |
|--|--|--|--|
|**checkInDate**|`[Date, null]`|`null`|It sets a default check-in date.
|**checkOutDate**|`[Date, null]`|`null`|It sets a default check-out date.
|**closeOnClickOutside**|`Boolean`|`true`|Sets whether the datepicker should close when you click outside of it.
|**disabledDates**|`Array`|`[]`|Let's you pass an array of dates to disable. If the check-in date matches one of the disable dates, it resets the state of the picker, if the check-out matches then it only clear the check-out date
|**disabledDaysOfWeek**|`Array`|`[]`|Let's you set days of the weeks that are disabled by name. es. ['monday', 'tuesday']
|**displayClearButton**|`Boolean`|`true`|Hide or not the clear button
|**outputFormat**|`String`|`YYYY-MM-DD`|The date format of the events.
|**fieldsFormat**|`[Object, String]`|`{ mobile: 'DD MMM' desktop: 'ddd DD MMM' }`|The input fields format, if the type is string then it applies it for desktop and mobile, otherwise you can pass an object with different formats as in the defaults.
|**i18n**|`Object`|`i18nDefaults.json`|If it isn't set, it defaults to the english translation file present in the project
|**minDate**|`[Date, String]`|`new Date()`|Minimum date for the check-in/check.out
|**maxDate**|`[Date, String]`|`Infinity`|Maximum date for the check-in/check.out
|**maxNights**|`[Number, null],`|`null)`|It sets the maximum of nights that can be selected
|**minNights**|`Number`|`1`|It sets the minimum of nights that can be selected
|**position**|`String`|`bottom`|Set the position of the datepicker, accepted values are: bottom, top, left, right
|**prices**|`Array`|`[]`|It lets you set prices for the dates. Es. `[{ date: '2022-01-01', price: '120' }, { date: '2022-01-02', price: '140'}]`. Prices are applied only to valid dates.


## i18n Defaults:

```js
export default {
  cta: {
    select: 'Select',
  },
  date: {
    weekdays: {
      sun: 'Sunday',
      mon: 'Monday',
      tue: 'Tuesday',
      wed: 'Wednesday',
      thu: 'Thursday',
      fri: 'Friday',
      sat: 'Saturday',
      short: {
        sun: 'Sun.',
        mon: 'Mon.',
        tue: 'Tue.',
        wed: 'Wed.',
        thu: 'Thu.',
        fri: 'Fri.',
        sat: 'Sat.',
      },
    },
    months: {
      1: 'January',
      2: 'February',
      3: 'March',
      4: 'April',
      5: 'May',
      6: 'June',
      7: 'July',
      8: 'August',
      9: 'September',
      10: 'October',
      11: 'November',
      12: 'December',
    },
  },
  checkInCheckOut: {
    addDate: 'Add dates',
    whereToGo: 'Where to?',
    anywhere: 'Anywhere',
    stayLongerOne: 'Want to stay for longer?',
    addExtraNights: 'Add extra nights in the calendar!',
    checkIn: 'Select a check-in date',
    checkOut: 'Select a checkout date',
    included: 'included',
    extraNight: 'extra night(s)',
    yourDates: 'Your travel dates',
    selectCheckInCheckOut:
      'Choose a check-in and check-out date to make the most of your getaway and really relax by enjoying an extended stay!',
    people: 'People',
    nightsIncluded: 'Night(s) included',
    nightsResults: '"Showing results for a # night stay ( 1 included, 1 extra)"',
    upgraded: "You've upgraded your stay by adding more nights",
    changeDatesOne: 'Change your dates to see results included in your box',
    changeDatesTwo: 'Change dates',
    clear: 'Clear',
    extendedStay: 'Extend your stay',
    mobileMinNights: 'Your experience is for a minimum of %boxMinNights% nights.',
  },
  activity: {
    calendar: {
      title: 'Select a date to make a booking',
      titleQCTerme: 'Select your date',
      mobileTitle: 'Your arrival date',
      numberOfNight: '"Your stay is for %number% night(s)"',
      upSell: 'You can add extra nights or rooms later',
      error: 'The selected partner has no availability at this time. Please choose another partner.',
      available: 'Available',
      provisional: 'On request',
      checkIn: 'Check-in',
      checkOut: 'Check-out',
      instantBookingRibbon:
        'This Hotel is <span class="availability-ribbon__instant-booking">%symbol%Instantly Bookable</span>',
      onRequestBookingRibbon: "This hotel is available by request only. They'll get back to you within 24 hours.",
    },
    filter: {
      total: '"Your search: %number% stays"',
      totalMobile: '"%number% results"',
      text: 'Where would you like to go?',
      textPopup: 'Search',
      textMobileNote: 'Here you can search for an experience or a location',
      regionAndDepartment: 'Country or county',
      regionMobileListTitle: 'Choose a destination',
      departmentMobileListTitle: 'Choose a destination',
      locatorRegionCountryListTitle: '"Country, county"',
      locatorNoDepartmentOrRegionSelected: 'No country/county selected',
      locatorDepartmentListTitle: 'Province',
      region: 'County',
      department: 'City or town',
      date: 'Arrival',
      noResult: 'We have not found any results matching your search',
      noResultWithOOB:
        'Your current gift box does not contain any experiences corresponding to your search. But good news, we found below plenty of matching available experiences for you from our range! You can book any of these for free with your current gift voucher.',
      anyPlace: 'Search City or Region',
      anyDate: 'Any date',
      whereTo: 'Where to?',
      when: 'When?',
      checkIn: 'Check-in',
      checkOut: 'Check-out',
      ctaInfo: 'Want to stay for longer? Add extra nights in the calendar!',
      ctaCI: 'Select a check-in date',
      ctaCO: 'Select a checkout date',
      ctaDates: 'Your travel dates',
      action: 'Add dates',
      included: 'included',
      nightIncludedCICO: 'night included',
      nightsIncludedCICO: 'nights included',
      night: 'night',
      nights: 'nights',
      clear: 'Clear',
      extraNight: 'extra night',
      extraNights: 'extra nights',
      boxMinNights: 'Your experience is for a minimum of',
      currentLocation: 'Use current location',
      searching: 'Searching...',
    },
  },
}
```


## Events

| Name | Params | Description |
|--|--|--|
|`check-in-selected`| `Date` | Emitted every time a new check in date is selected with the new date as payload.
|`check-out-selected`| `Date` | Emitted every time a new check out date is selected with the new date as payload.
|`period-selected`| `Date` | Emitted every time both check-in and check-out date are selected
|`search-mobile-triggered`| `null` | Emitted every time you click on the search button on mobile
|`enter-day`| `Date` | sent when a day is hovered
|`day-clicked`| `Date` | sent when a day is clicked
|`enter-month`| `String` | sent when a day of a month is hovered
|`clear-selection`| `null` | sent when the clear selection button is clicked or check-in and check-out are cleared for unavailability
|`cico-closed`| `null` | sent when the picker is closed
|`cico-opened`| `null` | sent when the picker is opened
|`previous-month-rendered`| `String` | sent when the previous month button is clicked, returns the month
|`next-month-rendered`| `String` | sent when the next month button is clicked, returns the month
