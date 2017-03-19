import React, { Component, PropTypes } from 'react'

const propTypes = {
    propTypes
}

const defaultProps = {
    defaultProps
}

class IssueAdd extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        let form = document.forms.IssueAdd;
        console.log("forms", form.elements.namedItem("owner").value);
        console.log(form);
        this.props.createIssue({
            status: "New",
            created: new Date(), effort: 5,
            owner: form.elements.namedItem("owner").value,
            title: form.elements.namedItem("title").value,
        });
    }

    render() {
        return (
            <div>
                <form name="IssueAdd" submit={this.handleSubmit}>
                    <input type="text" name="owner" placeholder="Owner" />
                    <input type="text" name="title" placeholder="Title" />
                    <button onClick={this.handleSubmit.bind(this)}>Add</button>
                </form>
            </div>
        )
    }
}

IssueAdd.propTypes = propTypes

IssueAdd.defaultProps = defaultProps

export default IssueAdd
