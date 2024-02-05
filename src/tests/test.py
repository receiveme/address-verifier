from covalent import CovalentClient

def main():
    c = CovalentClient("cqt_rQPF6cFt8PWjHHWQxQ99fwgP8wQd")
    b = c.balance_service.get_token_balances_for_wallet_address("eth-mainnet", "demo.eth")
    if not b.error:
        print(b.data)
    else:
        print(b.error_message)