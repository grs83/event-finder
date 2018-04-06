import React, { Component } from 'react';
import Genres from './components/genres';
import genresCategories from './components/genres-categories';
import Items from './components/items';
import Pagination from './components/items/pagination';
import Modal from './components/item-modal';
import Location from './components/location-model';
import SearchBar from './components/searchbar';
import NoResultsModal from './components/searchbar/no-results';
import Options from './components/search-options';
import Genresbar from './components/genres-list-bar';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      oArgs: {
        app_key: 'vC6JjzFkLQqRMX39',
        location: '',
        when: 'this week',
        category: '',
        keywords: '',
        within: '15',
        units: 'mi',
        title: '',
        include: 'tags,categories',
        image_sizes: ['block200', 'large'],
        page_number: 1,
        page_size: 15,
        sort_order: 'popularity'
      },
      page_count: 0,
      events: [],
      showItems: false,
      showModal: false,
      modalItem: {},
      locationModal: false,
      noResultsModal: false,
      searchTitle: ''
    };
    this.dataFetch = this.dataFetch.bind(this);
    this.clickGenreHandler = this.clickGenreHandler.bind(this);
    this.clickPagePreviousHandler = this.clickPagePreviousHandler.bind(this);
    this.clickPageNextHandler = this.clickPageNextHandler.bind(this);
    this.clickItemHandler = this.clickItemHandler.bind(this);
    this.clickHandlerModal = this.clickHandlerModal.bind(this);
    this.inputLocationChange = this.inputLocationChange.bind(this);
    this.inputSearchChange = this.inputSearchChange.bind(this);
    this.clickHandlerSearchBar = this.clickHandlerSearchBar.bind(this);
    this.clickNoResultsHandler = this.clickNoResultsHandler.bind(this);
    this.handleSubmitOptions = this.handleSubmitOptions.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onChangeDistance = this.onChangeDistance.bind(this);
    this.clickHandlerLogo = this.clickHandlerLogo.bind(this);
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
    const newOargs = Object.assign({}, this.state.oArgs, {
      category: event.target.textContent.toLowerCase(),
      page_number: 1,
      keywords: ''
    });
    const state = Object.assign({}, this.state, {
      oArgs: newOargs,
      showItems: true,
      events: []
    });
    this.setState(state, () => this.dataFetch());
  }

  clickPagePreviousHandler() {
    const newOargs = Object.assign({}, this.state.oArgs, {
      page_number: this.state.oArgs.page_number - 1
    });
    const state = Object.assign({}, this.state, {
      oArgs: newOargs,
      events: []
    });
    this.setState(state, () => this.dataFetch());
  }

  clickPageNextHandler() {
    const newOargs = Object.assign({}, this.state.oArgs, {
      page_number: this.state.oArgs.page_number + 1
    });
    const state = Object.assign({}, this.state, {
      oArgs: newOargs,
      events: []
    });
    this.setState(state, () => this.dataFetch());
  }

  clickItemHandler(title) {
    const event = this.state.events.filter(event => event.title == title);
    this.setState({
      showModal: true,
      modalItem: event[0]
    });
  }

  clickHandlerModal() {
    const state = Object.assign({}, this.state, {
      showModal: false
    });
    this.setState(state);
  }

  inputLocationChange(event) {
    const newOargs = Object.assign({}, this.state.oArgs, {
      location: event.target.value
    });
    const state = Object.assign({}, this.state, {
      oArgs: newOargs
    });
    this.setState(state);
  }

  inputSearchChange(event) {
    const newOargs = Object.assign({}, this.state.oArgs, {
      category: '',
      keywords: event.target.value
    });
    const state = Object.assign({}, this.state, {
      oArgs: newOargs
    });
    this.setState(state);
  }

  clickNoResultsHandler() {
    const newOargs = Object.assign({}, this.state.oArgs, {
      keywords: ''
    });
    const state = Object.assign({}, this.state, {
      oArgs: newOargs,
      noResultsModal: false
    });
    this.setState(state);
  }

  clickHandlerSearchBar() {
    this.setState({
      showItems: true,
      events: [],
      searchTitle: this.state.oArgs.keywords
    });
    this.dataFetch();
  }

  onChangeDate(event) {
    const newOargs = Object.assign({}, this.state.oArgs, {
      when: event.target.value
    });
    const state = Object.assign({}, this.state, {
      oArgs: newOargs
    });
    this.setState(state);
  }

  onChangeDistance(event) {
    const newOargs = Object.assign({}, this.state.oArgs, {
      within: event.target.value
    });
    const state = Object.assign({}, this.state, {
      oArgs: newOargs
    });
    this.setState(state);
  }

  handleSubmitOptions(event) {
    event.preventDefault();
    const state = Object.assign({}, this.state, {
      events: []
    });
    this.setState(state, () => this.dataFetch());
  }

  clickHandlerLogo() {
    this.setState({
      showItems: false
    });
  }

  componentDidMount() {
    event.preventDefault();
    this.setState({
      locationModal: true
    });
  }

  render() {
    console.log();
    const itemsTitle = this.state.oArgs.category
      ? this.state.oArgs.category.toUpperCase()
      : this.state.searchTitle
        ? `Search For: ${this.state.searchTitle.toUpperCase()}`
        : 'Searching All Categories';
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
          clickHandler={this.clickHandlerSearchBar}
          clickHandlerLogo={this.clickHandlerLogo}
        />
        <div style={{ height: '100px' }} />
        {!this.state.showItems && (
          <div>
            <Genres
              clickHandler={this.clickGenreHandler}
              genresCategories={genresCategories}
            />
          </div>
        )}
        {this.state.showItems && (
          <div>
            {this.state.showModal && (
              <Modal
                event={this.state.modalItem}
                clickHandler={this.clickHandlerModal}
              />
            )}
            <Genresbar
              clickHandler={this.clickGenreHandler}
              genresCategories={genresCategories}
              currentCategory={this.state.oArgs.category}
            />
            <h2
              className="ui center aligned header"
              style={{ marginTop: '50px' }}
            >
              {itemsTitle}
            </h2>
            <div className="ui grid container" style={{ marginTop: '25px' }}>
              <div className="ui two column grid">
                <Options
                  onChangeDate={this.onChangeDate}
                  handleSubmitOptions={this.handleSubmitOptions}
                  onChangeDistance={this.onChangeDistance}
                />
                {this.state.events.length < 1 ? (
                  <div
                    className="ui active centered inline large loader"
                    style={{
                      height: '200px'
                    }}
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
            </div>
          </div>
        )}
      </div>
    );
  }
}
