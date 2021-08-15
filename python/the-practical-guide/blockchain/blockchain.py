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
    return float(input('your transaction amount: '))


def get_user_choice():
    return input('your choice: ')


def print_blockchain_elements():
    for block in blockchain:
        print(block)
    else:
        print('-' * 20)


def verify_chain():
    is_valid = True

    for block_index in range(len(blockchain)):
        if block_index == 0:
            continue
        elif blockchain[block_index][0] == blockchain[block_index - 1]:
            is_valid = True
        else:
            is_valid = False
            break
    return is_valid


waiting_for_input = True

while waiting_for_input:
    print('please choose')
    print('1: add a new transaction value')
    print('2: output the blockchain blocks')
    print('h: manipulate the chain')
    print('q: Quit')

    user_choice = get_user_choice()

    if user_choice == '1':
        add_transaction(get_transaction_value(), get_last_blockchain_value())
    elif user_choice == '2':
        print_blockchain_elements()
    elif user_choice == 'h':
        if len(blockchain) >= 1:
            blockchain[0] = [2]
    elif user_choice == 'q':
        waiting_for_input = False
    else:
        print('input was invalid, please pick a value from the list')

    if not verify_chain():
        print('Invalid Blockchain!')
        break
else:
    print('user left')

print('done')
