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
  
  var JpnFilterCss = React.createClass({displayName: "JpnFilterCss",
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
      return React.createElement("div", {className: "jpn-filter"}, 
        React.createElement("header", {className: "Header"}, 
          React.createElement("h1", {className: "Header-logo"}, "jpn-filter.css"), 
          React.createElement("p", {className: "Header-desc"}, "The Japanese-syled CSS Filters")
        ), 
        React.createElement("nav", {className: "Selector"}, 
          React.createElement("ul", {className: "Selector-list"}, 
             filters.map(function(f) {
              var photo = photos[2];
              var style = {
                backgroundImage: 'url(./photos/' + photo.name + ')'
              };
              return React.createElement("li", {className: "Selector-item"}, React.createElement("input", {type: "radio", name: "filter", "data-filter": f.name, className: "Selector-radio", value: f.name, style: style, onChange: self.handleChange}), React.createElement("label", {className: "Selector-label"}, f.name))
            })
          )
        ), 
        React.createElement("main", {className: "Stage"}, 
          React.createElement("ul", {className: "Stage-list"}, 
             photos.map(function(p) {
              var style = {
                backgroundImage: 'url(./photos/' + p.name + ')'
              };
              return React.createElement("li", {"data-filter": self.state.selectedFilterName, style: style, onChange: self.handleChange, className: "Stage-item"})
            })
          )
        ), 
        React.createElement("aside", {className: "Github"}, 
          React.createElement("a", {href: "https://github.com/herablog/jpn-filter.css", className: "Github-anchor"}, "View on GitHub")
        ), 
        React.createElement("aside", {className: "Filters"}, 
          React.createElement("h2", {className: "heading"}, "Filters"), 
          React.createElement("ul", {className: "Filters-list"}, 
             filters.map(function(f) {
              var style = {
                backgroundImage: 'url(./photos/' + f.photo + ')'
              };
              return React.createElement("li", {className: "Filters-item"}, React.createElement("h3", {className: "heading-sub"}, f.name), React.createElement("div", {className: "Filters-image", style: style, "data-filter": f.name}))
            })
          )
        ), 
        React.createElement("footer", {className: "Footer"}, 
          React.createElement("p", null, React.createElement("strong", null, "This app works on Chrome browser.")), 
          React.createElement("p", {className: "Footer-copyright"}, React.createElement("small", null, "© copyright 2015 @herablog"))
        )
      );
    }
  });
  
  React.render(
      React.createElement(JpnFilterCss, data),
      document.body
  );
  
})();