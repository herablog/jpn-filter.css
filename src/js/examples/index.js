(function() {
  
  var data = {
    filters: [
      { name: 'original', photo: 'sakura.jpg' },
      { name: 'ninagawa', photo: 'sakura.jpg' },
      { name: 'kiyomizu', photo: 'kiyomizu.jpg' },
      { name: 'origami', photo: 'origami.jpg' },
      { name: 'namahage', photo: 'namahage.jpg' },
      { name: 'fuji', photo: 'fuji.jpg' },
      { name: 'taisho', photo: 'sake.jpg' },
      { name: 'kurosawa', photo: 'jaxa.jpg' },
      { name: 'kabuki', photo: 'kabuki.jpg' },
      { name: 'shodo', photo: 'arashiyama.jpg' },
      { name: 'makimono', photo: 'michi.jpg' },
      { name: 'kawaii', photo: 'students.png' },
      { name: 'bubble', photo: 'bubble.jpg' },
      { name: 'LED', photo: 'night.jpg' }
    ],
    photos: [
      { name: 'kiyomizu.jpg' },
      { name: 'sakura.jpg' },
      { name: 'sake.jpg' }
    ]
  };
  
  /** @jsx React.DOM */
  
  var JpnFilterCss = React.createClass({
    // Immutable values
    getDefaultProps: function() {
      return {
      };
    },
    // Mutable values
    getInitialState: function() {
      return {
        selectedFilterName: 'original'
      };
    },
    // handler
    handleChange: function(e) {
      this.setState({ selectedFilterName: e.target.value });
    },

    render: function() {
      var self = this;
      var filters = self.props.filters;
      var photos = self.props.photos;
      return <div className="jpn-filter">
        <header className="Header">
          <h1 className="Header-logo">jpn-filter.css</h1>
          <p className="Header-desc">The Japanese-syled CSS Filters</p>
        </header>
        <nav className="Selector">
          <ul className="Selector-list">
            { filters.map(function(f) {
              var photo = photos[2];
              var style = {
                backgroundImage: 'url(./photos/' + photo.name + ')'
              };
              return <li className="Selector-item"><input type="radio" name="filter" data-filter={f.name} className="Selector-radio" value={f.name} style={style} onChange={self.handleChange} /><label className="Selector-label">{f.name}</label></li>
            })}
          </ul>
        </nav>
        <main className="Stage">
          <ul className="Stage-list">
            { photos.map(function(p) {
              var style = {
                backgroundImage: 'url(./photos/' + p.name + ')'
              };
              return <li data-filter={self.state.selectedFilterName} style={style} onChange={self.handleChange}  className="Stage-item"></li>
            })}
          </ul>
        </main>
        <aside className="Github">
          <a href="https://github.com/herablog/jpn-filter.css" className="Github-anchor">View on GitHub</a>
        </aside>
        <aside className="Filters">
          <h2 className="heading">Filters</h2>
          <ul className="Filters-list">
            { filters.map(function(f) {
              var style = {
                backgroundImage: 'url(./photos/' + f.photo + ')'
              };
              return <li className="Filters-item"><h3 className="heading-sub">{f.name}</h3><div className="Filters-image" style={style} data-filter={f.name}></div></li>
            })}
          </ul>
        </aside>
        <footer className="Footer">
          <p><strong>This app works on Chrome browser.</strong></p>
          <p className="Footer-copyright"><small>&copy; copyright 2015 @herablog</small></p>
        </footer>
      </div>;
    }
  });
  
  React.render(
      React.createElement(JpnFilterCss, data),
      document.body
  );
  
})();