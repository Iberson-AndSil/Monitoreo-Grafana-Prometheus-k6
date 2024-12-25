import http from 'k6/http';
import { check } from 'k6';

export default function () {
  const res = http.get('http://host.docker.internal:3000');
  check(res, {
    'is status 200': (r) => r.status === 200,
  });
}
