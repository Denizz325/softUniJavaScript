import { register } from '../api/data.js';
import { html } from '../lib.js'

const registerTemplate = (onSubmit, errorMsg, errors) => html`
 <div class="row space-top">
            <div class="col-md-12">
                <h1>Register New User</h1>
                <p>Please fill all fields.</p>
            </div>
        </div>
        <form @submit=${onSubmit}>
            <div class="row space-top">
                <div class="col-md-4">
                ${errorMsg ? html`<div class="form-group error">${errorMsg}</div>` : null}
                    <div class="form-group">
                        <label class="form-control-label" for="email">Email</label>
                        <input class=${"form-control" + (errors.email ? ' is-invalid' : ' ')} id="email" type="text" name="email">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="password">Password</label>
                        <input class=${"form-control" + (errors.password ? ' is-invalid' : '')} id="password" type="password" name="password">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="rePass">Repeat</label>
                        <input class=${"form-control" + (errors.repass ? ' is-invalid' : '')} id="rePass" type="password" name="rePass">
                    </div>
                    <input type="submit" class="btn btn-primary" value="Register" />
                </div>
            </div>
        </form>`

export function registerPage(ctx) {
    update(null, {});

    function update(errorMsg, errors) {
        ctx.render(registerTemplate(onSubmit, errorMsg, errors))
    }

    async function onSubmit(e) {
        e.preventDefault();

        try {
            
            const formData = new FormData(e.target);
    
            const email = formData.get('email').trim();
            const password = formData.get('password').trim();
            const repass = formData.get('rePass').trim();
    
            if (email =='' || password == '') {
                throw {
                    error: new Error('All fields are required! '),
                    errors: {
                        email: email =='',
                        password: password == '',
                        repass: repass == ''
                    }

                }

            }
    
            if (password != repass) {
                throw {
                    error: new Error("Password don't match"),
                    errors: {
                        password: true,
                        repass: true
                    }
                }

            } 
    
            await register(email, password);
            ctx.updateUserNav();
            e.target.reset();
            ctx.page.redirect('/')
        } catch(err) {
            const message = err.message || err.error.message
            update(message, err.errors || {});
        }
    }
}
