import React, { Component, PropTypes } from 'react'

const propTypes = {
    issue: PropTypes.object,
}

const defaultProps = {
    defaultProps
}

class IssueRow extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        console.log("row comp");
        const issue = this.props.issue;
        return (
            <tr>
                <td>{issue.id}</td>
                <td>{issue.status}</td>
                <td>{issue.owner}</td>
                <td>{issue.created.toDateString()}</td>
                <td>{issue.effort}</td>
                <td>{issue.completionDate ? 
                    issue.completionDate.toDateString() : ''}</td>
                <td>{issue.title}</td>
            </tr>
        )
    }
}

IssueRow.propTypes = propTypes

IssueRow.defaultProps = defaultProps

export default IssueRow
