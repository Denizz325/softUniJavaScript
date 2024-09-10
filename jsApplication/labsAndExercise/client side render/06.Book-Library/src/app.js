import { showCatalog } from './catalog.js';
import { showCreate } from './create.js';
import { showEdit } from './updated.js';
import { render } from "./utility.js";

const root = document.body;

const ctx = {
    update,
}

update()

function update() {
    render([
        showCatalog(ctx),
        showCreate(ctx),
        showEdit(ctx)
    ], root); 
}