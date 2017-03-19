import React, { Component, PropTypes } from 'react'
import IssueRow from '../issue-row/issue-row.component';

const propTypes = {
    propTypes
}

const defaultProps = {
    defaultProps
}

class IssueTable extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        const issueRows = this.props.issues.map((issue, index) => {
            return <IssueRow key={issue.id} issue={issue}></IssueRow>
        })
        return (
            <table className="bordered-table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Status</th>
                        <th>Owner</th>
                        <th>Created</th>
                        <th>Effort</th>
                        <th>Completion Date</th>
                        <th>Title</th>
                    </tr>
                </thead>
                <tbody>
                    {issueRows}
                </tbody>
            </table>
        )
    }
}

IssueTable.propTypes = propTypes

IssueTable.defaultProps = defaultProps

export default IssueTable
