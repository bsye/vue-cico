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
|**disabledDateRanges**|`Array of Objects`|`[{}]`| Let's you pass ranges of dates to disable. Every object has to have a start parameter of type Date. If no end parameter is specified, every date after the start will be disabled. Es. `[{ start: new Date('2023-02-12')}]` will disable all dates after 2023-02-12 Es2. `[{ start: new Date('2023-02-12'), end: new Date('2023-02-16')}]` will disable all dates in between 2023-02-12 and 2023-02-16 Es3. `[{ start: new Date('2023-02-12'), end: new Date('2023-02-16')}, { start: new Date('2023-02-20'), end: new Date('2023-02-25')}]` will disable all dates between 2023-02-12 and 2023-02-16 and also all the dates in between 2023-02-20 and 2023-02-25. For sanity reasons, ranges in which the end date is before the start date are scraped and not considered.
|**disabledDaysOfWeek**|`Array`|`[]`|Let's you set days of the weeks that are disabled by name. es. ['monday', 'tuesday']
|**displayClearButton**|`Boolean`|`true`|Hide or not the clear button
|**eventFormat**|`String`|`YYYY-MM-DD`|The date format of the events.
|**checkinFieldFormat**|`[String]`|`'ddd DD MMM'`| Checkin date field format. If unset, dynamically changes based on input size to avoid showing scrollbars.
|**checkoutFieldFormat**|`[String]`|`'ddd DD MMM'`| Checkout date field format. If unset, dynamically changes based on input size to avoid showing scrollbars.
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
    stayLongerOne: 'Want to stay for longer?',
    checkIn: 'Select a check-in date',
    checkOut: 'Select a checkout date',
    included: 'included',
    extraNight: 'extra night(s)',
    yourDates: 'Your travel dates',
    nightsIncluded: 'Night(s) included',
  },
  activity: {
    calendar: {
      checkIn: 'Check-in',
      checkOut: 'Check-out',
    },
    filter: {
      checkIn: 'Check-in',
      checkOut: 'Check-out',
      action: 'Add dates',
      night: 'night',
      nights: 'nights',
      clear: 'Clear',
    },
  },
}
```

## Named Slots
| Name |
|---|
| before-call-to-action |
| before-calendar |
| after-calendar |

## Events

| Name | Params | Description |
|--|--|--|
|`interface`| `Object` | This is emitted on created. it emits an object containing interface functions that can be used to change the state of the component from outside. The functions currently emitted inside the passed objects are: showDatepicker(), hideDatepicker(), clearSelection()
|`check-in-selected`| `Date` | Emitted every time a new check in date is selected with the new date as payload.
|`check-out-selected`| `Date` | Emitted every time a new check out date is selected with the new date as payload.
|`period-selected`| `Date` | Emitted every time both check-in and check-out date are selected
|`search-mobile-triggered`| `null` | Emitted every time you click on the search button on mobile
|`enter-day`| `Date` | sent when a day is hovered
|`day-clicked`| `Date` | sent when a day is clicked
|`enter-month`| `String` | sent when a day of a month is hovered
|`clear-selection`| `null` | sent when the clear selection button is clicked or check-in and check-out are cleared for unavailability
|`clear-selection-mobile`| `null` | sent when the clear selection button is clicked on mobile. It serves as a way of refreshing the view without any buttons.
|`cico-closed`| `null` | sent when the picker is closed
|`cico-opened`| `null` | sent when the picker is opened
|`previous-month-rendered`| `String` | sent when the previous month button is clicked, returns the month
|`next-month-rendered`| `String` | sent when the next month button is clicked, returns the month
