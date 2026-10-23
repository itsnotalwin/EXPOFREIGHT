# Pages workflow

pages.yml validates the static website, builds dist, configures GitHub Pages, uploads the site artifact and deploys it using the github-pages environment. A push to main or an explicit workflow dispatch triggers publication. Build and deploy jobs have separate token permissions. Keep Node commands consistent with package.json and use relative resource URLs. Review workflow logs if a repository Pages setting blocks first-time deployment.
