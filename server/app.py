from react.render import render_component

rendered = render_component('../app/coms/divider.js', {'title': 'from pyton server side rendering '})

print(rendered)