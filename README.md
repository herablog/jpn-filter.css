# jpn-filter.css
![jpn-filter.css](http://herablog.github.io/jpn-filter.css/images/filters.png)

The Japanese-syled CSS Filters.

## Usage
Load the CSS and add `data-filter` attribute in your html.

```html
<link rel="stylesheet" href="jpn-filter.css">

<div data-filter="fuji"></div>
```

## Filters

### Ninagawa
![Ninagawa](http://herablog.github.io/jpn-filter.css/images/ninagawa.jpg)

A vibrant and brightly colored filter inspired by the photography of Mika Ninagawa.

```css
[data-filter='ninagawa'] {
  filter: hue-rotate(300deg) saturate(2) contrast(2.2);
}
[data-filter='ninagawa']::before {
  background-color: rgba(102,3,0,0.2);
  background-image: radial-gradient(farthest-corner at 60% 55%, transparent 20%, rgba(255,51,204,0.4));
}
```

### Kiyomizu
![Kiyomizu](http://herablog.github.io/jpn-filter.css/images/kiyomizu.jpg)

A chic filter inspired by nature clearly accentuating green leaves. 

```css
[data-filter='kiyomizu'] {
  filter: contrast(1.1) hue-rotate(30deg) invert(0.1) saturate(1.2);
}
```

### Origami
![Origami](http://herablog.github.io/jpn-filter.css/images/origami.jpg)

A faded filter inspired by old memories, which brings a softness to your photos.

```css
[data-filter='origami'] {
  filter: invert(0.1) sepia(0.1);
}
[data-filter='origami']::before {
  box-shadow: inset 0 0 20px rgba(0,0,0,0.25), inset 0 0 100px rgba(0,0,0,0.1);
}
```

### Namahage
![Namahage](http://herablog.github.io/jpn-filter.css/images/namahage.jpg)

A sharp filter inspired by the deep red colors of traditional Japanese paint, which brings more excitement.

```css
[data-filter='namahage'] {
  filter: brightness(0.9) contrast(2.8) saturate(1.1);
}
```

### Fuji
![Fuji](http://herablog.github.io/jpn-filter.css/images/fuji.jpg)

A bright filter inspired by the clear blue sky around Mt.Fuji, which brings out crisp, clean colors in your nature shots.

```css
[data-filter='fuji'] {
  filter: contrast(1.1) saturate(4.1) sepia(0.4);
}
```

### Taisho
![Taisho](http://herablog.github.io/jpn-filter.css/images/taisho.jpg)

A traditional filter inspired by [old-fashioned posters](https://www.google.co.jp/search?q=%E6%97%A5%E6%B4%BB+%E5%A4%A7%E6%AD%A3+%E3%83%9D%E3%82%B9%E3%82%BF%E3%83%BC&espv=2&biw=1833&bih=1133&source=lnms&tbm=isch&sa=X&ei=-EPlVIWNFqW0mAXi8YDgCw&ved=0CAYQ_AUoAQ#imgdii=_&imgrc=QC4eLGJgg7C-0M%253A%3B5hz8WqvFcf_BfM%3Bhttp%253A%252F%252Fupload.wikimedia.org%252Fwikipedia%252Fcommons%252Fb%252Fbc%252FJibun_no_ana_no_nakade_poster.jpg%3Bhttp%253A%252F%252Fja.wikipedia.org%252Fwiki%252F%2525E9%252587%252591%2525E5%2525AD%252590%2525E4%2525BF%2525A1%2525E9%25259B%252584%3B283%3B412) in Taisho period (1912-1926 CE).

```css
[data-filter='taisho'] {
  filter: hue-rotate(338deg) contrast(3) saturate(3);
}
```

### Kurosawa
![Kurosawa](http://herablog.github.io/jpn-filter.css/images/kurosawa.jpg)

A grayscale filter with a touch of sepia inspired by the old films of Akira Kurosawa.

```css
[data-filter='kurosawa'] {
  background-color: #000;
  border-image: url("data:image/png;base64,iVB...") 30 fill round;
  border-top-width: 18px;
  border-bottom-width: 18px;
  filter: grayscale(1) sepia(0.6);
}
```

### Kabuki
![Kabuki](http://herablog.github.io/jpn-filter.css/images/kabuki.jpg)

A fun filter inspired by the traditional art of Kabuki, which uses colorful borders.

```css
[data-filter='kabuki'] {
  background-color: #fff;
  border-image: url("data:image/png;base64,iVB...") 30 round;
  border-top-width: 25px;
  border-bottom-width: 25px;
  filter: contrast(2.5);
}
```

### Shodo
![Shodo](http://herablog.github.io/jpn-filter.css/images/shodo.jpg)

A black and white filter inspired by shodo ink writing.

```css
[data-filter='shodo'] {
  filter: grayscale(1) contrast(5);
}
```

### Makimono
![Makimono](http://herablog.github.io/jpn-filter.css/images/makimono.jpg)

A grayscale filter inspired by [makimono](https://www.google.co.jp/search?q=%E3%81%BE%E3%81%8D%E3%82%82%E3%81%AE&espv=2&biw=1308&bih=647&source=lnms&tbm=isch&sa=X&ei=8_rjVNGDD4GF8gW314DoDA&ved=0CAYQ_AUoAQ) with borders used to simulate the feeling of ancient Japanese scrolls.

```css
[data-filter='makimono'] {
  border-image: url("data:image/png;base64,iVB...") 90 round;
  border-width: 30px;
  filter: grayscale(1) sepia(0.4) saturate(1);
}
[data-filter='makimono']::before {
  box-shadow: inset 0 0 40px rgba(0,0,0,0.45), inset 0 0 100px rgba(0,0,0,0.1);
}
```

### Kawaii
![Kawaii](http://herablog.github.io/jpn-filter.css/images/kawaii.jpg)

A cute filter inspired by the popular Japanese purikura, which can be used with frineds.

```css
[data-filter='kawaii'] {
  background-color: #febee5;
  border-image: url("data:image/png;base64,iVB...") 30 fill round;
  border-width: 30px;
  filter: brightness(1.2) sepia(0.2);
  overflow: hidden;
}
[data-filter='kawaii']::before {
  bottom: 25px;
  color: rgba(255,92,231,0.84);
  content: '\f004';
  font-family: 'FontAwesome';
  font-size: 5em;
  height: 1em;
  text-align: center;
  text-shadow: 7px 0 0 rgba(255,255,255,0.8), 0 7px 0 rgba(255,255,255,0.8), -7px 0 0 rgba(255,255,255,0.8), 0 -7px 0 rgba(255,255,255,0.8);
  width: 100%;
}
```

### Bubble
![Bubble](http://herablog.github.io/jpn-filter.css/images/bubble.jpg)

A fun filter inspired by the happy times of the bubble economy.

```css
[data-filter='bubble'] {
  filter: sepia(0.2) opacity(0.8);
  overflow: hidden;
}
[data-filter='bubble']::before {
  background-image: radial-gradient(farthest-corner at 60% 55%, transparent 40%, rgba(255,51,204,0.4)), linear-gradient(to right, transparent 75%, rgba(133,51,255,0.45));
}
[data-filter='bubble']::after {
  background: transparent;
  border-radius: 50%;
  box-shadow: 28px 30px 0 rgba(255,0,0,0.6), 60px 60px 0 rgba(255,255,0,0.4), 89px 71px 0 rgba(255,255,255,0.5), 99px 91px 0 rgba(255,51,204,0.4);
  height: 20%;
  left: -20%;
  top: -20%;
  width: 20%;
}
```

### LED
![LED](http://herablog.github.io/jpn-filter.css/images/led.jpg)

A flashy filter inspired by the Nobel Prize Physicist who is known for his work on blue LED, expressing my respect for the great invention.

```css
[data-filter='LED']::before {
  background: rgba(51,133,255,0.1);
}
[data-filter='LED']::after {
  background-image: radial-gradient(rgba(235,254,255,0.8) 10%, rgba(51,240,230,0.8) 1%, rgba(0,133,250,0.8) 1%, rgba(5,238,255,0.8) 1%, rgba(0,89,255,0.8) 46%, rgba(1,25,203,0.6));
  background-repeat: repeat;
  background-size: 30px;
}
```

## Example
See [demo app](https://herablog.github.io/jpn-filter.css).

The app works on **Chrome** browser.
