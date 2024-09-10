import { html, render } from '../node_modules/lit-html/lit-html.js';
import { until } from '../node_modules/lit-html/directives/until.js'


export { 
    html, 
    render,
    until 
};

const host = 'http://localhost:3030/jsonstore/collections'

async function request(url, method='get', data) {
    const options = {
        method: method,
        headers: {},
    };

    if (data != undefined) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    const res = await fetch(host + url, options);

    if (res.ok == false) {
        const error = await res.json();
        alert(error.message)
    }

    return res.json();

}

export async function getBooks() {
    return request('/books')   
}

export async function getBooksById() {
    return request('/books/' + id)
}

export async function createBooks(book) {
    return request('/books', 'post', book)
}

export async function updateBooks(id, book) {
    return request('/books/' + id, 'put', book)
}

export async function deleteBooks(id) {
    return request('/books/' + id, 'delete')
}