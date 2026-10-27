# init project
```
npm create vite@7 PhotoGallery -- --template react
```

# install tailwind
```
npm install tailwindcss @tailwindcss/vite
```

# configure the vite (vite.config.js)
```
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite' // add this

export default defineConfig({
  plugins: [
    tailwindcss(), // add this
  ],
})
```

# import tailwind css (src/index.css)
```
@import "tailwindcss";
```