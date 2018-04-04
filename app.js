import React, { Component } from 'react';
import Genres from './components/genres';
import genresCategories from './components/genres-categories';
import Items from './components/items';
import Pagination from './components/items/pagination';
import Modal from './components/item-modal';
import Location from './components/location-model';
import SearchBar from './components/searchbar';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      oArgs: {
        app_key: 'vC6JjzFkLQqRMX39',
        location: '',
        when: 'today',
        category: '',
        keywords: '',
        within: '10',
        units: 'mi',
        title: '',
        include: 'tags,categories',
        image_sizes: ['block200', 'large'],
        page_number: 1,
        page_size: 10,
        sort_order: 'popularity'
      },
      page_count: 0,
      events: [],
      showItems: false,
      showModal: false,
      modalItem: {},
      locationModal: false,
      welcomeMessage: true
    };
    this.clickGenreHandler = this.clickGenreHandler.bind(this);
    this.clickPagePreviousHandler = this.clickPagePreviousHandler.bind(this);
    this.clickPageNextHandler = this.clickPageNextHandler.bind(this);
    this.dataFetch = this.dataFetch.bind(this);
    this.clickItemHandler = this.clickItemHandler.bind(this);
    this.inputChange = this.inputChange.bind(this);
  }

  dataFetch() {
    EVDB.API.call('/events/search', this.state.oArgs, response => {
      this.setState({
        events: response.events.event,
        page_count: response.page_count
      });
    });
  }

  clickGenreHandler(event) {
    let state = Object.assign({}, this.state);
    state.oArgs.category = event.target.textContent.toLowerCase();
    state.oArgs.page_number = 1;
    this.setState({
      showItems: true,
      events: []
    });
    this.dataFetch();
  }

  clickPagePreviousHandler() {
    let state = Object.assign({}, this.state);
    state.oArgs.page_number--;
    state.events = [];
    this.setState(state);
    this.dataFetch();
  }

  clickPageNextHandler() {
    let state = Object.assign({}, this.state);
    state.oArgs.page_number++;
    state.events = [];
    this.setState(state);
    this.dataFetch();
  }

  clickItemHandler(title) {
    let event = this.state.events.filter(event => event.title == title);
    this.setState({
      showModal: true,
      modalItem: event[0]
    });
  }

  inputChange(event) {
    let state = Object.assign({}, this.state);
    state.oArgs.location = event.target.value;
  }

  componentDidMount() {
    event.preventDefault();
    this.setState({
      locationModal: true
    });
  }

  render() {
    return (
      <div>
        <Location
          inputChange={this.inputChange}
          clickHandler={() => this.setState({ locationModal: false })}
          locationModal={this.state.locationModal}
        />
        <SearchBar location={this.state.oArgs.location} />
        <Genres
          clickHandler={this.clickGenreHandler}
          genresCategories={genresCategories}
        />
        {!this.state.showItems ? null : (
          <div>
            {!this.state.showModal ? null : (
              <Modal
                event={this.state.modalItem}
                clickHandler={() => this.setState({ showModal: false })}
              />
            )}
            <h2
              className="ui center aligned header"
              style={{ marginTop: '50px' }}
            >
              {this.state.oArgs.category.toUpperCase()}
            </h2>
            {this.state.events.length < 1 ? (
              <div
                className="ui active centered inline large loader"
                style={{ width: '100vw', height: '200px', marginTop: '50px' }}
              />
            ) : (
              <Items
                events={this.state.events}
                title={this.state.oArgs.category}
                showItems={this.state.showItems}
                clickHandler={this.clickItemHandler}
              />
            )}
            <Pagination
              pageCount={this.state.page_count}
              pageNumber={this.state.oArgs.page_number}
              clickPagePreviousHandler={this.clickPagePreviousHandler}
              clickPageNextHandler={this.clickPageNextHandler}
            />
          </div>
        )}.
      </div>
    );
  }
}
