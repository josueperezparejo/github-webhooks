import express from 'express';
import { envs } from './config';
import { GithubController } from './presentation/github/controller';
import { GithubSha256Middleware } from './presentation/middlewares/github-sha256.middleware';

(() => {
    main()
})()

function main() {

    const port = envs.PORT || 3000
    const app = express()

    const controller = new GithubController()

    app.use(express.json())
    
    app.use(GithubSha256Middleware.verifySignature)

    app.post('/api/github', controller.webhookHandler)

    app.listen(port, () => {
        console.log(`App running on port ${port}`)
    })
}