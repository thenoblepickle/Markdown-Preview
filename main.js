import { marked } from 'https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js';

document.addEventListener("DOMContentLoaded", () => {
    const editor = document.getElementById("editor");
    const preview = document.getElementById("preview");

    function updatePreview() {
        const markdown = editor.value;
        const html = marked(markdown, {breaks: true});
        preview.innerHTML = html;
    }

    editor.addEventListener("input", updatePreview);
    const defaultMarkdown = `
# Heading 1
## Heading 2
[Link](https://developer.mozilla.org/en-US/)
\`inline code\`
\`\`\`
// Code block
const greeting = 'Hello';
console.log(greeting);
\`\`\`
- List item 1
- List item 2
> Blockquote
![Image](https://i.pinimg.com/1200x/f5/43/c8/f543c8feeb153f5646e04f1d850dade3.jpg)
**Bold text**
    `;

    editor.value = defaultMarkdown;
    updatePreview();
});