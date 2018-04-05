import React, { Component } from 'react';
import Genres from './components/genres';
import genresCategories from './components/genres-categories';
import Items from './components/items';
import Pagination from './components/items/pagination';
import Modal from './components/item-modal';
import Location from './components/location-model';
import SearchBar from './components/searchbar';
import NoResultsModal from './components/searchbar/no-results';

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
        within: '30',
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
      noResultsModal: false
    };
    this.clickGenreHandler = this.clickGenreHandler.bind(this);
    this.clickPagePreviousHandler = this.clickPagePreviousHandler.bind(this);
    this.clickPageNextHandler = this.clickPageNextHandler.bind(this);
    this.dataFetch = this.dataFetch.bind(this);
    this.clickItemHandler = this.clickItemHandler.bind(this);
    this.clickHandlerModal = this.clickHandlerModal.bind(this);
    this.inputLocationChange = this.inputLocationChange.bind(this);
    this.inputSearchChange = this.inputSearchChange.bind(this);
    this.clickNoResultsHandler = this.clickNoResultsHandler.bind(this);
  }

  dataFetch() {
    EVDB.API.call('/events/search', this.state.oArgs, response => {
      if (response.total_items == 0) {
        this.setState({
          noResultsModal: true
        });
      } else {
        this.setState({
          events: response.events.event,
          page_count: response.page_count
        });
      }
    });
  }

  clickGenreHandler(event) {
    let newOargs = Object.assign({}, this.state.oArgs, {
      category: event.target.textContent.toLowerCase(),
      page_number: 1,
      keywords: ''
    });
    let state = Object.assign({}, this.state, {
      oArgs: newOargs,
      showItems: true,
      events: []
    });
    this.setState(state);
    this.dataFetch();
  }

  clickPagePreviousHandler() {
    let newOargs = Object.assign({}, this.state.oArgs, {
      page_number: page_number--
    });
    let state = Object.assign({}, this.state, {
      oArgs: newOargs,
      events: []
    });
    console.log(this.state.oArgs.page_number);
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

  clickHandlerModal() {
    let state = Object.assign({}, this.state, {
      showModal: false
    });
    this.setState(state);
  }

  inputLocationChange(event) {
    let newOargs = Object.assign({}, this.state.oArgs, {
      location: event.target.value
    });
    let state = Object.assign({}, this.state, {
      oArgs: newOargs
    });
    this.setState(state);
  }

  inputSearchChange(event) {
    let newOargs = Object.assign({}, this.state.oArgs, {
      category: '',
      keywords: event.target.value
    });
    let state = Object.assign({}, this.state, {
      oArgs: newOargs
    });
    this.setState(state);
  }

  clickNoResultsHandler() {
    let newOargs = Object.assign({}, this.state.oArgs, {
      keywords: ''
    });
    let state = Object.assign({}, this.state, {
      oArgs: newOargs,
      noResultsModal: false
    });
    this.setState(state);
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
          welcomeMessage={this.state.welcomeMessage}
          inputChange={this.inputLocationChange}
          clickHandler={() => this.setState({ locationModal: false })}
          locationModal={this.state.locationModal}
        />
        <NoResultsModal
          clickHandler={this.clickNoResultsHandler}
          noResultsModal={this.state.noResultsModal}
        />
        <SearchBar
          inputSearchChange={this.inputSearchChange}
          inputLocationChange={this.inputLocationChange}
          search={this.state.oArgs.keywords}
          location={this.state.oArgs.location}
          clickHandler={() => this.dataFetch()}
        />
        <div style={{ height: '100px' }} />
        <Genres
          clickHandler={this.clickGenreHandler}
          genresCategories={genresCategories}
        />
        {this.state.showItems && (
          <div>
            {this.state.showModal && (
              <Modal
                event={this.state.modalItem}
                clickHandler={this.clickHandlerModal}
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
        )}
      </div>
    );
  }
}
