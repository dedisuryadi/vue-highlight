# vue-highlight
Vue Highlight is a custom directive to add subtle highlight on your element when value change detected. Style and DOM manipulation is using vanilla js, so it's lean and fast, feel free to make a pull request.

#how
Simply include vue-highlight.js after vue.js and add v-highlight directive to your html or template. 

#example

    <p id="foo" v-highlight="bar">{{baz}}</p>

'bar' is the value to be tracked, so when 'bar' value changed, paragraph #foo will be highlighted.

check this codepen page for a demo [http://codepen.io/ded/pen/gaqJqL](http://codepen.io/ded/pen/gaqJqL)

#TODO
- ~~upload to github~~
- implement options to modify style
- convert to plugin
- ...

# License
M.I.T © Dedi Suryadi
