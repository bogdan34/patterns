class DOM {
    static createElement(type, props = {}, ...children) {
        const element = document.createElement(type);

        Object.keys(props).forEach(key => element[key] = props[key]);

        children.forEach(child => {
            if (typeof child === 'string') {
                child = document.createTextNode(child);
            }

            element.appendChild(child);
        });
        return element;
    }

    static createFactory(type) {
        return DOM.createElement.bind(null, type);
    }
}

const elem = DOM.createElement('div', {className: 'test', id: 'test_id'}, 'test');
const createDiv = DOM.createFactory('div');
const div = createDiv();

class TextField {
    constructor(props) {
        return DOM.createElement('input', props);
    }
}

class EmailField {
    constructor(props) {
        return DOM.createElement('input', props);
    }
}

class PasswordField {
    constructor(props) {
        return DOM.createElement('input', props);
    }
}

class Form {
    static createField(props) {
        switch (props.type) {
            case 'text':
                return new TextField(props);
            case 'email':
                return new EmailField(props);
            case 'password':
                return new PasswordField(props);
            default:
                throw new Error('Invalid type');
        }
    }

    constructor() {
        this.element = DOM.createElement('form', {className: 'flex-box'});
    }

    addFields(...fields) {
        for (let field of fields) {
            this.element.appendChild(field);
        }
    }
}

DOM.Form = Form;

const form = new DOM.Form();
form.addFields(
    Form.createField({type: 'text'}),
    Form.createField({type: 'email'}),
    Form.createField({type: 'password'})
);

document.addEventListener('DOMContentLoaded', () => {
    document.body.appendChild(form.element);
});