const promClient = require('prom-client');

//Creates histogram metric, histogram selected as they are excellent for response durations
const httpRequestDurationSeconds = new promClient.Histogram({
    name: 'http_request_duration_seconds',
    help: 'Duration of HTTP requests in seconds',
    labelNames: ['method', 'route', 'status_code'],
    buckets: [0.0005, 0.005, 0.01, 0.025, 0.05, 0.1, 0.5, 1, 5]
});

module.exports = httpRequestDurationSeconds;