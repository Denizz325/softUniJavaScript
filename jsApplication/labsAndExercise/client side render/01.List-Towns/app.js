import { html, render } from './node_modules/lit-html/lit-html.js'

const townsTemplate = (towns) => html`
<ul>
    ${towns.map(t => html`<li>${t}</li>`)}
</ul>`

const root = document.getElementById('root')

document.querySelector('form').addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    const towns = document.getElementById('towns').value.split(',').map(t => t.trim());
    
    const result = townsTemplate(towns);
    render(result, root)
}