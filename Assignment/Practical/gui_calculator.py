import tkinter as tk

# Function to evaluate the expression
def press(key):
    entry_var.set(entry_var.get() + str(key))

def clear():
    entry_var.set("")

def calculate():
    try:
        result = str(eval(entry_var.get()))
        entry_var.set(result)
    except:
        entry_var.set("Error")

# Main window
root = tk.Tk()
root.title("Simple Calculator")

entry_var = tk.StringVar()
entry = tk.Entry(root, textvariable=entry_var, font=('Arial', 18), bd=10, relief="sunken", justify='right')
entry.grid(row=0, column=0, columnspan=4)

# Buttons
buttons = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=', '+'
]

row_val = 1
col_val = 0

for button in buttons:
    if button == "=":
        b = tk.Button(root, text=button, width=10, height=2, command=calculate)
    else:
        b = tk.Button(root, text=button, width=10, height=2, command=lambda btn=button: press(btn))
    b.grid(row=row_val, column=col_val, padx=5, pady=5)
    col_val += 1
    if col_val > 3:
        col_val = 0
        row_val += 1

# Clear Button
clear_button = tk.Button(root, text="C", width=10, height=2, command=clear)
clear_button.grid(row=row_val, column=0, padx=5, pady=5)

root.mainloop()
# Simple Calculator GUI using Tkinter