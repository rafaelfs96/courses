print("Welcome to the tip calculator.")

total_bill = float(input("What was the total bill? $"))
tip_percentage = int(
    input("What percentage tip would tou like to give? 10, 12 or 15? "))
people = int(input("How many people to split the bill? "))

tip_amount = tip_percentage / 100 * total_bill

total_raw = round((total_bill + tip_amount) / people, 2)
total_formatted = "{:.2f}".format(total_raw)

print(f"Each person should pay ${total_formatted}")
