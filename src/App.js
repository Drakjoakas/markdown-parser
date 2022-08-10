
import './App.css';
import {marked} from 'marked';
import { useState } from 'react';
import DOMPurify from 'dompurify';

function Header() {
  return (
    <div className="page-header">
      <h1>Markdown Previewer</h1>
    </div>
  );
}

function Editor({input, handleChange}) {
  return (
    <div id="editor-container">
      <h3 className="container-title">Editor</h3>
      <textarea id="editor" value={input} onChange={handleChange}></textarea>
    </div>
  )
}

function Preview({markup}) {
  return(
    <div id="preview-container">
      <h3 className="container-title" >Preview</h3>
      <div id="preview"
        dangerouslySetInnerHTML={{__html:DOMPurify.sanitize(marked(markup,{ breaks: true, gfm: true}))}}></div>
    </div>
  )
}

function App() {

  const [input, setInput] = useState(initialState);

  const handleChange = (event) => {
    setInput(event.target.value);
  }

  return (
    <div className="App">
      <Header />
      <div className="body-container">
        <Editor input={input} handleChange={handleChange} />
        <Preview markup={input} />
      </div>
    </div>
  );
}

const initialState = `# Titulo
## Subtiutlo
hola **como** _estas_.

> que es esto

Para ir a google haz click [aqui](https://www.google.com)

¿Cómo usar la función \`printf()\`?

\`\`\`
#include <stdio.h>
int main() {
  printf("Hola mundo");
  return 0;
}
\`\`\`

1. uno
2. dos
3. tres


![imagen](imagen.jpg)
`

export default App;
