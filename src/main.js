import ReactTagSelect from '@oiok/react-tag-select';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

require('../scss/default.scss');

/* eslint-disable */
// Set up test data
var Countries = ['Afghanistan','Albania','Algeria','Andorra','Angola','Anguilla','Antigua &amp; Barbuda','Argentina','Armenia','Aruba','Australia','Austria','Azerbaijan','Bahamas'
  ,'Bahrain','Bangladesh','Barbados','Belarus','Belgium','Belize','Benin','Bermuda','Bhutan','Bolivia','Bosnia &amp; Herzegovina','Botswana','Brazil','British Virgin Islands'
  ,'Brunei','Bulgaria','Burkina Faso','Burundi','Cambodia','Cameroon','Cape Verde','Cayman Islands','Chad','Chile','China','Colombia','Congo','Cook Islands','Costa Rica'
  ,'Cote D Ivoire','Croatia','Cruise Ship','Cuba','Cyprus','Czech Republic','Denmark','Djibouti','Dominica','Dominican Republic','Ecuador','Egypt','El Salvador','Equatorial Guinea'
  ,'Estonia','Ethiopia','Falkland Islands','Faroe Islands','Fiji','Finland','France','French Polynesia','French West Indies','Gabon','Gambia','Georgia','Germany','Ghana'
  ,'Gibraltar','Greece','Greenland','Grenada','Guam','Guatemala','Guernsey','Guinea','Guinea Bissau','Guyana','Haiti','Honduras','Hong Kong','Hungary','Iceland','India'
  ,'Indonesia','Iran','Iraq','Ireland','Isle of Man','Israel','Italy','Jamaica','Japan','Jersey','Jordan','Kazakhstan','Kenya','Kuwait','Kyrgyz Republic','Laos','Latvia'
  ,'Lebanon','Lesotho','Liberia','Libya','Liechtenstein','Lithuania','Luxembourg','Macau','Macedonia','Madagascar','Malawi','Malaysia','Maldives','Mali','Malta','Mauritania'
  ,'Mauritius','Mexico','Moldova','Monaco','Mongolia','Montenegro','Montserrat','Morocco','Mozambique','Namibia','Nepal','Netherlands','Netherlands Antilles','New Caledonia'
  ,'New Zealand','Nicaragua','Niger','Nigeria','Norway','Oman','Pakistan','Palestine','Panama','Papua New Guinea','Paraguay','Peru','Philippines','Poland','Portugal'
  ,'Puerto Rico','Qatar','Reunion','Romania','Russia','Rwanda','Saint Pierre &amp; Miquelon','Samoa','San Marino','Satellite','Saudi Arabia','Senegal','Serbia','Seychelles'
  ,'Sierra Leone','Singapore','Slovakia','Slovenia','South Africa','South Korea','Spain','Sri Lanka','St Kitts &amp; Nevis','St Lucia','St Vincent','St. Lucia','Sudan'
  ,'Suriname','Swaziland','Sweden','Switzerland','Syria','Taiwan','Tajikistan','Tanzania','Thailand','Timor L\'Este','Togo','Tonga','Trinidad &amp; Tobago','Tunisia'
  ,'Turkey','Turkmenistan','Turks &amp; Caicos','Uganda','Ukraine','United Arab Emirates','United Kingdom','United States of America','Uruguay','Uzbekistan','Venezuela','Vietnam','Virgin Islands (US)'
  ,'Yemen','Zambia','Zimbabwe'];
/* eslint-enable */

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: [ {id: 1, text: 'Thailand'}, {id: 2, text: 'India'} ],
      suggestions: Countries
    };
  }
  handleDelete = (i) => {
    const tags = this.state.tags;
    tags.splice(i, 1);
    this.setState({tags: tags});
  }
  handleAddition = (tag) => {
    const tags = this.state.tags;
    tags.push({
      id: tags.length + 1,
      text: tag
    });
    this.setState({tags: tags});
  }
  render() {
    const tags = this.state.tags;

    return (
      <div>
        <ReactTagSelect tags={tags}
          suggestions={Countries}
          handleDelete={this.handleDelete}
          handleAddition={this.handleAddition}
          minQueryLength={2} />
        <hr />
        <pre>
          <code>{JSON.stringify(tags, null, 2)}</code>
        </pre>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
