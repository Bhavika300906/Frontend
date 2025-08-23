def add(a, b): return a + b
def sub(a, b): return a - b
def mul(a, b): return a * b
def div(a, b): 
    if b == 0: 
        return "Error: Cannot divide by zero"
    return a / b

# Sample Tests
print("6 + 8 =", add(6, 8))
print("8 - 5 =", sub(8, 5))
print("5 * 3 =", mul(5, 3))
print("4 / 2 =", div(4, 2))
print("3 / 3 =", div(3, 3))