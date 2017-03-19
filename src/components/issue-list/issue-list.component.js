import React, { Component, PropTypes } from 'react'
import IssueAdd from '../issue-add/issue-add.component';
import IssueFilter from '../issue-filter/issue-filter.component';
import IssueTable from '../issue-table/issue-table.component';

const propTypes = {
    propTypes
}

const defaultProps = {
    defaultProps
}

class IssueList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            issues: [],
        }
        this.createTestIssue = this.createTestIssue.bind(this);
        setTimeout(this.createTestIssue.bind(this), 2000);
    }

    componentDidMount() {
        this.loadData();
    }

    loadData() {
        setTimeout(() => {
            this.setState({
                issues: this.props.issues,
            })
        }, 500)
    }

    createTestIssue() {
        this.createIssue(
            {
                status: "New", owner: 'Zain',
                created: new Date(), effort: 5,
                title: 'Completion date should be optional',
            }
        )
    }

    createIssue(newIssue) {
        const newIssues = this.state.issues.slice();
        newIssue.id = this.state.issues.length + 1;
        newIssues.push(newIssue);
        this.setState({ issues: newIssues });
    }

    render() {
        return (
            <div>
                <h1>Issue Tracker</h1>
                <IssueFilter />
                <hr />
                <IssueTable issues={this.state.issues} />
                <hr />
                <IssueAdd createIssue={this.createIssue.bind(this)}/>
            </div>
        )
    }
}

IssueList.propTypes = propTypes

IssueList.defaultProps = defaultProps

export default IssueList
