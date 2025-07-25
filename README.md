# Optimy

A simple PHP + MySQL app deployed on EC2 via Docker, tested with Selenium, and monitored with Prometheus & Grafana.

## 📦 Features
- PHP app connects to MySQL and shows data from the `test` table.
- Dockerized setup with Docker Compose
- EC2 deployment via CloudFormation
- Node.js + Selenium for headless browser testing
- Prometheus for metrics, viewable in Grafana Cloud

## 🧪 Test Table Schema
```sql
CREATE TABLE test (
  id INT AUTO_INCREMENT PRIMARY KEY,
  content VARCHAR(255)
);
```

## 🚀 Deployment Steps
1. Launch EC2 using the CloudFormation template
2. SSH into the instance and run:
   ```bash
   docker-compose up -d
   ```
3. Visit: http://optimy.duckdns.org

## 🧪 Run Selenium Test
```bash
node tests/selenium_test.js
```

## 📊 Grafana Metrics
Prometheus runs in Docker and exposes metrics on port 9090. Connect Grafana Cloud to scrape metrics from your public IP.

---
© 2025 Optimy
