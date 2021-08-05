blockchain = []


def get_last_blockchain_value():
    """ Returns the last value of the current blockchain. """
    if len(blockchain) < 1:
        return None
    return blockchain[-1]


def add_transaction(transaction_amount, last_transaction=[1]):
    """ Append a new value as well as the last blockchain value to the blockchain list

    Arguments:
      :transaction_amount: The amount the should be added
      :last_transaction: The last blockchain transaction (default [1]).
    """

    if last_transaction == None:
        last_transaction = [1]

    blockchain.append([last_transaction, transaction_amount])


def get_transaction_value():
    """ Returns the input of the user (a new transaction amount) as a float. """
    user_input = float(input('your transaction amount: '))
    return user_input


def get_user_choice():
    user_input = input('your choice: ')
    return user_input


def print_blockchain_elements():
    for block in blockchain:
        print('outputting block')
        print(block)


while True:
    print('please choose')
    print('1: add a new transaction value')
    print('2: output the blockchain blocks')
    print('q: Quit')

    user_choice = get_user_choice()

    if user_choice == '1':
        add_transaction(get_transaction_value(), get_last_blockchain_value())
    elif user_choice == '2':
        print_blockchain_elements()
    elif user_choice == 'q':
        break
    else:
        print('input was invalid, please pick a value from the list')

print('done')
