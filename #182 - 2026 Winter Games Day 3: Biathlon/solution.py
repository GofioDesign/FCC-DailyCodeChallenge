def calculate_penalty_distance(rounds):
    # Accumulator pattern:
    # Starts at 0 because 0 is the neutral value for addition.
    # This variable keeps state across iterations.
    # Python docs (variables & numbers):
    # https://docs.python.org/3/tutorial/introduction.html#using-python-as-a-calculator
    total = 0

    # for loop:
    # Iterates over each value in the list.
    # Blocks are defined using ":" and indentation (not braces).
    # Python docs (for statements):
    # https://docs.python.org/3/tutorial/controlflow.html#for-statements
    for score in rounds:
        # Per-round calculation:
        # Each round has exactly 5 targets.
        # Misses are calculated as (5 - hits).
        total += (5 - score)

    # Final transformation:
    # Each missed target results in a 150 meter penalty loop.
    return total * 150
