// redis-test.js
import Redis from 'ioredis';
import dotenv from 'dotenv';
dotenv.config();

const redis = new Redis({
  host: 'redis-12689.c10.us-east-1-4.ec2.redns.redis-cloud.com',
  port: 12689,
  username: 'default',
  password: 'Mau2EDJfkR8aYBqtmGEZ0apzLCVY0J6d',
//   tls: {} // IMPORTANT
});

redis.set('hello', 'world')
  .then(() => redis.get('hello'))
  .then((value) => {
    console.log('Redis Test Value:', value);
    redis.quit();
  })
  .catch((err) => {
    console.error('❌ Redis connection failed:', err);
  });
