fib1 = 3
fib2 = 4

arr = [3, 4]

n = 70000

sum = 4

i = 0
while i < n:
    fib_sum = fib1 + fib2
    fib1 = fib2
    fib2 = fib_sum
    if fib2 > 7000000:
        break
    arr.append(fib2)
    if (fib2 % 2 == 0):
        sum = sum + fib2
    i += 1

print(sum)