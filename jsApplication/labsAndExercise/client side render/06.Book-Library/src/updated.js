import { html, updateBooks } from "./utility.js";

const editTemplate = (book, ctx) => html` 
<form @submit=${ev => onSubmit(ev, ctx)} id="edit-form">
  <input type="hidden" name="id" .value=${book._id} />
  <h3>Edit book</h3>
  <label>TITLE</label>
  <input type="text" name="title" placeholder="Title..." .value=${book.title} />
  <label>AUTHOR</label>
  <input type="text" name="author" placeholder="Author..." .value=${book.author} />
  <input type="submit" value="Save" />
</form>`;

export function showEdit(ctx) {
  if (ctx.book == undefined) {
    return null;
  } else {
    return editTemplate(ctx.book, ctx)
  }
}

async function onSubmit(e, ctx) {
  e.preventDefault();

  const formData = new FormData(e.target);

  const id = formData.get("id");
  const title = formData.get("title").trim();
  const author = formData.get("author").trim();

  await updateBooks(id, { title, author });

  e.target.reset();
  delete ctx.book
  ctx.update();
}
