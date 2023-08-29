# Requirements

## Project Constraints

From https://academy.codingblackfemales.com/groups/return-to-tech-gebru/course-information-gebru/

1. Technologies: The application is coded using React, Node.js, and Elasticsearch.
2. Process: The project directory encompasses requirements, acceptance tests, user stories, and use case diagrams.
3. Security: The application complies with OWASP standards.
4. Testing: Development follows a test-driven approach with 70%+ test coverage.
5. Deployment: The application is deployed to a publicly-accessible live environment.
6. Deployment: Application code is continuously integrated and deployed (CI/CD).
7. Logging: System logging is implemented <!-- Prometheus / Grafana / Fluentd? https://www.digitalocean.com/community/tutorials/how-to-set-up-an-elasticsearch-fluentd-and-kibana-efk-logging-stack-on-kubernetes -->
8. Documentation: The application is thoroughly documented, with a README.md in the project root <!-- example https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes#relative-links-and-image-paths-in-readme-files >
9. Documentation: The README.md includes links to the project board, requirements, and other processes.
10. Documentation: The README.md includes instructions for setup, testing, and running the application in a local environment.
11. Testing and Monitoring: The application undergoes performance testing, and monitoring tools are in place. Both are documented.

## User stories

As a fraud detection specialist at an international bank, I want...
1. to view historical transaction data
2. to group transaction data by user
3. to manually flag suspicious transactions (single)
4. to view similar transactions, so I can determine whether to investigate them
5. to manually flag suspicious transaction groups
6. to view similar transaction groups, so I can determine whether to investigate them
7. to create fraud detection rules
8. to view transactions that match detection rules
9. to create fraud detection email alerts, returning transactions for a given rule
