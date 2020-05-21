# Fibonacci API

### Build and run

```bash
docker build -t fib-api .
docker run -it --rm -p 2468:2468 fib-api
```

### Query
```
$ time curl 127.0.0.1:2468/?n=0
0

real	0m0.015s
user	0m0.003s
sys	0m0.006s

$ time curl 127.0.0.1:2468/?n=2
1

real	0m0.009s
user	0m0.002s
sys	0m0.005s

$ time curl 127.0.0.1:2468/?n=3
2

real	0m0.009s
user	0m0.003s
sys	0m0.005s

$ time curl 127.0.0.1:2468/?n=100
354224848179262000000

real	0m0.010s
user	0m0.003s
sys	0m0.005s

$ time curl 127.0.0.1:2468/?n=1000
4.346655768693743e+208

real	0m0.009s
user	0m0.002s
sys	0m0.005s

$ time curl 127.0.0.1:2468/?n=666
6.859356963880477e+138

real	0m0.009s
user	0m0.003s
sys	0m0.005s
```

### Logs
```bash
Server running at 0.0.0.0:2468
0	hit
2	miss
3	miss
100	miss
1000	miss
666	hit
```
