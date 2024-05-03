import { GithubIssuePayload, GithubStartPayload } from "../../interfaces";

export class GithubService {

    constructor() { }

    onStart(payload: GithubStartPayload): string {

        let message: string
        const { sender, action, repository } = payload

        return message = `User ${sender.login} ${action} start on ${repository.name}`
    }

    onIssue(payload: GithubIssuePayload): string {

        const { action, issue } = payload

        if (action === 'opened') {
            const message = `An issue was opened with this title ${issue.title}`
            return message
        }
        if (action === 'closed') {
            const message = `An issue was closed by ${issue.user.login}`
            return message
        }
        if (action === 'reopened') {
            const message = `An issue was reopened by ${issue.user.login}`
            return message
        }

        return `Unhandled action for hte issue event ${action}`
    }
}