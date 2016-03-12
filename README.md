### react-tag-select

### New notes
I had to remove my call to `require('../scss/default.scss');` in my js entry as it's not conveniently possible to transpile a directory of js files and pull out the css at the same time as the ExtractTextPlugin works when bundling. Now my build step for distribution on npm will be 2 separate tasks. One compiling scss and copying and the other transpiling and copying the js files.

*** This repo is a mash up of [react-select](https://github.com/JedWatson/react-select) and [react-tags](https://github.com/prakhar1989/react-tags). I've taken the styles from react-select and the functionality of react-tags.

[![NPM](https://nodei.co/npm/react-tag-select.png?downloads=true)](https://www.npmjs.com/package/react-tag-select)

I've added some things and removed others from the repo's I started from to suit my needs. Full credit to them for open sourcing their fantastic work. I'm working fast so it's possible that I'll make this my own but I just need a tag component that suits my needs without bloat (react-tags had react-dnd depends). I also just want to experiment with publishing a lib to npm.

### Features
- Autocomplete based on a suggestion list
- Keyboard friendly and mouse support

### Installation
The preferred way of using the component is via NPM

```
npm install --save react-tag-select
```

### Usage

Here's a sample implementation that initializes the component with a list of initial `tags` and `suggestions` list. Apart from this, there are multiple events, handlers for which need to be set

```javascript
// Set up test data
var Countries = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas"
      ,"Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands"
      ,"Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica"
      ,"Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea"
      ,"Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana"
      ,"Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India"
      ,"Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia"
      ,"Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania"
      ,"Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia"
      ,"New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal"
      ,"Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles"
      ,"Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan"
      ,"Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia"
      ,"Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States of America","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)"
      ,"Yemen","Zambia","Zimbabwe"];

var Tags = ReactTagSelect;

var App = React.createClass({
    getInitialState: function() {
        return {
            tags: [ {id: 1, text: "Thailand"}, {id: 2, text: "India"} ],
            suggestions: Countries
        }
    },
    handleDelete: function(i) {
        var tags = this.state.tags;
        tags.splice(i, 1);
        this.setState({tags: tags});
    },
    handleAddition: function(tag) {
        var tags = this.state.tags;
        tags.push({
            id: tags.length + 1,
            text: tag
        });
        this.setState({tags: tags});
    },
    render: function() {
        var tags = this.state.tags;
        var suggestions = this.state.suggestions;
        return (
            <div>
                <Tags tags={tags}
                    suggestions={Countries}
                    handleDelete={this.handleDelete}
                    handleAddition={this.handleAddition}
                    minQueryLength={2} />
                <hr />
                <pre>
                    <code>{JSON.stringify(tags, null, 2)}</code>
                </pre>
            </div>
        )
    }
});

ReactDOM.render(<App />, document.getElementById('app'));
```


<a name="Options"></a>
### Options

- [`tags`](#tagsOption)
- [`suggestions`](#suggestionsOption)
- [`delimeters`](#delimeters)
- [`placeholder`](#placeholderOption)
- [`labelField`](#labelFieldOption)
- [`handleAddition`](#handleAdditionOption)
- [`handleDelete`](#handleDeleteOption)
- [`autofocus`](#autofocus)
- [`allowDeleteFromEmptyInput`](#allowDeleteFromEmptyInput)
- [`handleInputChange`](#handleInputChange)
- [`minQueryLength`](#minQueryLength)
- [`removeComponent`](#removeComponent)
- [`autocomplete`](#autocomplete)
- [`readOnly`](#readOnly)

<a name="tagsOption"></a>
##### tags (optional)
An array of tags that are displayed as pre-selected. Each tag should have an `id` and a `text` property which is used to display.

```js
var tags =  [ {id: 1, text: "Apples"} ]
```

<a name="suggestionsOption"></a>
##### suggestions (optional)
An array of suggestions that are used as basis for showing suggestions. At the moment, this should be an array of strings.

```js
var suggestions = ["mango", "pineapple", "orange", "pear"];
```

<a name="delimeters"></a>
##### delimeters (optional)
Specifies which characters should terminate tags input (default: enter and tab). A list of character codes.


<a name="placeholderOption"></a>
##### placeholder (optional)
The placeholder shown for the input. Defaults to `Add new tag`.

```
var placeholder = "Add new country"
```

<a name="labelFieldOption"></a>
##### labelField (optional)
Provide an alternative `label` property for the tags. Defaults to `text`.

```
<ReactTagSelect tags={tags}
    suggestions={}
    labelField={'name'} />
```
This is useful if your data uses the `text` property for something else.


<a name="handleAdditionOption"></a>
##### handleAddition (required)
Function called when the user wants to add a tag (either a click, a tab press or carriage return)

```js
function(tag) {
    // add the tag to the tag list
}
```

<a name="handleDeleteOption"></a>
##### handleDelete (required)
Function called when the user wants to delete a tag

```js
function(i) {
    // delete the tag at index i
}
```

```js
function(tag, currPos, newPos) {
    // remove tag from currPos and add in newPos
}
```
<a name="autofocus"></a>
##### autofocus (optional)
Optional boolean param to control whether the text-input should be autofocused on mount.

```js
<ReactTagSelect
    autofocus={false}
    ...>        
```

<a name="allowDeleteFromEmptyInput"></a>
##### allowDeleteFromEmptyInput (optional)
Optional boolean param to control whether tags should be deleted when the 'Delete' key is pressed in an empty Input Box.

```js
<ReactTagSelect
    allowDeleteFromEmptyInput={false}
    ...>
```

<a name="handleInputChange"></a>
##### handleInputChange (optional)
Optional event handler for input onChange

```js
<ReactTagSelect
    handleInputChange={this.handleInputChange}
    ...>
```

<a name="minQueryLength"></a>
##### minQueryLength (optional)
How many characters are needed for suggestions to appear (default: 2).

<a name="removeComponent"></a>
##### removeComponent (optional)
If you'd like to supply your own tag delete/remove element, create a React component and pass it as a property to ReactTagSelect using the `removeComponent` option. By default, a simple anchor link with an "x" text node as its only child is rendered, but if you'd like to, say, replace this with a `<button>` element that uses an image instead of text, your markup may look something like this:

```javascript
import ReactTagSelect from 'react-tag-select'

class Foo extends React.Component {
   render() {
      return <ReactTagSelect removeComponent={RemoveComponent}/>
   }
}

class RemoveComponent extends React.Component {
   render() {
      return (
         <button {...this.props}>
            <img src="my-icon.png" />
         </button>
      )
   }
}
```

The "ReactTags__remove" className and `onClick` handler properties can be automatically included on the `<button>` by using the [JSX spread attribute](https://facebook.github.io/react/docs/jsx-spread.html), as illustrated above.

<a name="autocomplete"></a>
##### autocomplete (optional)
Useful for enhancing data entry workflows for your users by ensuring the first matching suggestion is automatically converted to a tag when a [delimeter](#delimeters) key is pressed (such as the enter key). This option has three possible values:

- `true` - when delimeter key (such as enter) is pressed, first matching suggestion is used.
- `1` - when delimeter key (such as enter) is pressed, matching suggestion is used only if there is a single matching suggestion
- `false` (default) - tags are not autocompleted on enter/delimeter

This option has no effect if there are no [`suggestions`](#suggestionsOption).

<a name="readOnly"></a>
##### readOnly (optional)
Renders the component in read-only mode without the input box and `removeComponent`.

### Styling
`<ReactTagSelect>` does not come up with any styles. However, it is very easy to customize the look of the component the way you want it. The component provides the following classes with which you can style -

- `ReactTags__tags`
- `ReactTags__tagInput`
- `ReactTags__selected`
- `ReactTags__selected ReactTags__tag`
- `ReactTags__selected ReactTags__remove`
- `ReactTags__suggestions`

### Dev
The component is written in ES6 and uses [Webpack](http://webpack.github.io/) as its build tool.
```
npm install
npm run dev
python -m SimpleHTTPServer ### open in browser
```
