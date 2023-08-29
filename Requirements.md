# Requirements

https://academy.codingblackfemales.com/groups/return-to-tech-gebru/course-information-gebru/

## Project Constraints

1. Technologies: The application is coded using React, Node.js, and Elasticsearch.
2. Process: The project directory encompasses requirements, acceptance tests, user stories, and use case diagrams.
3. Security: The application complies with OWASP standards.
4. Testing: Development follows a test-driven approach, with the application attaining 70%+ test coverage.
5. Deployment: The application is deployed to a publicly-accessible live environment.
6. Deployment: Application code is continuously integrated and deployed (CI/CD).
7. Logging: System logging is implemented <!-- Prometheus / Grafana / Fluentd? https://www.digitalocean.com/community/tutorials/how-to-set-up-an-elasticsearch-fluentd-and-kibana-efk-logging-stack-on-kubernetes -->
8. Documentation: The application is thoroughly documented, with a README.md in the project root <!-- example https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes#relative-links-and-image-paths-in-readme-files >
9. Documentation: The README.md includes links to the project board, requirements, and other processes.
10. Documentation: The README.md includes instructions for setup, testing, and running the application in a local environment.
11. Testing and Monitoring: The application undergoes performance testing, and monitoring tools are in place. Both are documented.

## Functional Requirements

1. Data Ingestion:
   - The system should be capable of ingesting data from various sources, such as transactions, user profiles, and historical data.
2. Data Preprocessing:
   - Data should be cleansed, validated, and transformed prior to analysis.
   - Manage missing data and outliers appropriately.
3. Rule-Based Detection:
   - Implement rule-based checks to flag transactions or activities that breach predefined rules (e.g., transaction amount limits, velocity limits, etc.).
4. Anomaly Detection:
   - Employ statistical and machine learning techniques to identify uncommon patterns or anomalies in the data.
   - Define thresholds for anomaly detection and activate alerts when thresholds are surpassed.
5. Alerting and Reporting:
   - Generate and dispatch alerts to pertinent stakeholders upon potential fraud detection.
   - Offer customisable reports and dashboards for monitoring and analysis.
6. User Authentication and Access Control:
   - The system should possess a secure user authentication mechanism to regulate access.

## Non-functional Requirements

1. Scalability and Performance:
   - The system should manage escalating data volumes and user loads.
2. Security:
   - The system should encrypt sensitive data.

## User stories

As a fraud detection specialist at an international bank, I want...

1. ...to receive real-time alerts for high-risk transactions to enable me to investigate and take immediate action to prevent fraudulent activity.
2. ...for the system to furnish a comprehensive summary of flagged transactions, encompassing transaction details, customer information, and risk scores, to expedite efficient investigation.
3. ...the capability to manually flag transactions as suspicious and append notes for context during the investigation process.
4. ...to access to historical transaction data and the ability to generate reports for the identification of trends and patterns in fraudulent activity over time.
5. ...to be able to prioritise alerts based on risk levels and historical data, enabling me to focus on the most critical cases first.
6. ...to customise and create new fraud detection rules without the necessity for IT intervention, allowing me to adapt to emerging fraud schemes.
7. ...a user-friendly interface with intuitive navigation, ensuring ease of use even during high-stress situations.
